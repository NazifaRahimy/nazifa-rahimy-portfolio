const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            title: "Joyenda – Buy & Sell Marketplace",
            description:"Joyenda is a responsive online marketplace built with React and Tailwind CSS, where users can post, browse, and manage listings for products and services. It also supports multilingual content in English, Persian, and Pashto.",
            tech: ["HTML", "TailwindCSS","React", "Framer Motion", "i18n", "Firebase"],
            src: "/joyenda.jpg",
            demoLink: "https://joenda.netlify.app/",
            codeLink: "https://github.com/NazifaRahimy/joenda",
        },
        {
            id: 2,
            title: "Minevisam – Online Magazine",
            description: "Minevisam is a multi-page online magazine. Each page displays articles with images, author names, and publication dates, providing a clean and responsive reading experience across devices.",
            tech: ["HTML", "TailwindCSS", "React"],
            src: "/minavisam.jpg",
            demoLink: "https://minavisam.netlify.app/",
            codeLink: "https://github.com/NazifaRahimy/minevisam",
        },
        {
            id: 3,
            title: "Polygon – Shape Generator App",
            description: "A modern, fully responsive landing page built with React and TailwindCSS for a global event related to Web3 and DeFi.",
            tech: ["HTML", "TailwindCSS", "React"],
            src: "/ploygon.jpg",
            demoLink: "https://nazifarahimy.github.io/ploygon/",
            codeLink: "https://github.com/nazifarahimy/ploygon",
        },
    ];

    return (
        <section id="portfolio" className="w-full py-16  bg-[linear-gradient(135deg,#fff8ec_0%,#f5d6a0_60%,#f0c97a_100%)]">
            <div className="max-w-6xl mx-auto px-6">
            <div className="pb-10 ">
                <h2 style={{ textShadow: "0 0 10px rgb(109,67,0)" }}  className="text-4xl font-bold border-b-4 border-b-[#f0c97a] text-[rgb(109,67,0)]  inline-block pb-1">Portfolio </h2>
                <p className=" mt-4"> Check out some of my work right here </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
                {portfolios.map(({ id, title, description, tech, src, demoLink, codeLink }) => (
                    <div key={id} className="group p-6 border border-[rgb(109,67,0)]  rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[420px]">
                        <div className="flex flex-col h-auto md:h-[100%] lg:flex-row">
                            <div className="w-full lg:w-1/2 md:h-full rounded relative overflow-hidden ">
                                <img src={src} alt={title} className="w-full  h-56 lg:h-[100%]  rounded-md  object-cover object-top duration-300 group-hover:scale-105"/>
                                {/* Black overlay on hover */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-40 transition duration-300"></div>
                            </div>
                            {/* Text section */}
                            <div className="pl-6 mt-5 lg:mt-0  w-full  h-full lg:w-1/2 flex flex-col  ">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-[rgb(109,67,0)] ">{title}</h3>
                                    <p className=" text-sm mb-3 mt-6">{description}</p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {tech.map((t) => (
                                            <span key={t} className="bg-[rgb(109,67,0)] text-white text-xs px-3 py-2 rounded-md ">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="my-4 flex gap-4">
                                    <a href={demoLink}  target="_blank" rel="noopener noreferrer"  className="  text-sm " >🔗 Click to visit</a>
                                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className=" text-sm " > 💻 Code </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Portfolio;
