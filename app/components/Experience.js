export default function Experience() {
    const experiences = [
        {
            role: "Technical Lead",
            company: "SchoolStatus",
            period: "2023 – Present",
            description: "EdTech · K-12 Communications",
            achievements: [
                "Led the design and evolution of a multi-channel communication platform (SMS, voice) built with Kafka, Rails, and distributed services.",
                "Scaled SMS delivery throughput from 1,200/min to 20,000/min by implementing a Kafka-backed messaging pipeline.",
                "Upgraded a critical legacy Rails system and integrated it into the new Kafka architecture.",
                "Reduced manual onboarding from days to hours by automating A2P 10DLC and campaign registration flows.",
                "Built a data ingestion pipeline using Nest.js to sync district staff data.",
                "Created a production-like Docker environment simulating distributed services for better debugging.",
                "Increased legacy codebase test coverage from 0% to 75%."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Donorbox",
            period: "2022 – 2023",
            description: "Nonprofit · Donations · Payments",
            achievements: [
                "Developed a cross-device donation widget using vanilla JavaScript and Web Components.",
                "Integrated Stripe and PayPal with country- and currency-aware routing.",
                "Improved backend stability by strengthening test coverage with Cuprite-based E2E testing."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Stadium Goods",
            period: "2021 – 2022",
            description: "E-commerce · Marketplace",
            achievements: [
                "Implemented ElasticSearch across high-traffic search and order flows, reducing DB load.",
                "Designed and shipped the company’s first Rails Engine, establishing clean domain boundaries.",
                "Built a robust ETL pipeline for third-party order synchronization.",
                "Migrated frontend from Webpacker to Importmaps.",
                "Developed real-time user experiences using Hotwire and ActionCable."
            ]
        },
        {
            role: "Senior Ruby on Rails Engineer",
            company: "Michelada.io",
            period: "2019 – 2021",
            description: "Agile Consultancy",
            achievements: [
                "Delivered features and modernization across multiple client projects (Curacubby, Kueski).",
                "Improved legacy systems through refactoring, updated testing, and Rails upgrades.",
                "Strengthened CI reliability and standardized engineering practices."
            ]
        },
        {
            role: "Ruby on Rails Engineer",
            company: "Tangosource",
            period: "2013 – 2019",
            description: "Consultancy",
            achievements: [
                "Promoted from Junior to Senior Developer while leading multiple long-term client projects (Prepaid2Cash, Orbridge).",
                "Modernized legacy systems, improved architecture, and established engineering standards.",
                "Migrated infrastructure to AWS and implemented monitoring strategies."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Professional Experience
                    </span>
                </h2>

                <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-blue-500 group-hover:bg-purple-500 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                            <div className="glass-card p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white max-w-2xl">{exp.role}</h3>
                                        <div className="text-blue-400 font-medium">{exp.company}</div>
                                    </div>
                                    <div className="text-slate-400 text-sm md:text-base font-mono bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-6 italic">{exp.description}</p>

                                <ul className="space-y-3">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start text-slate-300 text-sm md:text-base">
                                            <span className="mr-3 text-blue-500 mt-[5px]">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
