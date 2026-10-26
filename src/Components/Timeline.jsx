import React, { useRef } from "react";
import { BrainCircuit, Code2, Rocket, Smartphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import useScrollProgress from "../hooks/useScrollProgress";

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

// Alternating timeline whose centre line draws itself as you scroll.
const Timeline = () => {
    const lineRef = useRef(null);
    useScrollProgress(lineRef, { start: 0.75, end: 0.55 });

    return (
        <section className="py-24 md:py-36">
            <div className="shell">
                <SectionHeading index="04" label="Journey" title="How I got here">
                    A quick look at how my work has grown across frontend engineering, mobile development,
                    product delivery, and AI-assisted workflows.
                </SectionHeading>

                <div ref={lineRef} className="relative">
                    <div className="absolute left-5 top-0 h-full w-px bg-line/15 md:left-1/2" />
                    <div className="timeline-line absolute left-5 top-0 h-full w-px origin-top bg-accent md:left-1/2" />

                    {timelineEvents.map((event, index) => {
                        const Icon = event.icon;
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={event.title} className="relative grid pb-16 pl-16 last:pb-0 md:grid-cols-2 md:pl-0">
                                <span className="absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-accent bg-paper text-accent md:left-1/2">
                                    <Icon size={18} />
                                </span>
                                <Reveal variant={isLeft ? 'left' : 'right'}>
                                    <div className={isLeft ? 'md:pr-20 md:text-right' : 'md:col-start-2 md:pl-20'}>
                                        <p className="font-display text-3xl font-extrabold uppercase tracking-tight text-accent md:text-4xl">
                                            {event.year}
                                        </p>
                                        <h3 className="mt-3 font-display text-2xl font-bold">{event.title}</h3>
                                        <p className={`mt-3 max-w-md leading-relaxed text-muted ${isLeft ? 'md:ml-auto' : ''}`}>
                                            {event.description}
                                        </p>
                                    </div>
                                </Reveal>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
