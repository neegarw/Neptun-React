import React, { useState } from 'react';

function PriceRange() {
    const min = 0;
    const max = 15;

    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
    };

    return (
        <div className="w-full">
            {/* Qiymət göstərimi */}
            <div className="flex justify-between text-sm text-gray-700 font-semibold mb-2">
                <span>₼{minValue}</span>
                <span>₼{maxValue}</span>
            </div>

            <div className="relative w-full h-[30px]">
                {/* Alt fonda track */}
                <div className="absolute top-[12px] w-full h-[4px] bg-gray-300 rounded" />

                {/* Aktiv hissə (range) */}
                <div
                    className="absolute top-[12px] h-[4px] bg-[#FF8203] rounded"
                    style={{
                        // left: `${(minValue / max) * 100}%`,
                        width: `${((maxValue - minValue) / max) * 100}%`,
                    }}
                />

                {/* Min slider */}
                <input
                    type="range"
                    min={min}
                    max={maxValue - 1}
                    value={minValue}
                    onChange={handleMinChange}
                    className="range-thumb absolute w-full h-[30px] appearance-none bg-transparent z-30"
                />
                {/* Max slider */}
                <input
                    type="range"
                    min={minValue + 1} // Max slider min dəyəri minValue-dan böyük olmalıdır
                    max={max} // Max slider max dəyəri əsas max dəyəri olmalıdır
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="range-thumb absolute w-full h-[30px] appearance-none bg-transparent z-40"
                />
            </div>
        </div>
    );
}

export default PriceRange;
