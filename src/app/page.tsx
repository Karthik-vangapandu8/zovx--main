"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Clock, TrendingUp, Users, BookOpen, Calculator, Zap, ArrowRight } from "lucide-react";

export default function Home() {
  const [currentStory, setCurrentStory] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const heroStories = [
    {
      id: 1,
      title: "Manufacturing Giant Cuts Supply Chain Costs 50% with AI Optimization",
      excerpt: "Global Auto Parts Corp implemented predictive analytics and automated reordering, saving $2M monthly while reducing stockouts from 30% to 2%.",
      category: "Manufacturing",
      readTime: "3 min read",
      views: "12.4K",
      savings: "$2M/month",
      author: "Sarah Chen",
      date: "2 hours ago",
      image: "/api/placeholder/800/400",
      trending: true,
      featured: true
    },
    {
      id: 2,
      title: "SaaS Startup Automates 80% of Customer Support with GPT-4 Integration",
      excerpt: "TechFlow Solutions reduced response time from 24 hours to under 1 minute, cutting support costs by 60% while boosting satisfaction to 91%.",
      category: "Technology",
      readTime: "4 min read",
      views: "8.7K",
      savings: "$500K/year",
      author: "Marcus Rodriguez",
      date: "6 hours ago",
      image: "/api/placeholder/800/400",
      trending: true,
      featured: true
    },
    {
      id: 3,
      title: "Predictive AI Prevents 95% Equipment Downtime in Steel Manufacturing",
      excerpt: "Steel Processing Inc uses IoT sensors and ML algorithms to predict failures, reducing unexpected breakdowns from 12 to 1 per year.",
      category: "Industrial",
      readTime: "5 min read",
      views: "15.2K",
      savings: "$1.2M/year",
      author: "Dr. Emily Watson",
      date: "1 day ago",
      image: "/api/placeholder/800/400",
      trending: false,
      featured: true
    }
  ];

  const latestStories = [
    {
      id: 4,
      title: "Retail Chain Uses Computer Vision to Reduce Theft by 75%",
      category: "Retail",
      readTime: "3 min",
      views: "5.3K",
      savings: "$300K",
      impact: "75% theft reduction",
      author: "Alex Kim",
      date: "4 hours ago"
    },
    {
      id: 5,
      title: "Healthcare System Streamlines Patient Flow with AI Scheduling",
      category: "Healthcare",
      readTime: "4 min",
      views: "7.1K",
      savings: "$800K",
      impact: "40% faster processing",
      author: "Dr. Jennifer Liu",
      date: "8 hours ago"
    },
    {
      id: 6,
      title: "Logistics Company Optimizes Delivery Routes with Machine Learning",
      category: "Logistics",
      readTime: "3 min",
      views: "6.8K",
      savings: "$450K",
      impact: "30% fuel savings",
      author: "Robert Singh",
      date: "12 hours ago"
    },
    {
      id: 7,
      title: "Financial Firm Detects Fraud 10x Faster with AI Analytics",
      category: "Finance",
      readTime: "5 min",
      views: "9.2K",
      savings: "$2.1M",
      impact: "99.8% accuracy",
      author: "Maria Gonzalez",
      date: "1 day ago"
    },
    {
      id: 8,
      title: "E-commerce Platform Boosts Sales 45% with AI Personalization",
      category: "E-commerce",
      readTime: "4 min",
      views: "11.5K",
      savings: "$1.5M",
      impact: "45% sales increase",
      author: "David Park",
      date: "1 day ago"
    },
    {
      id: 9,
      title: "Construction Company Reduces Safety Incidents 80% with AI Monitoring",
      category: "Construction",
      readTime: "6 min",
      views: "4.9K",
      savings: "$600K",
      impact: "80% safer sites",
      author: "Lisa Thompson",
      date: "2 days ago"
    }
  ];

  // Auto-slide hero stories
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentStory((prev) => (prev + 1) % heroStories.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, heroStories.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % heroStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + heroStories.length) % heroStories.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Modern Navigation */}
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
                <Link href="/stories" className="text-gray-300 hover:text-white transition-colors">Stories</Link>
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

      {/* Hero Story Carousel */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 transition-all duration-1000">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        </div>

        {/* Story Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6">
              {heroStories[currentStory].trending && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 text-sm font-medium">TRENDING NOW</span>
                </div>
              )}
              
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <span className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full">
                  {heroStories[currentStory].category}
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{heroStories[currentStory].readTime}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{heroStories[currentStory].views}</span>
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {heroStories[currentStory].title}
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                {heroStories[currentStory].excerpt}
              </p>

              <div className="flex items-center space-x-6">
                <div className="bg-green-500/20 border border-green-400/30 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">{heroStories[currentStory].savings}</div>
                  <div className="text-xs text-gray-400">Savings Achieved</div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{heroStories[currentStory].author[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{heroStories[currentStory].author}</div>
                    <div className="text-xs text-gray-400">{heroStories[currentStory].date}</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 font-medium">
                  <BookOpen className="w-5 h-5" />
                  <span>Read Full Story</span>
                </button>
                <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
                  <Calculator className="w-5 h-5" />
                  <span>Calculate ROI</span>
                </button>
              </div>
            </div>

            {/* Story Navigation */}
            <div className="hidden lg:block">
              <div className="space-y-4">
                {heroStories.map((story, index) => (
                  <button
                    key={story.id}
                    onClick={() => setCurrentStory(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      index === currentStory 
                        ? 'bg-white/10 border border-white/20' 
                        : 'bg-black/20 border border-gray-700 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === currentStory ? 'bg-blue-500' : 'bg-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium line-clamp-2">{story.title}</h3>
                        <p className="text-xs text-gray-400 mt-1">{story.category} • {story.readTime}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevStory}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextStory}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Progress Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentStory ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Latest Stories Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest AI Success Stories</h2>
              <p className="text-gray-400">Real implementations • Proven results • Ready to replicate</p>
            </div>
            <Link href="/stories" className="text-blue-400 hover:text-blue-300 flex items-center space-x-2 transition-colors">
              <span>View All Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestStories.map((story, index) => (
              <div
                key={story.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                      {story.category}
                    </span>
                    <span className="text-gray-500 text-xs">{story.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {story.title}
                  </h3>

                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{story.readTime}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{story.views}</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-green-400">{story.savings}</div>
                      <div className="text-xs text-gray-500">Annual Savings</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-300">{story.impact}</div>
                      <div className="text-xs text-gray-500">Key Result</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">
                        {story.author[0]}
                      </div>
                      <span className="text-sm text-gray-400">{story.author}</span>
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors flex items-center space-x-1">
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Calculate Your AI ROI in 60 Seconds</h2>
          <p className="text-xl text-gray-300 mb-8">
            See how much your business could save with AI implementation
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Average ROI</h3>
              <p className="text-3xl font-bold text-green-400">847%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Payback Period</h3>
              <p className="text-3xl font-bold text-blue-400">8 months</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Efficiency Gain</h3>
              <p className="text-3xl font-bold text-purple-400">64%</p>
            </div>
          </div>

          <Link href="/calculator" className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            <Calculator className="w-6 h-6" />
            <span>Calculate Your ROI</span>
          </Link>
        </div>
      </section>

      {/* Newsletter & Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Success Stories</h3>
            <p className="text-gray-400 mb-6">
              Join 25,000+ business leaders getting weekly AI implementation insights
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
                Subscribe
              </button>
            </div>
          </div>

          <div className="text-center text-gray-500">
            <p>&copy; 2024 ZOVX.PRO - The leading source for AI implementation success stories</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
