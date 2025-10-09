import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {
    const links =[
        {
            id: 1, 
            child:(
                <>
                 LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/nazifa-rahimy-706a17346/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/NazifaRahimy'

        },
        {
            id:3,
            child: (
                <>
                Email < HiOutlineMailOpen size={30} />
            
                </>
            ),
            href: "mailto:nazifarahimy6@gmail.com",
        },
        
            {
                id:4,
                child :(
                    <>
                    Resume <BsFillPersonLinesFill size={30} />
                    </>
                ),
                // href: '/invoice.pdf',
                href: '/',
                style: 'rounded-br-md',
                download: true,
            }
    ]
    return ( 
       <div className="hidden lg:flex top-[35%] left-0  flex-col fixed">
           <ul>
          {
            links.map(({id, child, style, download, href})=>(
                <li key={id}
                className={`bg-gray-500 w-40 h-14 flex justify-between items-center px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${style || ""}`}
                //  className={
                // "bg-gray-500 w-40 h-14 flex justify-between items-center px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] " + " " + style }
                 >
                <a href={href} target="_blank" rel="noreferrer"
                 className="text-white flex items-center justify-between w-full " download={download} >
                  {  child}
                </a>
            </li>
            ))
          }
           </ul>
       </div>
     );
}
 
export default SocialLink;