import React from 'react';
import { Zap, Bot, Smartphone, ArrowRight } from 'lucide-react';

const ThreeCapabilities = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">The Three Capabilities</h1>
          <p className="text-xl text-gray-600">
            Build automations, deploy agents, and create apps—all in plain English
          </p>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12 border border-blue-200">
          <h2 className="text-2xl font-bold mb-4">What Makes Your Platform Unique</h2>
          <p className="text-lg mb-4">
            Most finance platforms offer either <strong>automation</strong> OR <strong>AI</strong> OR <strong>visualization</strong>. 
            You offer all three—integrated and maintainable—where users can build in plain English.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <Zap className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-bold mb-1">Automations</h3>
              <p className="text-sm text-gray-600">Business logic that runs automatically</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <Bot className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-bold mb-1">Agents</h3>
              <p className="text-sm text-gray-600">Intelligent assistants that handle exceptions</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
              <Smartphone className="w-8 h-8 text-purple-600 mb-2" />
              <h3 className="font-bold mb-1">Apps</h3>
              <p className="text-sm text-gray-600">Visualizations + interactions for users</p>
            </div>
          </div>
        </div>

        {/* Capability 1: Automations */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">1. Automations</h2>
              <p className="text-gray-600">Business logic that executes automatically</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-3">What Are Automations?</h3>
              <p className="text-gray-700 mb-3">
                Automations are deterministic workflows and rules written in plain English that execute automatically. 
                They handle the repetitive, rule-based work that currently requires manual effort.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h4 className="font-semibold mb-2">Example Automation:</h4>
                <code className="text-sm block">
                  When invoice is received:<br/>
                  &nbsp;&nbsp;Extract data using OCR<br/>
                  &nbsp;&nbsp;Match to purchase order by PO number<br/>
                  &nbsp;&nbsp;If amounts match within 2% → auto-approve<br/>
                  &nbsp;&nbsp;If no match found → send to agent for review<br/>
                  &nbsp;&nbsp;If approved → schedule payment based on terms
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Key Characteristics</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Deterministic:</strong> Same input always produces same output (no hallucinations)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>English as Code:</strong> Written in plain English using your interpreter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Audit-Ready:</strong> Every step is traceable and explainable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Always Maintainable:</strong> Logic stays clean, no spaghetti code</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Use Cases</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <strong className="text-green-600">Invoice Processing</strong>
                  <p className="text-sm text-gray-600">Extract, match, approve, schedule payment</p>
                </div>
                <div className="border rounded p-3">
                  <strong className="text-green-600">Reconciliation</strong>
                  <p className="text-sm text-gray-600">Match transactions, flag variances, route for review</p>
                </div>
                <div className="border rounded p-3">
                  <strong className="text-green-600">Month-End Close</strong>
                  <p className="text-sm text-gray-600">Task sequencing, status tracking, notification</p>
                </div>
                <div className="border rounded p-3">
                  <strong className="text-green-600">Policy Enforcement</strong>
                  <p className="text-sm text-gray-600">Check transactions, flag violations, route approvals</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capability 2: Agents */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Bot className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">2. Agents</h2>
              <p className="text-gray-600">Intelligent assistants that handle exceptions</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-3">What Are Agents?</h3>
              <p className="text-gray-700 mb-3">
                Agents are intelligent assistants (powered by LLMs) that handle exceptions, make contextual decisions, 
                and interact with users when automations encounter edge cases. They learn patterns over time and 
                document their decisions in the troubleshooting guide.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold mb-2">Example Agent Interaction:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-blue-600">Agent:</span>
                    <span>"I found invoice #12345 for $10,500 but PO #7890 shows $10,000. That's a 5% variance. I checked vendor history - they're a trusted vendor with 99% accuracy over 50 invoices. Based on Pattern #47 (trusted vendor, variance &lt;5%), I recommend auto-approval. Should I proceed?"</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-gray-600">User:</span>
                    <span>"Yes, approve it"</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2 text-blue-600">Agent:</span>
                    <span>"Approved. I've documented this decision in the troubleshooting guide under Pattern #47."</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Key Characteristics</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Context-Aware:</strong> Understands business rules, history, and patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Interactive:</strong> Can ask clarifying questions and explain reasoning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Learning:</strong> Patterns from decisions get documented automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Explainable:</strong> Every decision traceable to rules or learned patterns</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Use Cases</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <strong className="text-blue-600">Exception Handling</strong>
                  <p className="text-sm text-gray-600">Review variances, resolve matching issues</p>
                </div>
                <div className="border rounded p-3">
                  <strong className="text-blue-600">Approval Routing</strong>
                  <p className="text-sm text-gray-600">Determine appropriate approver based on context</p>
                </div>
                <div className="border rounded p-3">
                  <strong className="text-blue-600">Question Answering</strong>
                  <p className="text-sm text-gray-600">Answer employee questions about policies, status</p>
                </div>
                <div className="border rounded p-3">
                  <strong className="text-blue-600">Data Research</strong>
                  <p className="text-sm text-gray-600">Investigate anomalies, gather supporting evidence</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h4 className="font-semibold mb-2">Why This Matters:</h4>
              <p className="text-sm">
                Traditional automation breaks when it encounters an edge case. Your agents handle these gracefully 
                AND learn from them, so the automation gets smarter over time without polluting the core logic.
              </p>
            </div>
          </div>
        </div>

        {/* Capability 3: Apps */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Smartphone className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">3. Apps</h2>
              <p className="text-gray-600">Visualizations + interactions for users</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-3">What Are Apps?</h3>
              <p className="text-gray-700 mb-3">
                Apps are interactive interfaces that combine data visualization with user actions. They provide 
                dashboards, forms, reports, and controls that let users see what's happening and take action—all 
                connected to your automations and agents.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h4 className="font-semibold mb-2">Example App Structure:</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Visualization:</strong> Dashboard showing pending invoice approvals
                    <ul className="ml-4 mt-1 text-gray-600">
                      <li>• List of invoices requiring attention</li>
                      <li>• Variance details and vendor history</li>
                      <li>• Agent recommendations displayed</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Interactions:</strong> User actions trigger automations/agents
                    <ul className="ml-4 mt-1 text-gray-600">
                      <li>• Click "Approve" → Automation processes approval</li>
                      <li>• Click "Question" → Agent researches issue</li>
                      <li>• Click "Deny" → Automation notifies submitter</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Key Characteristics</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Visual Builder:</strong> Create interfaces without coding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Real-Time:</strong> Data updates automatically as automations run</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Interactive:</strong> User actions trigger automations and agents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Responsive:</strong> Works on desktop, tablet, mobile</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Types of Apps</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <strong className="text-purple-600">Dashboards</strong>
                  <p className="text-sm text-gray-600">Month-end close status, KPIs, alerts</p>
                </div>
                <div className="border rounded p-3">
                  <strong className="text-purple-600">Approval Centers</strong>
                  <p className="text-sm text-gray-600">Review and approve items requiring attention</p>
                </div>
                <div className="border rounded p-3">
                  <strong className="text-purple-600">Reports</strong>
                  <p className="text-sm text-gray-600">Interactive financial reports with drill-down</p>
                </div>
                <div className="border rounded p-3">
                  <strong className="text-purple-600">Forms</strong>
                  <p className="text-sm text-gray-600">Data entry forms that trigger automations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How They Work Together */}
        <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center">How They Work Together</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Example: Invoice Processing System</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <strong>Automation:</strong>
                    <p className="text-sm text-gray-700">Receives invoices, extracts data, matches to POs, routes based on rules</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3 mt-1">
                    <Bot className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <strong>Agent:</strong>
                    <p className="text-sm text-gray-700">Handles exceptions when match is ambiguous, checks vendor history, recommends action</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-3 mt-1">
                    <Smartphone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <strong>App:</strong>
                    <p className="text-sm text-gray-700">Shows pending approvals in dashboard, displays agent recommendation, enables one-click approval</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold mb-3">The Complete Flow:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>Invoice arrives</strong> → Automation extracts data and attempts PO match</li>
                <li><strong>Variance found</strong> → Automation sends to Agent for review</li>
                <li><strong>Agent investigates</strong> → Checks vendor history, applies learned patterns, generates recommendation</li>
                <li><strong>App displays</strong> → Shows invoice details, variance explanation, agent recommendation</li>
                <li><strong>User clicks "Approve"</strong> → App triggers Automation to process approval</li>
                <li><strong>Agent documents</strong> → Adds pattern to troubleshooting guide for future similar cases</li>
                <li><strong>Automation completes</strong> → Schedules payment, updates records, notifies relevant parties</li>
                <li><strong>App updates</strong> → Removes from pending list, updates dashboard metrics</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Key Messaging */}
        <div className="mt-12 bg-blue-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Key Messages for Marketing</h2>
          <div className="space-y-3">
            <p className="text-blue-100">
              ✓ <strong>Three integrated capabilities</strong> - not three separate products
            </p>
            <p className="text-blue-100">
              ✓ <strong>All built in plain English</strong> - no coding required for any of them
            </p>
            <p className="text-blue-100">
              ✓ <strong>Work together seamlessly</strong> - automations call agents, apps trigger automations
            </p>
            <p className="text-blue-100">
              ✓ <strong>Stay maintainable forever</strong> - clean architecture across all three layers
            </p>
            <p className="text-blue-100">
              ✓ <strong>Start with prebuilt apps</strong> - every prebuilt app includes automations + agents + interface
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCapabilities;