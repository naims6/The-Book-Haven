import React, { use } from "react";
import axios from "axios";
import Title from "../../Components/Title";
import { Link } from "react-router";

const fetcher = axios
  .get("https://book-haven-server-two.vercel.app/latest-books")
  .then((data) => data.data);
const LatestBooks = () => {
  const latestBooks = use(fetcher);
  return (
    <div className="container2 py-20">
      <div className="flex justify-between items-center">
        <Title>Latest Books</Title>
        <Link to="/all-books">
          <h2 className="text-base font-medium underline cursor-pointer">
            View All
          </h2>
        </Link>
      </div>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {latestBooks.map((book) => (
          <div
            key={book._id}
            className="w-[200px] p-1 shadow-md rounded-md border border-transparent dark:border-gray-700/40"
          >
            <img
              className="w-[150px] h-[230px] object-cover mx-auto cursor-pointer"
              src={book.coverImage}
              alt="book cover image"
            />
            <h2 className="text-center text-text-secondary mt-4 font-medium cursor-pointer">
              {book.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBooks;
