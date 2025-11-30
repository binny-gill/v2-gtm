import React, { useState } from 'react';
import { Zap, Bot, Smartphone, ChevronDown, ChevronRight, Code, MessageSquare, Layout } from 'lucide-react';

const FastCloseSpec = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">FastClose App</h1>
          <p className="text-xl text-blue-100 mb-4">Complete Technical Specification</p>
          <p className="text-sm text-blue-200 mb-6">Cut month-end close time by 40-70% with automations, agents, and interactive apps</p>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              <span>8 Automations</span>
            </div>
            <div className="flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              <span>3 Agents</span>
            </div>
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>5 Apps</span>
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
                <p className="text-gray-600">How FastClose components work together</p>
              </div>
            </div>
            {expandedSection === 'overview' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'overview' && (
            <div className="p-6 border-t space-y-6">
              <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-6 rounded-lg border">
                <h3 className="font-bold text-xl mb-4">The Complete System</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong className="text-green-600">Automations</strong> run in the background handling repetitive work: importing data, creating tasks, routing approvals, monitoring progress, and detecting bottlenecks.
                  </p>
                  <p>
                    <strong className="text-blue-600">Agents</strong> assist when exceptions occur: reviewing reconciliations, answering questions, analyzing variances, and learning patterns to improve future closes.
                  </p>
                  <p>
                    <strong className="text-purple-600">Apps</strong> provide the user interface: dashboards visualize progress, forms collect data, buttons trigger actions, and chats enable conversations with agents.
                  </p>
                  <div className="bg-white p-4 rounded mt-4">
                    <strong>Example end-to-end flow:</strong>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-700">
                      <li>Close Kickoff Automation creates all tasks at month start</li>
                      <li>Trial Balance Import Automation pulls data from ERP</li>
                      <li>Reconciliation Distribution Automation assigns reconciliations</li>
                      <li>User opens <em>Reconciliation Review App</em> and fills in form</li>
                      <li>User clicks "Review with Agent" button</li>
                      <li><em>Reconciliation Review Agent</em> analyzes completeness and variance</li>
                      <li>Agent provides feedback in chat: "Ready for approval"</li>
                      <li>User clicks "Submit for Approval" button</li>
                      <li>Approval Routing Automation assigns to controller</li>
                      <li>Controller reviews in app and clicks "Approve"</li>
                      <li>Task Dependency Automation unblocks downstream tasks</li>
                      <li><em>Close Dashboard</em> updates automatically</li>
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
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Automations (English as Code)</h2>
                <p className="text-gray-600">8 core automations that power month-end close</p>
              </div>
            </div>
            {expandedSection === 'automations' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'automations' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Automation 1 */}
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Close Kickoff Automation</h3>
                  <Code className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> First day of new month, 8:00 AM</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When month-end close begins:
  Create close checklist for current period from template
  Assign tasks to owners based on department mapping
  Set due dates for each task based on close calendar
  Send kickoff notification to all finance team members
  Update close status dashboard to "In Progress"
  Log close start time for metrics tracking`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">calendar.get_current_period()</code> - Get current accounting period</div>
                    <div>• <code className="bg-white px-1">checklist.create_from_template(template_id, period)</code> - Create task list</div>
                    <div>• <code className="bg-white px-1">tasks.assign_owner(task_id, user_id)</code> - Assign tasks to owners</div>
                    <div>• <code className="bg-white px-1">notifications.send_email(user_list, template, data)</code> - Send notifications</div>
                    <div>• <code className="bg-white px-1">dashboard.update_status(metric, value)</code> - Update dashboard metrics</div>
                  </div>
                </div>
              </div>

              {/* Automation 2 */}
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Trial Balance Import Automation</h3>
                  <Code className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Daily at 6:00 AM during close period</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When trial balance import runs:
  Connect to ERP system using saved credentials
  Extract trial balance for current close period
  Validate data completeness:
    - All account codes are valid
    - Debits equal credits
    - No null values in required fields
  If validation passes:
    Import to staging table
    Compare to prior period for material variances
    Flag accounts with >15% change for review
    Mark trial balance import task as complete
  If validation fails:
    Send alert to accounting manager with error details
    Create incident for resolution`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">erp.connect(credentials)</code> - Connect to ERP system</div>
                    <div>• <code className="bg-white px-1">erp.extract_trial_balance(period)</code> - Extract trial balance data</div>
                    <div>• <code className="bg-white px-1">data.validate_schema(data, rules)</code> - Validate data quality</div>
                    <div>• <code className="bg-white px-1">data.calculate_variance(current, prior)</code> - Calculate variance</div>
                    <div>• <code className="bg-white px-1">database.import_to_staging(table, data)</code> - Import data</div>
                    <div>• <code className="bg-white px-1">tasks.mark_complete(task_id, user_id)</code> - Update task status</div>
                  </div>
                </div>
              </div>

              {/* Automation 3 */}
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Reconciliation Distribution Automation</h3>
                  <Code className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When trial balance import completes</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When trial balance import completes:
  Get list of accounts requiring reconciliation
  For each account:
    Determine owner from account ownership mapping
    Create reconciliation task with:
      - Account number and name
      - Current period balance
      - Prior period balance for reference
      - Link to supporting documentation folder
      - Due date based on account risk level:
        * High risk accounts: Day 2
        * Medium risk accounts: Day 3
        * Low risk accounts: Day 4
    Assign to owner
    Set required approver based on account materiality
  Send summary email to each preparer with assigned reconciliations
  Update progress dashboard with reconciliation counts`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">accounts.get_reconciliation_list(period)</code> - Get accounts needing reconciliation</div>
                    <div>• <code className="bg-white px-1">accounts.get_owner(account_id)</code> - Get account owner</div>
                    <div>• <code className="bg-white px-1">tasks.create(type, details, due_date)</code> - Create new task</div>
                    <div>• <code className="bg-white px-1">rules.get_due_date(risk_level, base_date)</code> - Calculate due date by risk</div>
                    <div>• <code className="bg-white px-1">notifications.send_summary(user_id, task_list)</code> - Send summary email</div>
                  </div>
                </div>
              </div>

              {/* Remaining automations collapsed for space */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong>Automations 4-8:</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li><strong>Task Dependency Management</strong> - Unblocks tasks when prerequisites complete</li>
                  <li><strong>Approval Routing</strong> - Routes reconciliations to appropriate approvers based on rules</li>
                  <li><strong>Variance Monitoring</strong> - Identifies material variances hourly, creates analysis tasks</li>
                  <li><strong>Bottleneck Detection</strong> - Flags overdue/at-risk tasks every 2 hours</li>
                  <li><strong>Close Completion</strong> - Verifies criteria, archives docs, calculates metrics, locks period</li>
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
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Agents (Intelligent Assistants)</h2>
                <p className="text-gray-600">3 specialized agents that handle exceptions and questions</p>
              </div>
            </div>
            {expandedSection === 'agents' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'agents' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Agent 1 */}
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Reconciliation Review Agent</h3>
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Reviews reconciliations, analyzes variances, validates documentation</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Reconciliation Review Agent for FastClose.</p>
                    <p><strong>Your role:</strong> Help accountants complete reconciliations by reviewing submissions for completeness, analyzing variances, and recommending approval or requesting additional information.</p>
                    <p><strong>Context you have:</strong> Current reconciliation details, historical patterns, prior period balances, company policies, supporting documentation</p>
                    <p><strong>When reviewing:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Check completeness (explanation, variance analysis, supporting docs)</li>
                      <li>Analyze variance vs prior periods and expected range</li>
                      <li>Assess risk based on materiality and account history</li>
                      <li>Provide specific recommendation with reasoning</li>
                    </ul>
                    <p><strong>Tone:</strong> Professional, helpful, specific - explain WHY, don't just say "looks good"</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INTERACTION:</div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-700 mr-2">User:</span>
                      <span>"Here's the cash reconciliation for October"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-blue-600 mr-2">Agent:</span>
                      <span>"I've reviewed the cash reconciliation. The balance of $523,450 reconciles properly with the bank statement. I notice a $12,000 increase from last month. I see you've explained this as the Q4 capital raise proceeds. Supporting documentation shows the wire transfer confirmation. This reconciliation is complete and ready for approval."</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">reconciliation.get_details()</code></div>
                    <div>• <code className="bg-white px-1">reconciliation.get_history()</code></div>
                    <div>• <code className="bg-white px-1">documents.list_attached()</code></div>
                    <div>• <code className="bg-white px-1">analytics.calculate_variance()</code></div>
                    <div>• <code className="bg-white px-1">policies.get_requirements()</code></div>
                    <div>• <code className="bg-white px-1">risk.assess_reconciliation()</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Close Status Agent</h3>
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Answers questions about progress, timelines, priorities, dependencies</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Close Status Agent for FastClose.</p>
                    <p><strong>Your role:</strong> Answer questions about month-end close progress and help team members understand priorities.</p>
                    <p><strong>Questions you handle:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Status: "Where are we in the close?"</li>
                      <li>Timeline: "Will we close on time?"</li>
                      <li>Priority: "What should I work on next?"</li>
                      <li>Dependency: "What's blocking task X?"</li>
                    </ul>
                    <p><strong>When answering:</strong> Be specific with numbers, prioritize critical path items, reference historical data, focus on what matters most</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INTERACTION:</div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-700 mr-2">User:</span>
                      <span>"Where are we in the close?"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-blue-600 mr-2">Agent:</span>
                      <span>"We're on Day 2 of the close. Current status: 23 of 47 tasks complete (49%). Good progress - we're tracking slightly ahead of last month. Critical path items: The bank reconciliation (due today) is in progress. The main bottleneck right now is 5 reconciliations pending approval - they're blocking the financial statement review."</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">tasks.get_status_summary()</code></div>
                    <div>• <code className="bg-white px-1">tasks.get_critical_path()</code></div>
                    <div>• <code className="bg-white px-1">tasks.get_blocked_tasks()</code></div>
                    <div>• <code className="bg-white px-1">analytics.predict_completion()</code></div>
                    <div>• <code className="bg-white px-1">history.get_average_timeline()</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 3 */}
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Variance Explanation Agent</h3>
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Analyzes variances, drafts explanations, identifies trends</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Calculate variance amount and percentage</li>
                    <li>Identify primary drivers from transaction details</li>
                    <li>Compare to prior year and historical patterns</li>
                    <li>Draft business-focused explanations with specific amounts</li>
                    <li>Distinguish timing issues from trending problems</li>
                    <li>Flag concerning patterns needing management attention</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">analytics.get_variance()</code></div>
                    <div>• <code className="bg-white px-1">analytics.get_trend()</code></div>
                    <div>• <code className="bg-white px-1">transactions.get_by_account()</code></div>
                    <div>• <code className="bg-white px-1">history.get_prior_year()</code></div>
                    <div>• <code className="bg-white px-1">context.get_business_events()</code></div>
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
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Apps (Visualizations + Interactions)</h2>
                <p className="text-gray-600">5 interactive apps that provide visibility and enable actions</p>
              </div>
            </div>
            {expandedSection === 'apps' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'apps' && (
            <div className="p-6 border-t space-y-6">
              
              {/* App 1 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">1. Close Dashboard (Main App)</h3>
                <p className="text-sm text-gray-700 mb-3">Primary interface for monitoring overall close progress</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Progress ring chart (% complete, days remaining)</div>
                      <div className="bg-white p-2 rounded">• Timeline Gantt chart (critical path)</div>
                      <div className="bg-white p-2 rounded">• Task status breakdown (pie chart)</div>
                      <div className="bg-white p-2 rounded">• Team workload heatmap</div>
                      <div className="bg-white p-2 rounded">• Bottleneck alerts panel (red flags)</div>
                      <div className="bg-white p-2 rounded">• Historical trend line (vs last 6 months)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Ask Close Agent" → Opens chat</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"View My Tasks" → Filters to user</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click task → Task detail panel</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">DROP</span>
                        <span>Filter: All/Critical/Overdue</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>Embedded agent chat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 2 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">2. Reconciliation Review App</h3>
                <p className="text-sm text-gray-700 mb-3">Prepare and review account reconciliations</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Reconciliation list table</div>
                      <div className="bg-white p-2 rounded">• Balance trend chart (6 months)</div>
                      <div className="bg-white p-2 rounded">• Document viewer (preview docs)</div>
                      <div className="bg-white p-2 rounded">• Variance waterfall chart</div>
                      <div className="bg-white p-2 rounded">• Agent recommendation badge</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">FORM</span>
                        <span>Explanation, variance, notes fields</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">UPLOAD</span>
                        <span>Drag-drop documents</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Review with Agent"</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Submit for Approval"</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>Agent chat panel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apps 3-5 Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Apps 3-5:</strong>
                <div className="space-y-2">
                  <div>
                    <strong>3. Variance Analysis App</strong> - View variances, get agent analysis, write explanations
                    <div className="text-xs text-gray-600 ml-4">Viz: Waterfall charts, trend lines, top variances | Interact: Click accounts, ask agent, edit text, submit for review</div>
                  </div>
                  <div>
                    <strong>4. My Close Tasks App</strong> - Personal kanban board for individual contributors
                    <div className="text-xs text-gray-600 ml-4">Viz: Kanban columns, priority order, time counters | Interact: Drag tasks, check sub-steps, mark complete, need help button</div>
                  </div>
                  <div>
                    <strong>5. Close Metrics & History App</strong> - Analytics and historical performance
                    <div className="text-xs text-gray-600 ml-4">Viz: Timeline trends, completion rates, bottleneck frequency | Interact: Time period selector, drill into details, compare periods, export reports</div>
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

export default FastCloseSpec;