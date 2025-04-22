import React from 'react'
import MainTopSlider from './MainTopSlider'
import MainTopImages from './MainTopImages'

function MainTop() {
    return (
        <div className="container px-4 sm:px-0">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className='max-w-[250px]'></div>
                <div className="flex flex-col gap-y-[10px] w-full lg:max-w-[930px] mt-[15px]">
                    <MainTopSlider />
                    <MainTopImages />
                </div>
            </div>
        </div>

    )
}

export default MainTop