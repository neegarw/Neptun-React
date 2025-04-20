import React from 'react'
import MainTopSlider from './MainTopSlider'
import MainTopImages from './MainTopImages'
import NavCategories from '../Header/NavCategories'

function MainTop() {
    return (
        <div className="container px-4 sm:px-0">
            <div className="flex flex-col lg:flex-row justify-between">
                <NavCategories />
                <div className="flex flex-col gap-y-[10px] w-full lg:max-w-[951px] mt-[15px]">
                    <MainTopSlider />
                    <MainTopImages />
                </div>
            </div>
        </div>

    )
}

export default MainTop