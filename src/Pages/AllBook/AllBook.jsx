import React from "react";
import Title2 from "../../Components/Title2";
import BookCard from "./BookCard";
import { useLoaderData } from "react-router";

const AllBook = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="mt-16">
      <Title2>All Books</Title2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* {books.map((book) => (
                <BookCard book={book}/>
              ))} */}
      </div>
    </div>
  );
};

export default AllBook;
