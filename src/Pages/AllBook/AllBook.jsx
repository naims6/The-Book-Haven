// import React, { useEffect, useState } from "react";
// import Title2 from "../../Components/Title2";
// import BookCard from "./BookCard";
// import BookCardSkeleton from "./BookCardSkeleton";
// import useAxios from "../../hooks/useAxios";
// import Title2Skeleton from "../../Components/Title2Skeleton";
// import AllBookAction from "./AllBookAction";

// const AllBook = () => {
//   const axiosInstance = useAxios();
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   // handle sort book
//   const handleSort = (e) => {
//     const value = e.target.value;
//     axiosInstance.get(`/all-books?sortBy=${value}`).then((data) => {
//       setBooks(data.data);
//     });
//   };

//   // handle search  book real time
//   const handleBookSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // handle search button click
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();

//     axiosInstance.get(`/all-books/search?title=${searchTerm}`).then((data) => {
//       setBooks(data.data);
//     });
//   };

//   // Fetch data client-side
//   useEffect(() => {
//     setTimeout(() => {
//       axiosInstance
//         .get("/all-books")
//         .then((data) => {
//           setBooks(data.data);
//           setLoading(false);
//         })
//         .catch(() => setLoading(false));
//     }, 200);
//   }, [axiosInstance]);

//   return (
//     <div className="mt-16 py-10">
//       {loading ? <Title2Skeleton /> : <Title2>All Books</Title2>}

//       {/* Filter and search Section */}
//       <AllBookAction
//         handleSort={handleSort}
//         handleBookSearch={handleBookSearch}
//         loading={loading}
//         handleSearchSubmit={handleSearchSubmit}
//       />

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container2">
//         {/* if loading true show skeleton */}
//         {loading ? (
//           Array.from({ length: 8 }).map((_, i) => <BookCardSkeleton key={i} />)
//         ) : books.length === 0 ? ( // if book length o show no book found
//           <h1>No Book Found </h1>
//         ) : (
//           books.map((book) => (
//             <BookCard key={book._id} book={book} setBooks={setBooks} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllBook;


import React, { useEffect, useState } from "react";
import {
  Search,
  Filter,
  X,
  Star,
  Calendar,
  BookOpen,
  Clock,
  Loader2,
  User
} from "lucide-react";
import Title2 from "../../Components/Title2";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";
import useAxios from "../../hooks/useAxios";
import Title2Skeleton from "../../Components/Title2Skeleton";

