import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialLink = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="my-4">
            <ul className="flex gap-5" data-aos="flip-down" data-aos-delay="1200">
            {/* LinkedIn */}
            <li className="group flex justify-between cursor-pointer    hover:shadow-[0_0_20px_rgb(109,67,0)] items-center border-2 border-[rgb(109,67,0)] p-2 rounded-full text-[rgb(109,67,0)] duration-300 transition-all hover:text-white hover:bg-[rgb(109,67,0)]">
                <a href="https://www.linkedin.com/in/nazifa-rahimy-706a17346/" target="_blank" rel="noreferrer" className="group-hover:scale-[1.3] flex items-center justify-between w-full">
                    <FaLinkedin size={20} />
                </a>
            </li>
            {/* GitHub */}
            <li className="group flex justify-between    hover:shadow-[0_0_20px_rgb(109,67,0)] cursor-pointer items-center border-2 border-[rgb(109,67,0)] p-2 rounded-full text-[rgb(109,67,0)] duration-300 transition-all hover:text-white hover:bg-[rgb(109,67,0)]">
                <a href="https://github.com/NazifaRahimy" target="_blank" rel="noreferrer" className="group-hover:scale-[1.3] flex items-center justify-between w-full">
                    <FaGithub size={20} />
                </a>
            </li>
            {/* Email */}
            <li className="group flex justify-between    hover:shadow-[0_0_20px_rgb(109,67,0)] cursor-pointer items-center border-2 border-[rgb(109,67,0)] p-2 rounded-full text-[rgb(109,67,0)] duration-300 transition-all hover:text-white hover:bg-[rgb(109,67,0)]">
                <a href="https://mail.google.com/mail/?view=cm&to=nazifarahimy6@gmail.com"  className="group-hover:scale-[1.3] flex items-center justify-between w-full">
                    <HiOutlineMailOpen size={20} />
                </a>
            </li>
            {/* Resume / PDF */}
            <li className="group flex justify-between    hover:shadow-[0_0_20px_rgb(109,67,0)] cursor-pointer items-center border-2 border-[rgb(109,67,0)] p-2 rounded-full text-[rgb(109,67,0)] duration-300 transition-all hover:text-white hover:bg-[rgb(109,67,0)]">
                <a href="/CV.pdf" download className="group-hover:scale-[1.3] flex items-center justify-between w-full">
                    <BsFillPersonLinesFill size={20} />
                </a>
            </li>
        </ul>
    </div>
  );
};

export default SocialLink;
