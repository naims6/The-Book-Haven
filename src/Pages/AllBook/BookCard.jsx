import { Star, Calendar, User } from "lucide-react";

function BookCard({ book }) {
  const { title, coverImage, genre, createdAt, rating, author } = book;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 pt-2">
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
            <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="flex items-center text-xs mb-4">
          <Calendar size={14} className="mr-1" />
          <span>Added {formattedDate}</span>
        </div>

        <button
          //   onClick={onViewDetails}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default BookCard;