const AllBook = () => {
  const axiosInstance = useAxios();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);
  const itemsPerPage = 8;

  // Filter states based on actual book data structure
  const [filters, setFilters] = useState({
    genre: "",
    rating: "",
    sortBy: "newest",
  });

  // Available options for filters
  const [availableGenres, setAvailableGenres] = useState([]);

  // Sort options based on available fields
  const sortOptions = [
    { value: "newest", label: "Newest First", icon: <Calendar className="w-4 h-4" /> },
    { value: "oldest", label: "Oldest First", icon: <Clock className="w-4 h-4" /> },
    { value: "rating", label: "Highest Rated", icon: <Star className="w-4 h-4" /> },
    { value: "title", label: "Title A-Z", icon: <BookOpen className="w-4 h-4" /> }
  ];

  // Rating options
  const ratingOptions = [
    { value: "", label: "All Ratings" },
    { value: "4.5", label: "4.5+ Stars" },
    { value: "4.0", label: "4.0+ Stars" },
    { value: "3.5", label: "3.5+ Stars" },
    { value: "3.0", label: "3.0+ Stars" }
  ];

  // Fetch books with filters and pagination
  const fetchBooks = async (page = 1) => {
    setLoading(true);
    try {
      // First fetch all books to get available filters
      const allBooksResponse = await axiosInstance.get("/all-books");
      const allBooks = allBooksResponse.data || [];
      
      // Extract unique values for filters
      const genres = [...new Set(allBooks.map(book => book.genre).filter(Boolean))];

      
      setAvailableGenres(genres);


      // Apply search filter if searchTerm exists
      let filteredBooks = allBooks;
      if (searchTerm.trim()) {
        filteredBooks = allBooks.filter(book =>
          book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Apply genre filter
      if (filters.genre) {
        filteredBooks = filteredBooks.filter(book => 
          book.genre?.toLowerCase() === filters.genre.toLowerCase()
        );
      }

      // Apply rating filter
      if (filters.rating) {
        const minRating = parseFloat(filters.rating);
        filteredBooks = filteredBooks.filter(book => 
          book.rating && book.rating >= minRating
        );
      }

      // Apply sorting
      if (filters.sortBy) {
        filteredBooks.sort((a, b) => {
          switch (filters.sortBy) {
            case 'newest':
              return new Date(b.createdAt) - new Date(a.createdAt);
            case 'oldest':
              return new Date(a.createdAt) - new Date(b.createdAt);
            case 'rating':
              return (b.rating || 0) - (a.rating || 0);
            case 'title':
              return (a.title || '').localeCompare(b.title || '');
            default:
              return 0;
          }
        });
      }

      // Calculate pagination
      const totalFilteredBooks = filteredBooks.length;
      // const totalPages = Math.ceil(totalFilteredBooks / itemsPerPage);
      const startIdx = (page - 1) * itemsPerPage;
      const paginatedBooks = filteredBooks.slice(startIdx, startIdx + itemsPerPage);

      setBooks(paginatedBooks);
      setTotalBooks(totalFilteredBooks);
      
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
      setTotalBooks(0);
    } finally {
      setLoading(false);
    }
  };

  // Fetch books when filters or search term change
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setCurrentPage(1);
      fetchBooks(1);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, filters.genre, filters.rating, filters.sortBy]);

  // Initial fetch
  useEffect(() => {
    fetchBooks(1);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleResetFilters = () => {
    setFilters({
      genre: "",
      rating: "",
      sortBy: "newest",
    });
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    const totalPages = Math.ceil(totalBooks / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Re-apply filters and pagination
    fetchBooks(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Count active filters
  const activeFilterCount = [
    filters.genre,
    filters.rating,
    filters.sortBy !== "newest",
    searchTerm
  ].filter(Boolean).length;

  // Get total pages
  const totalPages = Math.ceil(totalBooks / itemsPerPage);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentPage === i
              ? "bg-primary text-white"
              : "hover:bg-bg-muted"
          }`}
          style={{
            backgroundColor: currentPage === i ? 'var(--color-primary)' : 'transparent',
            color: currentPage === i ? 'white' : 'var(--color-text-secondary)'
          }}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-bg-muted transition-colors"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Previous
        </button>
        
        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="px-4 py-2 rounded-lg hover:bg-bg-muted transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              1
            </button>
            {startPage > 2 && <span className="px-2" style={{ color: 'var(--color-text-muted)' }}>...</span>}
          </>
        )}

        {pages}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-2" style={{ color: 'var(--color-text-muted)' }}>...</span>}
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-4 py-2 rounded-lg hover:bg-bg-muted transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-bg-muted transition-colors"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="mt-16 py-10" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container2 mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8">
          {loading ? <Title2Skeleton /> : (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <Title2>Browse All Books</Title2>
                <p className="mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                  Discover {totalBooks.toLocaleString()} books in our collection
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Search and Filter Bar */}
        <div className="sticky top-16 z-10 mb-8 pt-4 pb-6"
          style={{ 
            backgroundColor: 'var(--color-bg)',
            borderBottom: '1px solid var(--color-border)'
          }}
        >
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: 'var(--color-text-muted)' }}
              />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search books by title or author..."
                className="w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ 
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)'
                }}
              />
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Filter Row */}
              <div className="flex flex-wrap gap-3 grow">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    Filters:
                  </span>
                </div>
                
                {/* Sort Filter */}
                <div className="relative">
                  <select
                    name="sortBy"
                    value={filters.sortBy}
                    onChange={handleFilterChange}
                    className="px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    style={{ 
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-primary)'
                    }}
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Genre Filter */}
                <div className="relative">
                  <select
                    name="genre"
                    value={filters.genre}
                    onChange={handleFilterChange}
                    className="px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    style={{ 
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-primary)'
                    }}
                  >
                    <option value="">All Genres</option>
                    {availableGenres.map((genre) => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rating Filter */}
                <div className="relative">
                  <select
                    name="rating"
                    value={filters.rating}
                    onChange={handleFilterChange}
                    className="px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    style={{ 
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-primary)'
                    }}
                  >
                    {ratingOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clear Filters Button */}
              {(activeFilterCount > 0 || searchTerm) && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <X className="w-4 h-4" />
                  Clear All Filters
                </button>
              )}
            </div>

            {/* Active Filters Display */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: 'var(--color-bg-muted)',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    Search: "{searchTerm}"
                    <button
                      onClick={handleClearSearch}
                      className="ml-1 hover:opacity-70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                
                {filters.genre && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: 'var(--color-bg-muted)',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    Genre: {filters.genre}
                    <button
                      onClick={() => setFilters(prev => ({ ...prev, genre: "" }))}
                      className="ml-1 hover:opacity-70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {filters.rating && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: 'var(--color-bg-muted)',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    Rating: {filters.rating}+ Stars
                    <button
                      onClick={() => setFilters(prev => ({ ...prev, rating: "" }))}
                      className="ml-1 hover:opacity-70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {filters.sortBy !== "newest" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: 'var(--color-bg-muted)',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    Sort: {sortOptions.find(opt => opt.value === filters.sortBy)?.label}
                    <button
                      onClick={() => setFilters(prev => ({ ...prev, sortBy: "newest" }))}
                      className="ml-1 hover:opacity-70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Results Count and Loading */}
        <div className="flex justify-between items-center mb-6">
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" style={{ color: 'var(--color-primary)' }} />
              <span style={{ color: 'var(--color-text-muted)' }}>Loading books...</span>
            </div>
          ) : (
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Showing <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, totalBooks)}
              </span> of <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {totalBooks.toLocaleString()}
              </span> books
            </p>
          )}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: itemsPerPage }).map((_, i) => (
              <BookCardSkeleton key={i} />
            ))
          ) : books.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ 
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-muted)'
                  }}
                >
                  <BookOpen className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  No books found
                </h3>
                <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  {searchTerm 
                    ? `No results for "${searchTerm}"` 
                    : "Try adjusting your filters"}
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2 rounded-lg font-medium transition-colors"
                  style={{ 
                    backgroundColor: 'var(--color-primary)',
                    color: 'white'
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          ) : (
            books.map((book) => (
              <BookCard 
                key={book._id} 
                book={book} 
                setBooks={setBooks}
              />
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && !loading && (
          <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div style={{ color: 'var(--color-text-secondary)' }}>
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex items-center gap-2">
                {renderPagination()}
              </div>
              <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                {itemsPerPage} books per page
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBook;