import React from 'react'

function UserDashBoard() {
    return (

        <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-100 dark:text-gray-800">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
                <div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-800 dark:bg-violet-600">Art</a>
                        <div className="flex flex-col justify-start text-center dark:text-gray-800">
                            <span className="text-3xl font-semibold leading-none tracking-wide">31</span>
                            <span className="leading-none uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-800">Fuga ea ullam earum assumenda, beatae labore eligendi.</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 group">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-800 dark:bg-violet-600">Politics</a>
                        <div className="flex flex-col justify-start text-center dark:text-gray-800">
                            <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                            <span className="leading-none uppercase">Aug</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-800"> Autem sunt tempora mollitia magnam non voluptates</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 group">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-800 dark:bg-violet-600">Health</a>
                        <div className="flex flex-col justify-start text-center dark:text-gray-800">
                            <span className="text-3xl font-semibold leading-none tracking-wide">01</span>
                            <span className="leading-none uppercase">Aug</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-800">Inventore reiciendis aliquam excepturi</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 group">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-800 dark:bg-violet-600">Science</a>
                        <div className="flex flex-col justify-start text-center dark:text-gray-800">
                            <span className="text-3xl font-semibold leading-none tracking-wide">28</span>
                            <span className="leading-none uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-800">Officiis mollitia dignissimos commodi optio vero animi</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left dark:bg-gray-500 bg-center bg-cover cursor-pointer h-96 group">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-800 dark:bg-violet-600">Sports</a>
                        <div className="flex flex-col justify-start text-center dark:text-gray-800">
                            <span className="text-3xl font-semibold leading-none tracking-wide">19</span>
                            <span className="leading-none uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-800">Doloribus sit illo necessitatibus architecto exercitationem enim</a>
                    </h2>
                </div>
            </div>
        </div>)
}

export default UserDashBoard