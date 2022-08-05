function About() {
    return (
        <div className="w-full pt-20">
            <div className="max-w-7xl m-auto flex flex-col px-4 extra_md:px-0 md:flex-row">
                <div className="w-full extra_md:w-1/2">
                    <p className="text-xl text-black font-medium font-poppins md:text-2xl">
                        Hello I'm
                    </p>
                    <h1 className="py-3 text-2xl md:text-4xl font-medium font-poppins">Mahadia Islam <span className="text-blue-500">Neha</span></h1>
                    <p className="py-10 font-poppins text-sm">
                        lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus tenetur nisi magnam est beatae. Sapiente sint quos eveniet molestiae?
                        lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus tenetur nisi magnam est beatae. Sapiente sint quos eveniet molestiae?
                    </p>                    
                    <div className="flex font-poppins flex-wrap">
                        <div className="mr-7 my-3 md:my-0">
                            <p className="font-medium text-blue-500 text-2xl py-2 md:text-4xl">3+</p>
                            <h1 className="text-sm md:text-base">YEAR OF EXPERIENCE</h1>
                        </div>
                        <div className="mr-7 my-3 md:my-0">
                            <p className="font-medium text-blue-500 text-2xl py-2 md:text-4xl">10+</p>
                            <h1 className="text-sm md:text-base">GLOBAL WORKING CLIENT</h1>
                        </div>
                        <div className="my-3 md:my-0">
                            <p className="font-medium text-blue-500 text-2xl py-2 md:text-4xl">5+</p>
                            <h1 className="text-sm md:text-base">AWARD WIN</h1>
                        </div>
                    </div>
                    <div className="pt-10 w-full font-poppins font-medium">
                        <div className="flex py-3">
                            <div className="w-12 h-12 bg-blue-500 flex text-2xl rounded-md items-center justify-center text-white mr-2">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </div>                            
                            <div className="w-12 h-12 bg-blue-500 flex text-2xl rounded-md items-center justify-center text-white mr-2">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div>                            
                            <div className="w-12 h-12 bg-blue-500 flex text-2xl rounded-md items-center justify-center text-white mr-2">
                                <ion-icon name="logo-pinterest"></ion-icon>
                            </div>                            
                            <div className="w-12 h-12 bg-blue-500 flex text-2xl rounded-md items-center justify-center text-white mr-2">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="w-full flex h-full justify-center items-end pt-12 extra_md:pt-0 extra_md:w-1/2 extra_md:justify-end">
                    <img src="./img/about_me.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default About;