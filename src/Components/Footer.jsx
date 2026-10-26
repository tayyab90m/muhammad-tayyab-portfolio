import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import Marquee from './Marquee';
import RollText from './RollText';
import LocalTime from './LocalTime';

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
    { href: 'https://github.com/tayyab90m', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/muhammad-tayyab-31b955222', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/tayyab90m?igsh=MXVuemo4djA0aTNoNg==', label: 'Instagram' },
    { href: 'https://www.facebook.com/share/12Fr1ZdTfLj/', label: 'Facebook' },
    { href: `https://wa.me/${phoneNumber}`, label: 'WhatsApp' },
  ];

  return (
    <footer className="overflow-hidden rounded-t-[2.5rem] bg-ink text-paper">
      <Link to="/contact" className="block border-b border-paper/15 py-10 transition-colors hover:text-accent md:py-14" aria-label="Let's work together — go to contact page">
        <Marquee
          items={["Let's work together", 'Start a project']}
          speed={28}
          itemClassName="font-display text-4xl font-extrabold uppercase tracking-tight md:text-6xl md:leading-none"
        />
      </Link>

      <div className="shell py-14">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.8fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-paper/50">Say hello</p>
            <a
              href="mailto:tayyab90m@gmail.com"
              className="link-underline break-words font-display text-2xl font-bold sm:text-3xl lg:text-4xl"
            >
              tayyab90m@gmail.com
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/60">
              Software Engineer specializing in React, Next.js, React Native, API integrations,
              MongoDB, and AI-assisted product development.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-paper/50">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="group text-lg font-medium">
                    <RollText>{link.label}</RollText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-paper/50">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-lg font-medium">
                    <RollText>{link.label}</RollText>
                    <ArrowUpRight size={16} className="text-accent transition-transform duration-500 group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-6 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Muhammad Tayyab. All rights reserved.</p>
          <p>Lahore, Pakistan · <LocalTime /></p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-paper"
          >
            <RollText>Back to top</RollText>
            <ArrowUp size={16} className="transition-transform duration-500 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
