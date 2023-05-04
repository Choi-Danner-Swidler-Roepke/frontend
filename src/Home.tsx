export const Home: React.FC = () => {
    return (
        // OLD CODE
        // <div className="flex flex-wrap px-15 gap-y-16 bg-gradient-to-t from-gray-400 to-gray-200 border-2 border-black">
        //     {/* Front header/subheader */}
        //         <div className="md:flex-row pl-12 gap-3 flex-wrap text-center gap-y-10 bg-gray-200 flex order-1 basis-1/2
        //          border-blue-700 border-2">
        //             <h1 className="pt-32 md:text-3xl text-1xl font-bold md:leading-tight leading-snug text-blue-400">
        //                 Improve your DU Registration Experience
        //             </h1>
        //             <h2 className="text-black md:w-2/3 md:py-1 leading-relaxed justify-start">
        //                 The best platform to find, pick, and register for classes
        //             </h2>
        //         </div>

        //     {/* Front Image */}
        //         <img className ="flex py-5 px-5 w-1/2 basis-1/2 order-2" src="./src/assets/home_screen.jpg"></img>

        //     {/* Subsection on how to use the site */}
        //         <div className="flex order-3 basis-full border-2 border-red-700">
        //             <h1 className="md:text-4xl text-1xl px-10 font-bold md:leading-tight leading-snug text-blue-400">
        //                 Why use this site?
        //             </h1>
        //             <h2 className="text-black md:w-2/3 md:py-1 leading-relaxed justify-start">
        //                 Simply put, Drake's current registration system makes the process harder than it needs to be. Information is
        //                 spread too thin and can be hard to find. Here, we put together class requirements, available classes, and 
        //                 a guide of how to register all in the same place.
        //             </h2>
        //         </div>
            
            
        // </div>
        <section id="home" className="bg-gray-200">
          {/* Hero Section */}
            <div className="min-h-screen flex py-10 md:flex-row flex-col items-center">
              <div className="flex-1 flex items-center justify-center h-full">
                <img src="/assets/griff_home_5.jpeg" alt="" className="md:w-11/12 h-full object-cover drop-shadow-2xl rounded-xl" />
              </div>

              <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-tight leading-snug font-bold">
                      <span className="text-cyan-600 md:text-6xl text-5xl">
                        Class Registration App
                      </span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                      Register for your classes easier, quicker, and better
                    </h4>
                </div>
              </div>
            </div>

          {/* Info Section */}
            <div className="text-center mt-8">
              <h3 className="text-4xl font-bold text-cyan-600">
                Why this site?
              </h3>
              {/*<p className="text-gray-400 my-3 text-lg">Extra text</p> */}
              <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                <div className="p-2">
                  <div className="text-gray-600 my-3">
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                      Simply put, Drake's current registration system makes the process harder than it needs to be. Information is
                      spread too thin and can be hard to find. Here, we put together class requirements, available classes, and 
                      a guide of how to register all in the same place.
                    </p>
                </div>
              </div>
                <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                  <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
                    <img src="/assets/griff_home_2.jpeg" alt="" className="w-full object-cover bg-cyan-600 rounded-xl drop-shadow-2xl"/>
                  </div>
                </div>
              </div>
            </div>

          {/* Tutorial Section */}
            <div className="text-center py-10 px-3 text-white">
              <h3 className="text-4xl font-bold mt-24 text-cyan-600">
                Website Tutorial
              </h3>
            </div>
            <div className="bg-gray-700 relative px-8 rounded-2xl lg:max-w-4xl mx-auto min-h-[24rem] flex gap-6 lg:flex-row flex-col-reverse items-center mb-24">
              <div>
                <h2 className="text-2xl font-bold">
                  How does this site work?
                </h2>
                <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
                  Use the <span className="text-cyan-600">Classes</span> page to look for and select offered 
                  classes, the <span className="text-cyan-600">Majors</span> page to make sure you meet your requirements, 
                  the <span className="text-cyan-600">Schedule</span> page to make sure you plan the perfect semester, 
                  and the <span className="text-cyan-600">Registration</span> page to find the day to make things official!
                </p>
              </div>
              <img src="/assets/griff_home_3.png" alt="" className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-16 object-cover"/>
            </div>

          {/* Footer */}
            <div className="bg-gray-800 text-sm p-4 text-center text-white">
              CS Capstone © 2022 Lucas Swidler, Jae Choi, Jacob Danner
            </div>
            
        </section>
    )
}