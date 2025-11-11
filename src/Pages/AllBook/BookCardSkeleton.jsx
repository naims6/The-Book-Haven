import React from "react";

const BookCardSkeleton = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-md animate-pulse overflow-hidden border border-gray-100 dark:border-gray-800">
      <div className="h-56 w-full bg-gray-200 dark:bg-gray-800"></div>
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
