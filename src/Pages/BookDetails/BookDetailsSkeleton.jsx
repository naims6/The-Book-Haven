import { Star, User } from "lucide-react";

export default function BookDetailsSkeleton() {
  return (
    <div className="mt-16 animate-pulse">
      {/* Main content */}
      <div className="container2 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book Cover Skeleton */}
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-200 h-96 w-full"></div>

              {/* Action buttons skeleton */}
              <div className="flex gap-3 mt-6">
                <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div>
                <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Book Information Skeleton */}
          <div className="md:col-span-2">
            {/* Title and Author Skeleton */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-7 w-28 bg-gray-200 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Star size={18} className="text-gray-300" />
                  <div className="h-6 w-12 bg-gray-200 rounded"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded ml-2"></div>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-3 mb-4">
                <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
                <div className="h-10 bg-gray-200 rounded-lg w-4/5"></div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-2 mb-4">
                <User size={20} className="text-gray-300" />
                <div className="h-6 w-40 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Description Skeleton */}
            <div className="mb-8">
              <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-5 bg-gray-200 rounded w-full"></div>
                <div className="h-5 bg-gray-200 rounded w-full"></div>
                <div className="h-5 bg-gray-200 rounded w-11/12"></div>
                <div className="h-5 bg-gray-200 rounded w-10/12"></div>
                <div className="h-5 bg-gray-200 rounded w-11/12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
