import { Star, User, Share2, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router";
import BookDetailsSkeleton from "./BookDetailsSkeleton";
import Comment from "./Comment";

function BookDetailsPage() {
  const axiosInstance = useAxios();
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axiosInstance.get(`book-details/${id}`).then((data) => {
        setBook(data.data);
        setLoading(false);
      });
    }, 500);
  }, [axiosInstance, id]);

  if (loading) {
    return <BookDetailsSkeleton />;
  }

  if (!book) {
    return <h1 className="mt-22 text-center text-3xl ">No Book Found</h1>;
  }

  return (
    <div className="mt-16">
      {/* Main content */}
      <div className="container2 mx-auto  py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book Cover */}
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-auto object-cover aspect-3/4"
                />
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    isFavorited
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-700 border-2 hover:border-red-600"
                  }`}
                >
                  <Heart
                    size={20}
                    className={isFavorited ? "fill-current" : ""}
                  />
                  {isFavorited ? "Favorited" : "Favorite"}
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 transition-all duration-200">
                  <Share2 size={20} />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Book Information */}
          <div className="md:col-span-2">
            {/* Title and Author */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block px-4 py-1.5 text-sm font-bold text-blue-700 bg-blue-100 rounded-full">
                  {book.genre}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={18} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-lg font-bold">{book.rating}</span>
                  <span className="text-sm ">(248 reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold  mb-4 leading-tight">
                {book.title}
              </h1>
              <div className="flex items-center gap-2 text-lg  mb-4">
                <User size={20} />
                <span>
                  by <span className="font-semibold ">{book.author}</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold  mb-4">About this book</h2>
              <p className=" leading-relaxed text-lg mb-4">
                {book.description || "No description available for this book."}
              </p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <Comment bookId={id} />
      </div>
    </div>
  );
}

export default BookDetailsPage;
