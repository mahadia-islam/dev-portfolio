function Skills() {
    return (
        <div className="py-20 w-full">
            <div className="max-w-7xl flex flex-col md:flex-row m-auto px-4 extra_md:px-0">
                <div className="w-full md:w-1/2 px-3">
                    <div className="w-full flex justify-between">
                        <p>HTML5</p>
                        <p>90%</p>
                    </div>                    
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blue-600 h-2.5 rounded-full" style={{"width": "45%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;