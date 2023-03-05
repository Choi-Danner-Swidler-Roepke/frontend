export const Home: React.FC = () => {
    console.log('here')
    return (
        <div>
            <img className ="static h-fit w-fit" src="./src/assets/home_screen.jpg"></img>
            <h1 class="absolute text-5xl font-serif text-blue-400 border-2 border-black top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                Registration Application
                <h2 class="relative text-3xl text-black top">
                    Register for your classes <a class="underline decoration-indigo-500">easier</a>
                </h2>
            </h1>
        </div>
    )
}