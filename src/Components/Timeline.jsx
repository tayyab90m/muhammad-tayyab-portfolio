import React from "react";

const timelineEvents = [
    {
        year: "2024",
        title: "Keeyu – E-commerce Optimizer",
        description: "Launched an AI-powered platform to optimize e-commerce operations, focusing on fulfillment, payment, and logistics issues.",
        link: {
            text: "Learn more about Keeyu",
            url: "https://keeyu.com",
        },
    },
    {
        year: "2023",
        title: "CricketLive Web",
        description: "Developed a real-time cricket platform providing scores, highlights, and player performance tracking.",
        link: {
            text: "Explore CricketLive",
            url: "https://criclay.com",
        },
    },
    {
        year: "2022",
        title: "AutoMart – Car Marketplace",
        description: "Built a robust marketplace for buying and selling cars, complete with advanced filters and secure transactions.",
        link: {
            text: "Visit AutoMart",
            url: "https://www.krispx.com/",
        },
    },
    {
        year: "2024",
        title: "FitLife Planner",
        description: "Created a wellness platform offering personalized training and nutrition plans, focusing on fitness goals.",
        link: {
            text: "Check out FitLife Planner",
            url: "https://bb-portal.promarlins.com/",
        },
    },
];

const Timeline = () => {
    return (
        <section className="py-20 px-4 bg-gray-800/50">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-2">My Journey</h2>
                <p className="text-center text-gray-500 mb-14 font-bold">
                    A timeline of milestones and achievements in tech innovation
                </p>

                <div className="space-y-16 px-20">
                    {timelineEvents.map((event, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={index} className={`flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
                                {!isLeft && <div className="hidden md:block md:w-1/2" />}
                                <div className="bg-gray-700/50 shadow-xl rounded-xl p-6 md:w-1/2 w-full relative hover:bg-gray-700 transition-colors">
                                    <span className="absolute w-4 h-4 bg-purple-600 rounded-full top-6 -left-4 md:-left-8 border-4 border-white shadow-md"></span>
                                    <p className="text-sm font-bold text-purple-700">{event.year}</p>
                                    <h3 className="text-xl font-semibold mt-1">{event.title}</h3>
                                    <p className="text-white mt-1">{event.description}</p>
                                    <a
                                        href={event.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-purple-600 mt-2 inline-block hover:underline"
                                    >
                                        {event.link.text}
                                    </a>
                                </div>
                                {isLeft && <div className="hidden md:block md:w-1/2" />}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
