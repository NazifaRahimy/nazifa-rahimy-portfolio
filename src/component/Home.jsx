import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import SocialLink from "./SocialLink";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
    const text = "End Developer";
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,     
        });
        
        
    }, []);

    useEffect(() => {
        const typingSpeed = isDeleting ? 100 : 150; 
        const timeout = setTimeout(() => {
            if (!isDeleting && index < text.length) {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            } else if (isDeleting && index > 0) {
                setDisplayText((prev) => prev.slice(0, -1));
                setIndex(index - 1);
            } else if (!isDeleting && index === text.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && index === 0) {
                setIsDeleting(false);
            }
        }, typingSpeed);
        return () => clearTimeout(timeout);
    }, [index, isDeleting]);

    return ( 
        <div name='home' className="w-full h-auto md:h-screen  bg-[linear-gradient(135deg,#fff8ec_0%,#f5d6a0_60%,#f0c97a_100%)]">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-4 pb-5 md:flex-row ">
                <div className="flex flex-col justify-center pt-10 md:pt-0  w-full md:w-3/5  h-full pr-5">
                    <h3 className=" text-2xl py-1 font-semibold sm:text-3xl sm:font-bold  sm:py-2  ">
                        <span   style={{ textShadow: "0 0 8px black" }}>Front-</span>
                        <span className="text-[rgb(109,67,0)] " style={{ textShadow: "0 0 10px rgb(109,67,0)" }} >       
                            {displayText}
                            <span className="animate-pulse " >|</span> 
                        </span>
                    </h3>
                    <h4 className="text-2xl sm:text-3xl font-bold mt-5" data-aos="fade-right" data-aos-delay="800" >Build Modern, Responsive <span className=" text-[rgb(109,67,0)]">Websites</span> </h4>
                    <h4 className="text-2xl sm:text-3xl font-bold  " data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900">That Elevate Your <span className="text-[#f0c97a]"> Online Presence</span></h4>
                    <p className="text-gray-500 py-4 text-xl font-normal " data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1000"> I craft clean, interactive, and responsive user interfaces using HTML, CSS, Tailwind,JavaScript React and Next Js. Whether you're launching a brand or refreshing your current website, I can help you stand out online.</p>
                    <SocialLink />
                    <div>
                        <Link to="portfolio"  data-aos="fade-right" data-aos-offset="0" data-aos-delay="1100" smooth duration={500}   className=" group text-white w-fit px-7 py-2 my-2 flex items-center rounded-md bg-[rgb(109,67,0)] cursor-pointer hover:text-[rgb(109,67,0)] hover:border-2 hover:border-[rgb(109,67,0)] hover:bg-transparent      hover:shadow-[0_0_40px_rgb(109,67,0)] duration-300 mt-5">  
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="md:w-2/5 flex items-center justify-center  mt-5 md:mt-0"  data-aos="zoom-in-left" data-aos-duration="2500">
                    <div style={{ boxShadow: "0 0 30px rgb(109,67,0)" }} className=" border-box md:w-[85%]  rounded-full ">
                        <img src="/nazifa.jpg" alt="my profile"  className="h-[350px] sm:h-[400px] md:h-[450px] rounded-full" />
                    </div>
                </div>
            </div>
        </ div>
    );
}
 
export default Home;