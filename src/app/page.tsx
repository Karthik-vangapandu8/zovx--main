import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">ZOVX.PRO</h1>
              <span className="ml-2 text-sm text-gray-500">AI Success Stories</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/stories" className="text-gray-700 hover:text-blue-600">Success Stories</Link>
              <Link href="/tools" className="text-gray-700 hover:text-blue-600">AI Tools</Link>
              <Link href="/calculator" className="text-gray-700 hover:text-blue-600">ROI Calculator</Link>
              <Link href="/consultation" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Help</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Media First */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Companies Are <span className="text-blue-600">Saving Millions</span> with AI
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Real implementation stories • Interactive case studies • 90-second reads
          </p>
          
          {/* Industry Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['All Stories', 'Manufacturing', 'Supply Chain', 'Healthcare', 'Retail', 'Finance'].map((tag) => (
              <button 
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  tag === 'All Stories' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Story Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">🔥 TRENDING TODAY</span>
                <h3 className="text-2xl font-bold mt-3">Manufacturing Giant Cuts Costs 50% with AI</h3>
                <p className="text-blue-100 mt-2">Supply Chain Optimization • 90-second read • 2,847 views</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">$2M</div>
                <div className="text-sm text-blue-100">Monthly Savings</div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h4 className="font-semibold text-gray-900 mb-3">🎯 The Challenge</h4>
                <p className="text-gray-600 mb-4">
                  Manual supply chain management caused 30% stockouts, $2M monthly waste, and 48-hour order processing delays.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">🔧 The AI Solution</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">Predictive Analytics (94% accuracy)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">Automated Reordering System</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">Real-time Inventory Optimization</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">📊 Results</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600">Stockouts</div>
                    <div className="text-xl font-bold text-green-600">30% → 2%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Processing Time</div>
                    <div className="text-xl font-bold text-green-600">48hr → 2hr</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Monthly Costs</div>
                    <div className="text-xl font-bold text-green-600">$2M → $1M</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                📖 Read Full Interactive Story
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium">
                🧮 Calculate Your ROI
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-medium">
                🔗 Try These Tools
              </button>
            </div>
          </div>
        </div>

        {/* Latest Stories Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Latest AI Implementation Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Chatbot Reduces Support Costs 60%",
                industry: "SaaS",
                savings: "$500K",
                readTime: "2 min",
                views: "1,234",
                impact: "Customer satisfaction up 40%"
              },
              {
                title: "Predictive AI Prevents 95% Downtime",
                industry: "Manufacturing",
                savings: "$1.2M",
                readTime: "90 sec",
                views: "2,156",
                impact: "Zero unplanned maintenance"
              },
              {
                title: "Computer Vision Improves QC by 80%",
                industry: "Automotive",
                savings: "$800K",
                readTime: "2 min",
                views: "987",
                impact: "Defect rate dropped 85%"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">{story.industry}</span>
                  <span className="text-gray-500 text-sm">{story.views} views</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{story.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{story.impact}</p>
                <div className="flex items-center justify-between">
                  <div className="text-green-600 font-bold text-lg">{story.savings}</div>
                  <div className="text-gray-500 text-sm">{story.readTime} read</div>
                </div>
                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 font-medium">
                  Read Story →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want AI Results Like These?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 15,000+ business leaders getting our weekly AI implementation insights. 
            Real case studies, tool reviews, and ROI calculators delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your business email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
              Get Free Insights
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">No spam. Unsubscribe anytime. 4,000+ companies trust us.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 ZOVX.PRO - Helping businesses implement AI successfully</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
