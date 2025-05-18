import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse flex flex-col items-center bg-white rounded-2xl shadow-md p-4 w-full max-w-[200px] my-[60px]">
      <div className="bg-gray-200 rounded-xl h-40 w-full mb-4"></div>
      <div className="bg-gray-200 h-4 w-3/4 mb-2 rounded"></div>
      <div className="bg-gray-200 h-6 w-1/2 mb-4 rounded"></div>
      <div className="flex items-center justify-between w-full mb-4">
        <div className="bg-gray-200 h-6 w-10 rounded"></div>
        <div className="bg-gray-200 h-6 w-10 rounded"></div>
      </div>
      <div className="bg-gray-200 h-10 w-full rounded-xl"></div>
    </div>
  );
};

const SearchSkeleton = () => {
  return (
    <div className="container mx-auto py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
};

export default SearchSkeleton;
