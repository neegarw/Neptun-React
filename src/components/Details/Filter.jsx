import { FaChevronDown } from 'react-icons/fa'
import { Slider, Switch } from 'antd';
import { useEffect, useState } from 'react';


function Filter({ data, setFilter }) {
    const [reverse, setReverse] = useState(true);

    const [minMax, setMinMax] = useState([0, 5])
    useEffect(() => {
        const sortByProd = data.sort((a, b) => a.price - b.price)
        const min = sortByProd[0]?.price
        const max = sortByProd.at(-1)?.price
        setMinMax([min, max])
    }, [data])

    return (
        <div className="bg-[#F7F7F7] p-5 rounded-xl lg:w-[25%] my-[20px] lg:my-[40px] mx-0 lg:mx-[5px]">
            <h3 className="text-lg font-bold mb-4">Filtr</h3>
            <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center cursor-pointer font-semibold text-[16px]">
                    Alt Kateqoriya
                    <FaChevronDown className="text-sm" />
                </div>
            </div>
            <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center cursor-pointer font-semibold text-[16px] mb-3">
                    Markası
                    <FaChevronDown className="text-sm" />
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <div className="w-[14px] h-[14px] bg-[#FF8203] rounded-sm"></div>
                    <span className="text-[14px] font-medium">NEPTUN-MEYVETEREVEZ</span>
                    <span className="text-[#FF8203] ml-auto font-semibold">5</span>
                </div>
            </div>
            <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center cursor-pointer font-semibold text-[16px] mb-3">
                    Qiymət
                    <FaChevronDown className="text-sm" />
                </div>

                <Slider
                    onChange={(elem) => {
                        setFilter(elem)
                    }}
                    range
                    defaultValue={minMax}
                    min={minMax[0]}
                    max={minMax[1]}
                    step={0.1}
                />
            </div>
            <div className="pt-2">
                <button
                    onClick={() => { setReverse(false) }}
                    className="w-full py-2 rounded-full bg-[#FF8203] text-white font-bold text-[15px]">
                    Hamısını Sıfırla
                </button>
            </div>
        </div>
    )
}

export default Filter
