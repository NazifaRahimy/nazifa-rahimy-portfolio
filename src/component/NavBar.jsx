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
        },
        {
            id: 5,
            link: 'contact'
        }

     ]

    return ( 
        <div className='flex justify-between items-center w-full h-20 text-white
        bg-black px-4 fixed top-0 left-0'>
           <div>
               <h1 className='text-5xl font-signature ml-2'>   Nazifa</h1>
           </div>
           <ul className='hidden md:flex'>
           {
                    links.map(({id, link})=>(
                        <li key={id} className='px-4 cursor-pointer text-gray-500 font-medium hover:scale-105 duration-200 capitalize'>
                            <Link to={link}  smooth duration={500}>{link}</Link>
                        </li>
                    ))
            }
        </ul>
        <div className='cursor-pointer text-gray-500 pr-2 z-10 md:hidden'
          onClick={() => setNav(!nav)}> 
             {nav ? <FaTimes size={30}/> :  <FaBars size={30}/>}
        </div>

         { nav && <ul className='flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800  w-full absolute top-0 left-0 text-gray-500 h-screen'>
             {links.map(({id, link})=> (
                <li key={id} className='py-6 text-4xl cursor-pointer capitalize'>

                    <Link onClick={()=> setNav(!nav)}
                    to={link} smooth duration={500} >{link}</Link>
                </li>
              ))}
           </ul>
        }
        </div>
     );
}
 
export default Navbar;