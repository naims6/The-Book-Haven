import React, { useState } from 'react';
import {
  HelpCircle,
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Users,
  BookOpen,
  Search,
  ChevronRight,
  CheckCircle,
  FileText,
  Video,
  Download,
  ExternalLink,
  Shield,
  Award,
  Headphones,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('help');
  const [searchQuery, setSearchQuery] = useState('');

  // FAQ Categories
  const faqCategories = [
    {
      id: 'account',
      title: 'Account & Profile',
      icon: <Users className="w-6 h-6" />,
      count: 12
    },
    {
      id: 'reading',
      title: 'Reading Features',
      icon: <BookOpen className="w-6 h-6" />,
      count: 15
    },
    {
      id: 'community',
      title: 'Community',
      icon: <MessageSquare className="w-6 h-6" />,
      count: 8
    },
    {
      id: 'technical',
      title: 'Technical Issues',
      icon: <Zap className="w-6 h-6" />,
      count: 10
    },
    {
      id: 'billing',
      title: 'Subscription & Billing',
      icon: <Shield className="w-6 h-6" />,
      count: 6
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: <Award className="w-6 h-6" />,
      count: 7
    }
  ];

  // Popular Questions
  const popularQuestions = [
    {
      question: "How do I reset my password?",
      answer: "Go to Settings > Security > Reset Password. We'll send a reset link to your email.",
      category: 'Account'
    },
    {
      question: "How to create and share reading lists?",
      answer: "Navigate to 'My Library', click 'Create List', add books, and use the share button.",
      category: 'Reading'
    },
    {
      question: "How do I report inappropriate content?",
      answer: "Click the three dots next to any content and select 'Report'. Our team reviews within 24 hours.",
      category: 'Community'
    },
    {
      question: "Why can't I upload book covers?",
      answer: "Check file format (JPG/PNG) and size (<5MB). If issues persist, clear your browser cache.",
      category: 'Technical'
    }
  ];

  // Support Options
  const supportOptions = [
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageSquare className="w-8 h-8" />,
      availability: 'Available now',
      responseTime: '2-5 minutes',
      color: 'var(--color-primary)'
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: <Mail className="w-8 h-8" />,
      availability: '24/7',
      responseTime: 'Within 24 hours',
      color: 'var(--color-secondary)'
    },
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Speak directly with our team',
      icon: <Phone className="w-8 h-8" />,
      availability: 'Mon-Fri, 9am-6pm EST',
      responseTime: 'Immediate',
      color: 'var(--color-accent)'
    },
    {
      id: 'community',
      title: 'Community Forum',
      description: 'Get help from other readers',
      icon: <Users className="w-8 h-8" />,
      availability: 'Always open',
      responseTime: 'Varies',
      color: '#10b981'
    }
  ];

  // Tutorial Resources
  const tutorials = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of using The Book Haven',
      type: 'PDF Guide',
      duration: '15 min read',
      icon: <FileText className="w-6 h-6" />,
      link: '/guides/getting-started'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      type: 'Video Series',
      duration: '45 min total',
      icon: <Video className="w-6 h-6" />,
      link: '/guides/videos'
    },
    {
      title: 'Keyboard Shortcuts',
      description: 'Speed up your navigation',
      type: 'Cheat Sheet',
      duration: 'Quick reference',
      icon: <Zap className="w-6 h-6" />,
      link: '/guides/shortcuts'
    },
    {
      title: 'API Documentation',
      description: 'For developers and integrators',
      type: 'Technical Docs',
      duration: 'Advanced',
      icon: <Download className="w-6 h-6" />,
      link: '/api/docs'
    }
  ];

  // Support Stats
  const supportStats = [
    { label: 'Average Response Time', value: '12 minutes', icon: <Clock /> },
    { label: 'Customer Satisfaction', value: '98%', icon: <Star /> },
    { label: 'Issues Resolved', value: '25,000+', icon: <CheckCircle /> },
    { label: 'Active Support Agents', value: '24/7', icon: <Headphones /> }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Implement contact form submission
    console.log('Contact form submitted');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Hero Section */}
      <div className="relative py-16 md:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container2 mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6"
              style={{ 
                backgroundColor: 'var(--color-bg-muted)',
                border: '1px solid var(--color-border)'
              }}
            >
              <HelpCircle className="w-5 h-5 mr-2" style={{ color: 'var(--color-primary)' }} />
              <span className="font-medium" style={{ color: 'var(--color-text-primary)' }}>
                How can we help you today?
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              We're here to help
            </h1>
            
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Get answers to your questions, contact our support team, or explore our help resources.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for answers, guides, or topics..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ 
                      backgroundColor: 'var(--color-bg)',
                      border: '2px solid var(--color-border)',
                      color: 'var(--color-text-primary)'
                    }}
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg font-medium"
                    style={{ 
                      backgroundColor: 'var(--color-primary)',
                      color: 'white'
                    }}
                  >
                    Search
                  </button>
                </div>
              </form>
              <p className="text-sm mt-3 text-center" style={{ color: 'var(--color-text-muted)' }}>
                Try searching for: "password reset", "book reviews", "reading lists", or "account settings"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Stats */}
      <div className="py-12" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container2 mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supportStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl"
                style={{ 
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ 
                    backgroundColor: 'var(--color-bg-muted)',
                    color: 'var(--color-primary)'
                  }}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container2 mx-auto px-4 py-12">
        <div className="">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b" style={{ borderColor: 'var(--color-border)' }}>
            {['help', 'contact', 'resources', 'status'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
                  activeTab === tab 
                    ? 'border-b-2' 
                    : 'hover:opacity-80'
                }`}
                style={{ 
                  color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  borderBottomColor: activeTab === tab ? 'var(--color-primary)' : 'transparent'
                }}
              >
                {tab === 'help' && 'Help Center'}
                {tab === 'contact' && 'Contact Us'}
                {tab === 'resources' && 'Resources'}
                {tab === 'status' && 'System Status'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'help' && (
            <div className="space-y-12">
              {/* Popular Questions */}
              <section>
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                  Popular Questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {popularQuestions.map((faq, index) => (
                    <div 
                      key={index}
                      className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                      style={{ 
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                          style={{ 
                            backgroundColor: 'var(--color-bg-muted)',
                            color: 'var(--color-primary)'
                          }}
                        >
                          <HelpCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs px-2 py-1 rounded-full mb-2 inline-block"
                            style={{ 
                              backgroundColor: 'var(--color-bg-muted)',
                              color: 'var(--color-text-muted)'
                            }}
                          >
                            {faq.category}
                          </span>
                          <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>
                            {faq.question}
                          </h3>
                          <p style={{ color: 'var(--color-text-secondary)' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                      <button className="text-sm font-medium flex items-center hover:opacity-80 transition-opacity mt-4"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Read more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Categories */}
              <section>
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                  Browse by Category
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {faqCategories.map((category) => (
                    <div 
                      key={category.id}
                      className="p-6 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                      style={{ 
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                          style={{ 
                            backgroundColor: 'var(--color-bg-muted)',
                            color: 'var(--color-primary)'
                          }}
                        >
                          {category.icon}
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-lg mb-1" style={{ color: 'var(--color-text-primary)' }}>
                            {category.title}
                          </h3>
                          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                            {category.count} articles
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: 'var(--color-primary)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-12">
              {/* Support Options */}
              <section>
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                  How would you like to contact us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {supportOptions.map((option) => (
                    <div 
                      key={option.id}
                      className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                      style={{ 
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)'
                      }}
                      onClick={() => {
                        if (option.id === 'chat') window.location.href = '/support/chat';
                        if (option.id === 'email') window.location.href = 'mailto:support@thebookhaven.com';
                        if (option.id === 'phone') window.location.href = 'tel:+15551234567';
                        if (option.id === 'community') window.location.href = '/community/forum';
                      }}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ 
                          backgroundColor: `${option.color}20`,
                          color: option.color
                        }}
                      >
                        {option.icon}
                      </div>
                      <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>
                        {option.title}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                        {option.description}
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs flex items-center justify-center"
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          <Clock className="w-3 h-3 mr-1" />
                          {option.availability}
                        </div>
                        <div className="text-xs" style={{ color: option.color }}>
                          {option.responseTime} response
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Form */}
              <section>
                <div className="max-w-2xl mx-auto">
                  <div className="rounded-2xl p-8"
                    style={{ 
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                      Send us a message
                    </h3>
                    
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                            style={{ 
                              backgroundColor: 'var(--color-bg)',
                              border: '1px solid var(--color-border)',
                              color: 'var(--color-text-primary)'
                            }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                            style={{ 
                              backgroundColor: 'var(--color-bg)',
                              border: '1px solid var(--color-border)',
                              color: 'var(--color-text-primary)'
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                          style={{ 
                            backgroundColor: 'var(--color-bg)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text-primary)'
                          }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                          Category *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 cursor-pointer"
                          style={{ 
                            backgroundColor: 'var(--color-bg)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text-primary)'
                          }}
                        >
                          <option value="">Select a category</option>
                          <option value="account">Account Issues</option>
                          <option value="technical">Technical Problems</option>
                          <option value="billing">Billing & Subscription</option>
                          <option value="feature">Feature Request</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                          style={{ 
                            backgroundColor: 'var(--color-bg)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text-primary)'
                          }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                          Message *
                        </label>
                        <textarea
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 resize-none"
                          style={{ 
                            backgroundColor: 'var(--color-bg)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text-primary)'
                          }}
                        />
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="terms"
                          required
                          className="w-4 h-4 rounded"
                          style={{ 
                            borderColor: 'var(--color-border)',
                            backgroundColor: 'var(--color-bg)'
                          }}
                        />
                        <label htmlFor="terms" className="ml-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                          I agree to the Terms of Service and Privacy Policy
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-lg font-semibold transition-colors"
                        style={{ 
                          backgroundColor: 'var(--color-primary)',
                          color: 'white'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-12">
              {/* Tutorials & Guides */}
              <section>
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                  Tutorials & Learning Resources
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tutorials.map((tutorial, index) => (
                    <a
                      key={index}
                      href={tutorial.link}
                      className="p-6 rounded-xl group transition-all duration-300 hover:scale-[1.02] block"
                      style={{ 
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        textDecoration: 'none'
                      }}
                    >
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                          style={{ 
                            backgroundColor: 'var(--color-bg-muted)',
                            color: 'var(--color-primary)'
                          }}
                        >
                          {tutorial.icon}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg" style={{ color: 'var(--color-text-primary)' }}>
                              {tutorial.title}
                            </h3>
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              style={{ color: 'var(--color-primary)' }}
                            />
                          </div>
                          <p className="mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                            {tutorial.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs px-3 py-1 rounded-full"
                              style={{ 
                                backgroundColor: 'var(--color-bg-muted)',
                                color: 'var(--color-text-muted)'
                              }}
                            >
                              {tutorial.type}
                            </span>
                            <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                              {tutorial.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Video Tutorials Section */}
              <section>
                <div className="rounded-2xl p-8"
                  style={{ 
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                        Video Tutorials
                      </h3>
                      <p style={{ color: 'var(--color-text-secondary)' }}>
                        Watch our comprehensive video guides
                      </p>
                    </div>
                    <button className="px-6 py-3 rounded-lg font-medium transition-colors"
                      style={{ 
                        backgroundColor: 'var(--color-primary)',
                        color: 'white'
                      }}
                    >
                      View All Videos
                    </button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: 'Getting Started', duration: '5:24', thumbnail: '📚' },
                      { title: 'Advanced Features', duration: '8:45', thumbnail: '⚡' },
                      { title: 'Community Guide', duration: '6:12', thumbnail: '👥' }
                    ].map((video, index) => (
                      <div 
                        key={index}
                        className="rounded-xl overflow-hidden cursor-pointer group"
                        style={{ 
                          backgroundColor: 'var(--color-bg)',
                          border: '1px solid var(--color-border)'
                        }}
                      >
                        <div className="h-40 flex items-center justify-center text-5xl"
                          style={{ backgroundColor: 'var(--color-bg-muted)' }}
                        >
                          {video.thumbnail}
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                            {video.title}
                          </h4>
                          <div className="flex items-center justify-between">
                            <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                              {video.duration}
                            </span>
                            <button className="text-sm font-medium flex items-center hover:opacity-80 transition-opacity"
                              style={{ color: 'var(--color-primary)' }}
                            >
                              Watch
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'status' && (
            <div className="space-y-8">
              {/* System Status */}
              <div className="rounded-2xl p-8"
                style={{ 
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      System Status
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      All systems operational
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                      All Systems Normal
                    </div>
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { service: 'Website', status: 'operational', uptime: '99.9%' },
                    { service: 'Mobile Apps', status: 'operational', uptime: '99.8%' },
                    { service: 'API', status: 'operational', uptime: '99.7%' },
                    { service: 'Database', status: 'operational', uptime: '99.95%' },
                    { service: 'Authentication', status: 'operational', uptime: '99.9%' },
                    { service: 'File Uploads', status: 'operational', uptime: '99.5%' }
                  ].map((system, index) => (
                    <div key={index} className="p-4 rounded-lg"
                      style={{ backgroundColor: 'var(--color-bg)' }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span style={{ color: 'var(--color-text-primary)' }}>{system.service}</span>
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            system.status === 'operational' ? 'bg-green-500' : 'bg-red-500'
                          }`}></div>
                          <span className="text-sm capitalize" style={{ color: 'var(--color-text-muted)' }}>
                            {system.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        Uptime: {system.uptime}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Incidents */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    Recent Incidents
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border-l-4 border-green-500"
                      style={{ 
                        backgroundColor: 'var(--color-bg)',
                        borderLeftColor: 'var(--color-accent)'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--color-text-primary)' }}>No recent incidents</span>
                        <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>All clear</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    
    </div>
  );
};

export default SupportPage;