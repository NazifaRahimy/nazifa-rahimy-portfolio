import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)

     const links = [
        {
            id: 1, 
            link: "home"
        },
        {
            id:2, 
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        }
    ]

    return ( 
        <div className='flex box-border w-[100%] justify-between items-center md:px-19 lg:px-24  h-20 bg-[linear-gradient(135deg,#fff8ec_0%,#f5d6a0_60%,#f0c97a_100%)] px-4 sticky top-0 left-0 z-50'>
            <div>
               <h1 className='text-5xl font-signature ml-2 font-extrabold '>     <span  className="text-[rgb(109,67,0)]"  style={{ textShadow: "0 0 10px rgb(109,67,0)" }} > Nazifa</span></h1>
            </div>
           <ul className='hidden md:flex gap-8'>
           {
                links.map(({id, link})=>(
                    <li key={id} className=' cursor-pointer hover:border-b-2 hover:text-[rgb(109,67,0)]   hover:border-[rgb(109,67,0)]   transition-all text-[18px] text-black font-medium hover:scale-105 duration-200 capitalize'>
                        <Link to={link}  smooth duration={500}>{link}</Link>
                    </li>
                ))
            }
        </ul>
        <Link to="contact" smooth duration={500} className='px-6 cursor-pointer  hover:text-[rgb(109,67,0)] hover:border-2 hover:border-[rgb(109,67,0)] hover:bg-transparent      hover:shadow-[0_0_20px_rgb(109,67,0)] duration-300 hidden md:flex bg-[rgb(109,67,0)]  text-white py-1.5   rounded-full font-medium hover:scale-105  capitalize' >Contact</Link>
        <div className='cursor-pointer text-[rgb(109,67,0)]  pr-2 z-10 md:hidden'onClick={() => setNav(!nav)}>   {nav ? <FaTimes size={30}/> :  <FaBars size={30}/>}</div>
        { nav && 
            <ul className='flex flex-col items-center justify-center bg-[linear-gradient(135deg,#fff8ec_0%,#f5d6a0_60%,#f0c97a_100%)]   w-full absolute top-0 left-0  h-screen'>
                {links.map(({id, link})=> (
                <li key={id} className='py-6 text-4xl cursor-pointer capitalize'>
                    <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500} >{link}</Link>
                </li>
                ))}
                <Link to="contact" smooth duration={500} className='   text-4xl cursor-pointer capitalize   rounded-full font-medium hover:scale-105 duration-200 ' >Contact</Link>
            </ul>
        }
        </div>
    );
}
 
export default Navbar;