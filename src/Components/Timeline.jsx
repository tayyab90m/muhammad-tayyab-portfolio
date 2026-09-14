import React from "react";
import { BrainCircuit, Code2, Rocket, Smartphone } from "lucide-react";
import Reveal from "./Reveal";

const timelineEvents = [
    {
        year: "2024 - Present",
        title: "AI-assisted product engineering",
        description: "Working with AI-enabled workflows, Cursor, automation ideas, and modern frontend architecture to build faster while keeping quality high.",
        icon: BrainCircuit,
    },
    {
        year: "2023 - 2024",
        title: "Web apps and dashboards",
        description: "Built responsive product screens, dashboards, API-connected modules, and reusable React components for business-focused platforms.",
        icon: Code2,
    },
    {
        year: "2022 - 2023",
        title: "Mobile and cross-platform work",
        description: "Created React Native screens, app flows, navigation patterns, and API-driven mobile features with a focus on smooth user experience.",
        icon: Smartphone,
    },
    {
        year: "2022",
        title: "Started professional product development",
        description: "Moved from learning and practice projects into real product work, focusing on React, JavaScript, API integrations, and maintainable UI.",
        icon: Rocket,
    },
];

const Timeline = () => {
    return (
        <section className="py-20 px-4 bg-slate-100/80 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-2 text-slate-950 dark:text-white">My Journey</h2>
                <p className="mx-auto mb-14 max-w-3xl text-center text-lg text-slate-500 dark:text-gray-400">
                    A quick look at how my work has grown across frontend engineering, mobile development,
                    product delivery, and AI-assisted workflows.
                </p>

                <div className="relative grid gap-6 lg:grid-cols-4">
                    <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 lg:block" />
                    {timelineEvents.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <Reveal key={event.title} delay={index * 100}>
                                <article
                                    className="glow-border relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
                                >
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-blue-400 shadow-lg dark:bg-white/10">
                                        <Icon size={30} />
                                    </div>
                                    <p className="mb-3 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-bold text-blue-600 dark:text-blue-300">
                                        {event.year}
                                    </p>
                                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{event.title}</h3>
                                    <p className="mt-3 leading-relaxed text-slate-600 dark:text-gray-300">{event.description}</p>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
