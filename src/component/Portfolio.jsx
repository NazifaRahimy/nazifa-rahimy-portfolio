import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactParallax.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'



const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: "/joyenda.jpg",
            demoLink: "https://joenda.netlify.app/",
            codeLink: "https://github.com/NazifaRahimy/joenda",
        },
        {
            id:2,
            src:"/minavisam.jpg",
           demoLink  : "https://minavisam.netlify.app/",
           codeLink:"https://github.com/NazifaRahimy/minevisam"
        },{
            id:3,
            src: "/ploygon.jpg",
            
      demoLink: "https://nazifarahimy.github.io/ploygon/",
      codeLink: "https://github.com/nazifarahimy/ploygon",
        },
        {
            id:4,
            src: reactParallax
        },{
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        }
    ]
    return ( 
        <div name='portfolio' className='w-full h-auto md:h-[700px] bg-gradient-to-b pb-10 from-black to-gray-800 text-white'>
            <div className='max-w-screen-lg w-full h-full flex flex-col justify-center p-4 mx-auto'>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold border-b-4 border-b-gray-500 inline'>Portfollio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 px-12'>
                   {
                    portfolios.map(({id, src, demoLink, codeLink})=>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" 
                        className='rounded-lg h-[200px] w-full duration-300 hover:scale-105'
                        />
                        <div className='flex items-start justify-center'>
                            <a    href={demoLink} target="_blank"  rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>Demo</a>
                            <a  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>Code</a>
                        </div>
                    </div>
                    ))
                   }
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;