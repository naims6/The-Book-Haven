import React from "react";
import { Search } from "lucide-react";

const AllBookAction = ({ handleSort, handleBookSearch, loading }) => {
  // Skeleton Loader
  if (loading) {
    return (
      <div className="container2 flex flex-col md:flex-row items-center gap-3 mb-8 mt-6 animate-pulse">
        <div className="w-64 h-12 bg-gray-700/70 rounded-md"></div>
        <div className="w-40 h-12 bg-gray-700/70 rounded-md"></div>
      </div>
    );
  }

  return (
    <div className="container2 flex flex-col md:flex-row items-center gap-3 mb-8 mt-6">
      {/* Search Input */}
      <div className="relative w-full md:w-72">
        <Search
          className="absolute top-1/2 -translate-y-1/2 left-3"
          size={18}
        />
        <input
          onChange={(e) => handleBookSearch(e)}
          className="bg-gray-800  w-full pl-10 pr-5 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="search"
          placeholder="Search by book title..."
        />
      </div>

      {/* Sort Filter */}
      <div className="flex items-center space-x-2">
        <label htmlFor="sort">Sort By:</label>
        <select
          id="sort"
          onChange={handleSort}
          className="bg-gray-800 py-3.5 px-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="rating">Rating</option>
          <option value="createdAt">Newest First</option>
        </select>
      </div>
    </div>
  );
};

export default AllBookAction;
