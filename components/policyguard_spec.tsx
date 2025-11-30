import React, { useState } from 'react';
import { Zap, Bot, Smartphone, ChevronDown, ChevronRight, Code, MessageSquare, Layout } from 'lucide-react';

const PolicyGuardSpec = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">PolicyGuard App</h1>
          <p className="text-xl text-red-100 mb-4">Complete Technical Specification</p>
          <p className="text-sm text-red-200 mb-6">Reduce policy violations 30-50% with real-time enforcement and clear audit trail</p>
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
              <span>6 Apps</span>
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
                <p className="text-gray-600">How PolicyGuard components work together</p>
              </div>
            </div>
            {expandedSection === 'overview' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'overview' && (
            <div className="p-6 border-t space-y-6">
              <div className="bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 p-6 rounded-lg border">
                <h3 className="font-bold text-xl mb-4">The Complete System</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong className="text-red-600">Automations</strong> enforce policies in real-time: monitoring transactions as they occur, checking against policy rules, routing exceptions for approval, tracking violations, generating compliance reports, and learning from approved exceptions.
                  </p>
                  <p>
                    <strong className="text-orange-600">Agents</strong> handle the gray areas: reviewing exception requests with business context, researching policy interpretations, recommending approval/denial decisions, explaining violations to employees, and suggesting policy improvements based on patterns.
                  </p>
                  <p>
                    <strong className="text-amber-600">Apps</strong> provide visibility and control: dashboards show real-time violations, policy editors define rules in English, exception approvers review requests with context, violation analyzers identify trends, and employee portals explain policies clearly.
                  </p>
                  <div className="bg-white p-4 rounded mt-4">
                    <strong>Example end-to-end flow:</strong>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-700">
                      <li>Employee submits $650 dinner expense with client</li>
                      <li>Real-Time Policy Check Automation runs: "Expenses over $500 require manager approval"</li>
                      <li>System flags violation, blocks auto-approval</li>
                      <li>Exception Routing Automation checks: Is this a valid exception request?</li>
                      <li>Employee marked as "Client Entertainment - Strategic Account"</li>
                      <li>System routes to <em>Policy Exception Agent</em> for analysis</li>
                      <li>Agent reviews: client history, strategic importance, manager's typical approval patterns</li>
                      <li>Agent recommends: "Approve - strategic client, dinner within reasonable range for account value"</li>
                      <li>Notification sent to manager in <em>Exception Review App</em></li>
                      <li>Manager sees: expense details + agent recommendation + approval history</li>
                      <li>Manager clicks "Approve with Exception"</li>
                      <li>Approval Workflow Automation processes approval, adds to audit trail</li>
                      <li>Pattern Learning Automation notes: "Strategic client entertainment $500-$800 consistently approved"</li>
                      <li>After 10 similar approvals, system suggests policy update: "Strategic client entertainment up to $800 pre-approved"</li>
                      <li><em>Violation Analytics Dashboard</em> shows 35% reduction in exceptions this month</li>
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
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Automations (English as Code)</h2>
                <p className="text-gray-600">8 core automations that enforce policies in real-time</p>
              </div>
            </div>
            {expandedSection === 'automations' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'automations' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Automation 1 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Real-Time Policy Check Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When any financial transaction is submitted (expense, PO, invoice, etc.)</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When transaction is submitted:
  Get transaction details:
    Type: expense, purchase order, contract, invoice, etc.
    Amount: total transaction value
    Category: travel, meals, software, equipment, etc.
    Submitter: employee ID, department, role
    Date: transaction date
    Description: purpose and details
    Attachments: receipts, approvals, contracts
  
  Get applicable policies for this transaction type:
    Expense policies (if expense)
    Procurement policies (if PO or contract)
    Spend authority policies (by role and amount)
    Vendor policies (if vendor-related)
    Category-specific policies (travel, meals, etc.)
  
  For each applicable policy rule:
    Evaluate rule in priority order:
    
    Example rule 1: "Expenses over $500 require manager approval"
      If transaction.amount > 500:
        Check if manager approval exists
        If not: Flag violation "Requires manager approval"
        Required approver: Direct manager
        Block auto-approval
    
    Example rule 2: "Travel expenses require pre-approval"
      If transaction.category = "travel" AND transaction.date < approval.date:
        Flag violation "Travel requires pre-approval"
        Required action: Obtain retroactive approval with justification
    
    Example rule 3: "Meals with alcohol require business justification"
      If transaction.category = "meals" AND description contains ["alcohol", "wine", "beer"]:
        Check if business justification provided
        If not: Flag violation "Requires business justification"
        Prompt user for justification
    
    Example rule 4: "Software purchases over $1000 require IT approval"
      If transaction.category = "software" AND transaction.amount > 1000:
        Check if IT approval exists
        If not: Flag violation "Requires IT approval"
        Route to IT for approval
  
  Compile all violations found:
    List each violated policy
    Specify required action for each
    Calculate violation severity:
      Critical: Hard stop, cannot proceed (fraud risk, legal)
      Major: Requires approval before processing
      Minor: Can process with notification
  
  Determine transaction disposition:
    If no violations: Auto-approve and process
    If minor violations only: Process with notification to manager
    If major violations: Block until approvals obtained
    If critical violations: Block and escalate to compliance
  
  Create audit record:
    Transaction ID
    All policies checked
    Violations found (if any)
    Actions taken
    Timestamp
    Result (approved/blocked/pending)
  
  Notify relevant parties:
    If blocked: notify submitter with required actions
    If requires approval: notify approvers
    If violation: notify manager and compliance (if material)`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">transaction.get_details(trans_id)</code> - Get transaction data</div>
                    <div>• <code className="bg-white px-1">policies.get_applicable(trans_type, category)</code> - Get relevant policies</div>
                    <div>• <code className="bg-white px-1">policies.evaluate_rule(transaction, rule)</code> - Check rule compliance</div>
                    <div>• <code className="bg-white px-1">violations.categorize_severity(violation_list)</code> - Assess severity</div>
                    <div>• <code className="bg-white px-1">approvals.check_exists(trans_id, approver_role)</code> - Check approvals</div>
                    <div>• <code className="bg-white px-1">audit.create_record(trans_id, checks, result)</code> - Log to audit trail</div>
                    <div>• <code className="bg-white px-1">notifications.send_violation_alert(recipient, details)</code> - Send alerts</div>
                  </div>
                </div>
              </div>

              {/* Automation 2 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Exception Routing Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When transaction has policy violations and exception is requested</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When exception request is submitted:
  Validate exception request:
    Business justification provided
    Supporting documentation attached
    Exception category selected:
      - Business necessity
      - Client relationship
      - Strategic importance
      - Time-sensitive
      - Other (requires detailed explanation)
  
  Determine exception routing based on violation:
    
    For amount-based violations:
      Amount $100-$500: Route to direct manager
      Amount $500-$5000: Route to department director
      Amount $5000-$25000: Route to VP/CFO
      Amount >$25000: Route to CFO + Compliance
    
    For category-based violations:
      Travel policy: Route to Travel Manager
      IT/Software: Route to CTO/IT Director
      Vendor policy: Route to Procurement + Legal
      Compliance/Regulatory: Route to Compliance Officer
    
    For repeat violations (same employee, same policy, 3+ times):
      Route to HR + Department Head
      Trigger pattern investigation
      Flag for policy training
  
  Enrich exception with context:
    Employee history:
      Past violations count
      Past exception approvals/denials
      Compliance score
    Transaction context:
      Similar approved exceptions
      Department spending patterns
      Business relationship value (if applicable)
    Risk assessment:
      Fraud risk score
      Reputational risk
      Financial materiality
  
  Route to Policy Exception Agent if:
    Amount >$1000 AND ambiguous justification
    Conflicting policies apply
    Novel situation not covered by precedent
    Multiple violations in single transaction
  
  Create exception approval task:
    Assign to appropriate approver(s)
    Set due date based on urgency:
      Time-sensitive: 4 hours
      Standard: 2 business days
      Non-urgent: 5 business days
    Include all context and agent analysis
    Provide approve/deny/escalate options
  
  Track exception in workflow:
    Status: Pending/Under Review/Approved/Denied
    Days pending
    Escalations (if any)
    Final disposition and reason`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">exceptions.validate_request(request)</code> - Validate exception</div>
                    <div>• <code className="bg-white px-1">routing.determine_approver(violation, amount)</code> - Route to approver</div>
                    <div>• <code className="bg-white px-1">history.get_employee_record(employee_id)</code> - Get employee history</div>
                    <div>• <code className="bg-white px-1">context.enrich_exception(trans_id)</code> - Add context</div>
                    <div>• <code className="bg-white px-1">risk.assess_transaction(transaction)</code> - Risk assessment</div>
                    <div>• <code className="bg-white px-1">tasks.create_approval_task(details, approver)</code> - Create task</div>
                  </div>
                </div>
              </div>

              {/* Automation 3 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Approval Workflow Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When approver takes action on exception request</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When approver responds to exception:
  Record approval decision:
    Approver name and role
    Decision: Approved / Denied / Escalated
    Timestamp
    Comments/reasoning
    Conditions (if conditional approval)
  
  If approved:
    Mark exception as approved
    Update transaction status to "Approved with Exception"
    Document approval reason in audit trail
    
    Check if additional approvals needed:
      If multi-level approval required:
        Route to next level approver
        Update status to "Partially Approved - Pending Senior Approval"
      Else:
        Process transaction
        Send confirmation to submitter
    
    Create exception record for tracking:
      Policy violated
      Business justification
      Who approved and why
      Similar situations for future reference
    
    Trigger Pattern Learning Automation:
      Record this approval for pattern analysis
      Check if this creates a new precedent
  
  If denied:
    Mark exception as denied
    Return to submitter with explanation
    Provide guidance on:
      Why it was denied
      What would be acceptable alternative
      Policy to reference
      Who to contact for questions
    
    If this is 2nd+ denial for same employee:
      Schedule policy training
      Notify HR if pattern of non-compliance
  
  If escalated:
    Determine escalation path:
      Standard: Next level up in hierarchy
      Compliance concern: To Compliance Officer
      Legal concern: To Legal Counsel
      Fraud concern: To Audit + Security
    
    Add escalation context:
      Why escalated
      Specific concern
      Recommended additional review
    
    Create escalated approval task
    Set urgent priority
    Notify escalation recipient
  
  Update all dashboards:
    Exception approval metrics
    Pending exceptions count
    Violation trends
    Approver workload
  
  Send notifications:
    To submitter: Decision and next steps
    To manager: FYI on material decisions
    To compliance: If material or pattern concern`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">approvals.record_decision(task_id, decision, comments)</code> - Record decision</div>
                    <div>• <code className="bg-white px-1">workflow.check_multi_level(exception)</code> - Check approval chain</div>
                    <div>• <code className="bg-white px-1">workflow.route_next_level(exception, approver)</code> - Route to next</div>
                    <div>• <code className="bg-white px-1">exceptions.create_precedent(approval)</code> - Create precedent record</div>
                    <div>• <code className="bg-white px-1">workflow.determine_escalation_path(reason)</code> - Escalation routing</div>
                    <div>• <code className="bg-white px-1">transactions.process_approved(trans_id)</code> - Process transaction</div>
                  </div>
                </div>
              </div>

              {/* Automation 4 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Violation Tracking Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Continuous monitoring, runs hourly</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When violation tracking runs:
  Aggregate all violations from past period:
    Group by policy type
    Group by employee
    Group by department
    Group by severity
  
  Calculate violation metrics:
    Total violations count
    Violations by category (travel, expense, procurement, etc.)
    Repeat violations (same employee, same policy)
    Approval rate for exceptions
    Average time to resolve
    Cost of violations (if financial)
  
  Identify concerning patterns:
    
    Employee patterns:
      Employee with 5+ violations in 30 days: Flag for manager review
      Same violation 3+ times: Trigger mandatory training
      High-value violations: Flag for compliance review
    
    Department patterns:
      Department violation rate >20% above company average: Investigate
      Specific policy consistently violated: Policy may need revision
      Sudden spike in violations: Check if policy change or communication issue
    
    Policy patterns:
      Policy violated frequently (>50 times/month): May be too restrictive
      Policy rarely violated (<5 times/year): May be too lenient or unclear
      High exception approval rate (>80%): Policy should be updated
  
  Generate alerts for stakeholders:
    
    To employee (if repeat violator):
      "You have X violations in the past 30 days"
      List violations with links to policies
      Offer training or guidance
    
    To manager (if team has issues):
      "Your team has Y violations this month"
      Top 3 violation types
      Recommended actions
    
    To compliance (if material):
      Material violations requiring investigation
      Patterns suggesting fraud risk
      Policy gaps requiring attention
  
  Create compliance reports:
    Monthly violation summary
    Exception approval analysis
    Policy effectiveness metrics
    Training needs assessment
  
  Update risk scoring:
    Employee compliance scores
    Department risk ratings
    Policy effectiveness scores
  
  Trigger remediation actions:
    Schedule training for repeat violators
    Flag high-risk transactions for audit
    Suggest policy revisions for ineffective policies`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">violations.aggregate(date_from, date_to)</code> - Aggregate violations</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_metrics(violations)</code> - Calculate metrics</div>
                    <div>• <code className="bg-white px-1">patterns.identify_concerning(data)</code> - Pattern detection</div>
                    <div>• <code className="bg-white px-1">reports.generate_compliance_summary(period)</code> - Generate report</div>
                    <div>• <code className="bg-white px-1">risk.update_scores(employees, departments)</code> - Update risk scores</div>
                    <div>• <code className="bg-white px-1">training.schedule_for_violations(employee_list)</code> - Schedule training</div>
                  </div>
                </div>
              </div>

              {/* Automation 5 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">5. Pattern Learning Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After exception approval/denial, or weekly analysis</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When analyzing exception patterns:
  Collect recent exception approvals (last 90 days)
  Group by policy and circumstances
  
  Look for consistent approval patterns:
    
    Example pattern 1:
      Policy: "Meals over $75 require justification"
      Pattern found: Client entertainment meals $75-$150 approved 95% of time
      Circumstances: With documented client, strategic account
      Sample size: 25 approvals, 1 denial
      
      Recommendation: "Update policy to pre-approve client entertainment up to $150"
      Reasoning: "Reduces exception requests by ~2/week, maintains control"
    
    Example pattern 2:
      Policy: "Travel expenses require pre-approval"
      Pattern found: Last-minute travel for customer emergencies approved 100% of time
      Circumstances: Customer P1 issues, <24hr notice
      Sample size: 12 approvals, 0 denials
      
      Recommendation: "Add emergency travel exception: Customer P1 issues can be approved retroactively with incident ticket"
    
    Example pattern 3:
      Policy: "Software purchases over $1000 require IT approval"
      Pattern found: Standard tools (Salesforce, Office365, Adobe) always approved
      Sample size: 45 approvals, 0 denials
      
      Recommendation: "Pre-approve standard tools up to $5000, IT approval only for new vendors"
  
  For each pattern with high confidence (>90% approval, >10 samples):
    Create policy improvement suggestion:
      Current policy wording
      Proposed new wording
      Business justification
      Expected impact (fewer exceptions, maintained control)
      Risk assessment
    
    Route suggestion to policy owner for review
    Track suggestion status
  
  Learn denial patterns:
    Why are exceptions denied?
    Can we prevent these violations proactively?
    
    Example: If "meals with alcohol without justification" denied 90% of time:
      Suggestion: Add prompt at submission: "Does this meal include alcohol? [Y/N]"
      If yes: Require justification field before submission
      Prevents violation at source
  
  Update troubleshooting guide:
    Document approved exception scenarios
    Provide guidance for similar future cases
    Create reference library for approvers
  
  Calculate policy effectiveness:
    Exception rate (violations / total transactions)
    Approval rate (approvals / exceptions)
    Processing time (submission to resolution)
    
    If exception rate declining: Policy is working
    If approval rate >80%: Policy may be too strict
    If approval rate <20%: Policy may be too lenient
  
  Generate quarterly policy review report:
    Policies working well (low violations, appropriate exceptions)
    Policies needing update (high exceptions, consistent approvals)
    Policies causing confusion (high violations, mixed approvals)
    Recommended changes with business case`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">exceptions.get_approvals(date_range)</code> - Get approval history</div>
                    <div>• <code className="bg-white px-1">patterns.identify_consistent(exceptions, threshold)</code> - Find patterns</div>
                    <div>• <code className="bg-white px-1">policies.suggest_update(pattern, reasoning)</code> - Create suggestion</div>
                    <div>• <code className="bg-white px-1">troubleshooting.document_scenario(approval)</code> - Add to guide</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_effectiveness(policy)</code> - Measure effectiveness</div>
                    <div>• <code className="bg-white px-1">reports.generate_policy_review(quarter)</code> - Generate review</div>
                  </div>
                </div>
              </div>

              {/* Remaining Automations Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Automations 6-8:</strong>
                <ul className="mt-2 space-y-2 list-none">
                  <li><strong>6. Notification Engine Automation</strong> - Sends real-time alerts to employees, managers, and compliance based on violations and approvals</li>
                  <li><strong>7. Audit Trail Automation</strong> - Maintains comprehensive logs of all policy checks, violations, exceptions, approvals for compliance reporting</li>
                  <li><strong>8. Policy Sync Automation</strong> - Keeps policy rules synchronized across all systems (expense, procurement, AP, etc.)</li>
                </ul>
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
                <p className="text-gray-600">3 specialized agents that handle policy exceptions and guidance</p>
              </div>
            </div>
            {expandedSection === 'agents' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'agents' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Agent 1 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Policy Exception Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Analyzes exception requests and provides approval recommendations</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Policy Exception Agent for PolicyGuard.</p>
                    <p><strong>Your role:</strong> When an employee requests a policy exception, analyze the request with full business context and recommend whether it should be approved, denied, or escalated.</p>
                    <p><strong>Context you have access to:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>The transaction details and policy violated</li>
                      <li>Employee's justification for exception</li>
                      <li>Employee's violation history and compliance score</li>
                      <li>Similar past exceptions (approved and denied)</li>
                      <li>Business context (client relationships, strategic value, urgency)</li>
                      <li>Approver's typical patterns (what they usually approve/deny)</li>
                      <li>Risk factors (amount, fraud indicators, patterns)</li>
                    </ul>
                    <p><strong>Analysis framework:</strong></p>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Assess business justification strength</li>
                      <li>Compare to precedent (similar approved exceptions)</li>
                      <li>Evaluate risk (fraud, reputational, financial)</li>
                      <li>Consider employee history (first-time vs repeat)</li>
                      <li>Check if this fits a pattern that should become policy</li>
                      <li>Recommend approve/deny/escalate with clear reasoning</li>
                    </ol>
                    <p><strong>Tone:</strong> Objective, thorough, focused on business value vs risk</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INTERACTION:</div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-700 mr-2">Request:</span>
                      <span>Employee: Sarah Chen, $650 dinner expense with client, Policy: "Meals over $500 require approval", Justification: "Strategic account kickoff dinner, 6 attendees including C-suite"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-orange-600 mr-2">Agent Analysis:</span>
                      <span>

**Exception Analysis for $650 Meal Expense**

**Business Context:**
- Client: TechCorp (strategic account, $2M annual revenue)
- Purpose: Kickoff dinner for new $500K project
- Attendees: 6 people (client C-suite + our sales team)
- Per-person cost: $108 (reasonable for client entertainment)

**Precedent Check:**
Found 8 similar strategic client dinners in past 6 months:
- Range: $520-$780
- All approved by this manager
- Average: $625 per dinner

**Employee History:**
- Sarah Chen: 2 years, compliance score 95%
- Zero violations in past 12 months
- This is first exception request

**Risk Assessment:**
- Fraud risk: Low (documented client meeting, multiple attendees)
- Financial risk: Low ($650 immaterial, within client entertainment norms)
- Reputational risk: None (appropriate business purpose)

**Recommendation: APPROVE**

**Reasoning:**
1. Legitimate business purpose (strategic account relationship building)
2. Reasonable per-person cost for C-suite client entertainment
3. Consistent with past approvals for similar circumstances
4. Employee has excellent compliance history
5. Amount immaterial relative to account value

**Suggested Policy Update:**
After 8 similar approvals, consider: "Strategic client entertainment with C-suite: pre-approved up to $800"
This would reduce exception requests while maintaining appropriate controls.

Would reduce exception workload by ~1 request per month.</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">exceptions.get_request_details(request_id)</code></div>
                    <div>• <code className="bg-white px-1">history.get_employee_record(employee_id)</code></div>
                    <div>• <code className="bg-white px-1">precedents.find_similar(exception)</code></div>
                    <div>• <code className="bg-white px-1">risk.assess_exception(exception)</code></div>
                    <div>• <code className="bg-white px-1">approver.get_typical_patterns(approver_id)</code></div>
                    <div>• <code className="bg-white px-1">business.get_client_value(client_name)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Policy Interpretation Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Helps employees understand policies and prevents violations</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Answer policy questions in plain language</li>
                    <li>Explain why policies exist (business reasoning)</li>
                    <li>Provide examples of compliant vs non-compliant scenarios</li>
                    <li>Suggest alternatives when employee wants to do something non-compliant</li>
                    <li>Proactively warn when transaction may violate policy</li>
                    <li>Guide through exception request process</li>
                  </ul>
                  
                  <p className="mt-2"><strong>Example interaction:</strong></p>
                  <div className="bg-gray-50 p-2 rounded mt-1 text-[11px]">
                    <p className="mb-1"><strong>Employee:</strong> "Can I expense a client dinner that costs $600?"</p>
                    <p><strong>Agent:</strong> "The policy says meals over $500 require manager approval. A $600 client dinner would need approval.

Here's what you should do:
1. Submit the expense with details about the client and purpose
2. Mark it as 'Client Entertainment'
3. The system will automatically route it to your manager
4. Include context: client name, who attended, business purpose

Tip: To speed approval, mention if this is a strategic account or key relationship.

Why this policy exists: We want visibility into larger client entertainment expenses while keeping the approval process simple. Your manager can approve these same-day in most cases.

Need help with anything else?"</p>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">policies.get_applicable(scenario)</code></div>
                    <div>• <code className="bg-white px-1">policies.explain_reasoning(policy_id)</code></div>
                    <div>• <code className="bg-white px-1">examples.get_scenarios(policy_id)</code></div>
                    <div>• <code className="bg-white px-1">alternatives.suggest(desired_action)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 3 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Violation Explanation Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Explains violations to employees and helps them correct issues</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Explain what policy was violated and why</li>
                    <li>Show exactly what needs to be corrected</li>
                    <li>Provide step-by-step remediation guidance</li>
                    <li>Answer follow-up questions about the violation</li>
                    <li>Suggest how to avoid similar violations in future</li>
                    <li>Offer training resources if needed</li>
                  </ul>

                  <p className="mt-2"><strong>Example interaction:</strong></p>
                  <div className="bg-gray-50 p-2 rounded mt-1 text-[11px]">
                    <p className="mb-1"><strong>System:</strong> "Your expense was flagged: Travel expense submitted without pre-approval"</p>
                    <p className="mb-1"><strong>Employee clicks "Why?"</strong></p>
                    <p><strong>Agent:</strong> "Your flight to Chicago on March 15 was submitted on March 20, but the travel policy requires approval before booking.

Why this matters: Pre-approval ensures:
- Travel is necessary and budget is available
- You're using approved vendors for best rates
- There are no conflicts with other priorities

How to fix this:
1. Add a note explaining why this was urgent/last-minute
2. Request retroactive approval from your manager
3. Your manager will be notified and can approve if there was valid business reason

For future: Submit trip approval requests at least 3 days before booking. You can do this in the Travel section.

Quick tip: For customer emergencies, note 'Customer P1 Issue' and include ticket number - these are typically approved retroactively."</p>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">violations.get_details(violation_id)</code></div>
                    <div>• <code className="bg-white px-1">policies.explain_violation(policy, transaction)</code></div>
                    <div>• <code className="bg-white px-1">remediation.get_steps(violation_type)</code></div>
                    <div>• <code className="bg-white px-1">training.suggest_resources(policy)</code></div>
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
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <Smartphone className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Apps (Visualizations + Interactions)</h2>
                <p className="text-gray-600">6 interactive apps for policy management and compliance</p>
              </div>
            </div>
            {expandedSection === 'apps' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'apps' && (
            <div className="p-6 border-t space-y-6">
              
              {/* App 1 */}
              <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">1. Compliance Dashboard</h3>
                <p className="text-sm text-gray-700 mb-3">Real-time view of violations, exceptions, and compliance metrics</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Violation count gauge (current month vs target)</div>
                      <div className="bg-white p-2 rounded">• Top violations bar chart (by policy type)</div>
                      <div className="bg-white p-2 rounded">• Exception pending count with aging</div>
                      <div className="bg-white p-2 rounded">• Compliance score by department (heatmap)</div>
                      <div className="bg-white p-2 rounded">• Trend line (violations over 12 months)</div>
                      <div className="bg-white p-2 rounded">• Recent violations feed (real-time)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click violation → View details and context</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"View Pending Exceptions" → Exception queue</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">FILTER</span>
                        <span>Filter: By policy/department/severity</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Generate Report" → Compliance summary</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Ask about compliance" → Chat with agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 2 */}
              <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">2. Exception Review App</h3>
                <p className="text-sm text-gray-700 mb-3">Manager/approver interface for reviewing exception requests</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Exception queue (pending approvals)</div>
                      <div className="bg-white p-2 rounded">• Transaction details with policy context</div>
                      <div className="bg-white p-2 rounded">• Agent recommendation badge and reasoning</div>
                      <div className="bg-white p-2 rounded">• Employee history sidebar (past violations)</div>
                      <div className="bg-white p-2 rounded">• Similar precedents panel</div>
                      <div className="bg-white p-2 rounded">• Risk assessment indicator</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Approve" → Approve exception</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-red-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Deny" → Deny with explanation</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Escalate" → Route to senior approver</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Ask Agent" → Get detailed analysis</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"View Precedents" → See similar cases</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">INPUT</span>
                        <span>Add comments/conditions to approval</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 3 */}
              <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">3. Policy Editor App</h3>
                <p className="text-sm text-gray-700 mb-3">Define and modify policy rules in English</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Policy list with effectiveness scores</div>
                      <div className="bg-white p-2 rounded">• Rule editor with English syntax</div>
                      <div className="bg-white p-2 rounded">• Policy impact preview (transactions affected)</div>
                      <div className="bg-white p-2 rounded">• Version history timeline</div>
                      <div className="bg-white p-2 rounded">• Suggested improvements panel</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">FORM</span>
                        <span>English rule editor: "If expense..."</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Test Rule" → Preview impact</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Review Suggestions" → See learned patterns</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Publish" → Activate policy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apps 4-6 Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Apps 4-6:</strong>
                <div className="space-y-2">
                  <div>
                    <strong>4. Employee Policy Portal</strong> - Self-service for employees to understand policies
                    <div className="text-xs text-gray-600 ml-4">Viz: Policy library, FAQs, examples | Interact: Search policies, chat with Interpretation Agent, submit exceptions</div>
                  </div>
                  <div>
                    <strong>5. Violation Analytics App</strong> - Deep analysis of violation patterns and trends
                    <div className="text-xs text-gray-600 ml-4">Viz: Trend charts, department comparisons, policy effectiveness | Interact: Drill into violations, export reports, identify training needs</div>
                  </div>
                  <div>
                    <strong>6. Audit Trail App</strong> - Complete compliance audit history
                    <div className="text-xs text-gray-600 ml-4">Viz: Audit log timeline, policy check history, exception chain | Interact: Search by date/employee/policy, export for auditors, verify controls</div>
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

export default PolicyGuardSpec;