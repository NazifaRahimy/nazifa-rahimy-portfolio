import html from '../assets/html.png';
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png';
import github from '../assets/github.png';

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
        },
        {
            id: 2, 
            src: css,
            title: 'CSS'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript'
        },
        {
            id:4 ,
            src: reactImage,
            title: 'React',
        },
        {
            id: 5, 
            src: tailwind,
            title:' Tailwind'
        },{
            id: 6,
            src: nextjs,
            title: 'Next JS'
        },
        {
            id: 8,
            src: github,
            title: 'Gethub'
        }
    ]
    return (
        <div name='experience' className="w-full h-auto  pt-8 md:h-[700px]    bg-[linear-gradient(135deg,#fff8ec_0%,#f5d6a0_60%,#f0c97a_100%)]">
            <div className="max-w-screen-lg w-full h-full  p-4 mx-auto flex flex-col justify-center ">
                <div className="pb-8 ">
                    <p style={{ textShadow: "0 0 10px rgb(109,67,0)" }} className="text-4xl font-bold border-b-4 border-b-[#f0c97a] text-[rgb(109,67,0)] inline p-2">Skills</p>
                </div>
                <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:px-0 md: px-12">
                    {
                        techs.map(({id,src, title})=> (
                        <div key={id} className="relative shadow-md border border-[rgb(109,67,0)]  hover:shadow-2xl transition-all rounded-lg py-2 duration-300 overflow-hidden">
                            <img src={src} className="rounded-lg w-20 mx-auto" alt="skills" />
                            <p className="font-bold mt-4 text-[rgb(109,67,0)]">{title}</p>
                            {/* Animated border div */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute border-2 border-[rgb(109,67,0)] rounded-lg w-full h-full animate-borderMove"></div>
                            </div>
                        </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Experience;