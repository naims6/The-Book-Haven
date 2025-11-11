import React, { useEffect, useState } from "react";
import Title2 from "../../Components/Title2";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";
import useAxios from "../../hooks/useAxios";
import Title2Skeleton from "../../Components/Title2Skeleton";

const AllBook = () => {
  const axiosInstance = useAxios();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSort = (e) => {
    console.log("hello");
    const value = e.target.value;
    axiosInstance.get(`/all-books?sortBy=${value}`).then((data) => {
      console.log(data.data);
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
    }, 500);
  }, [axiosInstance]);

  return (
    <div className="mt-16 py-10">
      {loading ? <Title2Skeleton /> : <Title2>All Books</Title2>}

      {/* Filter and search Section */}
      <div className="container2 flex flex-col md:flex-row space-y-2 items-center gap-3 mb-8 mt-6">
        {/* search  */}
        <div>
          <input
            className="bg-gray-800 py-3.5 px-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="search"
            placeholder="Search Book..."
          />
        </div>
        {/* filter sort  */}
        <div>
          <label htmlFor="" className="mr-2">
            Sory By :
          </label>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container2">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <BookCardSkeleton key={i} />
            ))
          : books.map((book) => (
              <BookCard key={book._id} book={book} setBooks={setBooks} />
            ))}
      </div>
    </div>
  );
};

export default AllBook;
