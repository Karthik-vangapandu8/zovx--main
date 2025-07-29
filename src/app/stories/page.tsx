import Link from "next/link";

export default function Stories() {
  const stories = [
    {
      id: 1,
      title: "Manufacturing Giant Cuts Costs 50% with AI Supply Chain",
      industry: "Manufacturing",
      company: "Global Auto Parts Corp",
      savings: "$2M",
      timeframe: "Monthly",
      implementationTime: "12 weeks",
      readTime: "90 sec",
      views: "2,847",
      trending: true,
      challenge: "Manual supply chain management caused 30% stockouts, $2M monthly waste, and 48-hour order processing delays.",
      solution: ["Predictive Analytics (94% accuracy)", "Automated Reordering System", "Real-time Inventory Optimization"],
      results: [
        { metric: "Stockouts", before: "30%", after: "2%" },
        { metric: "Processing Time", before: "48hr", after: "2hr" },
        { metric: "Monthly Costs", before: "$2M", after: "$1M" }
      ],
      tools: ["Salesforce Einstein", "Microsoft Azure ML", "Tableau"],
      roi: "8000%",
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "AI Chatbot Reduces Customer Support Costs 60%",
      industry: "SaaS",
      company: "TechFlow Solutions",
      savings: "$500K",
      timeframe: "Annually",
      implementationTime: "6 weeks",
      readTime: "2 min",
      views: "1,234",
      trending: false,
      challenge: "High support ticket volume, 24-hour response times, and 60% of queries were repetitive basic questions.",
      solution: ["GPT-4 Integration", "Knowledge Base AI", "Sentiment Analysis", "Auto-escalation System"],
      results: [
        { metric: "Response Time", before: "24hr", after: "< 1min" },
        { metric: "Support Costs", before: "$800K", after: "$320K" },
        { metric: "Customer Satisfaction", before: "72%", after: "91%" }
      ],
      tools: ["OpenAI GPT-4", "Zendesk AI", "Dialogflow"],
      roi: "1250%",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Predictive AI Prevents 95% Equipment Downtime",
      industry: "Manufacturing",
      company: "Steel Processing Inc",
      savings: "$1.2M",
      timeframe: "Annually",
      implementationTime: "16 weeks",
      readTime: "2 min",
      views: "2,156",
      trending: false,
      challenge: "Unexpected equipment failures cost $100K per incident, with 12 major breakdowns annually.",
      solution: ["IoT Sensor Network", "Machine Learning Prediction", "Automated Maintenance Scheduling"],
      results: [
        { metric: "Downtime Events", before: "12/year", after: "1/year" },
        { metric: "Maintenance Costs", before: "$300K", after: "$180K" },
        { metric: "Production Efficiency", before: "78%", after: "94%" }
      ],
      tools: ["AWS IoT", "TensorFlow", "Siemens MindSphere"],
      roi: "600%",
      difficulty: "Hard"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">ZOVX.PRO</Link>
              <span className="ml-2 text-sm text-gray-500">AI Success Stories</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/stories" className="text-blue-600 font-medium">Success Stories</Link>
              <Link href="/tools" className="text-gray-700 hover:text-blue-600">AI Tools</Link>
              <Link href="/calculator" className="text-gray-700 hover:text-blue-600">ROI Calculator</Link>
              <Link href="/consultation" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Help</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Implementation <span className="text-blue-600">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Real companies • Real results • Interactive case studies you can implement
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['All Industries', 'Manufacturing', 'SaaS', 'Healthcare', 'Retail', 'Finance'].map((filter) => (
              <button 
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'All Industries' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex justify-center space-x-4 text-sm">
            <button className="text-blue-600 font-medium">Most Popular</button>
            <button className="text-gray-600 hover:text-blue-600">Latest</button>
            <button className="text-gray-600 hover:text-blue-600">Highest ROI</button>
            <button className="text-gray-600 hover:text-blue-600">Quick Read</button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="space-y-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Story Header */}
              <div className={`p-6 ${story.trending ? 'bg-gradient-to-r from-red-500 to-pink-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    {story.trending && (
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                        🔥 TRENDING
                      </span>
                    )}
                    <h2 className="text-2xl font-bold mb-2">{story.title}</h2>
                    <div className="flex items-center space-x-4 text-sm opacity-90">
                      <span className="bg-white/20 px-2 py-1 rounded">{story.industry}</span>
                      <span>{story.readTime} read</span>
                      <span>{story.views} views</span>
                      <span>💡 {story.difficulty} Implementation</span>
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
                      <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                        🎯 <span className="ml-2">The Challenge</span>
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{story.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                        🔧 <span className="ml-2">The AI Solution</span>
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {story.solution.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools Used */}
                    <div>
                      <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                        🛠️ <span className="ml-2">AI Tools Used</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {story.tools.map((tool, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                        📊 <span className="ml-2">Results</span>
                      </h3>
                      <div className="space-y-4">
                        {story.results.map((result, index) => (
                          <div key={index}>
                            <div className="text-sm text-gray-600 mb-1">{result.metric}</div>
                            <div className="flex items-center justify-between">
                              <span className="text-red-500 font-medium">{result.before}</span>
                              <span className="text-gray-400">→</span>
                              <span className="text-green-600 font-bold text-lg">{result.after}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-600">Implementation Time</div>
                        <div className="text-lg font-bold text-blue-600">{story.implementationTime}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                    📖 Read Full Implementation Guide
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium">
                    🧮 Calculate Your ROI
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-medium">
                    🔗 Try These Tools Free
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-medium">
                    📞 Book Implementation Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium">
            Load More Success Stories
          </button>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get New Stories Weekly</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 15,000+ business leaders getting fresh AI implementation case studies, tool reviews, and ROI insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your business email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
              Subscribe Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 