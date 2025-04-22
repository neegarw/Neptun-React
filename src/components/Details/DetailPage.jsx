import React from 'react'
import Filter from './Filter'
import CategoryCards from './CategoryCards'

function DetailPage() {
  return (
    <div className='bg-[#f2f2f2]'>
      <div className='flex container mx-auto justify-between py-[300px] items-start gap-[30px] px-[10px]'>
        <Filter />
        <CategoryCards />
      </div>
    </div>

  )
}

export default DetailPage