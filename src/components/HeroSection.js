function HeroSection() {
    return (
        <div className="relative w-full font-quicksand md:h-screen" id="hero__area">
            <div className="md:absolute top-0 left-0 w-full" id="nav">
                <div className="max-w-7xl m-auto flex justify-between items-center py-5 px-3 bg-blue-500 text-white extra_md:px-0 md:bg-transparent md:text-black">
                    <a href="#nav" className="font-semibold text-xl">Mahadia.</a>
                    <div className="menu hidden md:block">
                        <ul className="flex font-medium">
                            <li className="px-3"><a href="#hero__area">Home</a></li>
                            <li className="px-3"><a href="#about__me">About</a></li>
                            <li className="px-3"><a href="#my__service">Works</a></li>
                            <li className="px-3"><a href="#hero__area">Contact</a></li>
                            <li className="px-3"><a href="#hero__area">Blog</a></li>
                        </ul>
                    </div>
                    <div className="block text-xl md:hidden">
                        <ion-icon name="grid-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl m-auto flex flex-col px-4 md:flex-row extra_md:px-0 md:h-full">
                <div className="w-full py-10 flex flex-col text-center justify-center md:w-1/2 md:py-0 md:h-full md:text-left">
                    <p className="text-gray-700 text-sm py-3 hidden md:block">lorem ipsum dolor sit amet consectetur, adipisicing</p>
                    <h1 className="text-4xl font-bold md:text-6xl">
                        I am Mahadia
                    </h1>
                    <h1 className="text-4xl font-bold py-3 md:text-6xl">
                        A web <span className="text-blue-500">developer</span>
                    </h1>
                    <button
                        className="bg-blue-500 w-fit text-white px-5 py-2 rounded-md text-sm my-3 mx-auto border border-transparent hover:border-blue-500 hover:bg-transparent hover:text-blue-500 cursor-pointer md:mx-0"
                    >
                        read more
                    </button>
                </div>
                <div className="w-full pt-4 flex items-end justify-center md:w-1/2 md:py-0 md:h-full">
                    <img src="./img/me.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;