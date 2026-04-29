import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Instagram, Facebook, MessageSquareDot } from 'lucide-react';

export default function Footer() {

  const phoneNumber = "00923076160255"
  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/hobbies', label: 'Hobbies' },
    { path: '/contact', label: 'Contact' },
  ];
  const socialLinks = [
    { icon: Github, href: 'https://github.com/tayyab90m', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-tayyab-31b955222', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/tayyab90m?igsh=MXVuemo4djA0aTNoNg==', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/12Fr1ZdTfLj/', label: 'Facebook' },
    { icon: MessageSquareDot, href: `https://wa.me/${phoneNumber}`, label: 'whatsapp' },
    { icon: Mail, href: 'mailto:tayyab90m@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white/80 text-slate-600 backdrop-blur dark:border-white/10 dark:bg-gray-950/80 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-slate-950 dark:text-white">Muhammad Tayyab</h2>
            <p className="max-w-md text-sm leading-relaxed">
              Software Engineer specializing in React, Next.js, React Native, API integrations,
              MongoDB, and AI-assisted product development.
            </p>
            <p className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
              Lahore, Pakistan
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-950 dark:text-white">Explore</h3>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-950 dark:text-white">Connect</h3>
            <a href="mailto:tayyab90m@gmail.com" className="mb-2 block text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              tayyab90m@gmail.com
            </a>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="mb-5 block text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              WhatsApp: +92 307 6160255
            </a>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-blue-500 hover:text-white dark:bg-white/10 dark:hover:bg-blue-500"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm dark:border-white/10">
          © 2026 - Muhammad Tayyab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}