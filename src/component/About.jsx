const About = () => {
    return (  

        <div name='about' className="w-full h-screen   bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg flex flex-col justify-center w-full h-full mx-auto p-4">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-b-gray-500 inline">about</p>
                </div>
                <h1 className="text-3xl font-bold text-white">I'm <span className="text-cyan-500"> Nazifa Rahimy</span></h1>
                <h4 className="text-3xl font-bold text-white">A <span className="text-yellow-600">Front-End</span> Developer</h4>
                <p  className="text-xl mt-5">I'm a front-end web developer from Kabul, Afghanistan. I design and build responsive, user-friendly websites using HTML, CSS, Tailwind,  JavaScript and React. Currently, I am learning Next.js to create modern and dynamic web applications. Beyond code, I enjoy exploring new technologies and building projects that make a difference.</p>



            </div> 
        </div>
    );
}
 
export default About;