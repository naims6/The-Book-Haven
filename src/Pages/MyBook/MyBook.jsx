import React, { use, useEffect, useState } from "react";
import Title2 from "../../Components/Title2";
import useAxios from "../../hooks/useAxios";
import BookCardSkeleton from "../AllBook/BookCardSkeleton";
import BookCard from "../AllBook/BookCard";
import { AuthContext } from "../../Provider/AuthContex";

const MyBook = () => {
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);

  // Fetch data client-side
  useEffect(() => {
    setTimeout(() => {
      axiosInstance
        .get(`/all-books?email=${user?.email}`)
        .then((data) => {
          setBooks(data.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 500);
  }, [axiosInstance, user]);

  return (
    <div className="container2 mt-16 py-12">
      <Title2>My Book</Title2>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container2">
        {books?.length === 0 ? (
          <h1 className="col-span-full text-center text-3xl mt-5">
            There are no book found !!
          </h1>
        ) : loading ? (
          Array.from({ length: 4 }).map((_, i) => <BookCardSkeleton key={i} />)
        ) : (
          books.map((book) => (
            <BookCard key={book._id} book={book} setBooks={setBooks} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyBook;
