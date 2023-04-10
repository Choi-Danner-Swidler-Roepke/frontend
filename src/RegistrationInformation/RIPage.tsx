export const RIPage: React.FC = () => {
    return (
        <div className="flex md:flex-row flex-col gap-3 pt-5 px-24 flex-wrap
                        gap-y-10 bg-gray-200">
            
            <div className="flex h-24 flex-wrap order-1 basis-1/2">
                <h1 className="md:text-5xl text-2xl font-bold md:leading-tight
                leading-snug text-blue-400">
                    Registration Information
                </h1>
                <h2 className="text-black md:w-2/3 md:py-1 leading-relaxed justify-start">
                    This page provides essential information for class registration
                </h2>
            </div>


            <div className="flex drop-shadow-lg order-2 basis-1/2">
                <img src="./src/assets/Registrationtimes.png" alt="regTable" className=""></img>
            </div>

            
            <div className="flex bg-gray-100 p-2 drop-shadow-lg font-semibold order-3 basis-1/3">
                <h2 className="">Before thinking about registration, make sure you've checked your credit hours to find when you register.
                
                Then, select the classes you need using the <a className="font-bold">Classes</a> page. Make sure the classes you select are
                needed for your major!
                
                Finally, record the CRN numbers for each of the classes and use the Drake Portal to officially register.</h2>
            </div>
        </div>
    )
}