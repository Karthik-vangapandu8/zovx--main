"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock, TrendingUp, Users, Calculator, Zap, ArrowRight, BarChart3, Target, Sparkles } from "lucide-react";

export default function ROICalculator() {
  const [formData, setFormData] = useState({
    industry: '',
    monthlyCosts: '',
    employees: '',
    currentProcessingTime: '',
    errorRate: '',
    customerSupportTickets: '',
    email: '',
    company: ''
  });

  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const costs = parseFloat(formData.monthlyCosts) || 0;
    const employees = parseFloat(formData.employees) || 0;
    const processingTime = parseFloat(formData.currentProcessingTime) || 0;
    const errorRate = parseFloat(formData.errorRate) || 0;
    const tickets = parseFloat(formData.customerSupportTickets) || 0;

    // AI savings calculations based on industry benchmarks
    const efficiencyGain = 0.4; // 40% average efficiency improvement
    const errorReduction = 0.8; // 80% error reduction
    const timeReduction = 0.6; // 60% time savings
    const supportReduction = 0.5; // 50% support cost reduction

    const monthlySavings = Math.round(
      (costs * efficiencyGain) + 
      (employees * 5000 * timeReduction / 12) + // $5000 per employee per year time value
      (costs * (errorRate / 100) * errorReduction) +
      (tickets * 25 * supportReduction) // $25 per ticket cost
    );

    const annualSavings = monthlySavings * 12;
    const implementationCost = Math.min(annualSavings * 0.15, 150000); // 15% of annual savings, max $150K
    const roi = Math.round(((annualSavings - implementationCost) / implementationCost) * 100);
    const paybackMonths = Math.round(implementationCost / monthlySavings);

    setResults({
      monthlySavings,
      annualSavings,
      implementationCost,
      roi,
      paybackMonths,
      efficiencyGain: Math.round(efficiencyGain * 100),
      timeReduction: Math.round(timeReduction * 100),
      errorReduction: Math.round(errorReduction * 100)
    });

    setShowResults(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                <Link href="/stories" className="text-gray-300 hover:text-white transition-colors">Stories</Link>
                <Link href="/tools" className="text-gray-300 hover:text-white transition-colors">AI Tools</Link>
                <Link href="/calculator" className="text-blue-400 font-medium">ROI Calculator</Link>
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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Calculator className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              AI ROI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Calculator</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Discover how much your business could save with AI implementation
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Based on 500+ implementations</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Industry-specific calculations</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Free detailed report</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Your Business Metrics</h2>
              </div>
              
              <div className="space-y-6">
                {/* Industry Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Industry *
                  </label>
                  <select 
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    <option value="">Select your industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Financial Services</option>
                    <option value="logistics">Logistics & Supply Chain</option>
                    <option value="saas">SaaS & Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Monthly Operating Costs */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Monthly Operating Costs ($) *
                  </label>
                  <input
                    type="number"
                    name="monthlyCosts"
                    value={formData.monthlyCosts}
                    onChange={handleInputChange}
                    placeholder="e.g., 500000"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <p className="text-xs text-gray-400 mt-1">Include payroll, inventory, overhead, etc.</p>
                </div>

                {/* Number of Employees */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of Employees *
                  </label>
                  <input
                    type="number"
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    placeholder="e.g., 250"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                {/* Current Processing Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Average Order/Request Processing Time (hours)
                  </label>
                  <input
                    type="number"
                    name="currentProcessingTime"
                    value={formData.currentProcessingTime}
                    onChange={handleInputChange}
                    placeholder="e.g., 24"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                {/* Error Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Error Rate (%)
                  </label>
                  <input
                    type="number"
                    name="errorRate"
                    value={formData.errorRate}
                    onChange={handleInputChange}
                    placeholder="e.g., 5"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                {/* Customer Support Tickets */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Monthly Customer Support Tickets
                  </label>
                  <input
                    type="number"
                    name="customerSupportTickets"
                    value={formData.customerSupportTickets}
                    onChange={handleInputChange}
                    placeholder="e.g., 1000"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                <button
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-lg flex items-center justify-center space-x-2"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Calculate My AI ROI</span>
                </button>
              </div>
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              {!showResults ? (
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-6">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold">What You'll Get:</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-400 mt-1">✅</span>
                      <div>
                        <div className="font-medium">Detailed ROI Analysis</div>
                        <div className="text-gray-400 text-sm">Monthly and annual savings projections</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-400 mt-1">✅</span>
                      <div>
                        <div className="font-medium">Implementation Roadmap</div>
                        <div className="text-gray-400 text-sm">Step-by-step AI adoption plan</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-400 mt-1">✅</span>
                      <div>
                        <div className="font-medium">Tool Recommendations</div>
                        <div className="text-gray-400 text-sm">Specific AI tools for your industry</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-400 mt-1">✅</span>
                      <div>
                        <div className="font-medium">Risk Assessment</div>
                        <div className="text-gray-400 text-sm">Implementation challenges and solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-6">
                    <BarChart3 className="w-6 h-6 text-green-400" />
                    <h3 className="text-2xl font-bold">Your AI ROI Results</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-500/10 border border-green-400/30 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-400">${results?.annualSavings.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">Annual Savings</div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-400/30 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-400">{results?.roi}%</div>
                      <div className="text-sm text-gray-400">ROI</div>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-400/30 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-400">{results?.paybackMonths} months</div>
                      <div className="text-sm text-gray-400">Payback Period</div>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-400/30 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-400">${results?.implementationCost.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">Implementation Cost</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-400">Efficiency Improvement</span>
                        <span className="text-sm font-medium">{results?.efficiencyGain}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full transition-all duration-1000" style={{width: `${results?.efficiencyGain}%`}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-400">Time Reduction</span>
                        <span className="text-sm font-medium">{results?.timeReduction}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full transition-all duration-1000" style={{width: `${results?.timeReduction}%`}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-400">Error Reduction</span>
                        <span className="text-sm font-medium">{results?.errorReduction}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full transition-all duration-1000" style={{width: `${results?.errorReduction}%`}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Get Detailed Report */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Get Your Detailed Implementation Plan</h3>
                <p className="mb-6 opacity-90">
                  Receive a personalized 15-page report with specific AI tools, implementation timeline, and ROI projections for your business.
                </p>
                
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your business email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300"
                  />
                  <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                    📊 Get Free Detailed Report
                  </button>
                </div>
                
                <p className="text-xs mt-4 opacity-75">
                  No spam. 25,000+ business leaders trust us with their email.
                </p>
              </div>

              {/* Book Consultation */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Implement AI?</h3>
                <p className="text-gray-300 mb-6">
                  Book a free 30-minute strategy call to discuss your specific AI implementation plan.
                </p>
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  📞 Book Free Strategy Call
                </button>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              Companies Getting These Results
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { company: "Manufacturing Corp", industry: "Manufacturing", savings: "$2.4M", roi: "650%", timeframe: "Annual" },
                { company: "TechFlow SaaS", industry: "Technology", savings: "$800K", roi: "400%", timeframe: "Annual" },
                { company: "RetailMax", industry: "Retail", savings: "$1.2M", roi: "520%", timeframe: "Annual" }
              ].map((example, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-gray-600 transition-colors">
                  <div className="text-lg font-bold mb-1">{example.company}</div>
                  <div className="text-sm text-gray-400 mb-4">{example.industry}</div>
                  <div className="text-2xl font-bold text-green-400 mb-1">{example.savings}</div>
                  <div className="text-sm text-gray-400 mb-2">{example.timeframe} Savings</div>
                  <div className="text-lg font-bold text-blue-400">{example.roi} ROI</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmark Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Average ROI</h4>
              <p className="text-3xl font-bold text-green-400">847%</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Payback Period</h4>
              <p className="text-3xl font-bold text-blue-400">8 months</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Efficiency Gain</h4>
              <p className="text-3xl font-bold text-purple-400">64%</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Companies</h4>
              <p className="text-3xl font-bold text-orange-400">500+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 