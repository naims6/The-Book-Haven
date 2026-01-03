import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  BookOpen,
  Star,
  TrendingUp,
  Clock,
  Calendar,
  Plus,
  ArrowUpRight,
} from 'lucide-react';

const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    booksRead: 0,
    avgRating: 0,
    readingTime: 0,
    readingGoal: 50,
    progress: 65
  });
  const [recentBooks, setRecentBooks] = useState([]);


  useEffect(() => {
    // Fetch user dashboard data
    const fetchDashboardData = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setStats({
            totalBooks: 24,
            booksRead: 18,
            avgRating: 4.2,
            readingTime: 45, // hours
            readingGoal: 50,
            progress: 65
          });

          setRecentBooks([
            {
              id: 1,
              title: "Atomic Habits",
              author: "James Clear",
              rating: 4.8,
              status: "reading",
              progress: 75,
              cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            {
              id: 2,
              title: "The Midnight Library",
              author: "Matt Haig",
              rating: 4.5,
              status: "completed",
              progress: 100,
              cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            {
              id: 3,
              title: "Project Hail Mary",
              author: "Andy Weir",
              rating: 4.7,
              status: "to-read",
              progress: 0,
              cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            }
          ]);

        }, 1000);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    {
      title: "Total Books",
      value: stats.totalBooks,
      icon: <BookOpen className="w-6 h-6" />,
      change: "+3 this month",
      color: "var(--color-primary)"
    },
    {
      title: "Books Read",
      value: stats.booksRead,
      icon: <TrendingUp className="w-6 h-6" />,
      change: "+2 this week",
      color: "#10b981"
    },
    {
      title: "Avg Rating",
      value: stats.avgRating.toFixed(1),
      icon: <Star className="w-6 h-6" />,
      change: "+0.2 points",
      color: "#f59e0b"
    },
    {
      title: "Reading Time",
      value: `${stats.readingTime}h`,
      icon: <Clock className="w-6 h-6" />,
      change: "+5h this month",
      color: "#8b5cf6"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
            Welcome back, Reader! 👋
          </h1>
          <p className="mt-2" style={{ color: 'var(--color-text-secondary)' }}>
            Here's what's happening with your reading journey today.
          </p>
        </div>
        <Link
          to="/add-book"
          className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors"
          style={{ 
            backgroundColor: 'var(--color-primary)',
            color: 'white'
          }}
        >
          <Plus className="w-4 h-4" />
          Add New Book
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            style={{ 
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ 
                  backgroundColor: `${card.color}20`,
                  color: card.color
                }}
              >
                {card.icon}
              </div>
              <div className="text-sm px-2 py-1 rounded-full flex items-center gap-1"
                style={{ 
                  backgroundColor: 'var(--color-bg-muted)',
                  color: 'var(--color-text-secondary)'
                }}
              >
                <TrendingUp className="w-3 h-3" />
                {card.change}
              </div>
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
              {card.value}
            </div>
            <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {card.title}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reading Progress */}
        <div className="lg:col-span-2">
          <div className="p-6 rounded-xl"
            style={{ 
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Reading Goal Progress
              </h2>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: 'var(--color-text-muted)' }} />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Annual Goal
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span style={{ color: 'var(--color-text-primary)' }}>
                  {stats.booksRead} of {stats.readingGoal} books
                </span>
                <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                  {stats.progress}%
                </span>
              </div>
              <div className="h-3 rounded-full overflow-hidden"
                style={{ backgroundColor: 'var(--color-bg-muted)' }}
              >
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${stats.progress}%`,
                    backgroundColor: 'var(--color-primary)'
                  }}
                />
              </div>
            </div>

            {/* Weekly Reading Chart (Simple) */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Weekly Reading Hours
              </h3>
              <div className="flex items-end h-40 gap-2">
                {[12, 8, 15, 10, 18, 14, 20].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full rounded-t-lg transition-all hover:opacity-90"
                      style={{ 
                        height: `${(value / 25) * 100}%`,
                        backgroundColor: value > 15 ? 'var(--color-primary)' : 'var(--color-secondary)'
                      }}
                    />
                    <span className="text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Books */}
        <div>
          <div className="p-6 rounded-xl h-full"
            style={{ 
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Recent Books
              </h2>
              <Link 
                to="/dashboard/my-books"
                className="text-sm font-medium flex items-center gap-1"
                style={{ color: 'var(--color-primary)' }}
              >
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {recentBooks.map((book) => (
                <div 
                  key={book.id}
                  className="flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-bg-muted"
                >
                  <div className="w-16 h-20 rounded-lg overflow-hidden shrink-0">
                    <img 
                      src={book.cover} 
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="grow">
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                      {book.title}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      {book.author}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(book.rating) ? 'fill-current' : ''}`}
                              style={{ 
                                color: i < Math.floor(book.rating) ? '#f59e0b' : 'var(--color-border)'
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                          {book.rating}
                        </span>
                      </div>
                      
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        book.status === 'reading' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        book.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                      }`}>
                        {book.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Quick Actions
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/books"
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ 
                    backgroundColor: 'var(--color-bg-muted)',
                    color: 'var(--color-text-primary)'
                  }}
                >
                  Browse Books
                </Link>
                <Link
                  to="/dashboard/favorites"
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ 
                    backgroundColor: 'var(--color-bg-muted)',
                    color: 'var(--color-text-primary)'
                  }}
                >
                  View Favorites
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-6 rounded-xl"
        style={{ 
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)'
        }}
      >
        <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
          Recent Activity
        </h2>
        
        <div className="space-y-4">
          {[
            { action: "Added 'Atomic Habits' to reading list", time: "2 hours ago" },
            { action: "Rated 'The Midnight Library' 4.5 stars", time: "1 day ago" },
            { action: "Completed reading goal for this week", time: "2 days ago" },
            { action: "Joined 'Sci-Fi Readers' book club", time: "3 days ago" }
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-bg-muted transition-colors">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ 
                  backgroundColor: 'var(--color-bg-muted)',
                  color: 'var(--color-primary)'
                }}
              >
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="grow">
                <p style={{ color: 'var(--color-text-primary)' }}>{activity.action}</p>
                <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;