import React, { use } from "react";
import axios from "axios";
import Title from "../../Components/Title";

const fetcher = axios
  .get("http://localhost:3000/latest-books")
  .then((data) => data.data);
const LatestBooks = () => {
  // console.log(fetcher);
  const latestBooks = use(fetcher);
  console.log(latestBooks);
  return (
    <div className="container2 py-20">
      <div className="flex justify-between items-center">
        <Title>Latest Books</Title>
        <h2 className="text-base underline text-[#16513F]  dark:text-green-400 cursor-pointer">
          View All
        </h2>
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
            <h2 className="text-center mt-4 font-medium cursor-pointer text-gray-700 dark:text-gray-200">
              {book.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBooks;
