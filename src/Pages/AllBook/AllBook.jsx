import React, { useEffect, useState } from "react";
import Title2 from "../../Components/Title2";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";
import useAxios from "../../hooks/useAxios";
import Title2Skeleton from "../../Components/Title2Skeleton";
import AllBookAction from "./AllBookAction";

const AllBook = () => {
  const axiosInstance = useAxios();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // handle sort book
  const handleSort = (e) => {
    const value = e.target.value;
    axiosInstance.get(`/all-books?sortBy=${value}`).then((data) => {
      console.log(data.data);
      setBooks(data.data);
    });
  };

  // handle search  book real time
  const handleBookSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // handle search button click
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    axiosInstance.get(`all-books/search?title=${searchTerm}`).then((data) => {
      setBooks(data.data);
    });
  };

  // Fetch data client-side
  useEffect(() => {
    setTimeout(() => {
      axiosInstance
        .get("/all-books")
        .then((data) => {
          setBooks(data.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 200);
  }, [axiosInstance]);

  return (
    <div className="mt-16 py-10">
      {loading ? <Title2Skeleton /> : <Title2>All Books</Title2>}

      {/* Filter and search Section */}
      <AllBookAction
        handleSort={handleSort}
        handleBookSearch={handleBookSearch}
        loading={loading}
        handleSearchSubmit={handleSearchSubmit}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container2">
        {/* if loading true show skeleton */}
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => <BookCardSkeleton key={i} />)
        ) : books.length === 0 ? ( // if book length o show no book found
          <h1>No Book Found </h1>
        ) : (
          books.map((book) => (
            <BookCard key={book._id} book={book} setBooks={setBooks} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllBook;
