import React from 'react'

const ProductDetailSkeleton = () => {
  return (
    <div className="container mx-auto">
      <div className="flex bg-gray-100 p-6 animate-pulse">
        <div className="w-[50%]">
          <div className="bg-gray-300 h-[400px] w-full rounded-xl mb-4"></div>

          <div className="flex space-x-2">
            <div className="w-24 h-24 bg-gray-300 rounded"></div>
            <div className="w-24 h-24 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="w-1/2 px-6 space-y-4">
          <div className="h-6 bg-gray-300 rounded w-2/3"></div> 
          <div className="h-4 bg-gray-300 rounded w-1/3"></div> 
          <div className="h-4 bg-gray-300 rounded w-1/4"></div> 
          <div className="h-4 bg-gray-300 rounded w-1/4"></div> 
          <div className="h-10 bg-gray-300 rounded w-1/5"></div> 

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-6 bg-gray-300 rounded"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-12 h-4 bg-gray-300 rounded"></div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="w-32 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSkeleton
