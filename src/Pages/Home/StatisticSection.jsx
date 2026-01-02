import {
  TrendingUp,
  Users,
  BookOpen,
  Star,
  MessageSquare,
  Clock,
  Calendar,
  User,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Share2,
  Heart,
} from "lucide-react";
import Title2 from "../../Components/Title2";

const StatisticSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "50,000+",
      label: "Active Readers",
      description: "Join our vibrant community",
      trend: "+12% this month",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      value: "250,000+",
      label: "Books Cataloged",
      description: "From classics to contemporaries",
      trend: "+5,000 new additions",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      value: "1.2M+",
      label: "Reviews & Comments",
      description: "Thoughtful discussions",
      trend: "+25k this week",
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "4.8",
      label: "Average Rating",
      description: "Community satisfaction",
      trend: "Out of 5 stars",
    },
  ];
  return (
    <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Title2>By The Numbers</Title2>

          <p
            className="text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Our growing community in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4"
                style={{ backgroundColor: "var(--color-bg-muted)" }}
              >
                <div style={{ color: "var(--color-primary)" }}>{stat.icon}</div>
              </div>

              <div className="text-center">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {stat.value}
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {stat.label}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {stat.description}
                </p>
                <div
                  className="flex items-center justify-center text-sm"
                  style={{ color: "var(--color-accent)" }}
                >
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>{stat.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated progress bars */}
        <div
          className="max-w-4xl mx-auto mt-12 p-6 rounded-2xl"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <h3
            className="text-xl font-semibold mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Monthly Reading Progress
          </h3>

          {[
            { label: "Fiction", percentage: 75, color: "var(--color-primary)" },
            {
              label: "Non-Fiction",
              percentage: 60,
              color: "var(--color-secondary)",
            },
            {
              label: "Biographies",
              percentage: 45,
              color: "var(--color-accent)",
            },
            { label: "Sci-Fi & Fantasy", percentage: 85, color: "#10b981" },
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-2">
                <span style={{ color: "var(--color-text-primary)" }}>
                  {item.label}
                </span>
                <span style={{ color: "var(--color-text-secondary)" }}>
                  {item.percentage}%
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: "var(--color-bg-muted)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;
