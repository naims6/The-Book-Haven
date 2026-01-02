import React from "react";
import {
  TrendingUp,
  BookOpen,
  Star,
  Users,
  Award,
  Calendar,
  Heart,
  Clock,
  Zap,
  ChevronRight,
  ExternalLink,
  Trophy,
  Target,
  Sparkles,
  TrendingDown,
} from "lucide-react";
import Title2 from "../../Components/Title2";

const HighlightsSection = () => {
  // Trending Books Data
  const trendingBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: 4.5,
      readers: 2450,
      change: "+12%",
      cover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      genre: "Fiction",
      trending: true,
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      rating: 4.8,
      readers: 3289,
      change: "+8%",
      cover:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      genre: "Self-Help",
      trending: true,
    },
    {
      id: 3,
      title: "Project Hail Mary",
      author: "Andy Weir",
      rating: 4.7,
      readers: 1895,
      change: "+15%",
      cover:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      genre: "Sci-Fi",
      trending: true,
    },
  ];

  // Reading Goals Data
  const readingGoals = [
    {
      goal: "Annual Reading Challenge",
      target: 52,
      current: 38,
      progress: 73,
      icon: <Target className="w-5 h-5" />,
      participants: 12500,
      color: "var(--color-primary)",
    },
    {
      goal: "Classics Completion",
      target: 20,
      current: 12,
      progress: 60,
      icon: <BookOpen className="w-5 h-5" />,
      participants: 8900,
      color: "var(--color-secondary)",
    },
    {
      goal: "Pages Per Day",
      target: 50,
      current: 42,
      progress: 84,
      icon: <TrendingUp className="w-5 h-5" />,
      participants: 21000,
      color: "var(--color-accent)",
    },
  ];

  // Community Achievements
  const achievements = [
    {
      title: "Most Active Reader",
      user: "Emma W.",
      books: 127,
      streak: 45,
      icon: <Trophy className="w-5 h-5" />,
      color: "#FFD700",
    },
    {
      title: "Top Reviewer",
      user: "Alex K.",
      reviews: 89,
      helpful: 245,
      icon: <Star className="w-5 h-5" />,
      color: "#FF6B6B",
    },
    {
      title: "Reading Streak King",
      user: "Jordan L.",
      streak: 365,
      days: "1 year",
      icon: <Zap className="w-5 h-5" />,
      color: "#4ECDC4",
    },
  ];

  // Weekly Picks
  const weeklyPicks = [
    {
      title: "Editor's Choice",
      book: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      description: "A remarkable novel about what it means to love",
      reason: "Masterful storytelling about AI and humanity",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      title: "Community Favorite",
      book: "The Silent Patient",
      author: "Alex Michaelides",
      description: "Psychological thriller that keeps you guessing",
      reason: "Highest-rated mystery this month",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Hidden Gem",
      book: "Piranesi",
      author: "Susanna Clarke",
      description: "A mesmerizing fantasy of infinite halls",
      reason: "Underrated masterpiece gaining popularity",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container2 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: "var(--color-bg-muted)",
              border: "1px solid var(--color-border)",
            }}
          >
            <Zap className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
            <span
              className="font-medium"
              style={{ color: "var(--color-text-primary)" }}
            >
              Community Highlights
            </span>
          </div>
          <Title2>What's Trending at The Book Haven</Title2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Discover trending books, community achievements, and reading goals
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Trending Books */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <TrendingUp
                    className="inline-block w-6 h-6 mr-2"
                    style={{ color: "var(--color-accent)" }}
                  />
                  Trending This Week
                </h3>
                <button
                  className="flex items-center text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: "var(--color-primary)" }}
                >
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="space-y-4">
                {trendingBooks.map((book) => (
                  <div
                    key={book.id}
                    className="flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div className="relative w-16 h-24 shrink-0 rounded-lg overflow-hidden shadow-md">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                      {book.trending && (
                        <div className="absolute top-1 left-1">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        </div>
                      )}
                    </div>

                    <div className="ml-4 flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4
                            className="font-bold text-lg"
                            style={{ color: "var(--color-text-primary)" }}
                          >
                            {book.title}
                          </h4>
                          <p
                            className="text-sm"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            by {book.author}
                          </p>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < Math.floor(book.rating)
                                      ? "fill-current"
                                      : ""
                                  }`}
                                  style={{
                                    color:
                                      i < Math.floor(book.rating)
                                        ? "var(--color-accent)"
                                        : "var(--color-border)",
                                  }}
                                />
                              ))}
                            </div>
                            <span
                              className="ml-2 text-sm"
                              style={{ color: "var(--color-text-secondary)" }}
                            >
                              {book.rating}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center justify-end mb-1">
                            <Users
                              className="w-4 h-4 mr-1"
                              style={{ color: "var(--color-text-muted)" }}
                            />
                            <span
                              className="font-semibold"
                              style={{ color: "var(--color-text-primary)" }}
                            >
                              {book.readers.toLocaleString()}
                            </span>
                          </div>
                          <div
                            className={`flex items-center justify-end text-sm font-medium ${
                              book.change.startsWith("+")
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {book.change.startsWith("+") ? (
                              <TrendingUp className="w-3 h-3 mr-1" />
                            ) : (
                              <TrendingDown className="w-3 h-3 mr-1" />
                            )}
                            {book.change}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: "var(--color-bg-muted)",
                            color: "var(--color-text-secondary)",
                          }}
                        >
                          {book.genre}
                        </span>
                        <button
                          className="text-sm font-medium flex items-center hover:opacity-80 transition-opacity"
                          style={{ color: "var(--color-primary)" }}
                        >
                          Read More
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Reading Goals */}
          <div>
            <div
              className="rounded-2xl p-6 mb-6"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 flex items-center"
                style={{ color: "var(--color-text-primary)" }}
              >
                <Target
                  className="w-6 h-6 mr-2"
                  style={{ color: "var(--color-primary)" }}
                />
                Community Goals
              </h3>

              <div className="space-y-6">
                {readingGoals.map((goal, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                          style={{
                            backgroundColor: goal.color,
                            color: "white",
                          }}
                        >
                          {goal.icon}
                        </div>
                        <div>
                          <h4
                            className="font-semibold"
                            style={{ color: "var(--color-text-primary)" }}
                          >
                            {goal.goal}
                          </h4>
                          <p
                            className="text-xs"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            {goal.participants.toLocaleString()} participants
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className="font-bold"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {goal.current}/{goal.target}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {goal.progress}%
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: "var(--color-bg-muted)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${goal.progress}%`,
                          backgroundColor: goal.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 p-4 rounded-xl text-center"
                style={{ backgroundColor: "var(--color-bg-muted)" }}
              >
                <Calendar
                  className="w-6 h-6 mx-auto mb-2"
                  style={{ color: "var(--color-primary)" }}
                />
                <p
                  className="font-medium mb-1"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Join the Challenge!
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Set your own reading goals
                </p>
                <button
                  className="w-full py-2 rounded-lg font-medium transition-colors"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--color-secondary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--color-primary)")
                  }
                >
                  Set My Goals
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid - Achievements & Weekly Picks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Community Achievements */}
          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6 flex items-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              <Trophy
                className="w-6 h-6 mr-2"
                style={{ color: "var(--color-accent)" }}
              />
              Top Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-xl"
                  style={{ backgroundColor: "var(--color-bg)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      backgroundColor: `${achievement.color}20`,
                      color: achievement.color,
                    }}
                  >
                    {achievement.icon}
                  </div>

                  <div className="flex-grow">
                    <h4
                      className="font-semibold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {achievement.title}
                    </h4>
                    <p
                      className="text-sm mb-1"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {achievement.user}
                    </p>
                    <div
                      className="flex items-center text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      {achievement.streak} days streak •{" "}
                      {achievement.books || achievement.reviews}{" "}
                      {achievement.books ? "books" : "reviews"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="w-full mt-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "transparent",
                color: "var(--color-primary)",
                border: "2px solid var(--color-border)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-bg-muted)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              View All Achievements
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Weekly Picks */}
          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6 flex items-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              <Sparkles
                className="w-6 h-6 mr-2"
                style={{ color: "var(--color-primary)" }}
              />
              Weekly Picks
            </h3>

            <div className="space-y-4">
              {weeklyPicks.map((pick, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex items-start mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
                      style={{
                        backgroundColor: "var(--color-bg-muted)",
                        color: "var(--color-primary)",
                      }}
                    >
                      {pick.icon}
                    </div>
                    <div>
                      <div
                        className="font-bold text-sm mb-1"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {pick.title}
                      </div>
                      <h4
                        className="font-semibold text-lg"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {pick.book}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        by {pick.author}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-sm mb-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {pick.description}
                  </p>
                  <div
                    className="text-xs px-3 py-1 rounded-full inline-block"
                    style={{
                      backgroundColor: "var(--color-bg-muted)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {pick.reason}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="flex items-center justify-between mt-6 pt-4"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <Clock className="inline-block w-4 h-4 mr-1" />
                Updated weekly
              </div>
              <button
                className="text-sm font-medium flex items-center hover:opacity-80 transition-opacity"
                style={{ color: "var(--color-primary)" }}
              >
                View Past Picks
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              Live Stats
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                {
                  label: "Active Now",
                  value: "2,845",
                  icon: <Users />,
                  change: "+8%",
                },
                {
                  label: "Reviews Today",
                  value: "1,234",
                  icon: <Star />,
                  change: "+12%",
                },
                {
                  label: "Books Added",
                  value: "458",
                  icon: <BookOpen />,
                  change: "+5%",
                },
                {
                  label: "Discussions",
                  value: "689",
                  icon: <Heart />,
                  change: "+15%",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl text-center"
                  style={{ backgroundColor: "var(--color-bg)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{
                      backgroundColor: "var(--color-bg-muted)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm mb-1"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: "var(--color-bg)" }}
            >
              <div className="flex items-center justify-between mb-2">
                <span style={{ color: "var(--color-text-primary)" }}>
                  Most Popular Genre
                </span>
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  Fiction
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: "var(--color-bg-muted)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "45%",
                    backgroundColor: "var(--color-primary)",
                  }}
                />
              </div>
            </div>

            <button
              className="w-full mt-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-secondary)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-primary)")
              }
            >
              <Zap className="w-4 h-4 mr-2" />
              Explore More Stats
            </button>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default HighlightsSection;
