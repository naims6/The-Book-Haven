import { Star, Calendar, User } from "lucide-react";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthContex";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

function BookCard({ book, setBooks }) {
  const { user } = use(AuthContext);

  const axiosInstance = useAxios();
  const { _id, title, coverImage, genre, createdAt, rating, author } = book;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleBookDelete = () => {
    axiosInstance.delete(`/book-delete/${_id}`).then((data) => {
      console.log(data.data);
      if (data.data.deletedCount) {
        toast.success("Your Book Deleted");

        setBooks((prev) => prev.filter((b) => b._id !== _id));
      }
    });
  };

  return (
    <div className="bg-surface rounded-lg shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 pt-2">
      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-[200px] h-[300px] mx-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>

      {/* content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-xl font-bold  mb-1 truncate">{title}</h3>
          <div className="flex items-center text-sm mb-2">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
            {genre}
          </span>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>

        <div className="flex items-center text-xs mb-4">
          <Calendar size={14} className="mr-1" />
          <span>Added {formattedDate}</span>
        </div>

        {/* view details and update button */}
        <div className="flex gap-2 items-center justify-center w-full">
          <Link
            className="text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 cursor-pointer w-full"
            to={`/book-details/${book._id}`}
          >
            View
          </Link>
          {/* show update only logged user */}
          {user?.email === book?.userEmail && (
            <>
              <Link
                to={`/book-update/${book._id}`}
                className="bg-green-500 font-semibold px-4 hover:bg-green-700 text-white text-center  py-2.5 rounded-lg transition-colors duration-200 cursor-pointer w-1/2"
              >
                Update
              </Link>
              <Link
                onClick={handleBookDelete}
                className="bg-red-500 font-semibold px-4 hover:bg-red-700 text-white text-center py-2.5 rounded-lg transition-colors duration-200 cursor-pointer w-1/2"
              >
                Delete
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
