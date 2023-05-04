export const RIPage: React.FC = () => {
    return (
        <div className="flex md:flex-row flex-col gap-3 pt-5 px-24 flex-wrap gap-y-10 bg-gray-200 items-center">
            {/* This div is the header and subtitle for the page */}
                <div className="flex h-24 flex-wrap order-1 basis-1/2 items-left">
                    <h1 className="md:text-5xl text-2xl font-bold md:leading-tight leading-snug text-cyan-600">
                        Registration Times
                    </h1>
                    <h2 className="text-black md:w-2/3 md:py-1 leading-relaxed justify-start">
                        Important information on when to register
                    </h2>
                </div> 

            {/* This div is the registration times table */}
                <div className="flex drop-shadow-lg order-2 flex-justify h-full">
                    <img src="/assets/Registrationtimes.png" alt="regTable" className=""></img>
                </div> 

            
        </div>
    )
}