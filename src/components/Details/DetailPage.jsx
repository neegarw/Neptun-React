import React, { useState } from 'react'
import Filter from './Filter'
import CategoryCards from './CategoryCards'

function DetailPage() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState()

  return (
    <div className='bg-[#f2f2f2]'>
      <div className='flex flex-col lg:flex-row container mx-auto justify-between py-[300px] items-start gap-[30px] px-[10px]'>
        <Filter data={data} setFilter={setFilter} />
        <CategoryCards setData={setData} filter={filter} />
      </div>
    </div>

  )
}

export default DetailPage