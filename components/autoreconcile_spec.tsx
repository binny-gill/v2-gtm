import React, { useState } from 'react';
import { Zap, Bot, Smartphone, ChevronDown, ChevronRight, Code, MessageSquare, Layout } from 'lucide-react';

const AutoReconcileSpec = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">AutoReconcile App</h1>
          <p className="text-xl text-emerald-100 mb-4">Complete Technical Specification</p>
          <p className="text-sm text-emerald-200 mb-6">Automate 80-95% of reconciliations without creating technical debt</p>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              <span>10 Automations</span>
            </div>
            <div className="flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              <span>4 Agents</span>
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
                <p className="text-gray-600">How AutoReconcile components work together</p>
              </div>
            </div>
            {expandedSection === 'overview' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'overview' && (
            <div className="p-6 border-t space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 p-6 rounded-lg border">
                <h3 className="font-bold text-xl mb-4">The Complete System</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong className="text-emerald-600">Automations</strong> handle the heavy lifting: importing transactions from multiple sources, matching entries using intelligent rules, calculating variances, routing exceptions, and generating reconciliation reports automatically.
                  </p>
                  <p>
                    <strong className="text-teal-600">Agents</strong> handle the complex cases: resolving ambiguous matches, investigating variances, researching missing transactions, and learning patterns to improve future matching accuracy.
                  </p>
                  <p>
                    <strong className="text-cyan-600">Apps</strong> provide the control interface: dashboards show reconciliation status, forms allow rule configuration, matching screens enable quick review, and chats let users interact with agents.
                  </p>
                  <div className="bg-white p-4 rounded mt-4">
                    <strong>Example end-to-end flow:</strong>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-700">
                      <li>Data Import Automation pulls bank transactions and GL entries daily</li>
                      <li>Transaction Matching Automation applies user-defined rules in English</li>
                      <li>System auto-matches 85% of transactions with 100% confidence</li>
                      <li>Remaining 15% flagged as exceptions and shown in <em>Match Review App</em></li>
                      <li>User reviews exception: "Invoice #1234 vs Bank $10,500"</li>
                      <li>User clicks "Ask Agent" for ambiguous match</li>
                      <li><em>Match Resolution Agent</em> investigates: checks vendor history, reviews patterns</li>
                      <li>Agent recommends: "Likely match - vendor typically has 5% variance for early payment discount"</li>
                      <li>User clicks "Accept Match" or manually adjusts</li>
                      <li>Variance Calculation Automation updates reconciliation with final numbers</li>
                      <li><em>Reconciliation Dashboard</em> shows 95% complete, 3 items pending</li>
                      <li>Pattern Learning Automation adds rule: "Vendor X early payment = 5% variance acceptable"</li>
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
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Automations (English as Code)</h2>
                <p className="text-gray-600">10 core automations that power intelligent reconciliation</p>
              </div>
            </div>
            {expandedSection === 'automations' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'automations' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Automation 1 */}
              <div className="border-l-4 border-emerald-500 pl-4 bg-emerald-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Multi-Source Data Import Automation</h3>
                  <Code className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Daily at 2:00 AM, or on-demand via button</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When data import runs:
  For each connected data source (bank, ERP, credit card, payroll):
    Connect using saved credentials
    Determine date range:
      - If first import: last 90 days
      - If regular import: since last successful import
    Extract transactions with fields:
      - Date, amount, description, reference number
      - Source-specific identifiers (check number, wire ID)
    Validate each transaction:
      - Date is valid and within expected range
      - Amount is numeric and not zero
      - Required fields are not null
    Apply data transformations:
      - Standardize date format to YYYY-MM-DD
      - Convert amount to base currency if needed
      - Clean description text (remove extra spaces, special chars)
      - Extract structured data from description when possible
    De-duplicate:
      - Check if transaction already imported
      - Use composite key: source + date + amount + reference
    Import to staging table with metadata:
      - Import timestamp
      - Source system
      - Import batch ID
  After all sources imported:
    Log import summary: records imported per source
    Flag any sources that failed to connect
    Send notification if failures occurred
    Trigger Transaction Matching Automation`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">bank.connect(bank_id, credentials)</code> - Connect to bank via API</div>
                    <div>• <code className="bg-white px-1">bank.get_transactions(account, date_from, date_to)</code> - Pull transactions</div>
                    <div>• <code className="bg-white px-1">erp.connect(credentials)</code> - Connect to ERP system</div>
                    <div>• <code className="bg-white px-1">erp.get_gl_entries(account, date_from, date_to)</code> - Pull GL entries</div>
                    <div>• <code className="bg-white px-1">data.validate_transaction(transaction, rules)</code> - Validate data quality</div>
                    <div>• <code className="bg-white px-1">data.transform(transaction, mapping)</code> - Apply transformations</div>
                    <div>• <code className="bg-white px-1">data.check_duplicate(transaction, key_fields)</code> - Check for duplicates</div>
                    <div>• <code className="bg-white px-1">database.import_batch(table, transactions, batch_id)</code> - Bulk import</div>
                  </div>
                </div>
              </div>

              {/* Automation 2 */}
              <div className="border-l-4 border-emerald-500 pl-4 bg-emerald-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Intelligent Transaction Matching Automation</h3>
                  <Code className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After data import completes, or when new transactions added</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When transaction matching runs for an account:
  Get unmatched transactions from both sources (e.g., bank and GL)
  Get user-defined matching rules for this account type
  
  For each matching rule in priority order:
    Apply rule criteria:
      Example rule: "Match if date within 2 business days 
                     AND amount exactly equal 
                     AND description contains reference number"
    
    For each unmatched transaction from source A:
      Find candidates from source B that meet criteria
      Calculate confidence score for each candidate:
        - Exact match on all fields: 100%
        - Close match with minor variance: 80-99%
        - Partial match: 50-79%
        - Weak match: below 50%
      
      If confidence >= 95%:
        Auto-match the pair
        Mark both transactions as matched
        Record match details and confidence score
        Log which rule was used
      
      If confidence between 70-95%:
        Flag as "Suggested Match" for user review
        Include explanation of why it's not 100% confident
      
      If confidence < 70%:
        Leave as unmatched for investigation
  
  After all rules applied:
    Calculate match statistics:
      - Total transactions processed
      - Auto-matched count and %
      - Suggested matches count
      - Unmatched count
    Identify patterns in unmatched transactions
    Update match accuracy metrics by rule
    Trigger Variance Calculation Automation for matched items`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">matching.get_unmatched(source, account, date_range)</code> - Get unmatched items</div>
                    <div>• <code className="bg-white px-1">rules.get_by_account(account_type)</code> - Get matching rules for account</div>
                    <div>• <code className="bg-white px-1">matching.find_candidates(transaction, candidates, criteria)</code> - Find matches</div>
                    <div>• <code className="bg-white px-1">matching.calculate_confidence(trans_a, trans_b, rule)</code> - Score confidence</div>
                    <div>• <code className="bg-white px-1">matching.create_match(trans_a, trans_b, confidence, rule_id)</code> - Record match</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_match_stats(account, period)</code> - Calculate statistics</div>
                  </div>
                </div>
              </div>

              {/* Automation 3 */}
              <div className="border-l-4 border-emerald-500 pl-4 bg-emerald-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Variance Calculation Automation</h3>
                  <Code className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After matching completes, or when user manually adjusts matches</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When calculating variance for a reconciliation:
  Get starting balance from prior period reconciliation
  Get all transactions for current period by source:
    Source A transactions (e.g., GL entries)
    Source B transactions (e.g., bank transactions)
  
  Calculate ending balances:
    Source A ending = Starting balance + Source A transactions
    Source B ending = Starting balance + Source B transactions
  
  Calculate variance:
    Variance amount = Source A ending - Source B ending
    Variance percentage = (Variance amount / Source A ending) * 100
  
  Categorize variance:
    If variance = 0: "Fully Reconciled"
    If variance < $100: "Immaterial Variance"
    If variance < 2% of balance: "Within Tolerance"
    If variance >= 2% of balance: "Material Variance - Requires Explanation"
  
  Identify variance components:
    Outstanding items not yet matched
    Timing differences (in-transit items)
    Unidentified transactions
    True variances requiring adjustment
  
  Create variance breakdown report showing:
    Opening balance
    + Additions from Source A
    - Subtractions from Source A
    = Calculated Source A balance
    vs. Source B balance
    = Variance
  
  Flag accounts requiring attention:
    Material variances
    Variances trending up over 3+ months
    Accounts with >10 unmatched transactions
  
  Update reconciliation record with variance details
  Trigger notification if material variance detected`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">reconciliation.get_prior_balance(account, period)</code> - Get opening balance</div>
                    <div>• <code className="bg-white px-1">transactions.get_by_source(source, account, period)</code> - Get transactions</div>
                    <div>• <code className="bg-white px-1">calculations.calculate_ending_balance(opening, transactions)</code> - Calculate balance</div>
                    <div>• <code className="bg-white px-1">variance.categorize(variance_amt, balance)</code> - Categorize variance</div>
                    <div>• <code className="bg-white px-1">variance.breakdown_components(account, period)</code> - Analyze components</div>
                    <div>• <code className="bg-white px-1">reports.generate_variance_waterfall(account, data)</code> - Create waterfall</div>
                  </div>
                </div>
              </div>

              {/* Automation 4 */}
              <div className="border-l-4 border-emerald-500 pl-4 bg-emerald-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Pattern Learning Automation</h3>
                  <Code className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When user confirms a suggested match or resolves exception</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When user confirms a match or resolves an exception:
  Analyze the match characteristics:
    - What was different between the transactions?
    - Date variance: How many days apart?
    - Amount variance: What percentage difference?
    - Description pattern: Any text similarities?
    - Vendor/counterparty: Same entity?
  
  Check if this represents a recurring pattern:
    Look for similar matches in last 6 months
    If found 3+ times:
      Extract the pattern rules
      Example: "Vendor X early payment = 5% discount"
      Example: "Wire transfers post 1 day after GL entry"
  
  If recurring pattern detected:
    Create or update matching rule:
      Give it a descriptive name
      Define the criteria in English
      Set confidence threshold
      Mark as "Learned Pattern"
    Add to troubleshooting guide with:
      Pattern description
      Frequency of occurrence
      Business reason if known
      Examples of transactions
    
  Calculate pattern accuracy:
    Track: How often does this pattern occur?
    Track: How often is it confirmed by users?
    Track: Has it ever been rejected?
  
  If pattern accuracy > 90% after 10 occurrences:
    Promote to "Auto-match Rule"
    Future matches meeting this pattern auto-match
    Log promotion to audit trail
  
  If pattern accuracy < 60%:
    Demote back to "Suggestion Only"
    Require user review for this pattern
  
  Update pattern dashboard showing:
    Active learned patterns
    Pattern accuracy rates
    Automation improvement over time`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">matching.analyze_characteristics(trans_a, trans_b)</code> - Analyze match</div>
                    <div>• <code className="bg-white px-1">patterns.find_similar(characteristics, lookback_months)</code> - Find similar</div>
                    <div>• <code className="bg-white px-1">patterns.extract_rule(matches)</code> - Extract rule from examples</div>
                    <div>• <code className="bg-white px-1">rules.create_learned_rule(pattern, criteria, confidence)</code> - Create rule</div>
                    <div>• <code className="bg-white px-1">troubleshooting.add_pattern(description, examples)</code> - Document pattern</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_pattern_accuracy(pattern_id)</code> - Track accuracy</div>
                  </div>
                </div>
              </div>

              {/* Automation 5 */}
              <div className="border-l-4 border-emerald-500 pl-4 bg-emerald-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">5. Exception Routing Automation</h3>
                  <Code className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When transactions fail to auto-match</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When unmatched transactions are identified:
  Categorize each exception by type:
    - Suggested Match (70-95% confidence): User review needed
    - No Candidates: Completely unmatched, investigation needed
    - Multiple Candidates: Ambiguous, agent help needed
    - Timing Difference: Likely match but date mismatch
    - Amount Variance: Close match but amount different
  
  For each exception type, determine routing:
    Suggested Match:
      - Add to user's review queue in Match Review App
      - Prioritize by amount (largest first)
      
    No Candidates (if amount > $1000):
      - Create investigation task
      - Assign to Transaction Research Agent
      - Set due date: 2 business days
      
    Multiple Candidates (>3 possible matches):
      - Route to Match Resolution Agent
      - Agent will analyze and recommend best match
      
    Timing Difference (date variance 3-10 days):
      - Hold for 5 business days to see if match appears
      - If still unmatched after 5 days, route to user review
      
    Amount Variance (<5% difference):
      - Route to Variance Analysis Agent
      - Agent will investigate cause of variance
  
  Create exception summary report:
    - Count by exception type
    - Age of oldest exception
    - Total dollar amount in exceptions
    - Trend vs prior periods
  
  Send daily exception digest to reconciliation owner:
    - New exceptions requiring attention
    - Aging exceptions (>7 days old)
    - Recommended actions
  
  Update exception dashboard with real-time counts`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">exceptions.categorize(transaction, match_attempts)</code> - Categorize exception</div>
                    <div>• <code className="bg-white px-1">routing.determine_route(exception_type, amount)</code> - Determine routing</div>
                    <div>• <code className="bg-white px-1">tasks.create_investigation(transaction, assigned_to)</code> - Create task</div>
                    <div>• <code className="bg-white px-1">queue.add_to_review(user_id, transaction, priority)</code> - Add to queue</div>
                    <div>• <code className="bg-white px-1">reports.generate_exception_summary(account, period)</code> - Generate report</div>
                  </div>
                </div>
              </div>

              {/* Remaining Automations Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Automations 6-10:</strong>
                <ul className="mt-2 space-y-2 list-none">
                  <li><strong>6. Outstanding Items Tracking</strong> - Monitors in-transit items, auto-clears when matched</li>
                  <li><strong>7. Reconciliation Certification</strong> - Routes completed reconciliations for approval</li>
                  <li><strong>8. Historical Archive</strong> - Archives prior periods, maintains audit trail</li>
                  <li><strong>9. Accuracy Monitoring</strong> - Tracks match rates, flags declining performance</li>
                  <li><strong>10. Bulk Operations</strong> - Handles mass imports, bulk matching, batch approvals</li>
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
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <Bot className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Agents (Intelligent Assistants)</h2>
                <p className="text-gray-600">4 specialized agents that handle complex matching scenarios</p>
              </div>
            </div>
            {expandedSection === 'agents' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'agents' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Agent 1 */}
              <div className="border-l-4 border-teal-500 pl-4 bg-teal-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Match Resolution Agent</h3>
                  <MessageSquare className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Resolves ambiguous matches, analyzes multiple candidates, recommends best match</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Match Resolution Agent for AutoReconcile.</p>
                    <p><strong>Your role:</strong> Help users resolve ambiguous transaction matches by analyzing multiple candidates and recommending the best match based on all available evidence.</p>
                    <p><strong>Context you have access to:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>The unmatched transaction details (date, amount, description, reference)</li>
                      <li>All candidate matches with similarity scores</li>
                      <li>Historical matching patterns for this account and vendor</li>
                      <li>Transaction sequences (what came before/after)</li>
                      <li>Vendor payment patterns and typical variances</li>
                    </ul>
                    <p><strong>When resolving ambiguous matches:</strong></p>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Analyze each candidate match against all criteria</li>
                      <li>Look for distinguishing features (reference numbers, amounts, dates)</li>
                      <li>Check historical patterns for this vendor/account</li>
                      <li>Consider timing sequences and business logic</li>
                      <li>Calculate probability scores for each candidate</li>
                      <li>Recommend the most likely match with confidence level</li>
                      <li>Explain reasoning clearly so user can validate</li>
                    </ol>
                    <p><strong>Tone:</strong> Analytical, thorough, transparent about uncertainty</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INTERACTION:</div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-700 mr-2">User:</span>
                      <span>"I have a bank transaction for $10,500 on Oct 15 with description 'Wire ACH', but I see 3 possible GL matches"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-teal-600 mr-2">Agent:</span>
                      <span>"I've analyzed all 3 candidates:

Candidate A: GL entry $10,500 on Oct 15, Vendor: Acme Corp, Invoice #4521
Candidate B: GL entry $10,000 on Oct 14, Vendor: Acme Corp, Invoice #4520
Candidate C: GL entry $10,500 on Oct 13, Vendor: Beta Inc, Invoice #8873

My recommendation: Candidate A (85% confidence)

Reasoning:
1. Exact amount match ($10,500)
2. Exact date match (Oct 15)
3. Vendor check: Acme Corp has wire payment history with 'ACH' in description
4. Invoice #4521 was marked for wire payment in AP system
5. Timing: GL entry posted same day (typical for wires)

Why not B or C:
- Candidate B: Amount is $500 short (not typical for this vendor)
- Candidate C: Vendor Beta Inc typically pays by check, not wire

Historical pattern: Acme Corp has 47 prior wire payments, all matched same-day, exact amount.

Would you like me to confirm this match or investigate further?"</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">matching.get_candidates(transaction)</code></div>
                    <div>• <code className="bg-white px-1">matching.compare_details(trans_a, trans_b)</code></div>
                    <div>• <code className="bg-white px-1">history.get_vendor_patterns(vendor_id)</code></div>
                    <div>• <code className="bg-white px-1">transactions.get_sequence(trans_id, range)</code></div>
                    <div>• <code className="bg-white px-1">analytics.calculate_match_probability()</code></div>
                    <div>• <code className="bg-white px-1">vendor.get_payment_preferences(vendor_id)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="border-l-4 border-teal-500 pl-4 bg-teal-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Transaction Research Agent</h3>
                  <MessageSquare className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Investigates completely unmatched transactions, identifies missing items</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Transaction Research Agent for AutoReconcile.</p>
                    <p><strong>Your role:</strong> Investigate transactions with no apparent match by researching across multiple systems, identifying missing entries, and determining root cause.</p>
                    <p><strong>Research steps you follow:</strong></p>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Check if transaction exists in other systems (AP, AR, Payroll)</li>
                      <li>Search for similar transactions within +/- 30 days</li>
                      <li>Look up vendor/customer to understand transaction type</li>
                      <li>Check for pending entries not yet posted</li>
                      <li>Review outstanding items list for potential match</li>
                      <li>Identify if it's truly a missing entry or timing difference</li>
                    </ol>
                    <p><strong>Your output:</strong> Research findings with recommendation: "Match found in [system]", "Timing difference - expect match by [date]", "Missing GL entry - needs journal entry", or "Unidentified - requires human investigation"</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INTERACTION:</div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-700 mr-2">User:</span>
                      <span>"Can you investigate this $2,450 bank debit on Oct 20? Description says 'AUTOMATED PYMT'."</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-teal-600 mr-2">Agent:</span>
                      <span>"I've completed my investigation:

Transaction: $2,450 debit, Oct 20, 'AUTOMATED PYMT'

Research findings:
1. Checked GL for Oct 20: No matching entry found
2. Searched AP system: Found Invoice #9843 to 'Insurance Corp' for $2,450
3. Payment status: Marked as 'Scheduled ACH' for Oct 20
4. GL posting: Entry is in 'pending' status, not yet posted
5. Typical pattern: ACH payments post to GL 1 day after bank clears

Root cause: GL entry exists but hasn't posted yet (still pending approval)

Recommendation: This is a timing difference. The GL entry for Invoice #9843 should post tomorrow (Oct 21) once approved. Add to outstanding items as 'In-transit - pending GL approval'.

If GL entry doesn't post by Oct 22, escalate to Accounting Manager as there may be an approval workflow issue.

Would you like me to monitor this and alert you if it's not resolved by Oct 22?"</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">search.across_systems(criteria)</code></div>
                    <div>• <code className="bg-white px-1">ap.search_invoices(amount, date_range)</code></div>
                    <div>• <code className="bg-white px-1">gl.get_pending_entries(account)</code></div>
                    <div>• <code className="bg-white px-1">outstanding.get_items(account)</code></div>
                    <div>• <code className="bg-white px-1">vendor.lookup(description_text)</code></div>
                    <div>• <code className="bg-white px-1">patterns.get_timing_differences(type)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 3 */}
              <div className="border-l-4 border-teal-500 pl-4 bg-teal-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Variance Analysis Agent</h3>
                  <MessageSquare className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Analyzes amount variances, identifies causes, suggests resolutions</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Calculate and categorize variance (percentage, materiality)</li>
                    <li>Identify common variance causes (discounts, fees, currency conversion)</li>
                    <li>Check vendor history for typical variance patterns</li>
                    <li>Determine if variance is within acceptable tolerance</li>
                    <li>Recommend whether to match with variance or investigate further</li>
                    <li>Draft variance explanation for documentation</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">variance.calculate(amount_a, amount_b)</code></div>
                    <div>• <code className="bg-white px-1">variance.identify_cause(trans_a, trans_b)</code></div>
                    <div>• <code className="bg-white px-1">vendor.get_typical_variance(vendor_id)</code></div>
                    <div>• <code className="bg-white px-1">policies.get_tolerance_threshold(account)</code></div>
                    <div>• <code className="bg-white px-1">variance.draft_explanation(variance_data)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 4 */}
              <div className="border-l-4 border-teal-500 pl-4 bg-teal-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Reconciliation Assistant Agent</h3>
                  <MessageSquare className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Answers general questions, provides guidance, explains status</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Answer questions: "What's the status?" "How many items left?" "Why isn't this matching?"</li>
                    <li>Explain reconciliation concepts and processes</li>
                    <li>Provide guidance on how to resolve specific issues</li>
                    <li>Show historical performance and trends</li>
                    <li>Suggest best practices for improving match rates</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">reconciliation.get_status(account)</code></div>
                    <div>• <code className="bg-white px-1">analytics.get_match_statistics(account)</code></div>
                    <div>• <code className="bg-white px-1">help.get_guidance(issue_type)</code></div>
                    <div>• <code className="bg-white px-1">history.get_trends(account, metric)</code></div>
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
              <div className="bg-cyan-100 p-3 rounded-full mr-4">
                <Smartphone className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Apps (Visualizations + Interactions)</h2>
                <p className="text-gray-600">6 interactive apps for managing reconciliations</p>
              </div>
            </div>
            {expandedSection === 'apps' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'apps' && (
            <div className="p-6 border-t space-y-6">
              
              {/* App 1 */}
              <div className="border-l-4 border-cyan-500 pl-4 bg-cyan-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">1. Reconciliation Dashboard</h3>
                <p className="text-sm text-gray-700 mb-3">Main overview of all reconciliation status</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Match rate gauge (% auto-matched)</div>
                      <div className="bg-white p-2 rounded">• Account status grid (complete/in-progress/exceptions)</div>
                      <div className="bg-white p-2 rounded">• Exception count by category (pie chart)</div>
                      <div className="bg-white p-2 rounded">• Variance summary table by account</div>
                      <div className="bg-white p-2 rounded">• Match accuracy trend (last 6 months)</div>
                      <div className="bg-white p-2 rounded">• Outstanding items aging (bar chart)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Run Import" → Triggers data import</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Run Matching" → Triggers matching</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click account → Opens detail view</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">FILTER</span>
                        <span>Filter: All/Exceptions Only/Complete</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Ask Assistant" → Chat with agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 2 */}
              <div className="border-l-4 border-cyan-500 pl-4 bg-cyan-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">2. Match Review App</h3>
                <p className="text-sm text-gray-700 mb-3">Review and confirm suggested matches</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Side-by-side comparison of transactions</div>
                      <div className="bg-white p-2 rounded">• Confidence score indicator (0-100%)</div>
                      <div className="bg-white p-2 rounded">• Match criteria checklist (what matched/didn't)</div>
                      <div className="bg-white p-2 rounded">• Historical matches for reference</div>
                      <div className="bg-white p-2 rounded">• Agent recommendation badge</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Accept Match" → Confirms match</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-red-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Reject" → Unmatches items</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Ask Agent" → Get resolution help</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Find Better Match" → Search again</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>Agent explains why suggested</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 3 */}
              <div className="border-l-4 border-cyan-500 pl-4 bg-cyan-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">3. Manual Matching App</h3>
                <p className="text-sm text-gray-700 mb-3">Manually match transactions when automatic matching fails</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Unmatched items list (two panels: source A and B)</div>
                      <div className="bg-white p-2 rounded">• Search and filter controls</div>
                      <div className="bg-white p-2 rounded">• Match preview pane</div>
                      <div className="bg-white p-2 rounded">• Variance calculation display</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">DRAG</span>
                        <span>Drag item from A to B to match</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click + select to multi-match (1-to-many)</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">INPUT</span>
                        <span>Search/filter by amount, date, description</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Match with Variance" → Confirm with difference</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 4 */}
              <div className="border-l-4 border-cyan-500 pl-4 bg-cyan-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">4. Rule Builder App</h3>
                <p className="text-sm text-gray-700 mb-3">Create and modify matching rules in English</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Rule list with accuracy rates</div>
                      <div className="bg-white p-2 rounded">• Rule performance metrics (match count, accuracy %)</div>
                      <div className="bg-white p-2 rounded">• Learned patterns section</div>
                      <div className="bg-white p-2 rounded">• Test results preview</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">FORM</span>
                        <span>English rule editor: "Match if..."</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">DROPDOWN</span>
                        <span>Criteria selectors (date, amount, description)</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Test Rule" → Preview matches</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Activate Rule" → Enable for matching</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Promote Learned Pattern" → Convert to rule</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apps 5-6 Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Apps 5-6:</strong>
                <div className="space-y-2">
                  <div>
                    <strong>5. Variance Report App</strong> - Detailed variance analysis by account
                    <div className="text-xs text-gray-600 ml-4">Viz: Waterfall charts, breakdown tables, trend lines | Interact: Drill into accounts, export reports, add explanations</div>
                  </div>
                  <div>
                    <strong>6. Outstanding Items App</strong> - Track in-transit and timing differences
                    <div className="text-xs text-gray-600 ml-4">Viz: Aging analysis, outstanding items list, clearance tracking | Interact: Mark as cleared, add notes, set follow-up dates</div>
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

export default AutoReconcileSpec;