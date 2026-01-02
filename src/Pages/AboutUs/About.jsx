import React from "react";
import {
  BookOpen,
  Users,
  Award,
  Heart,
  Globe,
  TrendingUp,
  Shield,
  Star,
  Bookmark,
  Coffee,
} from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & Chief Curator",
      bio: "Former librarian with 15+ years experience in literary curation",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      favoriteGenre: "Literary Fiction",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head of Technology",
      bio: "Passionate about making literature accessible through technology",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      favoriteGenre: "Science Fiction",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Community Manager",
      bio: "Book club organizer and literary event specialist",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      favoriteGenre: "Magical Realism",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Content Strategist",
      bio: "Published author and book reviewer for major publications",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      favoriteGenre: "Historical Fiction",
    },
  ];

  const milestones = [
    { year: "2018", event: "The Book Haven founded in a small apartment" },
    { year: "2019", event: "Reached 10,000 registered members" },
    { year: "2020", event: "Launched community reading challenges" },
    { year: "2021", event: "Expanded to include audiobook reviews" },
    { year: "2022", event: "1 Million+ books reviewed by community" },
    { year: "2023", event: "Introduced AI-powered book recommendations" },
    { year: "2024", event: "Global community of 500,000+ readers" },
  ];

  const values = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Literary Excellence",
      description: "We believe in the transformative power of great literature",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "Building connections between readers worldwide",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authentic Reviews",
      description: "Honest, thoughtful reviews from real readers",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Celebrating diverse voices and international literature",
    },
  ];

  const stats = [
    { number: "500K+", label: "Active Readers", icon: <Users /> },
    { number: "2M+", label: "Books Reviewed", icon: <Bookmark /> },
    { number: "50K+", label: "Reading Groups", icon: <TrendingUp /> },
    { number: "150+", label: "Countries", icon: <Globe /> },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Hero Section */}
      <div
        className="relative py-24"
        style={{
          background:
            "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
          color: "#ffffff",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to{" "}
              <span style={{ color: "#fbbf24" }}>The Book Haven</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-gray-300" 
            >
              Where stories find their readers and readers find their stories
            </p>
            <div className="flex justify-center items-center space-x-4 text-lg">
              <BookOpen className="w-8 h-8" />
              <span>•</span>
              <Heart className="w-8 h-8" />
              <span>•</span>
              <Users className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Our Story
              </h2>
              <div
                className="w-24 h-1 mx-auto"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="p-8 rounded-2xl shadow-lg"
                  style={{
                    backgroundColor: "var(--color-bg-muted)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <p
                    className="text-lg mb-6"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Founded in 2018 by a group of passionate bibliophiles, The
                    Book Haven began as a simple idea: to create a digital
                    sanctuary where book lovers could connect, share, and
                    discover literature in meaningful ways.
                  </p>
                  <p
                    className="text-lg mb-6"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    What started as a small online book club has blossomed into
                    a vibrant global community of over 500,000 readers, authors,
                    and literary enthusiasts. We've grown, but our core mission
                    remains unchanged: to foster a love for reading and build
                    connections through the power of stories.
                  </p>
                  <div className="flex items-center space-x-4 mt-8">
                    <Coffee
                      className="w-6 h-6"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span
                      className="italic"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      "One book, one pen, one reader can change the world."
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Library interior"
                  className="rounded-2xl shadow-2xl"
                />
                <div
                  className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-lg"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  <div className="text-3xl font-bold">2018</div>
                  <div className="text-sm">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-12"
              style={{ color: "var(--color-text-primary)" }}
            >
              Our Mission & Vision
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className="p-8 rounded-2xl shadow-lg"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <Award
                  className="w-12 h-12 mx-auto mb-6"
                  style={{ color: "var(--color-accent)" }}
                />
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Mission
                </h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  To create the world's most inclusive and engaging platform for
                  readers, where every voice matters and every story finds its
                  audience. We're dedicated to making literature accessible,
                  discussion meaningful, and discovery effortless.
                </p>
              </div>

              <div
                className="p-8 rounded-2xl shadow-lg"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <Star
                  className="w-12 h-12 mx-auto mb-6"
                  style={{ color: "var(--color-secondary)" }}
                />
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Vision
                </h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  We envision a world where reading is celebrated as a
                  fundamental human experience, where diverse voices are
                  amplified, and where technology enhances rather than replaces
                  the joy of discovering and sharing stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Our Core Values
            </h2>
            <p
              className="text-xl"
              style={{ color: "var(--color-text-secondary)" }}
            >
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  backgroundColor: "var(--color-bg-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="mb-6" style={{ color: "var(--color-accent)" }}>
                  {value.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {value.title}
                </h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, var(--color-bg-muted) 0%, var(--color-surface) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {stat.number}
                </div>
                <div
                  className="flex items-center justify-center"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span className="mr-2">{stat.icon}</span>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Our Journey
            </h2>
            <p
              className="text-xl"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Milestones that shaped The Book Haven
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>

              {/* Timeline items */}
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                    }`}
                  >
                    <div
                      className="p-6 rounded-2xl shadow-lg"
                      style={{
                        backgroundColor: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div
                        className="text-2xl font-bold mb-2"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {milestone.year}
                      </div>
                      <p style={{ color: "var(--color-text-secondary)" }}>
                        {milestone.event}
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-8 h-8 rounded-full border-4 z-10"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      borderColor: "var(--color-surface)",
                    }}
                  ></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Meet Our Team
            </h2>
            <p
              className="text-xl mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              The passionate book lovers behind The Book Haven
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  backgroundColor: "var(--color-bg-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                    }}
                  >
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p style={{ color: "var(--color-accent)" }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p
                    className="mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {member.bio}
                  </p>
                  <div
                    className="pt-4"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  >
                    <div
                      className="flex items-center text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>Favorite: {member.favoriteGenre}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Our Community Today
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto text-gray-300"
          >
            Discover your next favorite book, connect with fellow readers, and
            be part of a global literary conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 font-bold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-text-primary)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f59e0b")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-accent)")
              }
            >
              Explore Books
            </button>
            <button
              className="px-8 py-4 border-2 font-bold rounded-xl transition-colors duration-300"
              style={{
                borderColor: "var(--color-text-primary)",
                color: "var(--color-text-primary)",
                backgroundColor: "transparent",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              Join Reading Groups
            </button>
          </div>

          <div
            className="mt-16 pt-8"
            style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
          >
            <div
              className="flex flex-wrap justify-center items-center gap-8 text-gray-300"
            >
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                <span>100% Reader-Focused</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                <span>Ad-Free Experience</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                <span>Global Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
