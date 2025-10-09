const Contact = () => {
    return (  
        <div  name='contact' className="w-full h-auto bg-gradient-to-b from-black to-gray-800 px-4 pb-4">
            <div className="max-w-screen-lg h-full mx-auto p-4 flex flex-col justify-center text-white ">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-b-gray-500 inline">Contact</p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <form action="https://getform.io/f/aollyyqb"  method="POST" className="flex w-full flex-col md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" className="rounded-md focus:outline-none bg-transparent text-white p-2 border-2 w-full  my-2"  />
                        <input type="text" name="email" placeholder="Enter your email" className="rounded-md focus:outline-none bg-transparent text-white p-2 border-2 w-full my-2"  />
                        <textarea name="massage" rows={8} placeholder="Enter your w-full massage focus:outline-none"
                        className="rounded-md p-2 border-2 my-2 text-white bg-transparent"
                         ></textarea>

                         <button className="text-white bg-gradient-to-b w-full md:w-[200px] from-cyan-500 to-blue-500 px-6 py-3 m-8 mx-auto flex items-start justify-center rounded-md hover:scale-105 duration-300">Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;