import React, { useState } from 'react';
import { Zap, Bot, Smartphone, ChevronDown, ChevronRight, Code, MessageSquare, Layout, Shield } from 'lucide-react';

const FraudWatchSpec = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-800 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Shield className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">FraudWatch App</h1>
              <p className="text-xl text-red-100 mb-4">Complete Technical Specification</p>
            </div>
          </div>
          <p className="text-sm text-red-200 mb-6">Detect fraud & anomalies 50%+ faster with explainable alerts and real-time monitoring</p>
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
                <p className="text-gray-600">How FraudWatch components work together</p>
              </div>
            </div>
            {expandedSection === 'overview' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'overview' && (
            <div className="p-6 border-t space-y-6">
              <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 p-6 rounded-lg border border-red-200">
                <h3 className="font-bold text-xl mb-4">The Complete System</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong className="text-red-600">Automations</strong> monitor all financial transactions in real-time, applying detection rules, calculating risk scores, identifying patterns, flagging anomalies, and escalating high-risk alerts immediately.
                  </p>
                  <p>
                    <strong className="text-orange-600">Agents</strong> investigate suspicious activity: analyzing transaction patterns, researching entity behavior, gathering evidence, interviewing systems for context, and providing investigative recommendations with full audit trails.
                  </p>
                  <p>
                    <strong className="text-yellow-600">Apps</strong> provide the command center: real-time alert dashboards, case management interfaces, investigation workbenches, pattern visualization tools, and collaboration features for fraud teams.
                  </p>
                  <div className="bg-white p-4 rounded mt-4">
                    <strong>Example end-to-end flow:</strong>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-700">
                      <li>Real-Time Monitoring Automation scans every transaction as it posts</li>
                      <li>Wire transfer detected: $47,500 to new vendor "Tech Solutions LLC"</li>
                      <li>Rule-Based Detection Automation applies fraud rules:
                        <ul className="list-disc list-inside ml-6 text-xs mt-1">
                          <li>✓ New vendor (added 3 days ago) - RISK</li>
                          <li>✓ Amount over $25K threshold - RISK</li>
                          <li>✓ Wire transfer (higher risk method) - RISK</li>
                          <li>✓ Vendor bank account in high-risk jurisdiction - RISK</li>
                        </ul>
                      </li>
                      <li>Risk Scoring Automation calculates: 87/100 (HIGH RISK)</li>
                      <li>Alert created and routed to <em>Alert Triage Dashboard</em></li>
                      <li>Fraud analyst clicks alert, opens <em>Investigation Workbench App</em></li>
                      <li>Analyst clicks "Investigate with Agent"</li>
                      <li><em>Fraud Investigation Agent</em> performs deep analysis:
                        <ul className="list-disc list-inside ml-6 text-xs mt-1">
                          <li>Checks vendor master data: Added by employee "Sarah Chen"</li>
                          <li>Reviews employee access: Sarah has AP admin rights</li>
                          <li>Searches for similar vendors: Found "Tech Solutions Inc" - legitimate vendor with similar name</li>
                          <li>Checks bank account: Not in our approved vendor bank list</li>
                          <li>Looks up requester: Purchase request from "John Smith" in IT dept</li>
                          <li>Cross-checks: John Smith email shows suspicious login location (different country)</li>
                        </ul>
                      </li>
                      <li>Agent provides verdict: "HIGH PROBABILITY FRAUD - Vendor impersonation + compromised email"</li>
                      <li>Analyst clicks "Block Transaction" - triggers Payment Halt Automation</li>
                      <li>Case Management Automation creates incident, notifies CFO and IT Security</li>
                      <li>Pattern Learning Automation adds new rule: "Flag new vendors with names similar to existing vendors"</li>
                      <li><em>Fraud Dashboard</em> shows: Fraud prevented: $47,500, Response time: 8 minutes</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold mb-2">Key Principle: Every Alert is Explainable</h4>
                <p className="text-sm">Unlike "black box" AI systems, FraudWatch shows exactly why each alert was triggered (which rules fired, what thresholds were exceeded, which patterns matched). This means:</p>
                <ul className="text-sm list-disc list-inside mt-2 space-y-1">
                  <li>Auditors can validate the detection logic</li>
                  <li>Investigators understand context immediately</li>
                  <li>False positives can be tuned by adjusting rules</li>
                  <li>Compliance teams can document the controls</li>
                </ul>
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
                <p className="text-gray-600">12 core automations for real-time fraud detection</p>
              </div>
            </div>
            {expandedSection === 'automations' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'automations' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Automation 1 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Real-Time Transaction Monitoring Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Every transaction as it posts (real-time stream)</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When transaction is posted to any financial system:
  Capture transaction details immediately:
    - Transaction ID, date, time (including seconds)
    - Amount, currency
    - Transaction type (payment, wire, ACH, check, card)
    - Parties involved (vendor, employee, customer)
    - Initiator (who created/approved)
    - Payment method and destination details
    - Business purpose / description
    - Related documents (PO, invoice, approval chain)
  
  Enrich transaction with context:
    Get entity history (vendor, employee, customer):
      - When was entity created in system?
      - How many prior transactions?
      - Average transaction amount
      - Typical transaction frequency
      - Any prior fraud flags or issues
    
    Get relationship data:
      - Who approved this transaction?
      - What's the approval chain?
      - Are there related transactions (same vendor, same day)?
      - Is this part of a pattern (multiple small amounts)?
    
    Get environmental context:
      - Time of day (business hours vs after hours)
      - Day of week (business day vs weekend)
      - User location (IP address, login location)
      - System access patterns for initiator
  
  Add to transaction monitoring queue with enriched data
  Trigger Rule-Based Detection Automation
  Log to audit trail with timestamp`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">stream.listen_to_transactions(systems)</code> - Real-time listener</div>
                    <div>• <code className="bg-white px-1">transactions.capture_details(transaction_id)</code> - Get full details</div>
                    <div>• <code className="bg-white px-1">entities.get_history(entity_id, entity_type)</code> - Get entity history</div>
                    <div>• <code className="bg-white px-1">relationships.get_approval_chain(transaction_id)</code> - Get approvers</div>
                    <div>• <code className="bg-white px-1">context.get_user_session(user_id, timestamp)</code> - Get login context</div>
                    <div>• <code className="bg-white px-1">queue.add_to_monitoring(transaction, enriched_data)</code> - Queue for analysis</div>
                  </div>
                </div>
              </div>

              {/* Automation 2 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Rule-Based Detection Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When transaction enters monitoring queue</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When analyzing transaction for fraud:
  Get active fraud detection rules for transaction type
  
  Apply each rule and record results:
    
    Rule: "New vendor with high amount"
    If vendor created within last 30 days AND amount > $25,000:
      Flag as RISK with severity: HIGH
      Reason: "New vendor relationship with large first payment"
    
    Rule: "Round dollar amounts"
    If amount ends in .00 AND amount > $5,000:
      Flag as RISK with severity: MEDIUM
      Reason: "Round amounts can indicate manual fraud"
    
    Rule: "Duplicate payments"
    Search for same vendor AND same amount in last 30 days:
      If found:
        Flag as RISK with severity: HIGH
        Reason: "Potential duplicate payment to vendor"
    
    Rule: "Unusual vendor for department"
    If vendor category doesn't match department's typical spending:
      Flag as RISK with severity: LOW
      Reason: "IT dept paying landscaping vendor - unusual"
    
    Rule: "After-hours transactions"
    If transaction time is between 8pm-6am AND amount > $10,000:
      Flag as RISK with severity: MEDIUM
      Reason: "High-value transaction outside business hours"
    
    Rule: "High-risk jurisdictions"
    If payment destination country is in high-risk list:
      Flag as RISK with severity: HIGH
      Reason: "Payment to high-risk jurisdiction"
    
    Rule: "Velocity check"
    Count transactions to this vendor in last 7 days:
      If count > 3x normal weekly average:
        Flag as RISK with severity: MEDIUM
        Reason: "Unusual transaction velocity"
    
    Rule: "Sequential invoice numbers"
    If this vendor has sequential invoice numbers in short time:
      Flag as RISK with severity: MEDIUM
      Reason: "Sequential invoices can indicate fabricated documents"
    
    Rule: "Split transactions"
    Search for similar amounts to same vendor within 24 hours:
      If found AND combined amount > approval threshold:
        Flag as RISK with severity: HIGH
        Reason: "Possible attempt to avoid approval limits"
    
    Rule: "Vendor name similarity"
    Check for vendors with similar names (typosquatting):
      If found legitimate vendor with very similar name:
        Flag as RISK with severity: CRITICAL
        Reason: "Vendor name too similar to existing vendor - possible impersonation"
  
  Collect all triggered rules and their severities
  Pass to Risk Scoring Automation`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">rules.get_active_rules(transaction_type)</code> - Get applicable rules</div>
                    <div>• <code className="bg-white px-1">vendors.get_creation_date(vendor_id)</code> - Check vendor age</div>
                    <div>• <code className="bg-white px-1">search.find_duplicates(vendor, amount, days)</code> - Find duplicates</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_velocity(vendor, period)</code> - Calculate velocity</div>
                    <div>• <code className="bg-white px-1">compliance.check_jurisdiction(country_code)</code> - Check country risk</div>
                    <div>• <code className="bg-white px-1">text.fuzzy_match(name_a, name_b, threshold)</code> - Check name similarity</div>
                  </div>
                </div>
              </div>

              {/* Automation 3 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Risk Scoring Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After rule-based detection completes</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When calculating fraud risk score:
  Start with base score of 0 (out of 100)
  
  For each triggered rule, add points based on severity:
    CRITICAL severity: +40 points
    HIGH severity: +25 points
    MEDIUM severity: +15 points
    LOW severity: +5 points
  
  Apply weight multipliers based on transaction characteristics:
    If amount > $100,000: multiply score by 1.5
    If amount > $50,000: multiply score by 1.3
    If amount > $25,000: multiply score by 1.2
    
    If wire transfer or ACH: multiply score by 1.2
    If international transfer: multiply score by 1.3
    
    If created outside business hours: multiply score by 1.1
    If approved by same person who created: multiply score by 1.4
  
  Apply trust factors (reduce score):
    If vendor has >50 clean transactions: reduce by 10 points
    If vendor has been active >2 years: reduce by 5 points
    If transaction matches normal pattern: reduce by 15 points
  
  Cap final score at 100
  
  Categorize risk level:
    0-30: LOW RISK - No immediate action
    31-60: MEDIUM RISK - Review within 24 hours
    61-80: HIGH RISK - Immediate review required
    81-100: CRITICAL RISK - Block and investigate immediately
  
  Calculate confidence level:
    If 3+ rules triggered: HIGH confidence
    If 2 rules triggered: MEDIUM confidence
    If 1 rule triggered: LOW confidence (may be false positive)
  
  Record score with breakdown:
    Final score
    Base points from rules
    Applied multipliers
    Trust adjustments
    Triggered rules list
    Risk category
    Confidence level
  
  Pass to Alert Generation Automation`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">scoring.calculate_base_score(triggered_rules)</code> - Calculate base</div>
                    <div>• <code className="bg-white px-1">scoring.apply_multipliers(score, factors)</code> - Apply multipliers</div>
                    <div>• <code className="bg-white px-1">trust.get_entity_trust_level(entity_id)</code> - Get trust score</div>
                    <div>• <code className="bg-white px-1">scoring.categorize_risk(score)</code> - Categorize risk level</div>
                    <div>• <code className="bg-white px-1">scoring.calculate_confidence(rule_count, agreement)</code> - Calculate confidence</div>
                  </div>
                </div>
              </div>

              {/* Automation 4 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Alert Generation & Routing Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When risk score is calculated</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When fraud risk is scored:
  If risk level is LOW:
    Log to monitoring database for trend analysis
    No immediate alert generated
    Include in daily summary report
  
  If risk level is MEDIUM or higher:
    Create fraud alert with details:
      - Alert ID (unique identifier)
      - Transaction details
      - Risk score and category
      - All triggered rules with explanations
      - Entity histories
      - Similar past incidents (if any)
      - Recommended actions
      - Time detected
    
    Determine alert routing based on risk level:
      
      CRITICAL RISK (81-100):
        - Trigger Payment Halt Automation immediately
        - Create P1 incident in case management
        - Send immediate notification to:
          * Fraud team lead
          * CFO
          * Transaction approver's manager
        - Route to Fraud Investigation Agent for immediate analysis
        - Escalate to senior analyst queue
        - Set SLA: Respond within 30 minutes
      
      HIGH RISK (61-80):
        - Hold transaction for review (don't process yet)
        - Create P2 incident in case management
        - Send notification to fraud team
        - Route to Alert Triage Dashboard
        - Assign to available fraud analyst
        - Set SLA: Respond within 2 hours
      
      MEDIUM RISK (31-60):
        - Allow transaction to process (already completed)
        - Create monitoring ticket
        - Add to analyst review queue (lower priority)
        - Send summary in hourly digest
        - Set SLA: Review within 24 hours
    
    Record alert creation in audit log
    Start SLA timer
    Update fraud dashboard with new alert
    
    If similar alerts exist (same vendor, same pattern):
      Link alerts together as potential fraud ring
      Escalate priority if pattern detected`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">alerts.create(transaction, risk_data, rules)</code> - Create alert</div>
                    <div>• <code className="bg-white px-1">routing.determine_assignee(risk_level, team_availability)</code> - Route alert</div>
                    <div>• <code className="bg-white px-1">notifications.send_urgent(recipients, alert_summary)</code> - Send notification</div>
                    <div>• <code className="bg-white px-1">cases.create_incident(alert, priority, sla)</code> - Create case</div>
                    <div>• <code className="bg-white px-1">alerts.find_similar(alert, lookback_days)</code> - Find related alerts</div>
                  </div>
                </div>
              </div>

              {/* Automation 5 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">5. Payment Halt Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Critical risk alerts, or analyst "Block Transaction" action</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When payment halt is triggered:
  Determine transaction status:
    If not yet processed:
      Place immediate hold on transaction
      Mark status as "BLOCKED - FRAUD REVIEW"
      Prevent any payment processing
    
    If in payment queue (scheduled but not sent):
      Remove from payment queue immediately
      Cancel any scheduled processing
      Mark as "BLOCKED - FRAUD REVIEW"
    
    If payment already sent (wire/ACH initiated):
      Log that payment has been transmitted
      Check if recall is possible:
        For wires: Contact treasury to attempt recall
        For ACH: May be possible within 24 hours
        For checks: Issue stop payment
      Flag as "PAYMENT SENT - ATTEMPTING RECALL"
    
    If payment already cleared:
      Log that funds have been disbursed
      Flag as "PAYMENT COMPLETE - RECOVERY NEEDED"
      Create recovery case
  
  Document halt action:
    Who requested halt (system or person)
    Timestamp of halt
    Transaction status at time of halt
    Reason for halt (risk score, specific rules)
  
  Notify relevant parties:
    Transaction creator: "Payment blocked for fraud review"
    Transaction approver: "Payment you approved has been blocked"
    Treasury team: "Payment halt in effect for transaction X"
    Fraud analyst: "Transaction successfully blocked"
  
  Lock transaction for editing:
    Prevent any changes to transaction data
    Require fraud team approval to unblock
    Maintain full audit trail
  
  If halt was successful:
    Log prevented fraud amount to metrics
    Update dashboard: "Fraud prevented: $X"
  
  Create timeline entry in case management
  Set flag for manual review required before any release`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">payments.get_status(transaction_id)</code> - Check payment status</div>
                    <div>• <code className="bg-white px-1">payments.place_hold(transaction_id, reason)</code> - Place hold</div>
                    <div>• <code className="bg-white px-1">payments.cancel_scheduled(transaction_id)</code> - Cancel from queue</div>
                    <div>• <code className="bg-white px-1">treasury.attempt_recall(payment_id, method)</code> - Attempt recall</div>
                    <div>• <code className="bg-white px-1">transactions.lock(transaction_id, locked_by)</code> - Lock transaction</div>
                    <div>• <code className="bg-white px-1">metrics.record_prevented_fraud(amount)</code> - Update metrics</div>
                  </div>
                </div>
              </div>

              {/* Automation 6 */}
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">6. Pattern Detection Automation</h3>
                  <Code className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Runs every hour on all recent transactions</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`Every hour, analyze transaction patterns:
  
  Pattern: "Structuring (smurfing)"
  Search for multiple transactions just below reporting threshold:
    Find transactions to same vendor within 7 days
    If 3+ transactions each under $10,000 AND combined > $25,000:
      Flag as "Potential Structuring"
      Create linked alert for all transactions
      Severity: HIGH
  
  Pattern: "Ghost employee"
  Check payroll for suspicious patterns:
    Find employees added in last 90 days
    If employee has no time card entries AND receiving paycheck:
      Flag as "Potential Ghost Employee"
      Severity: CRITICAL
  
  Pattern: "Vendor concentration"
  Analyze spending to single vendors:
    If vendor receives >40% of department spend in month:
      Flag as "Unusual Vendor Concentration"
      Severity: MEDIUM
  
  Pattern: "Round-tripping"
  Look for circular payment patterns:
    If Company A pays Vendor B AND Vendor B pays back to related party:
      Flag as "Potential Round-Tripping"
      Severity: HIGH
  
  Pattern: "Time-based anomalies"
  Analyze transaction timing:
    If user creates multiple high-value transactions between 2-4am:
      Flag as "Unusual Transaction Timing Pattern"
      Severity: MEDIUM
  
  Pattern: "Approval bypass"
  Check for attempts to circumvent approvals:
    If same person creates and approves >5 transactions in a day:
      Flag as "Self-Approval Pattern"
      Severity: HIGH
  
  Pattern: "Vendor lifecycle abuse"
  Check vendor creation to payment timing:
    If vendor created and paid within 24 hours for >$10,000:
      Flag as "Rushed Vendor Payment"
      Severity: HIGH
  
  For each pattern detected:
    Create pattern alert with all related transactions
    Calculate pattern confidence score
    Link all involved transactions
    Route to Pattern Analysis Agent
    Update pattern dashboard
  
  Learn from investigations:
    If pattern confirmed as fraud: Increase sensitivity
    If pattern is false positive: Adjust thresholds
    Store pattern characteristics in library`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">patterns.detect_structuring(lookback_days)</code> - Detect splitting</div>
                    <div>• <code className="bg-white px-1">patterns.detect_ghost_employees()</code> - Find ghost employees</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_vendor_concentration(dept, period)</code> - Check concentration</div>
                    <div>• <code className="bg-white px-1">graph.find_circular_payments(depth)</code> - Find round-tripping</div>
                    <div>• <code className="bg-white px-1">patterns.create_pattern_alert(pattern, transactions)</code> - Create alert</div>
                  </div>
                </div>
              </div>

              {/* Remaining Automations Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Automations 7-12:</strong>
                <ul className="mt-2 space-y-2 list-none">
                  <li><strong>7. Behavioral Analytics</strong> - Establishes baseline behavior, detects deviations (user, vendor, department)</li>
                  <li><strong>8. Case Management</strong> - Creates investigations, assigns analysts, tracks resolution, SLA monitoring</li>
                  <li><strong>9. Evidence Collection</strong> - Gathers supporting documents, emails, approvals, audit trails automatically</li>
                  <li><strong>10. False Positive Learning</strong> - Tracks dismissed alerts, tunes rules, reduces false positive rate</li>
                  <li><strong>11. Reporting & Metrics</strong> - Generates fraud metrics, trend analysis, compliance reports, executive dashboards</li>
                  <li><strong>12. Integration & Alerting</strong> - Integrates with SIEM, sends alerts to Slack/Teams, updates external systems</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">Each follows the same pattern: English as code + specific tools + full explainability</p>
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
                <h2 className="text-2xl font-bold">Agents (Intelligent Investigators)</h2>
                <p className="text-gray-600">5 specialized agents for fraud investigation</p>
              </div>
            </div>
            {expandedSection === 'agents' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'agents' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Agent 1 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Fraud Investigation Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Deep investigation of suspicious transactions, evidence gathering, fraud determination</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Fraud Investigation Agent for FraudWatch.</p>
                    <p><strong>Your role:</strong> Conduct thorough investigations of suspected fraud by analyzing all available evidence, identifying red flags, and providing a clear verdict with confidence level.</p>
                    <p><strong>Investigation process:</strong></p>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Review the alert and all triggered rules</li>
                      <li>Gather entity background (vendor, employee, approver histories)</li>
                      <li>Analyze transaction patterns and sequences</li>
                      <li>Check for related suspicious activities</li>
                      <li>Review approval chain and authorization</li>
                      <li>Examine supporting documentation quality</li>
                      <li>Look for indicators of compromise (email, account access)</li>
                      <li>Compare to known fraud schemes</li>
                      <li>Provide verdict with evidence summary</li>
                    </ol>
                    <p><strong>Output format:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Verdict: CONFIRMED FRAUD / LIKELY FRAUD / SUSPICIOUS / LEGITIMATE</li>
                      <li>Confidence level: HIGH / MEDIUM / LOW</li>
                      <li>Evidence summary (bullet points)</li>
                      <li>Fraud scheme type (if fraud)</li>
                      <li>Recommended actions</li>
                      <li>Additional investigation needed (if any)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INVESTIGATION:</div>
                  <div className="text-xs space-y-2">
                    <div className="bg-gray-50 p-2 rounded">
                      <strong>Alert:</strong> $47,500 wire to "Tech Solutions LLC" (new vendor, high risk score: 87/100)
                    </div>
                    <div className="mt-2">
                      <strong className="text-orange-600">Agent Investigation Findings:</strong>
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li>Vendor created 3 days ago by AP admin "Sarah Chen"</li>
                        <li>Bank account in offshore jurisdiction (Seychelles)</li>
                        <li>Legitimate vendor exists: "Tech Solutions Inc" (similar name)</li>
                        <li>Request came from "john.smith@company.com"</li>
                        <li>Email analysis: Login location異常 (Indonesia) - user normally in California</li>
                        <li>No purchase order exists for this transaction</li>
                        <li>Invoice document has metadata showing creation date same day as vendor setup</li>
                        <li>Real John Smith contacted: Confirms he didn't request this</li>
                        <li>Pattern match: Similar to "vendor impersonation + BEC" scheme</li>
                      </ul>
                      <div className="mt-2 p-2 bg-red-100 border border-red-300 rounded">
                        <strong>VERDICT: CONFIRMED FRAUD</strong><br/>
                        <strong>Confidence: HIGH (95%)</strong><br/>
                        <strong>Scheme: Business Email Compromise + Vendor Impersonation</strong><br/>
                        <strong>Recommended Actions:</strong>
                        <ul className="list-disc list-inside ml-4 text-[11px] mt-1">
                          <li>IMMEDIATE: Block transaction (if not already blocked)</li>
                          <li>Lock Sarah Chen's account pending investigation</li>
                          <li>Reset John Smith's password, investigate account compromise</li>
                          <li>Delete fraudulent vendor from system</li>
                          <li>Contact IT Security for full security incident response</li>
                          <li>Report to law enforcement</li>
                          <li>Review all other vendors created by Sarah Chen in last 30 days</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">investigation.get_entity_history()</code></div>
                    <div>• <code className="bg-white px-1">investigation.analyze_transaction_sequence()</code></div>
                    <div>• <code className="bg-white px-1">documents.analyze_metadata()</code></div>
                    <div>• <code className="bg-white px-1">email.check_login_anomalies()</code></div>
                    <div>• <code className="bg-white px-1">patterns.match_fraud_scheme()</code></div>
                    <div>• <code className="bg-white px-1">evidence.collect_supporting_data()</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Pattern Analysis Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Analyzes complex fraud patterns, identifies fraud rings, connects related incidents</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Identify relationships between seemingly unrelated transactions</li>
                    <li>Detect fraud rings (multiple perpetrators working together)</li>
                    <li>Map out fraud schemes across time and entities</li>
                    <li>Find common elements (IPs, bank accounts, addresses, emails)</li>
                    <li>Visualize fraud networks with graph analysis</li>
                    <li>Estimate total fraud exposure from pattern</li>
                    <li>Recommend investigation priorities</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">graph.find_connections(entities, depth)</code></div>
                    <div>• <code className="bg-white px-1">patterns.cluster_similar_incidents()</code></div>
                    <div>• <code className="bg-white px-1">network.build_entity_graph()</code></div>
                    <div>• <code className="bg-white px-1">analytics.calculate_ring_exposure()</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 3 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Risk Assessment Agent</h3>
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Evaluates entity risk profiles, recommends controls, suggests monitoring</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Assess vendor risk based on history, jurisdiction, payment methods</li>
                    <li>Evaluate employee access risk (permissions vs. job function)</li>
                    <li>Score department fraud risk based on control gaps</li>
                    <li>Recommend additional controls (approval limits, segregation of duties)</li>
                    <li>Suggest enhanced monitoring for high-risk entities</li>
                    <li>Identify control weaknesses that enabled fraud</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">risk.assess_vendor(vendor_id)</code></div>
                    <div>• <code className="bg-white px-1">risk.assess_employee_access(user_id)</code></div>
                    <div>• <code className="bg-white px-1">controls.identify_gaps(process)</code></div>
                    <div>• <code className="bg-white px-1">recommendations.suggest_controls()</code></div>
                  </div>
                </div>
              </div>

              {/* Agents 4-5 Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Agents 4-5:</strong>
                <div className="space-y-2">
                  <div>
                    <strong>4. Triage Agent</strong> - Prioritizes alerts, recommends which to investigate first, estimates investigation effort
                    <div className="text-xs text-gray-600 ml-4">Tools: Priority scoring, workload balancing, SLA management</div>
                  </div>
                  <div>
                    <strong>5. Fraud Advisor Agent</strong> - Answers questions about fraud schemes, provides guidance on investigation techniques, suggests best practices
                    <div className="text-xs text-gray-600 ml-4">Tools: Fraud knowledge base, investigation playbooks, case law references</div>
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
                <h2 className="text-2xl font-bold">Apps (Command Center)</h2>
                <p className="text-gray-600">7 apps for fraud detection and investigation</p>
              </div>
            </div>
            {expandedSection === 'apps' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'apps' && (
            <div className="p-6 border-t space-y-6">
              
              {/* App 1 */}
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">1. Fraud Dashboard (Command Center)</h3>
                <p className="text-sm text-gray-700 mb-3">Real-time overview of fraud detection activity</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Alert count by severity (gauges: Critical/High/Med/Low)</div>
                      <div className="bg-white p-2 rounded">• Fraud prevented YTD ($ amount, count)</div>
                      <div className="bg-white p-2 rounded">• Active investigations map (status, age)</div>
                      <div className="bg-white p-2 rounded">• Top fraud types (pie chart)</div>
                      <div className="bg-white p-2 rounded">• Alert trend line (last 30 days)</div>
                      <div className="bg-white p-2 rounded">• SLA compliance meter (% within SLA)</div>
                      <div className="bg-white p-2 rounded">• High-risk entities list (vendors, employees)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-red-100 px-1 rounded mr-1 text-[10px]">ALERT</span>
                        <span>Critical alerts show as popup banner</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click any alert → Opens Investigation Workbench</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">FILTER</span>
                        <span>Filter: Today/This Week/All Time</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"View All Alerts" → Alert Triage app</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Ask Fraud Advisor" → Agent help</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Export Report" → Generate PDF/Excel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 2 */}
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">2. Alert Triage Dashboard</h3>
                <p className="text-sm text-gray-700 mb-3">Prioritized queue of alerts requiring analyst review</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Alert queue (sortable table with risk score, age, amount)</div>
                      <div className="bg-white p-2 rounded">• Color-coded severity badges</div>
                      <div className="bg-white p-2 rounded">• SLA countdown timers (time until breach)</div>
                      <div className="bg-white p-2 rounded">• Agent recommendation badges</div>
                      <div className="bg-white p-2 rounded">• Quick preview panel (key details)</div>
                      <div className="bg-white p-2 rounded">• Assignment status (unassigned/assigned/in-progress)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click alert → Opens full investigation workbench</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Assign to Me" → Claims alert</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">SORT</span>
                        <span>Sort by: Risk/Amount/Age/SLA</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">FILTER</span>
                        <span>Filter: My Alerts/Unassigned/All</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BULK</span>
                        <span>Bulk actions: Dismiss/Assign/Escalate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 3 */}
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">3. Investigation Workbench</h3>
                <p className="text-sm text-gray-700 mb-3">Complete investigation interface with all evidence and tools</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Transaction details panel (all fields)</div>
                      <div className="bg-white p-2 rounded">• Risk score breakdown (which rules triggered)</div>
                      <div className="bg-white p-2 rounded">• Entity timeline (vendor/employee history)</div>
                      <div className="bg-white p-2 rounded">• Related alerts panel (similar incidents)</div>
                      <div className="bg-white p-2 rounded">• Document viewer (invoices, approvals, emails)</div>
                      <div className="bg-white p-2 rounded">• Approval chain visualization</div>
                      <div className="bg-white p-2 rounded">• Agent analysis results</div>
                      <div className="bg-white p-2 rounded">• Investigation timeline (actions taken)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Investigate with Agent" → Run full investigation</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-red-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Block Transaction" → Halt payment</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Mark as Fraud" → Confirm fraud case</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-gray-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Dismiss as False Positive" → Close alert</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">NOTE</span>
                        <span>Add investigation notes (timestamped)</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Escalate to Senior" → Assign to lead</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>Chat with Investigation Agent</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Generate Report" → PDF summary with evidence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 4 */}
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">4. Rule Management App</h3>
                <p className="text-sm text-gray-700 mb-3">Create, test, and tune fraud detection rules</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Active rules list with performance metrics</div>
                      <div className="bg-white p-2 rounded">• Rule accuracy rate (true positive %)</div>
                      <div className="bg-white p-2 rounded">• Alert volume per rule (histogram)</div>
                      <div className="bg-white p-2 rounded">• False positive rate by rule</div>
                      <div className="bg-white p-2 rounded">• Test results preview</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">FORM</span>
                        <span>English rule editor: "Flag if..."</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">DROPDOWN</span>
                        <span>Severity selector (Critical/High/Med/Low)</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Test Rule on Historical Data"</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Activate Rule" → Enable detection</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-gray-100 px-1 rounded mr-1 text-[10px]">TOGGLE</span>
                        <span>Enable/Disable rule (on/off switch)</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">SLIDER</span>
                        <span>Tune thresholds (amounts, days, %)</span>
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
                    <strong>5. Pattern Visualization App</strong> - Graph view of fraud networks, entity relationships, linked transactions
                    <div className="text-xs text-gray-600 ml-4">Viz: Network graph, timeline view, clustering | Interact: Zoom, filter nodes, expand relationships</div>
                  </div>
                  <div>
                    <strong>6. Case Management App</strong> - Track investigations from alert to resolution, evidence collection, reporting
                    <div className="text-xs text-gray-600 ml-4">Viz: Case kanban, status timeline, evidence vault | Interact: Update status, add evidence, assign investigators</div>
                  </div>
                  <div>
                    <strong>7. Analytics & Reporting App</strong> - Fraud metrics, trends, executive dashboards, compliance reports
                    <div className="text-xs text-gray-600 ml-4">Viz: Trend charts, heat maps, executive summary | Interact: Date range selector, export reports, drill-down analysis</div>
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

export default FraudWatchSpec;