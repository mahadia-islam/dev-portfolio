function Projects(){
    return (
        <div className="py-20">
            <h1 className="text-center text-3xl font-quicksand font-bold pt-5 md:text-4xl">
                My Recent Projects
            </h1>
            <div className="w-32 h-1 bg-black my-5 mx-auto rounded-full"></div>
            <p className="m-auto font-poppins text-center text-sm px-3 extra_md:px-0 md:text-base md:w-1/3">I Start By Learning And Researching Based On The Brief And A Resource To Gain About The Needs</p>
            <div className="flex font-poppins justify-center flex-wrap w-full mx-auto my-7 text-xs px-3 extra_md:px-0 md:w-fit md:text-sm md:my-14">
                <button className="px-5 py-2 rounded-full border border-blue-500 text-blue-500 mr-3 my-2 md:my-0">All</button>
                <button className="px-5 py-2 rounded-full border border-blue-500 text-blue-500 mr-3 my-2 md:my-0">Web Design</button>
                <button className="px-5 py-2 rounded-full border border-blue-500 text-blue-500 mr-3 my-2 md:my-0">Ui/Ux Design</button>
                <button className="px-5 py-2 rounded-full border border-blue-500 text-blue-500 my-2 md:my-0">Graphic Design</button>
            </div>
            <div className="max-w-7xl m-auto flex flex-col flex-wrap justify-center md:flex-row">
                <div className="w-full px-3 my-3  md:w-1/3">
                    <img className="rounded-xl" src="./img/projects/1.png" alt="" />
                </div>
                <div className="w-full px-3 my-3  md:w-1/3">
                    <img className="rounded-xl border border-slate-500" src="./img/projects/2.png" alt="" />
                </div>
                <div className="w-full px-3 my-3  md:w-1/3">
                    <img className="rounded-xl border border-slate-500" src="./img/projects/3.png" alt="" />
                </div>
                <div className="w-full px-3 my-3  md:w-1/3">
                    <img className="rounded-xl border border-slate-500" src="./img/projects/4.png" alt="" />
                </div>
                <div className="w-full px-3 my-3  md:w-1/3">
                    <img className="rounded-xl border border-slate-500" src="./img/projects/5.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Projects;
