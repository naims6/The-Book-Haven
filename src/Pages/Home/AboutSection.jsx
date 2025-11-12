import React from "react";
import { BookOpen, Users, Star, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <BookOpen size={40} className="text-blue-500" />,
      title: "Discover & Share",
      desc: "Explore an ever-growing library or share your own books with the community.",
    },
    {
      icon: <Users size={40} className="text-blue-500" />,
      title: "Community Driven",
      desc: "Connect with readers, post comments, and engage in thoughtful discussions.",
    },
    {
      icon: <Star size={40} className="text-blue-500" />,
      title: "Personalized Experience",
      desc: "Rate books, manage your library, and receive tailored recommendations.",
    },
    {
      icon: <Globe size={40} className="text-blue-500" />,
      title: "Global Reach",
      desc: "Join a global network of readers and authors who share your passion.",
    },
  ];
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20">
      <div className="container2 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 whitespace-nowrap">
          About <span className="text-blue-500">The Book Haven</span>
        </h2>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          <span className="text-blue-400 font-semibold">The Book Haven</span> is
          a digital community built for readers and writers to connect, share,
          and celebrate the world of books.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-blue-500/20 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
