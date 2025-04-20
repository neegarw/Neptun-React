import React from 'react'
import Filter from './Filter'
import CategoryCards from './CategoryCards'

function DetailPage() {
  return (
    <div className='flex container mx-auto justify-between py-[300px] items-start'>
        <Filter /> 
        <CategoryCards />
    </div>
  )
}

export default DetailPage