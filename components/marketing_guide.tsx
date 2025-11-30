import React, { useState } from 'react';
import { Book, Target, MessageSquare, TrendingUp, Users, FileText, Zap, Shield, LucideIcon } from 'lucide-react';

type SectionKey = 'positioning' | 'architecture' | 'messaging' | 'outcomes' | 'content';

const MarketingGuide = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('positioning');

  const sections: Record<SectionKey, { title: string; icon: LucideIcon; content: React.ReactNode }> = {
    positioning: {
      title: 'Core Positioning',
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-bold text-lg mb-2">Primary Value Proposition</h3>
            <p className="text-lg italic mb-4">
              "Build automations, agents, and apps for finance—in plain English—without the burden of managing infrastructure."
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl">The Three-Way Contrast</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded p-4 bg-red-50">
                <h4 className="font-bold mb-2">❌ Traditional Automation</h4>
                <p className="text-sm mb-2">Fast to deploy, stuck with their way</p>
                <p className="text-xs text-gray-600">Low Control, Low Burden</p>
              </div>
              <div className="border rounded p-4 bg-red-50">
                <h4 className="font-bold mb-2">❌ Custom Development</h4>
                <p className="text-sm mb-2">Total control, endless maintenance</p>
                <p className="text-xs text-gray-600">High Control, High Burden</p>
              </div>
              <div className="border rounded p-4 bg-green-50">
                <h4 className="font-bold mb-2">✅ Your Platform</h4>
                <p className="text-sm mb-2">Build what you need, we handle the rest</p>
                <p className="text-xs text-gray-600">High Control, Low Burden</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xl">Tagline Options</h3>
            <ul className="space-y-2">
              <li className="pl-4 border-l-2 border-blue-500">Build automations, agents, and apps that stay clean</li>
              <li className="pl-4 border-l-2 border-blue-500">Your automations. Your agents. Your apps. Our infrastructure.</li>
              <li className="pl-4 border-l-2 border-blue-500">Build it. Run it. Still understand it two years later.</li>
              <li className="pl-4 border-l-2 border-blue-500">Finance automation that gets smarter without getting messier</li>
              <li className="pl-4 border-l-2 border-blue-500">English as code. Exceptions as learning. Logic as documentation.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h3 className="font-bold mb-2">Key Differentiator: Maintainability</h3>
            <p className="mb-2">Most automation systems decay over time. Ours gets better.</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>English interpreter keeps logic readable</li>
              <li>LLM handles exceptions without polluting core</li>
              <li>Troubleshooting guide captures institutional knowledge</li>
              <li>Apps remain maintainable after 2+ years</li>
            </ul>
          </div>
        </div>
      )
    },
    architecture: {
      title: 'Technical Story',
      icon: Zap,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">The Three-Layer Architecture</h3>
            
            <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
              <h4 className="font-bold mb-1">Layer 1: Core Business Logic</h4>
              <p className="text-sm mb-2">English Interpreter - Powers automations, agents, and apps</p>
              <code className="text-xs bg-white p-2 block rounded">
                "When invoice received, match to PO. If matched, auto-approve. If not, route to agent for review."
              </code>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
              <h4 className="font-bold mb-1">Layer 2: Exception Handling</h4>
              <p className="text-sm mb-2">Intelligent Agents - Handle edge cases, interact with users</p>
              <code className="text-xs bg-white p-2 block rounded">
                Agent: "Invoice $10,500, PO says $10,000. Variance 5%. I can auto-approve since vendor is trusted. Proceed?"
              </code>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
              <h4 className="font-bold mb-1">Layer 3: Troubleshooting Guide</h4>
              <p className="text-sm mb-2">Learned Patterns - Captures institutional knowledge</p>
              <code className="text-xs bg-white p-2 block rounded">
                Pattern #47: "When variance &lt;5% from trusted vendor → auto-approve"
              </code>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-bold mb-3">Key Technical Messages</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="font-bold mr-2 text-green-600">✓</span>
                <span><strong>Neurosymbolic AI:</strong> No hallucinations, mathematical certainty</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-green-600">✓</span>
                <span><strong>English as Code:</strong> Anyone can read and modify business logic</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-green-600">✓</span>
                <span><strong>Clean Core:</strong> Business logic never becomes spaghetti code</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-green-600">✓</span>
                <span><strong>Audit-Ready:</strong> Every decision traceable to a rule or learned pattern</span>
              </li>
            </ul>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">The Maintainability Story</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Traditional Automation Death Spiral</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Start with clean rules</li>
                  <li>Add exceptions as edge cases appear</li>
                  <li>Rules become nested nightmares</li>
                  <li>Only one person understands it</li>
                  <li>Fear of changing anything</li>
                  <li>"We need to rebuild from scratch"</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Your Platform's Evolution</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Start with clean English rules</li>
                  <li>Exceptions handled by LLM</li>
                  <li>Patterns learned into guide</li>
                  <li>Core logic stays readable</li>
                  <li>Anyone can modify it</li>
                  <li>System evolves cleanly over time</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )
    },
    messaging: {
      title: 'Key Messages',
      icon: MessageSquare,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Primary Messages by Audience</h3>
            
            <div className="border rounded p-4">
              <h4 className="font-bold mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                For CFOs
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Build custom automations and agents without IT dependency</li>
                <li>Create interactive apps for board reporting and scenario analysis</li>
                <li>Measurable ROI in under 12 months</li>
                <li>Your finance platform becomes an asset, not technical debt</li>
                <li>"What happens when the builder leaves?" - Everything's in plain English</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                For Controllers
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create automations for close tasks, reconciliations, reviews</li>
                <li>Deploy agents that handle exceptions and escalations</li>
                <li>Build apps (dashboards + interactions) for your team</li>
                <li>Everything in English - no coding required</li>
                <li>Troubleshooting guide captures team knowledge automatically</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                For Finance Operations
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Automate repetitive tasks without losing control</li>
                <li>Create agents that handle routine questions and exceptions</li>
                <li>Build apps that visualize your metrics and enable quick actions</li>
                <li>Modify automations yourself in plain English</li>
                <li>System learns from your decisions</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold mb-2 flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                For Auditors/Compliance
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Every decision traceable to a rule or pattern</li>
                <li>No black-box AI to question</li>
                <li>Neurosymbolic engine = mathematical certainty</li>
                <li>Audit trails built automatically</li>
                <li>Exception handling fully documented</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-bold mb-3">Battle Cards: vs. Competition</h3>
            
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold">vs. Traditional Rules Engines</h4>
                <p><strong>They say:</strong> "Powerful rules engine with unlimited flexibility"</p>
                <p className="text-green-700"><strong>You say:</strong> "Can your team read this: IF (amount &gt; 500 AND category IN ['travel','meals'] AND date_diff...)? Ours says: 'Approve travel expenses under $500 if submitted within 30 days'"</p>
              </div>

              <div>
                <h4 className="font-semibold">vs. Pure AI/LLM Systems</h4>
                <p><strong>They say:</strong> "AI-powered automation with machine learning"</p>
                <p className="text-green-700"><strong>You say:</strong> "Can they tell you exactly WHY the AI approved that transaction? We can trace it to Rule #47 or Learned Pattern #23. No hallucinations, no black boxes."</p>
              </div>

              <div>
                <h4 className="font-semibold">vs. Low-Code Platforms</h4>
                <p><strong>They say:</strong> "Build custom apps without coding"</p>
                <p className="text-green-700"><strong>You say:</strong> "Can you understand what you built 6 months later? Our English interpreter + exception learning keeps apps maintainable forever."</p>
              </div>

              <div>
                <h4 className="font-semibold">vs. Enterprise Finance Software</h4>
                <p><strong>They say:</strong> "Industry best practices built-in"</p>
                <p className="text-green-700"><strong>You say:</strong> "Best practices are a starting point. What about YOUR practices? Build your way, keep control, we handle infrastructure."</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    outcomes: {
      title: 'Measurable Outcomes',
      icon: TrendingUp,
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="font-bold mb-2">Frame Outcomes as "Results That Last"</h3>
            <p className="text-sm">Every outcome should emphasize both immediate impact AND long-term maintainability</p>
          </div>

          <div className="space-y-4">
            <div className="border rounded p-4">
              <h4 className="font-bold text-lg mb-2">1. Close 40-70% Faster - And Keep Getting Faster</h4>
              <p className="text-sm mb-2">Cut close time from 10 days to 3-5 days</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Core close logic stays clean and readable</li>
                <li>Exception handling learns patterns automatically</li>
                <li>Improvements compound, don't degrade</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold text-lg mb-2">2. Achieve ROI in Under 12 Months</h4>
              <p className="text-sm mb-2">Platform pays for itself through time/cost savings</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Fast implementation (start with prebuilt apps)</li>
                <li>No ongoing maintenance costs</li>
                <li>Zero technical debt accumulation</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold text-lg mb-2">3. Forecast Accuracy Improves 20-40% - Model Stays Understandable</h4>
              <p className="text-sm mb-2">Better predictions, better planning</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Core forecast logic in plain English</li>
                <li>Exception learning captures seasonal patterns</li>
                <li>CFO can explain the forecast, not just accept it</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold text-lg mb-2">4. Automate 80-95% of Reconciliations - Without Creating Tech Debt</h4>
              <p className="text-sm mb-2">Most reconciliations happen automatically</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Core matching rules stay simple</li>
                <li>Complex cases handled by exception learning</li>
                <li>Your successor can maintain it on day one</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold text-lg mb-2">5. Cut Invoice Processing Time 50-76%</h4>
              <p className="text-sm mb-2">Process invoices in seconds vs. hours</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Fast approval workflows you can modify</li>
                <li>Exception patterns learned automatically</li>
                <li>Faster payments, better vendor relationships</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold text-lg mb-2">6. Reduce Audit Findings 30-50% - With Clear Audit Trail</h4>
              <p className="text-sm mb-2">Fewer control failures and violations</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Core policies clearly documented in English</li>
                <li>Every decision traceable to rule or pattern</li>
                <li>Auditors can understand and trust the system</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold text-lg mb-2">7. Save 20-30% of Finance Team Time</h4>
              <p className="text-sm mb-2">Shift from data entry to strategic work</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Automate the repetitive, keep control of the strategic</li>
                <li>Team can modify automation themselves</li>
                <li>No waiting on IT for changes</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold text-lg mb-2">8. Detect Fraud 50%+ Faster - With Explainable Logic</h4>
              <p className="text-sm mb-2">Real-time anomaly detection</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Define what's risky for YOUR business</li>
                <li>System learns patterns over time</li>
                <li>Every alert explained clearly</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold text-lg mb-2">9. Reduce DSO by 15-25%</h4>
              <p className="text-sm mb-2">Collect receivables faster</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Automated reminders with smart timing</li>
                <li>Learn which customers need different approaches</li>
                <li>Better cash flow, less financing needed</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-bold text-lg mb-2">10. Increase Data Accuracy to 95%+ - And Keep It There</h4>
              <p className="text-sm mb-2">Near-elimination of manual errors</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Neurosymbolic engine = no hallucinations</li>
                <li>Validation rules in plain English</li>
                <li>System quality doesn't degrade over time</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    content: {
      title: 'Content Strategy',
      icon: FileText,
      content: (
        <div className="space-y-6">
          <h3 className="font-bold text-xl">Marketing Asset Roadmap</h3>

          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold mb-2">Priority 1: Foundation Assets</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Platform website (hero, features, demo request)</li>
                <li>1-pager: Platform overview</li>
                <li>1-pagers: Each of 10 prebuilt apps</li>
                <li>Demo script showing 3-layer architecture</li>
                <li>ROI calculator (including maintainability costs)</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold mb-2">Priority 2: Thought Leadership</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Whitepaper: "The Maintainability Manifesto"</li>
                <li>Blog series: "English as Code" explainers</li>
                <li>Video: "Exception Learning in Action" (3-min demo)</li>
                <li>Case study template for early customers</li>
                <li>Comparison guide: Traditional vs. AI vs. Your Platform</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold mb-2">Priority 3: Sales Enablement</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Battle cards for each competitor</li>
                <li>Customer testimonial: "What Auditors Think"</li>
                <li>Technical deep-dive deck for IT buyers</li>
                <li>Security & compliance documentation</li>
                <li>Implementation timeline and support model</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-bold mb-2">Priority 4: Community & Education</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>English as Code tutorial series</li>
                <li>Prebuilt app modification guides</li>
                <li>Community troubleshooting guide contributions</li>
                <li>Monthly webinar: "Finance Automation Best Practices"</li>
                <li>Certification program for power users</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-bold mb-3">Content Themes by Quarter</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Q1: "Take Back Control"</h4>
                <p>Focus on autonomy, flexibility, no vendor lock-in</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Q2: "Built to Last"</h4>
                <p>Focus on maintainability, evolution, zero tech debt</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Q3: "Measurable Impact"</h4>
                <p>Focus on ROI, outcomes, customer success stories</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Q4: "Enterprise Ready"</h4>
                <p>Focus on scale, security, audit readiness</p>
              </div>
            </div>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-bold mb-3">SEO Keywords to Target</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Primary</h4>
                <ul className="space-y-1">
                  <li>• finance automation platform</li>
                  <li>• month-end close software</li>
                  <li>• reconciliation automation</li>
                  <li>• financial close management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Secondary</h4>
                <ul className="space-y-1">
                  <li>• no-code finance</li>
                  <li>• maintainable automation</li>
                  <li>• english as code</li>
                  <li>• audit-ready finance software</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Long-tail</h4>
                <ul className="space-y-1">
                  <li>• reduce month-end close time</li>
                  <li>• finance automation without coding</li>
                  <li>• maintainable finance workflows</li>
                  <li>• AI finance without hallucinations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const Section = sections[activeSection];
  const Icon = Section.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <Book className="w-8 h-8 mr-3" />
            <h1 className="text-3xl font-bold">Marketing Guide</h1>
          </div>
          <p className="text-blue-100">Finance Platform - Complete Marketing Strategy & Messaging</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
              <h2 className="font-bold mb-4 text-sm uppercase text-gray-600">Sections</h2>
              <nav className="space-y-2">
                {Object.entries(sections).map(([key, section]) => {
                  const NavIcon = section.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSection(key as SectionKey)}
                      className={`w-full text-left px-3 py-2 rounded flex items-center text-sm transition-colors ${
                        activeSection === key
                          ? 'bg-blue-100 text-blue-700 font-semibold'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <NavIcon className="w-4 h-4 mr-2" />
                      {section.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <Icon className="w-6 h-6 mr-3 text-blue-600" />
                <h2 className="text-2xl font-bold">{Section.title}</h2>
              </div>
              {Section.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingGuide;