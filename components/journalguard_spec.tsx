import React, { useState } from 'react';
import { Zap, Bot, Smartphone, ChevronDown, ChevronRight, Code, MessageSquare, Layout } from 'lucide-react';

const JournalGuardSpec = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">JournalGuard App</h1>
          <p className="text-xl text-indigo-100 mb-4">Complete Technical Specification</p>
          <p className="text-sm text-indigo-200 mb-6">Review journal entries 50% faster - Catch errors before they post</p>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              <span>9 Automations</span>
            </div>
            <div className="flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              <span>4 Agents</span>
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
                <p className="text-gray-600">How JournalGuard components work together</p>
              </div>
            </div>
            {expandedSection === 'overview' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'overview' && (
            <div className="p-6 border-t space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-lg border">
                <h3 className="font-bold text-xl mb-4">The Complete System</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong className="text-indigo-600">Automations</strong> provide intelligent pre-posting review: detecting anomalies in real-time, identifying unusual patterns, validating account combinations, checking for duplicates, and routing entries based on risk scores.
                  </p>
                  <p>
                    <strong className="text-purple-600">Agents</strong> act as expert reviewers: explaining why entries are flagged, investigating unusual transactions, suggesting corrections, researching account history, and learning what's "normal" for your company.
                  </p>
                  <p>
                    <strong className="text-pink-600">Apps</strong> provide control and visibility: dashboards show pending reviews, entry forms validate in real-time, approval queues prioritize by risk, and chats enable conversations with expert agents.
                  </p>
                  <div className="bg-white p-4 rounded mt-4">
                    <strong>Example end-to-end flow:</strong>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-700">
                      <li>Accountant creates journal entry in <em>Journal Entry Form</em></li>
                      <li>Entry Validation Automation runs as they type: checks account codes, validates debits=credits</li>
                      <li>User clicks "Submit for Review" button</li>
                      <li>Pre-Posting Analysis Automation analyzes entry:
                        <ul className="list-disc list-inside ml-6 text-xs mt-1">
                          <li>Checks against historical patterns for this account</li>
                          <li>Calculates risk score based on amount, account type, preparer</li>
                          <li>Detects unusual account combinations</li>
                          <li>Checks for potential duplicates</li>
                        </ul>
                      </li>
                      <li>Risk score: 75 (Medium-High) → Entry flagged for review</li>
                      <li>Routing Automation assigns to Controller based on amount threshold</li>
                      <li>Controller opens <em>Review Queue App</em>, sees flagged entry</li>
                      <li>Controller clicks "Ask Agent Why Flagged"</li>
                      <li><em>Anomaly Explanation Agent</em> responds: "This entry debits an expense account with a credit balance, which is unusual. Last 50 entries to this account were all credits. Also, amount $45,000 is 3x the typical monthly amount."</li>
                      <li>Controller clicks "Investigate Further" → Routes to <em>Entry Investigation Agent</em></li>
                      <li>Agent researches: Checks source documents, reviews related entries, validates against policies</li>
                      <li>Agent reports: "This appears to be a reversal of a prior accrual. Supporting documentation shows approved reversal request."</li>
                      <li>Controller clicks "Approve with Note" → Entry posts to GL</li>
                      <li>Pattern Learning Automation adds: "Accrual reversals to Account 5100 are normal, don't flag in future"</li>
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
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Automations (English as Code)</h2>
                <p className="text-gray-600">9 core automations that protect your general ledger</p>
              </div>
            </div>
            {expandedSection === 'automations' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'automations' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Automation 1 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Real-Time Entry Validation Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> As user enters journal entry data (keystroke-level)</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When user enters journal entry data:
  Validate each field as it's entered:
    
    Account number validation:
      Check if account exists in chart of accounts
      Check if account is active (not closed/disabled)
      Check if account accepts manual journal entries
      Check if user has permission to post to this account
      If invalid: Show inline error message immediately
    
    Amount validation:
      Check if amount is numeric
      Check if amount is not zero
      Check if amount doesn't exceed account materiality threshold
      If debit entry: Check account normally has debit balance
      If credit entry: Check account normally has credit balance
      If opposite of normal: Flag for review (not error)
    
    Date validation:
      Check if date is valid format
      Check if date is within open accounting period
      Check if date is not in future (beyond allowed days)
      Check if period is not locked/closed
      If invalid: Show error and suggest valid dates
    
    Description validation:
      Check if description is not empty
      Check if description meets minimum length (10 chars)
      Check if description contains required keywords for certain accounts
        Example: Accrual accounts require "Accrual for [period]"
      If missing: Show warning message
    
  After each line item entered:
    Calculate running total of debits and credits
    Show balance check indicator:
      Green if debits = credits
      Yellow if entry incomplete
      Red if debits ≠ credits (show difference)
    
  Supporting documentation check:
    For entries over $5,000: Require attachment
    For certain account types: Require approval document
    Show missing documentation warning
  
  Save draft automatically every 30 seconds
  Highlight any validation errors in red
  Provide helpful error messages with correction suggestions`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">chart_of_accounts.validate(account_number)</code> - Validate account</div>
                    <div>• <code className="bg-white px-1">accounts.check_active(account_number)</code> - Check if active</div>
                    <div>• <code className="bg-white px-1">accounts.get_normal_balance(account_number)</code> - Get normal balance</div>
                    <div>• <code className="bg-white px-1">permissions.check_user_access(user_id, account)</code> - Check permissions</div>
                    <div>• <code className="bg-white px-1">calendar.check_period_open(date)</code> - Check if period open</div>
                    <div>• <code className="bg-white px-1">validation.calculate_balance(entry_lines)</code> - Calculate balance</div>
                    <div>• <code className="bg-white px-1">policies.get_documentation_rules(account, amount)</code> - Get doc requirements</div>
                  </div>
                </div>
              </div>

              {/* Automation 2 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Pre-Posting Anomaly Detection Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When user clicks "Submit for Review"</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When journal entry submitted for review:
  Run anomaly detection checks:
  
  1. Historical pattern analysis:
    Get last 50 entries to these accounts
    Calculate typical amount range for each account
    Calculate typical transaction count per period
    
    If current entry amount > 2x typical maximum:
      Flag: "Unusually large amount for this account"
      Severity: High if >5x, Medium if >2x
    
    If account has only credit history but entry is debit:
      Flag: "Opposite of normal transaction type"
      Severity: Medium
    
    If this is first time account used in 6+ months:
      Flag: "Inactive account now being used"
      Severity: Low
  
  2. Account combination analysis:
    Check if debit/credit account combination has been used before
    Get all account pair combinations from history
    
    If this combination never seen before:
      Flag: "Unusual account combination"
      Check if similar combinations exist (same account class)
      If no similar: Severity High
      If similar exists: Severity Low
    
    If combination used <3 times in history:
      Flag: "Rare account combination"
      Severity: Medium
  
  3. Round dollar detection:
    If amount is exact round number (no cents):
      AND amount > $10,000:
        Flag: "Large round dollar amount - verify not estimate"
        Severity: Medium
  
  4. Duplicate detection:
    Search for entries in last 30 days with:
      - Same account combination
      - Same or very similar amount (within 5%)
      - Same or similar description
    
    If found potential duplicate:
      Flag: "Possible duplicate entry"
      Show potential duplicate details
      Severity: High
  
  5. Balance impact analysis:
    Calculate new account balance after entry posts
    Check if balance would become unusual:
      - Expense account with credit balance >$1,000
      - Asset account with credit balance
      - Liability account with debit balance
      - Revenue account with debit balance
    
    If unusual balance result:
      Flag: "Entry would create unusual account balance"
      Severity: High
  
  Calculate overall risk score (0-100):
    Base score = 20
    + 20 for each High severity flag
    + 10 for each Medium severity flag
    + 5 for each Low severity flag
    + 10 if preparer is new user (< 3 months)
    + 15 if no supporting documentation
    
  Store all flags and risk score with entry`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">analytics.get_account_history(account, periods)</code> - Get history</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_typical_range(transactions)</code> - Calculate range</div>
                    <div>• <code className="bg-white px-1">patterns.find_account_combinations(account_a, account_b)</code> - Find combos</div>
                    <div>• <code className="bg-white px-1">detection.find_duplicates(entry, lookback_days)</code> - Find duplicates</div>
                    <div>• <code className="bg-white px-1">accounts.calculate_new_balance(account, entry_amount)</code> - Project balance</div>
                    <div>• <code className="bg-white px-1">risk.calculate_score(flags, user, documentation)</code> - Calculate risk</div>
                  </div>
                </div>
              </div>

              {/* Automation 3 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Intelligent Routing Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After anomaly detection completes</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When journal entry risk assessment complete:
  Determine approval workflow based on risk score and amount:
  
  If risk score < 30 AND amount < $10,000:
    Route: Auto-approve and post immediately
    Rationale: Low risk, immaterial amount
    Log: "Auto-approved based on low risk score"
    Send notification to preparer: "Entry posted"
  
  If risk score 30-60 AND amount < $50,000:
    Route: Accounting Manager review
    Due: Within 4 hours
    Priority: Normal
    Notification: Send to manager's review queue
  
  If risk score 61-80 OR amount $50,000-$100,000:
    Route: Controller review
    Due: Within 24 hours
    Priority: High
    Notification: Email + in-app notification
  
  If risk score > 80 OR amount > $100,000:
    Route: CFO review (or Controller + CFO dual approval)
    Due: Within 48 hours
    Priority: Urgent
    Notification: Email + SMS + in-app
    Require: Supporting documentation mandatory
  
  Special routing rules:
    If entry affects cash accounts: Always route to Treasury Manager
    If entry to revenue/COGS accounts: Route to Revenue Accountant first
    If entry prepared by new user: Add additional review by senior
    If entry reverses prior entry: Route to original entry approver
    If entry is recurring template: Can skip review after 3 approvals
  
  Create approval task:
    Assign to appropriate approver
    Attach risk assessment report
    Include all anomaly flags with explanations
    Link to supporting documentation
    Set due date based on priority
  
  Add entry to approver's queue:
    Sort by: Priority (Urgent > High > Normal) then Due Date
    Show risk score badge
    Highlight high-severity flags
  
  Send notification to approver:
    Include: Entry summary, amount, risk score, flags
    Provide: Quick approve/reject buttons in email
    Link: Direct link to review screen
  
  If entry not reviewed within 80% of due time:
    Send reminder notification
    Escalate to next level if past due`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">routing.determine_approver(risk_score, amount, account_type)</code></div>
                    <div>• <code className="bg-white px-1">tasks.create_approval_task(entry_id, approver, priority)</code></div>
                    <div>• <code className="bg-white px-1">queue.add_to_review_queue(approver_id, entry, sort_priority)</code></div>
                    <div>• <code className="bg-white px-1">notifications.send_approval_request(approver, entry_summary)</code></div>
                    <div>• <code className="bg-white px-1">escalation.check_overdue(task_id, due_date)</code></div>
                  </div>
                </div>
              </div>

              {/* Automation 4 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Recurring Entry Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Scheduled (monthly), or when template activated</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When recurring entry template is scheduled to post:
  Get template details:
    - Account numbers (debit and credit)
    - Amount (fixed or variable)
    - Description template
    - Recurrence pattern (monthly/quarterly/yearly)
    - Variance tolerance (allow +/- X% without review)
  
  Create new journal entry from template:
    Copy account numbers and descriptions
    If amount is fixed: Use template amount
    If amount is variable:
      Look up current value from source
      Example: "Depreciation = Sum of asset depreciation schedules"
      Calculate amount dynamically
    
    Calculate variance from last occurrence:
      Get prior period's entry for this template
      Calculate difference: (Current - Prior) / Prior * 100
    
    If variance within tolerance (e.g., < 5%):
      Mark as "Low risk - template variance acceptable"
      Route to streamlined approval (or auto-approve if enabled)
    
    If variance exceeds tolerance:
      Flag: "Variance from template exceeds threshold"
      Calculate risk score (base 50 + variance points)
      Route through normal approval workflow
      Send alert: "Recurring entry has unusual variance"
  
  Check if template should be reviewed:
    If template used successfully 5+ times with no issues:
      Suggest to user: "Enable auto-posting for this template?"
      If auto-post enabled: Post immediately, log for audit
    
    If template has been rejected/corrected 2+ times:
      Flag template for review
      Alert: "This template may need updating"
      Suggest: Review template definition
  
  Document recurring entry:
    Link to template
    Note if auto-posted or reviewed
    Record variance from prior period
    Update template usage statistics
  
  Schedule next occurrence:
    Calculate next posting date based on recurrence
    Set reminder 3 days before next scheduled post
    Add to recurring entry calendar`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">templates.get_recurring(template_id)</code> - Get template</div>
                    <div>• <code className="bg-white px-1">templates.calculate_variable_amount(formula, period)</code> - Calculate amount</div>
                    <div>• <code className="bg-white px-1">analytics.get_prior_occurrence(template_id, period)</code> - Get prior</div>
                    <div>• <code className="bg-white px-1">variance.calculate_tolerance(current, prior, threshold)</code> - Check variance</div>
                    <div>• <code className="bg-white px-1">templates.get_success_rate(template_id)</code> - Get success rate</div>
                    <div>• <code className="bg-white px-1">scheduler.schedule_next(template_id, recurrence_pattern)</code> - Schedule</div>
                  </div>
                </div>
              </div>

              {/* Automation 5 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">5. Pattern Learning Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When entry is approved or rejected</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When journal entry decision is made (approved or rejected):
  Analyze the entry and decision:
    Record decision: Approved or Rejected
    Record reviewer: Who made the decision
    Record flags: Which anomalies were flagged
    Record reviewer notes: Why approved/rejected
  
  If entry was APPROVED despite flags:
    Analyze which flags were overridden:
      For each flag that was raised:
        Check if reviewer provided justification
        Example: "Large amount normal for month-end accrual"
        
    Look for pattern in approved entries with similar flags:
      Search last 12 months for entries with same flag
      If 10+ similar entries all approved:
        Create learned exception rule:
          "Month-end accrual entries to Account 5200 
           typically range $40K-$60K - don't flag as unusual"
        
        Add to exception library:
          Rule description
          Applies to: Account numbers, entry types
          Confidence: Based on approval rate
          Review date: Re-evaluate in 6 months
    
    Update risk scoring model:
      Reduce weight of this flag for similar entries
      Adjust threshold for flagging
      Example: If "large amount" flagged but approved 15 times,
               raise threshold from 2x to 3x typical amount
  
  If entry was REJECTED:
    Analyze reason for rejection:
      Extract key rejection reason from reviewer notes
      Categorize: Duplicate, Error, Policy Violation, Other
    
    Look for pattern in rejected entries:
      If same preparer has 3+ rejections for same reason:
        Create alert: "User training may be needed"
        Send to accounting manager
      
      If same account combination rejected 3+ times:
        Create warning rule:
          "Account combination X→Y frequently rejected"
          Show warning during entry creation
          Require additional documentation
    
    Update validation rules:
      If rejection was for preventable error:
        Strengthen real-time validation
        Example: If rejected for "missing PO reference",
                 add required field validation
  
  Update accuracy metrics:
    Track by preparer: Approval rate, rejection reasons
    Track by account: Error frequency, flag accuracy
    Track by reviewer: Review patterns, average time
  
  Generate insights:
    "Account 6500 has 80% rejection rate - investigate"
    "User Jane has 95% first-time approval rate"
    "Accrual reversal flags 90% false positive - adjust threshold"`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">learning.record_decision(entry_id, decision, reviewer, notes)</code></div>
                    <div>• <code className="bg-white px-1">patterns.find_similar_approvals(flags, lookback_months)</code></div>
                    <div>• <code className="bg-white px-1">rules.create_exception_rule(pattern, confidence)</code></div>
                    <div>• <code className="bg-white px-1">risk_model.adjust_weights(flag_type, approval_rate)</code></div>
                    <div>• <code className="bg-white px-1">analytics.calculate_accuracy_metrics(preparer, period)</code></div>
                    <div>• <code className="bg-white px-1">insights.generate_recommendations(metrics)</code></div>
                  </div>
                </div>
              </div>

              {/* Remaining Automations Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Automations 6-9:</strong>
                <ul className="mt-2 space-y-2 list-none">
                  <li><strong>6. Post-Approval Processing</strong> - Posts approved entries, updates balances, sends confirmations</li>
                  <li><strong>7. Correction Tracking</strong> - Monitors corrections to entries, identifies repeat errors</li>
                  <li><strong>8. Documentation Enforcement</strong> - Ensures required supporting docs are attached, sends reminders</li>
                  <li><strong>9. Audit Trail Maintenance</strong> - Records all entry history, changes, approvals for audit</li>
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
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Agents (Intelligent Assistants)</h2>
                <p className="text-gray-600">4 specialized agents that act as expert reviewers</p>
              </div>
            </div>
            {expandedSection === 'agents' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'agents' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Agent 1 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Anomaly Explanation Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Explains why entries were flagged, provides context for reviewers</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Anomaly Explanation Agent for JournalGuard.</p>
                    <p><strong>Your role:</strong> Help reviewers understand why journal entries were flagged by explaining anomalies in business context, providing historical comparisons, and assessing actual risk.</p>
                    <p><strong>Context you have access to:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>The flagged entry details (accounts, amounts, description, preparer)</li>
                      <li>All anomaly flags and risk scores</li>
                      <li>Historical entries to the same accounts (12+ months)</li>
                      <li>Account normal balances and typical transaction patterns</li>
                      <li>Preparer's historical accuracy and approval rates</li>
                      <li>Similar entries that were approved or rejected previously</li>
                    </ul>
                    <p><strong>When explaining flags:</strong></p>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>State each flag clearly in business terms</li>
                      <li>Provide specific evidence (numbers, dates, comparisons)</li>
                      <li>Compare to historical patterns with data</li>
                      <li>Assess whether flag is concerning or likely benign</li>
                      <li>Suggest what reviewer should verify</li>
                      <li>Note if similar entries were previously approved</li>
                    </ol>
                    <p><strong>Tone:</strong> Informative, specific, balanced - help reviewer make informed decision</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INTERACTION:</div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-700 mr-2">Reviewer:</span>
                      <span>"Why was this entry flagged?"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-purple-600 mr-2">Agent:</span>
                      <span>"This entry was flagged for 3 reasons:

1. **Unusually large amount (High severity)**
   - Entry amount: $45,000
   - Typical monthly amount for Account 5100: $12,000-$18,000
   - This is 2.5x the typical maximum
   - Largest entry to this account in past 12 months: $22,000

2. **Opposite transaction type (Medium severity)**
   - Entry: Debit to Account 5100 (Expense account)
   - Historical pattern: Last 50 entries were all credits
   - This account typically only receives credit adjustments/reversals
   - No debits posted to this account in past 18 months

3. **Round dollar amount (Low severity)**
   - Amount: Exactly $45,000.00 (no cents)
   - Large round numbers sometimes indicate estimates vs actuals
   - May warrant verification of exact amount

**Historical context:**
- Account 5100 is "Professional Fees Expense"
- Average monthly activity: $15,000 in credits (accrual reversals)
- This appears to be the first regular expense entry (debit) in 18 months

**Assessment:**
The combination of factors suggests this may be legitimate but unusual:
- If this is a new consulting engagement, the debit would be correct
- The large amount and round dollar merit verification
- The lack of cents suggests it might be an estimated accrual

**Recommendation:**
Verify: 1) Is this an actual invoice or an accrual estimate? 2) If actual, confirm invoice amount is exactly $45,000.00 3) Ensure supporting documentation is attached

**Similar entries:**
No similar entries found in history for comparison. This appears to be a unique transaction type for this account."</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">entry.get_flags(entry_id)</code></div>
                    <div>• <code className="bg-white px-1">analytics.get_typical_range(account, months)</code></div>
                    <div>• <code className="bg-white px-1">history.get_account_pattern(account, type)</code></div>
                    <div>• <code className="bg-white px-1">comparison.find_similar_entries(entry)</code></div>
                    <div>• <code className="bg-white px-1">preparer.get_accuracy_stats(user_id)</code></div>
                    <div>• <code className="bg-white px-1">risk.assess_flag_severity(flag, context)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Entry Investigation Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Deep investigation of suspicious entries, researches across systems</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Entry Investigation Agent for JournalGuard.</p>
                    <p><strong>Your role:</strong> Conduct thorough investigations of suspicious journal entries by researching source documents, checking related transactions, validating against policies, and identifying any irregularities.</p>
                    <p><strong>Investigation process:</strong></p>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Review entry details and all attached documentation</li>
                      <li>Search for related entries in GL (same reference, related accounts)</li>
                      <li>Check source systems (AP, AR, Payroll) for originating transaction</li>
                      <li>Validate against company policies and accounting standards</li>
                      <li>Look for sequential entries that might be part of larger scheme</li>
                      <li>Check preparer's recent entry history for patterns</li>
                      <li>Verify approvals and authorization documentation</li>
                      <li>Assess business logic and reasonableness</li>
                    </ol>
                    <p><strong>Your output:</strong> Detailed investigation report with findings, risk assessment, and recommendation (Approve, Reject, or Investigate Further)</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INTERACTION:</div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-700 mr-2">Reviewer:</span>
                      <span>"Please investigate this $45,000 entry to Professional Fees"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-purple-600 mr-2">Agent:</span>
                      <span>"Investigation complete. Here are my findings:

**Entry Details:**
- Date: Oct 15, 2024
- Amount: $45,000 debit to Account 5100 (Professional Fees)
- Description: 'Q3 Consulting Services - Acme Advisors'
- Preparer: John Smith (Senior Accountant)
- Supporting docs: 1 attachment

**Documentation Review:**
✓ Invoice from Acme Advisors dated Oct 10, 2024
✓ Invoice number: INV-2024-Q3-001
✓ Amount matches: $45,000.00
✓ Payment terms: Net 30
✗ **Issue found:** No approval signature on invoice

**Source System Check:**
- Searched AP system: Invoice found but marked 'Pending Approval'
- Status: Awaiting Director approval since Oct 12
- Normal workflow: AP entries post only after approval

**Related Transactions:**
- Found PO #8734 for Acme Advisors, amount: $45,000
- PO approved by CFO on July 15, 2024
- Contract on file for Q3 consulting project
- This is final payment (2 prior payments: Aug $15K, Sep $15K)

**Policy Validation:**
✗ **Violation found:** Manual GL entry bypasses normal AP workflow
✓ Contract supports expenditure
✓ PO exists and is approved
✗ Invoice approval still pending in AP system

**Pattern Analysis:**
- Checked preparer's history: 47 prior entries, 95% approval rate
- No prior policy violations found
- Preparer has authority to post manual entries
- Similar manual entries made only when AP system down

**Business Logic Check:**
- Contract scope supports $45K final payment
- Total project cost: $75K (matches PO)
- Timing is reasonable (Q3 ended Sep 30)
- Vendor is established (12 prior transactions)

**Risk Assessment:**
Medium Risk - Entry appears legitimate but bypasses controls

**Findings Summary:**
1. Valid business transaction supported by contract and PO
2. Invoice amount is correct, not an estimate
3. **Control bypass:** Manual entry made while invoice awaiting approval
4. Preparer may have posted to meet timing deadline

**Recommendation:**
Conditional approval with corrective action:
- Approve the entry (transaction is valid)
- Require immediate approval of invoice in AP system
- Document exception reason: 'Posted manually for month-end timing'
- Counsel preparer: Manual entries should not bypass AP approval
- Follow up: Ensure invoice is approved in AP by EOD

**Follow-up actions needed:**
1. Verify AP invoice approval by Oct 16
2. Document control exception
3. Remind staff: Month-end does not justify control bypass"</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">documents.get_attachments(entry_id)</code></div>
                    <div>• <code className="bg-white px-1">gl.search_related_entries(reference, accounts)</code></div>
                    <div>• <code className="bg-white px-1">ap.search_invoice(vendor, amount, date_range)</code></div>
                    <div>• <code className="bg-white px-1">po.lookup(po_number)</code></div>
                    <div>• <code className="bg-white px-1">policies.validate_entry(entry, policy_rules)</code></div>
                    <div>• <code className="bg-white px-1">preparer.get_entry_history(user_id, months)</code></div>
                    <div>• <code className="bg-white px-1">vendor.get_transaction_history(vendor_id)</code></div>
                    <div>• <code className="bg-white px-1">contracts.search(vendor, date_range)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 3 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Correction Suggestion Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Identifies errors and suggests specific corrections</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Identify common entry errors (wrong account, transposed digits, sign errors)</li>
                    <li>Suggest correct account based on description and amount</li>
                    <li>Detect balance inconsistencies and recommend adjustments</li>
                    <li>Propose correcting entries for posted errors</li>
                    <li>Validate correction entries before posting</li>
                    <li>Learn from corrections to improve future error detection</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">errors.detect_common_patterns(entry)</code></div>
                    <div>• <code className="bg-white px-1">accounts.suggest_correct(description, amount)</code></div>
                    <div>• <code className="bg-white px-1">entry.generate_correction(original_entry)</code></div>
                    <div>• <code className="bg-white px-1">validation.check_correction(correcting_entry)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 4 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Journal Entry Assistant Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Answers questions, provides guidance, explains processes</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Answer questions: "What account should I use?" "Why is this flagged?" "How do I create a recurring entry?"</li>
                    <li>Explain journal entry concepts and accounting standards</li>
                    <li>Provide guidance on documentation requirements</li>
                    <li>Show examples of similar approved entries</li>
                    <li>Explain company policies and approval workflows</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">help.get_account_guidance(description)</code></div>
                    <div>• <code className="bg-white px-1">examples.find_similar_entries(criteria)</code></div>
                    <div>• <code className="bg-white px-1">policies.get_requirements(entry_type)</code></div>
                    <div>• <code className="bg-white px-1">workflow.explain_approval_process(amount)</code></div>
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
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <Smartphone className="w-6 h-6 text-pink-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Apps (Visualizations + Interactions)</h2>
                <p className="text-gray-600">5 interactive apps for journal entry management</p>
              </div>
            </div>
            {expandedSection === 'apps' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'apps' && (
            <div className="p-6 border-t space-y-6">
              
              {/* App 1 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">1. Journal Entry Dashboard</h3>
                <p className="text-sm text-gray-700 mb-3">Overview of all journal entry activity and status</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Entry volume trend (line chart by month)</div>
                      <div className="bg-white p-2 rounded">• Approval rate gauge (% first-time approved)</div>
                      <div className="bg-white p-2 rounded">• Risk distribution pie chart (low/med/high)</div>
                      <div className="bg-white p-2 rounded">• Pending reviews by approver (bar chart)</div>
                      <div className="bg-white p-2 rounded">• Top flags frequency (table)</div>
                      <div className="bg-white p-2 rounded">• Error rate by preparer (heatmap)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"New Entry" → Opens entry form</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"My Review Queue" → Filter to user's pending</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click entry → Opens detail view</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">FILTER</span>
                        <span>Filter: All/Pending/Approved/Flagged</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Ask Assistant" → General questions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 2 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">2. Smart Entry Form</h3>
                <p className="text-sm text-gray-700 mb-3">Intelligent form with real-time validation and suggestions</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Balance indicator (green/yellow/red)</div>
                      <div className="bg-white p-2 rounded">• Inline validation messages</div>
                      <div className="bg-white p-2 rounded">• Account balance preview (after entry)</div>
                      <div className="bg-white p-2 rounded">• Similar entries suggestion panel</div>
                      <div className="bg-white p-2 rounded">• Documentation checklist</div>
                      <div className="bg-white p-2 rounded">• Risk score preview badge</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">INPUT</span>
                        <span>Account fields with auto-complete</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">INPUT</span>
                        <span>Amount fields with real-time validation</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">UPLOAD</span>
                        <span>Drag-drop supporting documents</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Save Draft" → Auto-saves every 30s</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Submit for Review" → Triggers analysis</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Help with this entry" → Ask assistant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 3 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">3. Review Queue App</h3>
                <p className="text-sm text-gray-700 mb-3">Prioritized queue for approvers to review flagged entries</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Prioritized entry list (urgent/high/normal)</div>
                      <div className="bg-white p-2 rounded">• Risk score badges (color-coded)</div>
                      <div className="bg-white p-2 rounded">• Flag indicators (icons for each flag type)</div>
                      <div className="bg-white p-2 rounded">• Entry detail panel (side-by-side view)</div>
                      <div className="bg-white p-2 rounded">• Historical comparison charts</div>
                      <div className="bg-white p-2 rounded">• Agent recommendation cards</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Approve" → Approves and posts entry</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-red-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Reject" → Returns to preparer with notes</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Request Changes" → Specific corrections</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Ask Why Flagged" → Anomaly agent</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Investigate" → Investigation agent</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">TEXTAREA</span>
                        <span>Add review notes/comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apps 4-5 Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Apps 4-5:</strong>
                <div className="space-y-2">
                  <div>
                    <strong>4. Recurring Templates App</strong> - Manage recurring entry templates
                    <div className="text-xs text-gray-600 ml-4">Viz: Template library, usage stats, variance tracking | Interact: Create/edit templates, set schedules, enable auto-post, test templates</div>
                  </div>
                  <div>
                    <strong>5. Entry Analytics App</strong> - Historical analysis and insights
                    <div className="text-xs text-gray-600 ml-4">Viz: Accuracy trends, error patterns, preparer scorecards, account risk profiles | Interact: Filter by time period, drill into details, export reports, view learned rules</div>
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

export default JournalGuardSpec;