"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock, Users, TrendingUp, BookOpen, Calculator, Zap, ArrowRight, Filter, Search, ChevronDown } from "lucide-react";

export default function Stories() {
  const [selectedFilter, setSelectedFilter] = useState("All Industries");
  const [selectedSort, setSelectedSort] = useState("Most Popular");

  const stories = [
    {
      id: 1,
      title: "Manufacturing Giant Cuts Supply Chain Costs 50% with AI Optimization",
      industry: "Manufacturing",
      company: "Global Auto Parts Corp",
      savings: "$2M",
      timeframe: "Monthly",
      implementationTime: "12 weeks",
      readTime: "3 min read",
      views: "12.4K",
      trending: true,
      featured: true,
      challenge: "Manual supply chain management caused 30% stockouts, $2M monthly waste, and 48-hour order processing delays.",
      solution: ["Predictive Analytics (94% accuracy)", "Automated Reordering System", "Real-time Inventory Optimization"],
      results: [
        { metric: "Stockouts", before: "30%", after: "2%" },
        { metric: "Processing Time", before: "48hr", after: "2hr" },
        { metric: "Monthly Costs", before: "$2M", after: "$1M" }
      ],
      tools: ["Salesforce Einstein", "Microsoft Azure ML", "Tableau"],
      roi: "8000%",
      difficulty: "Medium",
      author: "Sarah Chen",
      date: "2 hours ago"
    },
    {
      id: 2,
      title: "SaaS Startup Automates 80% of Customer Support with GPT-4",
      industry: "Technology",
      company: "TechFlow Solutions",
      savings: "$500K",
      timeframe: "Annually",
      implementationTime: "6 weeks",
      readTime: "4 min read",
      views: "8.7K",
      trending: true,
      featured: false,
      challenge: "High support ticket volume, 24-hour response times, and 60% of queries were repetitive basic questions.",
      solution: ["GPT-4 Integration", "Knowledge Base AI", "Sentiment Analysis", "Auto-escalation System"],
      results: [
        { metric: "Response Time", before: "24hr", after: "< 1min" },
        { metric: "Support Costs", before: "$800K", after: "$320K" },
        { metric: "Customer Satisfaction", before: "72%", after: "91%" }
      ],
      tools: ["OpenAI GPT-4", "Zendesk AI", "Dialogflow"],
      roi: "1250%",
      difficulty: "Easy",
      author: "Marcus Rodriguez",
      date: "6 hours ago"
    },
    {
      id: 3,
      title: "Predictive AI Prevents 95% Equipment Downtime in Steel Manufacturing",
      industry: "Manufacturing",
      company: "Steel Processing Inc",
      savings: "$1.2M",
      timeframe: "Annually",
      implementationTime: "16 weeks",
      readTime: "5 min read",
      views: "15.2K",
      trending: false,
      featured: false,
      challenge: "Unexpected equipment failures cost $100K per incident, with 12 major breakdowns annually.",
      solution: ["IoT Sensor Network", "Machine Learning Prediction", "Automated Maintenance Scheduling"],
      results: [
        { metric: "Downtime Events", before: "12/year", after: "1/year" },
        { metric: "Maintenance Costs", before: "$300K", after: "$180K" },
        { metric: "Production Efficiency", before: "78%", after: "94%" }
      ],
      tools: ["AWS IoT", "TensorFlow", "Siemens MindSphere"],
      roi: "600%",
      difficulty: "Hard",
      author: "Dr. Emily Watson",
      date: "1 day ago"
    },
    {
      id: 4,
      title: "Retail Chain Uses Computer Vision to Reduce Theft by 75%",
      industry: "Retail",
      company: "RetailMax Corp",
      savings: "$300K",
      timeframe: "Annually",
      implementationTime: "8 weeks",
      readTime: "3 min read",
      views: "5.3K",
      trending: false,
      featured: false,
      challenge: "Store theft costing $400K annually with traditional security cameras unable to prevent real-time incidents.",
      solution: ["Real-time Computer Vision", "Behavioral Analysis AI", "Automated Alert System"],
      results: [
        { metric: "Theft Incidents", before: "120/month", after: "30/month" },
        { metric: "Loss Prevention", before: "$400K", after: "$100K" },
        { metric: "Security Efficiency", before: "40%", after: "95%" }
      ],
      tools: ["OpenCV", "YOLO", "Azure Cognitive Services"],
      roi: "375%",
      difficulty: "Medium",
      author: "Alex Kim",
      date: "4 hours ago"
    },
    {
      id: 5,
      title: "Healthcare System Streamlines Patient Flow with AI Scheduling",
      industry: "Healthcare",
      company: "Metro Health Network",
      savings: "$800K",
      timeframe: "Annually",
      implementationTime: "10 weeks",
      readTime: "4 min read",
      views: "7.1K",
      trending: false,
      featured: false,
      challenge: "Patient wait times averaging 3 hours, 30% no-shows, and inefficient resource allocation causing staff burnout.",
      solution: ["AI Scheduling Algorithm", "Predictive No-show Analysis", "Resource Optimization"],
      results: [
        { metric: "Wait Time", before: "3hr", after: "45min" },
        { metric: "No-show Rate", before: "30%", after: "12%" },
        { metric: "Staff Utilization", before: "65%", after: "85%" }
      ],
      tools: ["Epic AI", "Qventus", "Microsoft Healthcare Bot"],
      roi: "320%",
      difficulty: "Hard",
      author: "Dr. Jennifer Liu",
      date: "8 hours ago"
    }
  ];

  const filters = ["All Industries", "Manufacturing", "Technology", "Healthcare", "Retail", "Finance", "Logistics"];
  const sortOptions = ["Most Popular", "Latest", "Highest ROI", "Quick Read"];

  const filteredStories = stories.filter(story => 
    selectedFilter === "All Industries" || story.industry === selectedFilter
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ZOVX.PRO
                </span>
              </Link>
              <div className="hidden md:flex space-x-6 text-sm">
                <Link href="/stories" className="text-blue-400 font-medium">Stories</Link>
                <Link href="/tools" className="text-gray-300 hover:text-white transition-colors">AI Tools</Link>
                <Link href="/calculator" className="text-gray-300 hover:text-white transition-colors">ROI Calculator</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-300 hover:text-white text-sm">Subscribe</button>
              <Link href="/consultation" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                Get Help
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              AI Implementation <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real companies • Proven results • Implementation roadmaps you can follow
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search AI success stories..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 text-lg"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-400">500+</div>
                <div className="text-sm text-gray-300">Success Stories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">$2.4B</div>
                <div className="text-sm text-gray-300">Total Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-400">847%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            {/* Filters */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedFilter === filter
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-400">Sort by:</span>
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white text-sm appearance-none cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredStories.map((story) => (
              <div key={story.id} className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700 hover:border-gray-600">
                {/* Story Header */}
                <div className={`p-6 ${story.trending ? 'bg-gradient-to-r from-red-600 to-pink-600' : story.featured ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-gray-700 to-gray-800'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        {story.trending && (
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                            🔥 TRENDING
                          </span>
                        )}
                        {story.featured && !story.trending && (
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                            ⭐ FEATURED
                          </span>
                        )}
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{story.industry}</span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-2">{story.title}</h2>
                      <div className="flex items-center space-x-4 text-sm opacity-90">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{story.readTime}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{story.views} views</span>
                        </span>
                        <span>💡 {story.difficulty} Implementation</span>
                        <span>{story.author} • {story.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{story.savings}</div>
                      <div className="text-sm opacity-75">{story.timeframe} Savings</div>
                      <div className="text-sm opacity-75">ROI: {story.roi}</div>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Challenge */}
                      <div>
                        <h3 className="flex items-center text-lg font-semibold mb-3">
                          🎯 <span className="ml-2">The Challenge</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{story.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="flex items-center text-lg font-semibold mb-3">
                          🔧 <span className="ml-2">The AI Solution</span>
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {story.solution.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-3">
                              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                              <span className="text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tools Used */}
                      <div>
                        <h3 className="flex items-center text-lg font-semibold mb-3">
                          🛠️ <span className="ml-2">AI Tools Used</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {story.tools.map((tool, index) => (
                            <span key={index} className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results Sidebar */}
                    <div className="lg:col-span-1">
                      <div className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-600">
                        <h3 className="flex items-center text-lg font-semibold mb-4">
                          📊 <span className="ml-2">Results</span>
                        </h3>
                        <div className="space-y-4">
                          {story.results.map((result, index) => (
                            <div key={index}>
                              <div className="text-sm text-gray-400 mb-1">{result.metric}</div>
                              <div className="flex items-center justify-between">
                                <span className="text-red-400 font-medium">{result.before}</span>
                                <ArrowRight className="w-4 h-4 text-gray-400" />
                                <span className="text-green-400 font-bold text-lg">{result.after}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-gray-600">
                          <div className="text-sm text-gray-400">Implementation Time</div>
                          <div className="text-lg font-bold text-blue-400">{story.implementationTime}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-700">
                    <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center space-x-2">
                      <BookOpen className="w-5 h-5" />
                      <span>Read Full Implementation Guide</span>
                    </button>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center space-x-2">
                      <Calculator className="w-5 h-5" />
                      <span>Calculate Your ROI</span>
                    </button>
                    <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center space-x-2">
                      <span>🔗 Try These Tools Free</span>
                    </button>
                    <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center space-x-2">
                      <span>📞 Book Implementation Call</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
              Load More Success Stories
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Get New Stories Weekly</h3>
          <p className="text-xl text-gray-300 mb-8">
            Join 25,000+ business leaders getting fresh AI implementation case studies, tool reviews, and ROI insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your business email"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Subscribe Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 