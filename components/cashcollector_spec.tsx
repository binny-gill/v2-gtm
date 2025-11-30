import React, { useState } from 'react';
import { Zap, Bot, Smartphone, ChevronDown, ChevronRight, Code, MessageSquare, Layout } from 'lucide-react';

const CashCollectorSpec = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">CashCollector App</h1>
          <p className="text-xl text-amber-100 mb-4">Complete Technical Specification</p>
          <p className="text-sm text-amber-200 mb-6">Reduce DSO by 15-25% with intelligent collection strategies</p>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              <span>12 Automations</span>
            </div>
            <div className="flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              <span>5 Agents</span>
            </div>
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>7 Apps</span>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <button
            onClick={() => toggleSection('overview')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <Layout className="w-6 h-6 text-gray-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Overview</h2>
                <p className="text-gray-600">How CashCollector components work together</p>
              </div>
            </div>
            {expandedSection === 'overview' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'overview' && (
            <div className="p-6 border-t space-y-6">
              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 p-6 rounded-lg border">
                <h3 className="font-bold text-xl mb-4">The Complete System</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong className="text-amber-600">Automations</strong> drive systematic collections: analyzing aging, calculating risk scores, triggering reminder campaigns, prioritizing accounts, tracking payment promises, and measuring collection effectiveness—all running continuously to maximize cash collection.
                  </p>
                  <p>
                    <strong className="text-orange-600">Agents</strong> provide intelligent assistance: crafting personalized reminder messages, researching payment history, negotiating payment plans, handling disputes, and learning which approaches work best for different customer segments.
                  </p>
                  <p>
                    <strong className="text-yellow-600">Apps</strong> enable efficient workflow: dashboards prioritize collection calls, customer portals enable self-service payment, campaign builders create reminder sequences, and analytics show which strategies are working.
                  </p>
                  <div className="bg-white p-4 rounded mt-4">
                    <strong>Example end-to-end flow:</strong>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-700">
                      <li>Aging Analysis Automation runs nightly, identifies $50K invoice 5 days past due</li>
                      <li>Risk Scoring Automation calculates: Customer A, high value, good history, 80/100 score</li>
                      <li>Campaign Trigger Automation determines: Send "Friendly Reminder" email (Day 5 template)</li>
                      <li>Message Drafting Agent personalizes email based on customer relationship and history</li>
                      <li>Email sent automatically with payment link to <em>Customer Portal App</em></li>
                      <li>Customer clicks link, sees invoice in portal, schedules payment for 3 days out</li>
                      <li>Payment Promise Automation logs commitment, sets follow-up reminder</li>
                      <li>3 days later: Payment received automatically via portal</li>
                      <li>Collection Success Automation updates metrics, marks invoice paid</li>
                      <li>Pattern Learning Automation notes: "Customer A responds to Day 5 email, pays within 3 days"</li>
                      <li><em>Collection Dashboard</em> shows DSO reduced by 2 days this month</li>
                      <li>For non-responsive Customer B: Escalation Automation creates task for collector call</li>
                      <li>Collector opens <em>Call Prep App</em>, sees customer history and <em>Negotiation Agent</em> recommendations</li>
                      <li>After call, collector logs outcome, Payment Plan Agent helps structure terms</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Automations Section */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <button
            onClick={() => toggleSection('automations')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Automations (English as Code)</h2>
                <p className="text-gray-600">12 core automations that drive systematic collections</p>
              </div>
            </div>
            {expandedSection === 'automations' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'automations' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Automation 1 */}
              <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. AR Aging Analysis Automation</h3>
                  <Code className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Daily at 6:00 AM</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When AR aging analysis runs:
  Connect to ERP system and extract open invoices
  For each open invoice:
    Calculate days outstanding:
      Days = Today - Invoice Due Date
    Categorize by aging bucket:
      - Current: 0-30 days
      - 31-60 days
      - 61-90 days  
      - 91-120 days
      - 121+ days (Seriously Delinquent)
    Calculate overdue amount if past due date
    Get customer information:
      - Customer name and contact details
      - Payment terms
      - Credit limit
      - Customer segment (Enterprise, SMB, etc.)
    Get payment history:
      - Average days to pay historically
      - Number of past due occurrences
      - Dispute history
      - Payment method preferences
  
  Calculate portfolio-level metrics:
    - Total AR outstanding
    - DSO (Days Sales Outstanding)
    - AR by aging bucket
    - Collections needed to hit DSO target
  
  Identify priority accounts:
    - Invoices >$10K that are past due
    - Customers with >3 overdue invoices
    - Accounts that have gone from current to 60+ days
    - Customers approaching credit limit
  
  Generate aging report with:
    - Aging summary by bucket
    - Top 20 overdue accounts by $
    - Trend analysis vs prior periods
    - At-risk accounts flagged
  
  Send daily aging summary to collections manager
  Trigger Risk Scoring Automation for overdue accounts`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">erp.get_open_invoices()</code> - Extract open AR</div>
                    <div>• <code className="bg-white px-1">date.calculate_days_outstanding(invoice_date, due_date)</code> - Calculate aging</div>
                    <div>• <code className="bg-white px-1">customer.get_profile(customer_id)</code> - Get customer details</div>
                    <div>• <code className="bg-white px-1">history.get_payment_patterns(customer_id)</code> - Get payment history</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_dso(invoices, revenue)</code> - Calculate DSO</div>
                    <div>• <code className="bg-white px-1">reports.generate_aging(invoices, grouping)</code> - Generate report</div>
                  </div>
                </div>
              </div>

              {/* Automation 2 */}
              <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Customer Risk Scoring Automation</h3>
                  <Code className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After aging analysis completes, or when invoice status changes</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When calculating customer collection risk score:
  Get customer's complete profile:
    - Total AR balance outstanding
    - Number of overdue invoices
    - Longest overdue invoice age
    - Payment history (last 12 months)
    - Average days to pay
    - Dispute frequency
    - Credit limit utilization %
  
  Calculate risk factors (each 0-100 scale):
    
    Payment History Factor (40% weight):
      - On-time payment rate last 12 months
      - Trend: improving or declining?
      - Previous defaults or write-offs
      Score: Higher = better payment history
    
    Current Status Factor (30% weight):
      - Days past due on oldest invoice
      - Number of overdue invoices
      - Overdue amount as % of total AR
      Score: Higher = more current
    
    Financial Health Factor (20% weight):
      - Credit limit utilization
      - Payment method (ACH auto-pay gets bonus)
      - Customer segment and size
      Score: Higher = better financial position
    
    Relationship Factor (10% weight):
      - Length of relationship
      - Total lifetime revenue
      - Contact responsiveness
      Score: Higher = stronger relationship
  
  Calculate composite risk score (0-100):
    Score = (History × 0.4) + (Status × 0.3) + 
            (Financial × 0.2) + (Relationship × 0.1)
  
  Assign risk category:
    90-100: Low Risk (Green) - Strong payer
    70-89: Medium Risk (Yellow) - Monitor closely
    50-69: High Risk (Orange) - Priority collection
    Below 50: Critical Risk (Red) - Escalate immediately
  
  Set collection strategy based on risk:
    Low Risk: Standard reminder cadence
    Medium Risk: Accelerated reminder schedule
    High Risk: Personal outreach required
    Critical Risk: Hold orders, executive escalation
  
  Update customer record with:
    - Current risk score
    - Risk category
    - Score change from last period
    - Recommended collection strategy
  
  Flag significant changes:
    If score drops >20 points in one period:
      Alert collections manager
      Create immediate outreach task`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">customer.get_complete_profile(customer_id)</code> - Get full profile</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_payment_rate(customer_id, period)</code> - Payment rate</div>
                    <div>• <code className="bg-white px-1">scoring.calculate_factor(data, weight)</code> - Calculate factor score</div>
                    <div>• <code className="bg-white px-1">scoring.calculate_composite(factors, weights)</code> - Composite score</div>
                    <div>• <code className="bg-white px-1">strategy.determine_collection_approach(risk_score)</code> - Set strategy</div>
                  </div>
                </div>
              </div>

              {/* Automation 3 */}
              <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Collection Campaign Trigger Automation</h3>
                  <Code className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After risk scoring completes, checks every 4 hours</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When evaluating if collection campaign should trigger:
  For each overdue invoice:
    Get customer segment and preferences:
      - Customer type: Enterprise, SMB, Individual
      - Communication preference: Email, Phone, Portal
      - Language preference
      - Time zone
    
    Get invoice aging and amount:
      - Days past due
      - Invoice amount
      - Prior reminder history
    
    Determine campaign trigger based on rules:
      
      Day -7 (before due date):
        If invoice >$25K:
          Send "Upcoming Payment" courtesy reminder
      
      Day 0 (due date):
        Send "Payment Due Today" reminder via email
        Include payment link to customer portal
      
      Day 5 (5 days overdue):
        If customer segment = Enterprise:
          Send "Friendly Reminder" email
        If customer segment = SMB:
          Send email + SMS text reminder
      
      Day 15 (15 days overdue):
        If no response to prior reminders:
          Create task for collector phone call
          Send "Urgent - Please Respond" email
        If invoice >$50K:
          Escalate to senior collector
      
      Day 30 (30 days overdue):
        If still no payment:
          Create task for manager escalation call
          Send "Final Notice" email
          Hold future orders (if policy allows)
      
      Day 45 (45 days overdue):
        Route to executive escalation
        Consider payment plan offer
        Evaluate for collections agency
      
      Day 60+ (seriously delinquent):
        Flag for write-off consideration
        Legal review if amount justifies
    
    Apply customer-specific overrides:
      If customer has dispute open:
        Pause collection reminders until resolved
      If customer has payment promise:
        Skip reminders until promise date
      If customer is on payment plan:
        Follow payment plan schedule instead
      If customer has auto-pay enabled:
        Reduce reminder frequency
    
    Select appropriate message template:
      Based on: days overdue, customer segment, 
               relationship strength, amount
    
    Determine communication channel priority:
      1st attempt: Customer's preferred method
      2nd attempt: Alternative method if no response
    
    Log campaign trigger in audit trail
    Queue message for Message Drafting Agent personalization
    Schedule send time (business hours in customer timezone)`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">customer.get_preferences(customer_id)</code> - Get preferences</div>
                    <div>• <code className="bg-white px-1">campaigns.evaluate_trigger_rules(invoice, rules)</code> - Check rules</div>
                    <div>• <code className="bg-white px-1">templates.select_message(criteria)</code> - Select template</div>
                    <div>• <code className="bg-white px-1">tasks.create_collector_task(invoice, priority)</code> - Create task</div>
                    <div>• <code className="bg-white px-1">queue.schedule_message(message, send_time)</code> - Schedule send</div>
                  </div>
                </div>
              </div>

              {/* Automation 4 */}
              <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Payment Promise Tracking Automation</h3>
                  <Code className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When payment promise is logged, checks daily</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When managing payment promises:
  
  When new payment promise is created:
    Record promise details:
      - Invoice number(s) covered
      - Promised payment date
      - Promised amount
      - Customer name and contact
      - Who took the promise (collector name)
      - Promise date and time
      - Notes from conversation
    
    Pause collection campaigns:
      Stop automated reminders for these invoices
      Set reminder to resume if promise not kept
    
    Set follow-up reminders:
      - Day before promise date: Courtesy reminder to customer
      - Day of promise date: Check if payment received
      - Day after promise date: Follow up if payment missing
    
    Add promise to tracking dashboard
    Update customer notes
  
  Daily promise monitoring:
    For each active payment promise:
      Check promise date:
        
        If promise date is tomorrow:
          Send courtesy reminder to customer:
            "This is a friendly reminder that payment of $X 
             is expected tomorrow per our conversation on [date]"
          Alert assigned collector
        
        If promise date is today:
          Monitor for payment throughout day
          If payment received by 5 PM:
            Mark promise as "Kept"
            Update customer reliability score positively
            Send thank you message
            Resume normal collection cadence for other invoices
          If no payment by 5 PM:
            Flag for immediate follow-up
        
        If promise date was yesterday (missed):
          Mark promise as "Broken"
          Update customer reliability score negatively
          Create urgent follow-up task for collector:
            "Payment promise for $X was not kept"
          Escalate reminder intensity
          Resume collection campaigns immediately
  
  Track promise reliability:
    For each customer, calculate:
      - Total promises made
      - Promises kept on time
      - Promises kept late (within 3 days)
      - Promises broken
      - Reliability score = Kept / Total
    
    Use reliability in future decisions:
      High reliability (>80%): Accept promises readily
      Medium reliability (50-80%): Get confirmation in writing
      Low reliability (<50%): Escalate immediately, no more promises
  
  Generate promise tracking report:
    - Active promises by collector
    - Promises due this week
    - Broken promise count and $
    - Customer reliability rankings`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">promises.create(invoice_ids, date, amount, details)</code> - Log promise</div>
                    <div>• <code className="bg-white px-1">campaigns.pause(invoice_ids, reason)</code> - Pause campaigns</div>
                    <div>• <code className="bg-white px-1">payments.check_received(invoice_id, date)</code> - Check payment</div>
                    <div>• <code className="bg-white px-1">promises.mark_status(promise_id, status)</code> - Update status</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_reliability(customer_id)</code> - Calculate reliability</div>
                  </div>
                </div>
              </div>

              {/* Automation 5 */}
              <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">5. Dispute Management Automation</h3>
                  <Code className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When dispute is logged, checks daily for resolution</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When customer disputes an invoice:
  
  Log dispute details:
    - Invoice number and amount
    - Dispute reason category:
      * Pricing disagreement
      * Product/service issue
      * Duplicate invoice
      * Already paid (proof needed)
      * Credit memo pending
      * Other
    - Customer explanation
    - Supporting documents attached
    - Dispute date and reporter
  
  Automatically pause collections:
    Stop all collection reminders for disputed invoice
    Add note to invoice: "Under dispute - collections paused"
    Update aging report to show dispute status
  
  Route for investigation:
    Determine investigation owner based on dispute type:
      - Pricing issue → Sales Operations
      - Product issue → Customer Success
      - Duplicate/Already paid → AR Team
      - Credit memo → Billing Team
    
    Create investigation task with:
      - Summary of dispute
      - Customer contact info
      - Invoice details and documents
      - Resolution SLA (5 business days)
  
  Track dispute resolution:
    Set milestone checkpoints:
      - Day 1: Investigation started
      - Day 3: Initial findings communicated to customer
      - Day 5: Resolution proposed
      - Day 7: If not resolved, escalate to manager
    
    Monitor for resolution status changes:
      If resolved - Valid dispute:
        Issue credit memo
        Update invoice status
        Adjust AR balance
        Send confirmation to customer
        Log resolution for future reference
      
      If resolved - Invalid dispute:
        Provide documentation to customer
        Resume collection activities
        Explain findings clearly
        Offer payment arrangement if needed
      
      If partial resolution:
        Adjust invoice amount
        Resume collection for remaining balance
  
  Track dispute metrics:
    - Average time to resolve by category
    - Valid vs invalid dispute rate
    - Dispute rate by customer
    - Financial impact of valid disputes
  
  Learn from patterns:
    If same dispute type recurring:
      Flag for process improvement
      Update customer communications
      Train team on prevention`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">disputes.create(invoice_id, reason, details)</code> - Log dispute</div>
                    <div>• <code className="bg-white px-1">campaigns.pause_for_dispute(invoice_id)</code> - Pause collections</div>
                    <div>• <code className="bg-white px-1">routing.assign_investigator(dispute_type)</code> - Route for investigation</div>
                    <div>• <code className="bg-white px-1">disputes.update_status(dispute_id, status, resolution)</code> - Update status</div>
                    <div>• <code className="bg-white px-1">analytics.dispute_metrics(period)</code> - Calculate metrics</div>
                  </div>
                </div>
              </div>

              {/* Remaining Automations Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Automations 6-12:</strong>
                <ul className="mt-2 space-y-2 list-none">
                  <li><strong>6. Priority Queue Management</strong> - Calculates daily priority list for collectors based on amount, risk, age</li>
                  <li><strong>7. Payment Plan Setup</strong> - Creates installment schedules, sets up auto-reminders for each installment</li>
                  <li><strong>8. Customer Portal Access</strong> - Generates secure payment links, tracks portal activity</li>
                  <li><strong>9. Collection Success Tracking</strong> - Measures effectiveness by campaign, channel, collector</li>
                  <li><strong>10. Credit Hold Management</strong> - Automatically holds orders when limits exceeded, releases when paid</li>
                  <li><strong>11. Escalation Workflow</strong> - Routes high-value/aged accounts through escalation tiers</li>
                  <li><strong>12. Pattern Learning</strong> - Learns which approaches work for which customer segments</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">Each follows the same pattern: English as code + specific tools</p>
              </div>

            </div>
          )}
        </div>

        {/* Agents Section */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <button
            onClick={() => toggleSection('agents')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Bot className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Agents (Intelligent Assistants)</h2>
                <p className="text-gray-600">5 specialized agents that optimize collection strategies</p>
              </div>
            </div>
            {expandedSection === 'agents' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'agents' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Agent 1 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Message Personalization Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Crafts personalized collection messages based on customer relationship and history</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Message Personalization Agent for CashCollector.</p>
                    <p><strong>Your role:</strong> Transform generic reminder templates into personalized, effective messages that maintain positive customer relationships while driving payment action.</p>
                    <p><strong>Context you have access to:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Customer payment history and reliability score</li>
                      <li>Relationship strength and tenure</li>
                      <li>Previous communication history and responses</li>
                      <li>Customer segment and business context</li>
                      <li>Invoice details and specific circumstances</li>
                      <li>Customer communication preferences</li>
                    </ul>
                    <p><strong>Personalization guidelines:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>For long-term customers: Use warm, relationship-focused tone</li>
                      <li>For enterprise clients: Be formal and professional</li>
                      <li>For SMB clients: Be helpful and supportive</li>
                      <li>For first-time overdue: Be understanding and assume honest mistake</li>
                      <li>For repeat delinquent: Be firm but still professional</li>
                      <li>Always include: specific invoice details, payment amount, easy payment options</li>
                    </ul>
                    <p><strong>Tone:</strong> Professional, respectful, clear about expectations while maintaining relationship</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INTERACTION:</div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-700 mr-2">System:</span>
                      <span>"Draft reminder for Enterprise Customer XYZ, Invoice #4521, $45K, 15 days overdue, historically pays on time"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-orange-600 mr-2">Agent:</span>
                      <span>"Subject: Payment Reminder – Invoice #4521 ($45,000)

Dear [Contact Name],

I hope this message finds you well. I'm reaching out regarding Invoice #4521 for $45,000, which became due on [date], now 15 days past due.

Given your excellent payment history with us over the past 3 years, I wanted to personally ensure this hasn't fallen through the cracks. We value our partnership with XYZ Corp and want to make sure there are no issues preventing payment.

Invoice Details:
- Invoice #: 4521
- Amount: $45,000
- Original Due Date: [date]
- Services: [description]

If payment has already been sent, please disregard this notice. Otherwise, I've included a secure payment link below for your convenience: [portal link]

If there are any questions or concerns about this invoice, please don't hesitate to reach out to me directly at [contact]. I'm happy to help resolve any issues.

Thank you for your continued partnership.

Best regards,
[Collector Name]
Collections Team"</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">customer.get_relationship_context()</code></div>
                    <div>• <code className="bg-white px-1">customer.get_payment_history()</code></div>
                    <div>• <code className="bg-white px-1">templates.get_base_message(type)</code></div>
                    <div>• <code className="bg-white px-1">personalization.select_tone(customer)</code></div>
                    <div>• <code className="bg-white px-1">portal.generate_payment_link(invoice)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Call Preparation Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Prepares collectors for customer calls with complete context and strategy</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Summarizes customer history: payment patterns, disputes, promises</li>
                    <li>Highlights conversation priorities: which invoices, what approach</li>
                    <li>Suggests opening lines based on customer personality</li>
                    <li>Identifies potential objections and prepares responses</li>
                    <li>Recommends negotiation parameters (payment plan terms)</li>
                    <li>Provides quick reference to policies and procedures</li>
                    <li>Flags any special customer circumstances or sensitivities</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">customer.get_complete_history()</code></div>
                    <div>• <code className="bg-white px-1">strategy.recommend_approach(customer)</code></div>
                    <div>• <code className="bg-white px-1">objections.get_likely_responses()</code></div>
                    <div>• <code className="bg-white px-1">policies.get_negotiation_limits()</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 3 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Payment Plan Negotiation Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Structures payment plans that balance customer needs with company cash flow</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Analyzes customer's ability to pay based on history</li>
                    <li>Calculates optimal payment plan terms (down payment %, installments)</li>
                    <li>Balances customer cashflow needs with company DSO targets</li>
                    <li>Suggests plan structures: weekly, bi-weekly, monthly installments</li>
                    <li>Determines if down payment should be required</li>
                    <li>Recommends interest/fees based on delinquency period</li>
                    <li>Drafts payment agreement with clear terms</li>
                    <li>Sets up automated reminders for each installment</li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE:</div>
                  <div className="text-xs">
                    <strong>Input:</strong> Customer owes $30K, 60 days overdue, historically pays late but eventually pays
                    <br/><strong>Agent Output:</strong>
                    <div className="mt-2 bg-gray-50 p-2">
                      "Recommended Plan:<br/>
                      - Down payment: $5,000 (due within 5 days)<br/>
                      - Remaining $25,000 in 5 monthly installments of $5,000<br/>
                      - Start date: [first of next month]<br/>
                      - Interest: None (if plan adhered to)<br/>
                      - Terms: Immediate credit hold if any payment missed<br/>
                      <br/>
                      Rationale: Customer has paid past dues but needs structure. Down payment shows commitment. Monthly cadence matches their cashflow cycle."
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">customer.analyze_payment_capacity()</code></div>
                    <div>• <code className="bg-white px-1">plans.calculate_installments(amount, months)</code></div>
                    <div>• <code className="bg-white px-1">policies.get_payment_plan_rules()</code></div>
                    <div>• <code className="bg-white px-1">agreements.draft_terms(plan_details)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 4 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Dispute Resolution Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Investigates disputes and recommends resolution approaches</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Researches invoice history: PO, delivery, contracts</li>
                    <li>Checks for similar past disputes with this customer</li>
                    <li>Analyzes validity of dispute based on documentation</li>
                    <li>Calculates cost/benefit of fighting vs. compromising</li>
                    <li>Drafts response to customer explaining findings</li>
                    <li>Recommends resolution: full credit, partial credit, no adjustment</li>
                    <li>Identifies root cause to prevent future disputes</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">invoice.get_complete_backup(invoice_id)</code></div>
                    <div>• <code className="bg-white px-1">disputes.get_similar_cases(customer_id)</code></div>
                    <div>• <code className="bg-white px-1">analysis.validate_dispute_claim(evidence)</code></div>
                    <div>• <code className="bg-white px-1">resolution.recommend_action(dispute)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 5 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">5. Collection Strategy Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Analyzes collection effectiveness and recommends strategy improvements</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Analyzes: Which campaigns work best for which customer segments?</li>
                    <li>Identifies: Which collectors are most effective with which customer types?</li>
                    <li>Measures: Response rates by channel (email, phone, SMS, portal)</li>
                    <li>Calculates: Optimal timing for follow-ups by segment</li>
                    <li>Recommends: Campaign adjustments to improve collection rate</li>
                    <li>Suggests: Customer segmentation refinements</li>
                    <li>Tracks: Pattern changes over time and adapts strategies</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">analytics.campaign_effectiveness(period)</code></div>
                    <div>• <code className="bg-white px-1">analytics.collector_performance()</code></div>
                    <div>• <code className="bg-white px-1">patterns.identify_trends(metric, period)</code></div>
                    <div>• <code className="bg-white px-1">strategy.recommend_adjustments()</code></div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Apps Section */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <button
            onClick={() => toggleSection('apps')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <Smartphone className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Apps (Visualizations + Interactions)</h2>
                <p className="text-gray-600">7 interactive apps for managing collections workflow</p>
              </div>
            </div>
            {expandedSection === 'apps' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'apps' && (
            <div className="p-6 border-t space-y-6">
              
              {/* App 1 */}
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">1. Collections Dashboard</h3>
                <p className="text-sm text-gray-700 mb-3">Main overview of AR status and collection priorities</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• DSO trend line (current vs target)</div>
                      <div className="bg-white p-2 rounded">• AR aging waterfall (by bucket)</div>
                      <div className="bg-white p-2 rounded">• Collection priority heatmap</div>
                      <div className="bg-white p-2 rounded">• Top 20 overdue accounts table</div>
                      <div className="bg-white p-2 rounded">• Campaign effectiveness metrics</div>
                      <div className="bg-white p-2 rounded">• Payment promise status tracker</div>
                      <div className="bg-white p-2 rounded">• Collector performance leaderboard</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"My Priority List" → Filter to assigned accounts</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click customer → Opens customer detail</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">FILTER</span>
                        <span>Filter: By risk, by aging, by amount</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Run Aging Analysis" → Triggers automation</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Ask Strategy Agent" → Get insights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 2 */}
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">2. Customer Account View</h3>
                <p className="text-sm text-gray-700 mb-3">Complete view of individual customer AR and history</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Customer profile card (risk score, segment)</div>
                      <div className="bg-white p-2 rounded">• Open invoices table (sortable, filterable)</div>
                      <div className="bg-white p-2 rounded">• Payment history timeline</div>
                      <div className="bg-white p-2 rounded">• Communication log (all touches)</div>
                      <div className="bg-white p-2 rounded">• Payment patterns analysis</div>
                      <div className="bg-white p-2 rounded">• Dispute history</div>
                      <div className="bg-white p-2 rounded">• Promise tracking</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Send Reminder" → Opens message composer</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Schedule Call" → Creates call task</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Log Promise" → Opens promise form</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Create Payment Plan" → Opens plan wizard</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-red-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Escalate" → Routes to manager</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Prep for Call" → Call Prep Agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 3 */}
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">3. Collection Campaign Builder</h3>
                <p className="text-sm text-gray-700 mb-3">Create and manage automated reminder campaigns</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Campaign list with performance stats</div>
                      <div className="bg-white p-2 rounded">• Timeline builder (drag-and-drop steps)</div>
                      <div className="bg-white p-2 rounded">• Message template preview</div>
                      <div className="bg-white p-2 rounded">• A/B test results comparison</div>
                      <div className="bg-white p-2 rounded">• Campaign effectiveness metrics</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">DRAG</span>
                        <span>Drag steps to build campaign flow</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">FORM</span>
                        <span>Set triggers: Days overdue, amount, segment</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Ask Agent to Personalize" → Message Agent</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Test Campaign" → Preview with sample data</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">TOGGLE</span>
                        <span>Activate/Pause campaign</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 4 */}
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">4. Customer Payment Portal</h3>
                <p className="text-sm text-gray-700 mb-3">Self-service portal for customers to view and pay invoices</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations (Customer View):</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Open invoices list with amounts due</div>
                      <div className="bg-white p-2 rounded">• Payment history</div>
                      <div className="bg-white p-2 rounded">• Account summary (total due, aging)</div>
                      <div className="bg-white p-2 rounded">• Payment plan schedule (if active)</div>
                      <div className="bg-white p-2 rounded">• Invoice detail viewer (PDF)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions (Customer Actions):</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CHECKBOX</span>
                        <span>Select invoices to pay</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Pay Now" → Payment gateway</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Schedule Payment" → Set future date</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Dispute Invoice" → Opens dispute form</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Request Payment Plan" → Payment Plan Agent</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">DOWNLOAD</span>
                        <span>Download invoice PDF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apps 5-7 Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Apps 5-7:</strong>
                <div className="space-y-2">
                  <div>
                    <strong>5. Call Management App</strong> - Daily call list with AI-powered prep
                    <div className="text-xs text-gray-600 ml-4">Viz: Prioritized call list, customer context cards, talking points | Interact: Click to call, log call outcome, create follow-up tasks, chat with Call Prep Agent</div>
                  </div>
                  <div>
                    <strong>6. Dispute Management App</strong> - Track and resolve invoice disputes
                    <div className="text-xs text-gray-600 ml-4">Viz: Dispute queue, investigation status, resolution timeline | Interact: Assign investigator, update status, chat with Dispute Resolution Agent, approve resolution</div>
                  </div>
                  <div>
                    <strong>7. Analytics & Strategy App</strong> - Collection performance insights
                    <div className="text-xs text-gray-600 ml-4">Viz: Campaign ROI, channel effectiveness, collector metrics, DSO trends | Interact: Filter by segment, compare periods, export reports, chat with Strategy Agent for recommendations</div>
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

export default CashCollectorSpec;