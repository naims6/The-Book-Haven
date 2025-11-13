import React from "react";
import { Search } from "lucide-react";

// Main Component
const AllBookAction = ({
  handleSort,
  handleBookSearch,
  handleSearchSubmit,
  loading,
}) => {
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
      {/* Search Input + Button */}
      <form
        onSubmit={(e) => handleSearchSubmit(e)}
        className="relative w-full md:w-80 flex items-center"
      >
        <div className="relative grow">
          <Search
            className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400"
            size={18}
          />
          <input
            onChange={(e) => handleBookSearch(e)}
            className="bg-surface w-full pl-10 pr-5 py-3.5 rounded-l-md outline-none 
            border border-transparent focus:border-blue-500 focus:ring-0 transition-all duration-200"
            type="search"
            placeholder="Search by book title..."
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3.5 rounded-r-md transition-all duration-200">
          Search
        </button>
      </form>

      {/* Sort Filter */}
      <div className="flex items-center space-x-2">
        <label htmlFor="sort">Sort By:</label>
        <select
          id="sort"
          onChange={handleSort}
          className="bg-surface py-3.5 px-4 rounded-md outline-none border border-transparent focus:border-blue-500 focus:ring-0 transition-all duration-200"
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
