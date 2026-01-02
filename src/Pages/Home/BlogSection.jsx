import {
  BookOpen,
  MessageSquare,
  Clock,
  Calendar,
  User,
  Bookmark,
  Heart,
} from "lucide-react";
import Title2 from "../../Components/Title2";
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Slow Reading in a Fast World",
      excerpt:
        "Rediscover the joy of immersive reading and how it enhances comprehension and retention.",
      author: "Emma Richardson",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      category: "Reading Tips",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      likes: 245,
      comments: 42,
    },
    {
      id: 2,
      title: "Hidden Gems: Underrated Authors You Should Know",
      excerpt:
        "Explore remarkable writers who haven't received the mainstream attention they deserve.",
      author: "James Wilson",
      date: "Nov 10, 2024",
      readTime: "7 min read",
      category: "Author Spotlight",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      likes: 312,
      comments: 56,
    },
    {
      id: 3,
      title: "Building Your Personal Reading Nook",
      excerpt:
        "Transform any space into the perfect reading sanctuary with these simple tips.",
      author: "Sophia Chen",
      date: "Nov 5, 2024",
      readTime: "4 min read",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      likes: 189,
      comments: 31,
    },
  ];

  return (
    <section
      className="py-16"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container2 mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: "var(--color-bg-muted)",
              border: "1px solid var(--color-border)",
            }}
          >
            <BookOpen
              className="w-4 h-4 mr-2"
              style={{ color: "var(--color-primary)" }}
            />
            <span style={{ color: "var(--color-text-primary)" }}>
              From Our Blog
            </span>
          </div>
          <Title2>Latest Insights & Stories</Title2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Discover articles, tips, and stories from our community of book
            lovers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                    }}
                  >
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="flex items-center"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <User className="w-4 h-4 mr-1" />
                    <span className="text-sm">{blog.author}</span>
                  </div>
                  <div
                    className="flex items-center"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{blog.date}</span>
                  </div>
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {blog.title}
                </h3>

                <p
                  className="mb-4"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {blog.excerpt}
                </p>

                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div
                    className="flex items-center"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{blog.readTime}</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{blog.likes}</span>
                    </button>
                    <button
                      className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm">{blog.comments}</span>
                    </button>
                    <button
                      className="hover:opacity-80 transition-opacity"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "white",
              border: "1px solid var(--color-primary)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-secondary)";
              e.currentTarget.style.borderColor = "var(--color-secondary)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-primary)";
              e.currentTarget.style.borderColor = "var(--color-primary)";
            }}
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
