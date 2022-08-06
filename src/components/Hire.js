function Hire() {
    return (
        <div className="py-20 bg-blue-500 font-quicksand">
            <div className="max-w-7xl m-auto flex flex-col px-4 items-center md:flex-row extra_md:px-0">
                <div className="w-full text-white pr-0 md:pr-3 md:w-1/2">
                    <h1 className="text-3xl font-bold pb-10 md:text-4xl">Just say hi</h1>
                    <p className="text-base pb-10 md:text-xl">I'm always open to discuss your project and <br/> talk about new things</p>
                    <div className="w-full flex justify-between">
                        <div>
                            <p>Mail me at</p>
                            <p className="md:text-xl font-medium">sbmaham2@gmail.com</p>
                        </div>
                        <div>
                            <p>Follow me</p>
                            <div className="flex text-white">
                                <div className="mr-2 text-2xl py-2">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </div>
                                <div className="mr-2 text-2xl py-2">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </div>
                                <div className="mr-2 text-2xl py-2">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </div>
                                <div className="mr-2 text-2xl py-2">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 pt-10 md:my-0 md:px-10">
                    <form className="w-full p-5 bg-white rounded-xl">
                        <input className="w-full py-3 text-blue-500 placeholder:text-blue-500 outline-none border-b border-blue-500 my-3" type="text"placeholder="Name"/>
                        <input className="w-full py-3 text-blue-500 placeholder:text-blue-500 outline-none border-b border-blue-500 my-3" type="text"placeholder="Email"/>
                        <input className="w-full py-3 text-blue-500 placeholder:text-blue-500 outline-none border-b border-blue-500 my-3" type="text"placeholder="Phone"/>
                        <textarea className="w-full py-3 text-blue-500 placeholder:text-blue-500 outline-none border-b border-blue-500 my-3" type="text"placeholder="Message"/>
                        <button className="my-3 px-5 py-2 bg-blue-500 text-white rounded-xl">submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hire;