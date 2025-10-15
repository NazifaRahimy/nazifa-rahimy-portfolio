const About = () => {
    return (  
        <div name='about' className="w-full h-screen   bg-[linear-gradient(135deg,#fff8ec_0%,#f5d6a0_60%,#f0c97a_100%)]">
            <div className="max-w-screen-lg flex flex-col justify-center w-full h-full mx-auto p-4">
                <div className="pb-8">
                    <p style={{ textShadow: "0 0 10px rgb(109,67,0)" }}  className="text-4xl font-bold border-b-4 text-[rgb(109,67,0)] border-b-[#f0c97a] inline">About</p>
                </div>
                <h1 className="text-3xl font-bold ">I'm <span className="text-[rgb(109,67,0)]"> Nazifa Rahimy</span></h1>
                <h4 className="text-3xl font-bold ">A <span className="text-[#f0c97a]">Front-End</span> Developer</h4>
                <p  className="text-xl mt-5">I'm a front-end web developer from Kabul, Afghanistan. I design and build responsive, user-friendly websites using HTML, CSS, Tailwind,  JavaScript and React. Currently, I am learning Next.js to create modern and dynamic web applications. Beyond code, I enjoy exploring new technologies and building projects that make a difference.</p>
                <a href="/CV.pdf" download className=" group text-white w-fit px-7 py-2 my-2 flex items-center rounded-md bg-[rgb(109,67,0)] cursor-pointer hover:text-[rgb(109,67,0)] hover:border-2 hover:border-[rgb(109,67,0)] hover:bg-transparent      hover:shadow-[0_0_40px_rgb(109,67,0)] duration-300 mt-5">  
                    Download CV
                </a>
            </div> 
        </div>
    );
}
 
export default About;