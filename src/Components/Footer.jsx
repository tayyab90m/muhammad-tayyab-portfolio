import React from 'react';
import { Github, Linkedin, Mail, Instagram, Facebook,MessageSquareDot } from 'lucide-react';

export default function Footer() {

  const phoneNumber = "00923076160255"
  const socialLinks = [
    { icon: Github, href: 'https://github.com/tayyab90m', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-tayyab-31b955222', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/tayyab90m?igsh=MXVuemo4djA0aTNoNg==', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/12Fr1ZdTfLj/', label: 'Facebook' },
    { icon: MessageSquareDot, href: `https://wa.me/${phoneNumber}`, label: 'whatsapp' },
    { icon: Mail, href: 'mailto:tayyab90m@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[rgb(61_79_131_/_95%)] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
          <div className="text-center">
            <p className="text-sm">
              © 2025 - Muhammad Tayyab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}