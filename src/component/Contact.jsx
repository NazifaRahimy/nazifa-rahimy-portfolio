const Contact = () => {
    return (  
        <div  name='contact' className="w-full h-auto    bg-[linear-gradient(135deg,#fff8ec_0%,#f5d6a0_60%,#f0c97a_100%)] px-4 pb-4">
            <div className="max-w-screen-lg h-full mx-auto p-4 flex flex-col justify-center ">
                <div className="pb-8 mt-10">
                    <p style={{ textShadow: "0 0 10px rgb(109,67,0)" }}  className="text-4xl font-bold border-b-4 border-b-[#f0c97a] text-[rgb(109,67,0)] mt-5  inline">Contact</p>
                    <p className="py-6 text-black">Submit the form below to get in touch with me</p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <form action="https://getform.io/f/aollyyqb"  method="POST" className="flex w-full flex-col md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" className="rounded-md focus:outline-none bg-transparent  p-2 border-2 border-[rgb(109,67,0)] w-full  my-2"  />
                        <input type="text" name="email" placeholder="Enter your email" className="rounded-md focus:outline-none bg-transparent  p-2 border-2 border-[rgb(109,67,0)] w-full my-2"  />
                        <textarea name="massage" rows={8} placeholder="Enter  your massage "
                        className="rounded-md p-2 w-full outline-none focus:outline-none border-2 my-2 border-[rgb(109,67,0)]  bg-transparent"
                         ></textarea>
                        <button className="text-white resize bg-gradient-to-b w-full md:w-[200px] bg-[rgb(109,67,0)] px-6 py-3 m-8 mx-auto flex items-start justify-center rounded-md hover:scale-105 duration-300">Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;