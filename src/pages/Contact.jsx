import React from 'react';
import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';
import Reveal from '../Components/Reveal';
import PageHero from '../Components/PageHero';
import LocalTime from '../Components/LocalTime';

const Contact = () => {
  const contactRows = [
    {
      title: 'Send an email',
      description: 'Open your email app with a ready draft and share your project details.',
      value: 'tayyab90m@gmail.com',
      href: 'mailto:tayyab90m@gmail.com?subject=Portfolio%20Contact&body=Hi%20Tayyab,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.',
      icon: Mail,
      external: false,
    },
    {
      title: 'Chat on WhatsApp',
      description: 'Start a direct WhatsApp conversation for quick discussion and follow-up.',
      value: '+92 307 6160255',
      href: 'https://wa.me/923076160255?text=Hi%20Tayyab,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.',
      icon: MessageCircle,
      external: true,
    },
    {
      title: 'Call directly',
      description: 'Prefer a quick call? Tap to call from your phone or supported device.',
      value: '+92 307 6160255',
      href: 'tel:+923076160255',
      icon: Phone,
      external: false,
    },
  ];
  const details = [
    { label: 'Based in', value: 'Lahore, Pakistan' },
    { label: 'Local time', value: <LocalTime /> },
    { label: 'Open to', value: 'Full stack, frontend & mobile work' },
  ];

  return (
    <>
      <PageHero label="Contact" title="Let's talk">
        <p>
          Have a product idea, web app, mobile screen, or frontend challenge? Pick whichever way is easiest
          and reach me directly.
        </p>
        <a
          href={contactRows[0].href}
          className="link-underline self-start break-all font-display text-2xl font-bold text-ink md:text-3xl"
        >
          tayyab90m@gmail.com
        </a>
      </PageHero>

      <section className="pb-16">
        <div className="shell">
          {contactRows.map((row, index) => {
            const Icon = row.icon;
            return (
              <Reveal key={row.title} delay={index * 100}>
                <a
                  href={row.href}
                  target={row.external ? '_blank' : undefined}
                  rel={row.external ? 'noopener noreferrer' : undefined}
                  className="fill-row group grid items-center gap-4 border-t border-line/15 px-2 py-10 last:border-b md:grid-cols-[80px_1.2fr_1fr_auto] md:gap-8 md:px-6"
                >
                  <Icon size={32} strokeWidth={1.5} className="text-accent transition-colors group-hover:text-on-accent" />
                  <div>
                    <h2 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight xl:text-4xl">
                      {row.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted">{row.description}</p>
                  </div>
                  <p className="font-display text-lg font-semibold md:text-xl">{row.value}</p>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-inset ring-line/20 transition-transform duration-500 group-hover:rotate-45 group-hover:bg-on-accent group-hover:text-accent">
                    <ArrowUpRight size={24} />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="shell grid gap-4 md:grid-cols-3">
          {details.map((detail, index) => (
            <Reveal key={detail.label} delay={index * 100} variant="clip">
              <div className="rounded-[2rem] bg-surface p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">{detail.label}</p>
                <p className="mt-4 font-display text-xl font-bold md:text-2xl">{detail.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
export default Contact;
