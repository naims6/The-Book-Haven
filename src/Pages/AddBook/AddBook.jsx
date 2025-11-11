import { use, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router";

import Title2 from "../../Components/Title2";
import Loading from "../Loading/Loading";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthContex";

function AddBook() {
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    summary: "",
    description: "",
    coverImage: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const finalFormData = {
      ...formData,
      userEmail: user?.email,
      userName: user?.displayName,
      createdAt: new Date().toISOString(),
    };

    axiosInstance
      .post("/all-books", finalFormData)
      .then((data) => {
        if (data.data.insertedId) {
          toast.success("Book added successfully!");
          navigate("/my-book");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to add book!");
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 pb-12">
      <Title2>Add New Book</Title2>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-gray-800 p-8 mt-3 rounded-2xl shadow-md mx-4"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-800"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-800"
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium mb-1">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-800"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium mb-1">Rating (1–5)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-800"
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium mb-1">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            required
            rows="2"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-800"
          ></textarea>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-800"
          ></textarea>
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Cover Image URL
          </label>
          <input
            type="url"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            required
            placeholder="https://example.com/cover.jpg"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-800"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            {loading ? "Adding..." : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
