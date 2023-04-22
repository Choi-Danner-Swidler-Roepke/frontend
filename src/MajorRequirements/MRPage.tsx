export const MRPage: React.FC = () => {
    return (
        <div className="flex md:flex-row flex-col gap-3 pt-5 px-24 flex-wrap
                        gap-y-10 bg-gray-200">
            
            <div className="flex h-24 flex-wrap order-1 basis-1/2">
                <h1 className="md:text-5xl text-2xl font-bold md:leading-tight
                leading-snug text-cyan-600">
                    Major Requirements
                </h1>
                <h2 className="text-black md:w-2/3 md:py-1 leading-relaxed justify-start">
                    Find your major and its required classes
                </h2>
            </div> {/* This div is the header and subtitle for the page */}
        </div>

    )
}