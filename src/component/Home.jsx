import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import HeroImage from '../assets/heroImage.png'

import { Link } from "react-scroll";
const Home = () => {
    return ( 
     <  div name='home' className="w-full h-auto md:h-screen mt-20 bg-gradient-to-b from-black via-black to-gray-800">
           <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-4 pb-5 md:flex-row ">
               <div className="flex flex-col justify-center pt-20 md:pt-0  w-full md:w-3/5  h-full pr-5">
                 <h2 className=" text-xl font-normal w-[250px] bg-yellow-500 py-2 px-6 rounded-full text-white">Front-End Developer</h2>
                  <h4 className="text-3xl font-bold text-white mt-5">Build Modern, Responsive <span className="text-cyan-500 ">Websites</span> </h4>
                  <h4 className="text-3xl font-bold text-white ">That Elevate Your <span className="text-yellow-600"> Online Presence</span></h4>
                 <p className="text-gray-500 py-4 text-xl font-normal ">
                  I craft clean, interactive, and responsive user interfaces using HTML, CSS, Tailwind,JavaScript React and Next Js. Whether you're launching a brand or refreshing your current website, I can help you stand out online.
                 {/* I have 8 years of experience building and desgining software. Currently, I love to work on web application using technologies like React, Tailwind, Next JS and GraphQL. */}
                 </p>
                  <div>
                     <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">  
                          Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                     </Link>
                  </div>
               </div>
               <div className="md:w-2/5 flex items-center justify-center">
                  <div className="p-1 border-box md:w-[85%]  rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                     <img src="/nazifa.jpg"  alt="my profile"  className="h-[400px] md:h-[450px] rounded-full" />
                  </div>
               </div>
           </div>
     </ div>
     );
}
 
export default Home;