import React from "react";

function BookCardSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse pt-2">
      {/* Image placeholder */}
      <div className="relative overflow-hidden flex justify-center">
        <div className="w-[200px] h-[300px] bg-gray-700/70 rounded-md"></div>
      </div>

      {/* Content placeholder */}
      <div className="p-5 space-y-4">
        {/* Title  */}
        <div>
          <div className="h-5 bg-gray-700/70 rounded w-3/4 mb-3"></div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-700/70 rounded-full"></div>
            <div className="h-4 bg-gray-700/70 rounded w-1/3"></div>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-xs mb-4">
          <div className="w-4 h-4 bg-gray-700/70 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-700/70 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <div className="bg-gray-700/70 h-10 rounded-lg w-full"></div>
          <div className="bg-gray-700/70 h-10 rounded-lg w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default BookCardSkeleton;
