import React from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Reveal from '../Components/Reveal';

const Contact = () => {
  const contactCards = [
    {
      title: 'Send an Email',
      description: 'Open your email app with a ready draft and share your project details.',
      value: 'tayyab90m@gmail.com',
      href: 'mailto:tayyab90m@gmail.com?subject=Portfolio%20Contact&body=Hi%20Tayyab,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.',
      icon: Mail,
      iconColor: 'text-blue-400',
      external: false,
    },
    {
      title: 'Chat on WhatsApp',
      description: 'Start a direct WhatsApp conversation for quick discussion and follow-up.',
      value: '+92 307 6160255',
      href: 'https://wa.me/923076160255?text=Hi%20Tayyab,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.',
      icon: MessageCircle,
      iconColor: 'text-green-400',
      external: true,
    },
    {
      title: 'Call Directly',
      description: 'Prefer a quick call? Tap to call from your phone or supported device.',
      value: '+92 307 6160255',
      href: 'tel:+923076160255',
      icon: Phone,
      iconColor: 'text-blue-400',
      external: false,
    },
  ];

  return (
    <div className="pt-36 pb-16 md:pt-44">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-slate-950 dark:text-white">Get in Touch</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600 dark:text-gray-300">
          Have a product idea, web app, mobile screen, or frontend challenge? Choose the easiest way to reach me directly.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 100}>
                <a
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="glow-border group rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 shadow-lg dark:bg-white/10 ${card.iconColor}`}>
                      <Icon size={30} />
                    </span>
                    <ArrowUpRight className="text-slate-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500" size={24} />
                  </div>
                  <h2 className="mb-2 text-xl font-bold text-slate-950 dark:text-white">{card.title}</h2>
                  <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-gray-300">{card.description}</p>
                  <p className="font-semibold text-blue-600 dark:text-blue-400">{card.value}</p>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={contactCards.length * 100}>
          <div className="glow-border mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300">
                <MapPin size={28} />
              </span>
              <div>
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">Based in Lahore, Pakistan</h2>
                <p className="mt-1 text-slate-600 dark:text-gray-300">
                  Available for full stack MERN development, frontend engineering, mobile app work, and product UI improvements.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
export default Contact;