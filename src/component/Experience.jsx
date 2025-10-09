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
            sytle: 'shadow-orange-500'
        },
        {
            id: 2, 
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4 ,
            src: reactImage,
            title: 'React',
            style:'shadow-blue-600'
        },
        {
            id: 5, 
            src: tailwind,
            title:' Tailwind',
            style: 'shadow-sky-400'
        },{
            id: 6,
            src: nextjs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 8,
            src: github,
            title: 'Gethub',
            style: 'shadow-gray-400'
        }
    ]
    return (
        <div name='experience' className="w-full h-auto  pt-8 md:h-[700px] bg-gradient-to-b from-gray-800 to-black">

            <div className="max-w-screen-lg w-full h-full text-white p-4 mx-auto flex flex-col justify-center ">
               <div className="pb-8 ">
                  <p className="text-4xl font-bold border-b-4 border-b-gray-500 inline p-2">Skills</p>
               </div>
             
            <div className="w-full mt-5 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:px-0 md: px-12">
               {
                techs.map(({id,src, title, sytle})=> (
                    <div key={id} className= {`shadow-md shadow-blue-500 rounded-lg py-2 duration-300 hover:scale-105
                     ${sytle}`}>
                    <img src={src} className='rounded-lg   w-20 mx-auto ' alt="" />
                    <p className='font-bold mt-4'>{title}</p>
                 </div>
                ))
               }
            </div>
            </div>
        </div>
      );
}
 
export default Experience;