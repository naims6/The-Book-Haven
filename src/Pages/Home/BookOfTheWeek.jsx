import { ShoppingCart } from "lucide-react";

import Title2 from "../../Components/Title2";

export default function BookGrid() {
  const books = [
    {
      id: 2,
      title: "Cup Cake Diares",
      author: "Alec Hansen",
      price: 15.0,
      originalPrice: null,
      image: "https://i.ibb.co.com/tMgYFYJF/cup-cake-diares-12-480x693.jpg",
      discount: null,
      rating: 0,
    },
    {
      id: 3,
      title: "Delicious Place",
      author: "Seamus Rosenbaum",
      price: 85.0,
      originalPrice: 100.0,
      image: "https://i.ibb.co.com/F45J1crP/cup-cake-diares-28-480x693.jpg",
      discount: "-13%",
      rating: 0,
    },
    {
      id: 4,
      title: "The Still Life",
      author: "Glenna Berge",
      price: 100.0,
      originalPrice: null,
      image: "https://i.ibb.co.com/pjshvggV/cup-cake-diares-9-480x693.jpg",
      discount: null,
      rating: 0,
    },
    {
      id: 6,
      title: "ONE YEAR ON A BIKE",
      author: "Sabela Hupter",
      price: 180.0,
      originalPrice: 999.0,
      image: "https://i.ibb.co.com/1tDNnk41/cup-cake-diares-23-480x693.jpg",
      discount: "-30%",
      rating: 0,
    },
  ];

  return (
    <div className="container2 py-8">
      <Title2>Book Of The Week</Title2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-3/4 bg-gray-100 overflow-hidden">
              <div>
                <img
                  className="w-full object-cover"
                  src={book.image}
                  alt={book.title}
                />
              </div>
              {/* Discount Badge */}
              {book.discount && (
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {book.discount}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-medium line-clamp-2 min-h-10">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">By: {book.author}</p>

              {/* Rating Stars */}
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${
                      i < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs text-gray-500">(0)</span>
              </div>

              {/* Price & Button */}
              <div className="mt-3 flex items-center justify-between">
                {book.price !== null ? (
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-200">
                      ${book.price.toFixed(2)}
                    </span>
                    {book.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${book.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                ) : (
                  <div></div>
                )}

                <button className="px-4 py-2.5 cursor-pointer bg-teal-600 text-white text-xs font-medium rounded hover:bg-teal-700 transition-colors flex items-center gap-1">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
