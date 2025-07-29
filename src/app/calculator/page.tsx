"use client";

import Link from "next/link";
import { useState } from "react";

export default function Calculator() {
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
              <Link href="/stories" className="text-gray-700 hover:text-blue-600">Success Stories</Link>
              <Link href="/tools" className="text-gray-700 hover:text-blue-600">AI Tools</Link>
              <Link href="/calculator" className="text-blue-600 font-medium">ROI Calculator</Link>
              <Link href="/consultation" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Help</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI ROI <span className="text-blue-600">Calculator</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover how much your business could save with AI implementation
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Based on 500+ implementations
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Industry-specific calculations
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Free detailed report
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Business Metrics</h2>
            
            <div className="space-y-6">
              {/* Industry Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select 
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Operating Costs ($) *
                </label>
                <input
                  type="number"
                  name="monthlyCosts"
                  value={formData.monthlyCosts}
                  onChange={handleInputChange}
                  placeholder="e.g., 500000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Include payroll, inventory, overhead, etc.</p>
              </div>

              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees *
                </label>
                <input
                  type="number"
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  placeholder="e.g., 250"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Current Processing Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Order/Request Processing Time (hours)
                </label>
                <input
                  type="number"
                  name="currentProcessingTime"
                  value={formData.currentProcessingTime}
                  onChange={handleInputChange}
                  placeholder="e.g., 24"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Error Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Error Rate (%)
                </label>
                <input
                  type="number"
                  name="errorRate"
                  value={formData.errorRate}
                  onChange={handleInputChange}
                  placeholder="e.g., 5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Customer Support Tickets */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Customer Support Tickets
                </label>
                <input
                  type="number"
                  name="customerSupportTickets"
                  value={formData.customerSupportTickets}
                  onChange={handleInputChange}
                  placeholder="e.g., 1000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 font-medium text-lg"
              >
                🧮 Calculate My AI ROI
              </button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {!showResults ? (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Get:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">✅</span>
                    <div>
                      <div className="font-medium text-gray-900">Detailed ROI Analysis</div>
                      <div className="text-gray-600 text-sm">Monthly and annual savings projections</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">✅</span>
                    <div>
                      <div className="font-medium text-gray-900">Implementation Roadmap</div>
                      <div className="text-gray-600 text-sm">Step-by-step AI adoption plan</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">✅</span>
                    <div>
                      <div className="font-medium text-gray-900">Tool Recommendations</div>
                      <div className="text-gray-600 text-sm">Specific AI tools for your industry</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">✅</span>
                    <div>
                      <div className="font-medium text-gray-900">Risk Assessment</div>
                      <div className="text-gray-600 text-sm">Implementation challenges and solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI ROI Results</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">${results?.annualSavings.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{results?.roi}%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">{results?.paybackMonths} months</div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">${results?.implementationCost.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Implementation Cost</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Efficiency Improvement</span>
                      <span className="text-sm font-medium">{results?.efficiencyGain}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: `${results?.efficiencyGain}%`}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Time Reduction</span>
                      <span className="text-sm font-medium">{results?.timeReduction}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: `${results?.timeReduction}%`}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Error Reduction</span>
                      <span className="text-sm font-medium">{results?.errorReduction}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: `${results?.errorReduction}%`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Get Detailed Report */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
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
                  className="w-full px-4 py-3 rounded-lg text-gray-900"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  className="w-full px-4 py-3 rounded-lg text-gray-900"
                />
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 font-medium">
                  📊 Get Free Detailed Report
                </button>
              </div>
              
              <p className="text-xs mt-4 opacity-75">
                No spam. 4,000+ business leaders trust us with their email.
              </p>
            </div>

            {/* Book Consultation */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Implement AI?</h3>
              <p className="text-gray-600 mb-6">
                Book a free 30-minute strategy call to discuss your specific AI implementation plan.
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium">
                📞 Book Free Strategy Call
              </button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Companies Getting These Results
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { company: "Manufacturing Corp", industry: "Manufacturing", savings: "$2.4M", roi: "650%" },
              { company: "TechFlow SaaS", industry: "Technology", savings: "$800K", roi: "400%" },
              { company: "RetailMax", industry: "Retail", savings: "$1.2M", roi: "520%" }
            ].map((example, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-lg font-bold text-gray-900">{example.company}</div>
                <div className="text-sm text-gray-600 mb-3">{example.industry}</div>
                <div className="text-2xl font-bold text-green-600">{example.savings}</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
                <div className="text-lg font-bold text-blue-600 mt-2">{example.roi} ROI</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 