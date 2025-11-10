import React from "react";

const genres = [
  {
    title: "ROMANCE",
    img: "https://i.ibb.co.com/LDLhxk55/romance.jpg",
  },
  {
    title: "FANTASY",
    img: "https://i.ibb.co.com/BVkFPKkq/religion.jpg",
  },
  {
    title: "ADVENTURE",
    img: "https://i.ibb.co.com/Gv2Dr3KM/modern-Fiction.jpg",
  },
  {
    title: "MODERN FICTION",
    img: "https://i.ibb.co.com/vC9TnkBR/adventure.jpg",
  },
  {
    title: "RELIGION",
    img: "https://i.ibb.co.com/r239cmjK/Fantacy.jpg",
  },
];

const TopGenres = () => {
  return (
    <section className="py-10 md:px-10 bg-white dark:bg-gray-900">
      <div className="container2">
        <h2 className="text-3xl font-bold  mb-8 text-center">Top Genres</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={genre.img}
                alt={genre.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-white text-green-700 text-sm font-semibold px-3 py-3 rounded">
                  {genre.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopGenres;
