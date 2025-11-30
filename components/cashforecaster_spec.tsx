import React, { useState } from 'react';
import { Zap, Bot, Smartphone, ChevronDown, ChevronRight, Code, MessageSquare, Layout } from 'lucide-react';

const CashForecasterSpec = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">CashForecaster App</h1>
          <p className="text-xl text-indigo-100 mb-4">Complete Technical Specification</p>
          <p className="text-sm text-indigo-200 mb-6">Improve forecast accuracy 20-40% with models you can explain</p>
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
                <p className="text-gray-600">How CashForecaster components work together</p>
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
                    <strong className="text-indigo-600">Automations</strong> handle data collection and calculation: importing actuals from AR/AP/Payroll, executing driver-based models, updating forecasts daily, calculating variances, detecting anomalies, and maintaining rolling windows.
                  </p>
                  <p>
                    <strong className="text-purple-600">Agents</strong> provide intelligence and explanations: building forecast models, analyzing variances, identifying drivers, explaining changes, answering "what-if" questions, and learning from actual vs forecast patterns.
                  </p>
                  <p>
                    <strong className="text-pink-600">Apps</strong> enable visualization and interaction: dashboards show 13-week cash position, scenario builders model alternatives, driver editors define assumptions, variance analyzers explain differences, and reports generate board presentations.
                  </p>
                  <div className="bg-white p-4 rounded mt-4">
                    <strong>Example end-to-end flow:</strong>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-700">
                      <li>Data Collection Automation pulls latest AR, AP, and payroll data overnight</li>
                      <li>Forecast Calculation Automation runs driver-based model: "Revenue = Deal Size × Deal Count × Close Rate"</li>
                      <li>System updates 13-week rolling forecast with new actuals</li>
                      <li>Variance Detection Automation identifies: "Week 3 collections down 15%"</li>
                      <li>CFO opens <em>Cash Position Dashboard</em> and sees red flag on Week 3</li>
                      <li>CFO clicks "Why the change?" button</li>
                      <li><em>Variance Explanation Agent</em> investigates: checks AR aging, payment patterns, customer mix</li>
                      <li>Agent responds: "3 enterprise customers ($450K) pushed payment to Week 4. Pipeline shows they will pay. Normal for Q4."</li>
                      <li>CFO opens <em>Scenario Builder App</em>: "What if those customers don't pay until Week 6?"</li>
                      <li><em>Scenario Modeling Agent</em> recalculates: "Cash drops to $380K in Week 5, below your $500K minimum. Consider delaying $200K capex spend."</li>
                      <li>CFO adjusts assumptions, saves as "Conservative Scenario"</li>
                      <li>Pattern Learning Automation notes: "Q4 enterprise payments typically 2 weeks slower"</li>
                      <li><em>Board Report App</em> generates executive summary showing base, optimistic, and conservative scenarios</li>
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
                <p className="text-gray-600">9 core automations that power intelligent forecasting</p>
              </div>
            </div>
            {expandedSection === 'automations' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'automations' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Automation 1 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Multi-Source Data Collection Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Daily at 6:00 AM, or on-demand</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When data collection runs:
  Collect cash actuals:
    Connect to bank API
    Get current cash balance for all accounts
    Get yesterday's transactions (inflows and outflows)
    Categorize by type: collections, disbursements, transfers
  
  Collect AR data:
    Connect to ERP system
    Get accounts receivable aging report
    Extract: customer, invoice amount, due date, days outstanding
    Get payment history for each customer (last 6 months)
    Calculate average days to pay by customer segment
  
  Collect AP data:
    Get accounts payable aging report
    Extract: vendor, invoice amount, due date, payment terms
    Get scheduled payment dates from AP system
    Identify early payment discount opportunities
  
  Collect payroll data:
    Get payroll schedule for next 13 weeks
    Include: regular payroll, bonuses, commissions, taxes
    Get headcount plan for new hires
  
  Collect revenue data:
    Get sales pipeline from CRM
    Extract: deal size, close probability, expected close date
    Get booked revenue for recognition
    Get recurring revenue contracts and renewal dates
  
  Collect planned expenditures:
    Get approved POs from procurement system
    Get capex schedule from finance
    Get operating expense budget by department
  
  Store all data with metadata:
    Collection timestamp
    Source system
    Data quality score
    Any extraction issues
  
  Trigger forecast calculation after all sources collected`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">bank.get_balance(account_list)</code> - Get current cash balances</div>
                    <div>• <code className="bg-white px-1">bank.get_transactions(account, date)</code> - Get transaction history</div>
                    <div>• <code className="bg-white px-1">erp.get_ar_aging(as_of_date)</code> - Get AR aging report</div>
                    <div>• <code className="bg-white px-1">erp.get_ap_aging(as_of_date)</code> - Get AP aging report</div>
                    <div>• <code className="bg-white px-1">payroll.get_schedule(weeks_ahead)</code> - Get payroll schedule</div>
                    <div>• <code className="bg-white px-1">crm.get_pipeline(status, date_range)</code> - Get sales pipeline</div>
                    <div>• <code className="bg-white px-1">procurement.get_approved_pos()</code> - Get purchase orders</div>
                  </div>
                </div>
              </div>

              {/* Automation 2 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Driver-Based Forecast Calculation Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After data collection completes, or when drivers are modified</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When forecast calculation runs:
  Get user-defined driver tree model
  Example model structure:
    Cash Beginning Balance
    + Cash Inflows:
      Revenue Collections:
        = Pipeline Revenue × Close Rate × Collection Pattern
        Where Collection Pattern: 30% in week 1, 50% in week 2, 20% in week 3
      AR Collections:
        = AR Balance × Collection Rate by Aging Bucket
        0-30 days: 80% collect in 2 weeks
        31-60 days: 60% collect in 4 weeks
        61-90 days: 40% collect in 6 weeks
    - Cash Outflows:
      Payroll:
        = Headcount × Average Salary / 52 (weekly)
        + Scheduled bonuses from payroll system
      Vendor Payments:
        = AP Balance × Payment Schedule
        Apply payment terms: Net 30, Net 45, etc.
        Factor in early payment discounts when optimal
      Operating Expenses:
        = Monthly Budget / 4.33 (weekly average)
        Adjust for known timing: rent (first of month), etc.
      Capital Expenditures:
        = Scheduled capex from approved projects
    = Cash Ending Balance
  
  For each week in 13-week window:
    Calculate each driver value using formulas
    Apply seasonality adjustments if defined:
      Example: Q4 revenue typically 30% higher
      Example: December payroll includes bonuses
    
    Calculate cash flows:
      Beginning balance
      + Inflows (sum of all inflow drivers)
      - Outflows (sum of all outflow drivers)
      = Ending balance
    
    Check against targets:
      If ending balance < minimum cash threshold ($500K):
        Flag week as "Below Threshold"
        Calculate shortfall amount
      
      If ending balance > optimal cash ($2M):
        Flag week as "Excess Cash"
        Calculate excess amount for investment
  
  Calculate cumulative variance from prior forecast
  Store forecast with version metadata
  Trigger variance analysis if material changes`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">forecast.get_driver_tree(model_id)</code> - Get model structure</div>
                    <div>• <code className="bg-white px-1">drivers.calculate_value(driver, inputs)</code> - Calculate driver</div>
                    <div>• <code className="bg-white px-1">seasonality.apply_adjustment(value, week, pattern)</code> - Adjust for seasonality</div>
                    <div>• <code className="bg-white px-1">cashflow.calculate_weekly(inflows, outflows)</code> - Calculate cash position</div>
                    <div>• <code className="bg-white px-1">thresholds.check_targets(balance, week)</code> - Check against targets</div>
                    <div>• <code className="bg-white px-1">forecast.store_version(data, metadata)</code> - Version control</div>
                  </div>
                </div>
              </div>

              {/* Automation 3 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Actuals vs Forecast Variance Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Daily after actual data is loaded</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When comparing actuals to forecast:
  For each completed week:
    Get actual cash position
    Get forecasted cash position from prior week's forecast
    
    Calculate variance:
      Variance amount = Actual - Forecast
      Variance percentage = (Variance / Forecast) × 100
    
    Categorize variance:
      If variance < 5%: "Within tolerance"
      If variance 5-10%: "Notable variance - review recommended"
      If variance > 10%: "Material variance - explanation required"
    
    Break down variance by component:
      Revenue collections variance
      AR collections variance  
      Payroll variance
      Vendor payments variance
      OpEx variance
      Capex variance
    
    For material variances:
      Identify primary drivers:
        Sort variance components by absolute amount
        Top 3 drivers represent X% of total variance
      
      Check for recurring patterns:
        Has this driver been off before?
        Is this trending or one-time?
        Is it timing difference or true miss?
      
      Calculate impact on future weeks:
        If timing difference: adjust future forecast
        If trend: extrapolate impact forward
        If one-time: no future adjustment needed
    
    Update forecast accuracy metrics:
      Track by driver
      Track by week
      Track directional accuracy (over vs under)
    
    If variance > 10%:
      Send alert to forecast owner
      Create variance analysis task
      Flag for review in dashboard
  
  Calculate rolling accuracy statistics:
    Mean absolute percentage error (MAPE)
    Forecast bias (consistent over/under)
    Accuracy trend over time
    Best/worst performing drivers`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">variance.calculate(actual, forecast)</code> - Calculate variance</div>
                    <div>• <code className="bg-white px-1">variance.breakdown_by_component(week)</code> - Breakdown variance</div>
                    <div>• <code className="bg-white px-1">variance.identify_drivers(components)</code> - Find primary drivers</div>
                    <div>• <code className="bg-white px-1">patterns.check_recurring(driver, lookback)</code> - Check patterns</div>
                    <div>• <code className="bg-white px-1">forecast.adjust_future(variance_type, amount)</code> - Adjust forecast</div>
                    <div>• <code className="bg-white px-1">analytics.calculate_mape(actuals, forecasts)</code> - Calculate accuracy</div>
                  </div>
                </div>
              </div>

              {/* Automation 4 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Rolling Forecast Update Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Weekly on Monday morning</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When rolling forecast updates:
  Drop oldest week from forecast window
  Add new week to end of forecast window (maintain 13-week horizon)
  
  Update actual data for completed weeks:
    Replace forecasted values with actual values
    Lock completed weeks to prevent changes
    Store variance for historical analysis
  
  Recalculate forecast for future weeks:
    Use latest actuals as starting point
    Apply driver formulas to future weeks
    Incorporate any new information:
      Updated pipeline data
      Changed payment schedules
      New payroll information
      Modified capex timing
  
  Apply learned patterns:
    If consistent variance pattern detected:
      Adjust driver assumptions
      Example: "Collections typically 5 days slower in Q4"
      Example: "Enterprise deals take 2 weeks longer to close"
    
    Document assumption changes:
      What changed
      Why it changed
      Impact on forecast
  
  Create forecast comparison:
    This week's forecast vs last week's forecast
    Highlight material changes week-over-week
    Explain what drove changes
  
  Calculate confidence intervals:
    Based on historical accuracy
    Wider intervals for weeks further out
    Example: Week 1 forecast ±5%, Week 13 forecast ±20%
  
  Generate change summary:
    Key changes from last week
    Reasons for changes
    New risks or opportunities identified
  
  Distribute updated forecast:
    Send to stakeholder list
    Update all dashboards
    Archive prior version`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">forecast.roll_window(weeks)</code> - Roll forecast window forward</div>
                    <div>• <code className="bg-white px-1">forecast.replace_with_actuals(week)</code> - Replace with actuals</div>
                    <div>• <code className="bg-white px-1">forecast.lock_period(week)</code> - Lock completed weeks</div>
                    <div>• <code className="bg-white px-1">patterns.get_learned_adjustments()</code> - Get learned patterns</div>
                    <div>• <code className="bg-white px-1">comparison.generate_variance(current, prior)</code> - Compare versions</div>
                    <div>• <code className="bg-white px-1">confidence.calculate_intervals(accuracy_history)</code> - Confidence bands</div>
                  </div>
                </div>
              </div>

              {/* Automation 5 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">5. Scenario Management Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When user creates/modifies scenario, or scheduled recalculation</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When scenario is created or modified:
  Store scenario metadata:
    Scenario name: "Conservative", "Optimistic", "Base Case"
    Created by user
    Created date
    Description of assumptions
  
  Define scenario-specific assumptions:
    User can modify any driver:
      Example: "Revenue close rate = 60%" (vs base case 75%)
      Example: "Collections = 15% slower" (vs base case)
      Example: "Delay capex by 4 weeks"
  
  Calculate scenario forecast:
    Start with base case structure
    Override assumptions per scenario
    Run full forecast calculation
    Store results separately from base case
  
  Compare scenario to base case:
    Calculate variance by week
    Identify biggest differences
    Calculate crossover points:
      When does cash drop below threshold?
      When does scenario overtake base case?
      Maximum cash difference
  
  Analyze scenario sensitivity:
    Which driver changes have biggest impact?
    Which weeks are most sensitive?
    What's the break-even point?
  
  Create scenario comparison report:
    Side-by-side cash position
    Variance waterfall
    Key assumption differences
    Risk assessment
  
  Store scenario for future reference:
    Version control
    Link to decisions made
    Track if scenario became reality (for learning)
  
  If scenario becomes active:
    Promote to new base case
    Archive old base case
    Document why switch was made`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">scenario.create(name, assumptions)</code> - Create scenario</div>
                    <div>• <code className="bg-white px-1">scenario.override_drivers(scenario_id, overrides)</code> - Override assumptions</div>
                    <div>• <code className="bg-white px-1">forecast.calculate_scenario(drivers, assumptions)</code> - Calculate</div>
                    <div>• <code className="bg-white px-1">scenario.compare(scenario_a, scenario_b)</code> - Compare scenarios</div>
                    <div>• <code className="bg-white px-1">sensitivity.analyze(scenario, driver)</code> - Sensitivity analysis</div>
                    <div>• <code className="bg-white px-1">scenario.promote_to_base(scenario_id)</code> - Promote scenario</div>
                  </div>
                </div>
              </div>

              {/* Remaining Automations Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Automations 6-9:</strong>
                <ul className="mt-2 space-y-2 list-none">
                  <li><strong>6. Alert & Notification Automation</strong> - Monitors thresholds, sends alerts when cash drops below minimum or forecast accuracy declines</li>
                  <li><strong>7. Pattern Learning Automation</strong> - Learns from actuals vs forecast, identifies recurring patterns, suggests assumption adjustments</li>
                  <li><strong>8. Integration Sync Automation</strong> - Keeps forecast synchronized with source systems, handles data refresh failures gracefully</li>
                  <li><strong>9. Historical Archive Automation</strong> - Archives forecast versions, maintains audit trail, enables trend analysis over time</li>
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
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Agents (Intelligent Assistants)</h2>
                <p className="text-gray-600">4 specialized agents that provide intelligence and explanation</p>
              </div>
            </div>
            {expandedSection === 'agents' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'agents' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Agent 1 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Forecast Builder Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Helps users build and refine driver-based forecast models</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Forecast Builder Agent for CashForecaster.</p>
                    <p><strong>Your role:</strong> Help users create accurate, explainable driver-based forecast models by recommending drivers, defining formulas, and structuring cause-and-effect relationships.</p>
                    <p><strong>What you help with:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Identify key cash drivers for the business</li>
                      <li>Define formulas in plain English that can be calculated</li>
                      <li>Structure driver trees (what drives what)</li>
                      <li>Set up seasonality adjustments</li>
                      <li>Define data sources for each driver</li>
                      <li>Validate model logic and completeness</li>
                    </ul>
                    <p><strong>Example interaction:</strong></p>
                    <div className="bg-gray-50 p-2 rounded mt-1">
                      <p className="mb-1"><strong>User:</strong> "Help me forecast revenue collections"</p>
                      <p><strong>Agent:</strong> "I'll help you build a revenue collections model. Let me ask a few questions:

1. Do you have recurring revenue or is each sale separate?
2. How long from sale to cash collection typically?
3. Do different customer types pay at different speeds?

Based on your answers, I'll suggest a driver tree. For example:

Revenue Collections = Pipeline Revenue + AR Collections

Where:
- Pipeline Revenue = New Deals × Average Deal Size × Close Rate × Collection Pattern
- AR Collections = AR Balance by Aging × Collection Rate by Bucket

This makes your forecast explainable because you can say 'Revenue is $X because we closed Y deals at $Z average size with A% close rate, and we collected B% of aging AR.'"</p>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">models.suggest_drivers(business_type)</code></div>
                    <div>• <code className="bg-white px-1">formulas.validate_logic(formula)</code></div>
                    <div>• <code className="bg-white px-1">drivers.build_tree(relationships)</code></div>
                    <div>• <code className="bg-white px-1">data.identify_sources(driver)</code></div>
                    <div>• <code className="bg-white px-1">seasonality.detect_patterns(historical)</code></div>
                    <div>• <code className="bg-white px-1">models.test_completeness(model)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Variance Explanation Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Analyzes and explains why actual results differ from forecast</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Variance Explanation Agent for CashForecaster.</p>
                    <p><strong>Your role:</strong> When actual cash differs from forecast, investigate why and provide clear, business-focused explanations.</p>
                    <p><strong>Investigation process:</strong></p>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Calculate variance amount and percentage</li>
                      <li>Break down by driver component (revenue, AR, payroll, etc.)</li>
                      <li>Identify top 3 drivers causing variance</li>
                      <li>For each driver, determine root cause:
                        <ul className="list-disc list-inside ml-4 text-[11px]">
                          <li>Timing difference (will reverse next week)</li>
                          <li>Volume change (more/fewer transactions)</li>
                          <li>Rate change (different average amount)</li>
                          <li>Mix shift (different composition)</li>
                          <li>One-time event (non-recurring)</li>
                        </ul>
                      </li>
                      <li>Check historical patterns (is this normal for this time period?)</li>
                      <li>Assess forward impact (does this change future forecast?)</li>
                      <li>Draft clear explanation with business context</li>
                    </ol>
                    
                    <p><strong>Example interaction:</strong></p>
                    <div className="bg-gray-50 p-2 rounded mt-1">
                      <p className="mb-1"><strong>User:</strong> "Why is cash $450K but we forecasted $600K?"</p>
                      <p><strong>Agent:</strong> "I've analyzed the $150K variance (25% below forecast):

Primary drivers:
1. AR Collections: $95K below forecast (63% of variance)
   - 3 enterprise customers ($450K total) paid in Week 4 instead of Week 3
   - This is a timing difference, not lost revenue
   - Historical pattern: Q4 enterprise payments typically 1-2 weeks slower
   
2. Revenue Collections: $45K below forecast (30% of variance)
   - Closed 8 deals vs forecasted 10
   - Average deal size was on target ($25K)
   - Close rate was 40% vs forecasted 50%
   
3. Payroll: $10K over forecast (7% of variance)
   - Q4 bonus accrual posted early

Forward impact:
- Week 4 forecast should increase by $450K (enterprise collections)
- Future close rate assumption should adjust to 45% (more realistic)
- Q4 pattern suggests adding 1-week delay to enterprise collections

This variance is 60% timing (will reverse) and 40% trending (adjust forecast)."</p>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">variance.breakdown(actual, forecast)</code></div>
                    <div>• <code className="bg-white px-1">variance.identify_root_cause(driver)</code></div>
                    <div>• <code className="bg-white px-1">patterns.check_historical(driver, period)</code></div>
                    <div>• <code className="bg-white px-1">transactions.drill_down(driver, week)</code></div>
                    <div>• <code className="bg-white px-1">impact.assess_forward(variance_type)</code></div>
                    <div>• <code className="bg-white px-1">explanation.draft(analysis)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 3 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Scenario Modeling Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Answers "what-if" questions and models alternative scenarios</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Interpret natural language what-if questions</li>
                    <li>Translate to specific driver changes</li>
                    <li>Calculate scenario impact on cash position</li>
                    <li>Identify when cash drops below thresholds</li>
                    <li>Suggest mitigating actions</li>
                    <li>Compare multiple scenarios side-by-side</li>
                  </ul>
                  
                  <p className="mt-2"><strong>Example interaction:</strong></p>
                  <div className="bg-gray-50 p-2 rounded mt-1 text-[11px]">
                    <p className="mb-1"><strong>User:</strong> "What if our top 3 customers delay payment by 4 weeks?"</p>
                    <p><strong>Agent:</strong> "I'll model that scenario:

Changes:
- Customer A: $250K moves from Week 2 to Week 6
- Customer B: $180K moves from Week 3 to Week 7
- Customer C: $120K moves from Week 2 to Week 6

Impact on cash position:
- Week 2: Drops from $850K to $480K (below $500K threshold!)
- Week 3: Drops from $920K to $740K
- Minimum cash: $380K in Week 4 (need $120K buffer)
- Recovers to plan by Week 8

Recommendations:
1. Delay $150K capex spend from Week 3 to Week 7
2. Draw $100K from credit line in Week 2
3. Accelerate collections from other customers (target $50K)

With these actions, minimum cash stays at $520K (above threshold)."</p>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">nlp.parse_what_if(question)</code></div>
                    <div>• <code className="bg-white px-1">scenario.create_from_changes(changes)</code></div>
                    <div>• <code className="bg-white px-1">forecast.calculate_scenario(assumptions)</code></div>
                    <div>• <code className="bg-white px-1">analysis.find_threshold_violations()</code></div>
                    <div>• <code className="bg-white px-1">recommendations.suggest_actions()</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 4 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Forecast Assistant Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Answers questions, provides guidance, explains forecast</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Answer questions: "What's our cash position next week?" "When do we hit $1M?"</li>
                    <li>Explain drivers: "Why is Week 5 higher than Week 4?"</li>
                    <li>Show trends: "How's forecast accuracy trending?"</li>
                    <li>Provide guidance: "How do I improve my revenue forecast?"</li>
                    <li>Create summaries: "Give me a 3-sentence summary for the board"</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">forecast.get_position(week)</code></div>
                    <div>• <code className="bg-white px-1">forecast.explain_change(week_a, week_b)</code></div>
                    <div>• <code className="bg-white px-1">analytics.get_accuracy_trend()</code></div>
                    <div>• <code className="bg-white px-1">help.get_best_practices(topic)</code></div>
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
                <p className="text-gray-600">7 interactive apps for cash forecasting and analysis</p>
              </div>
            </div>
            {expandedSection === 'apps' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'apps' && (
            <div className="p-6 border-t space-y-6">
              
              {/* App 1 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">1. Cash Position Dashboard</h3>
                <p className="text-sm text-gray-700 mb-3">Main view of 13-week rolling cash forecast</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• 13-week cash waterfall chart</div>
                      <div className="bg-white p-2 rounded">• Current cash balance (large display)</div>
                      <div className="bg-white p-2 rounded">• Minimum/maximum cash indicators</div>
                      <div className="bg-white p-2 rounded">• Threshold warning bands (red zone below $500K)</div>
                      <div className="bg-white p-2 rounded">• Inflow/outflow breakdown by week</div>
                      <div className="bg-white p-2 rounded">• Forecast confidence intervals</div>
                      <div className="bg-white p-2 rounded">• Key driver summary cards</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Refresh Data" → Triggers data collection</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click any week → Drill into details</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Why the change?" → Ask Variance Agent</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">TOGGLE</span>
                        <span>View: Base/Optimistic/Conservative</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Ask about forecast" → Chat with agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 2 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">2. Driver Editor App</h3>
                <p className="text-sm text-gray-700 mb-3">Define and modify forecast drivers and formulas</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Driver tree hierarchy view</div>
                      <div className="bg-white p-2 rounded">• Formula editor with syntax highlighting</div>
                      <div className="bg-white p-2 rounded">• Data source indicators</div>
                      <div className="bg-white p-2 rounded">• Driver value preview (calculated)</div>
                      <div className="bg-white p-2 rounded">• Seasonality pattern chart</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">FORM</span>
                        <span>English formula editor: "Revenue = ..."</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Test Formula" → Preview calculation</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Ask Agent for Help" → Get formula suggestions</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">DRAG</span>
                        <span>Drag drivers to reorganize tree</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Save & Recalculate" → Updates forecast</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 3 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">3. Scenario Builder App</h3>
                <p className="text-sm text-gray-700 mb-3">Create and compare alternative forecast scenarios</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Scenario comparison table</div>
                      <div className="bg-white p-2 rounded">• Side-by-side waterfall charts</div>
                      <div className="bg-white p-2 rounded">• Variance from base case</div>
                      <div className="bg-white p-2 rounded">• Crossover point indicators</div>
                      <div className="bg-white p-2 rounded">• Sensitivity tornado chart</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"New Scenario" → Create blank scenario</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">INPUT</span>
                        <span>Natural language: "What if revenue drops 20%?"</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>Scenario Agent interprets and models</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">SLIDER</span>
                        <span>Adjust driver values with sliders</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Save Scenario" / "Promote to Base"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 4 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">4. Variance Analysis App</h3>
                <p className="text-sm text-gray-700 mb-3">Analyze actual vs forecast performance</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Actual vs forecast line chart</div>
                      <div className="bg-white p-2 rounded">• Variance waterfall by driver</div>
                      <div className="bg-white p-2 rounded">• Accuracy trend (MAPE over time)</div>
                      <div className="bg-white p-2 rounded">• Driver performance scoreboard</div>
                      <div className="bg-white p-2 rounded">• Root cause breakdown pie chart</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click variance → Drill into components</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Explain Variance" → Ask Variance Agent</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">FILTER</span>
                        <span>Filter by: Week/Driver/Magnitude</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Adjust Forecast" → Update assumptions</span>
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
                    <strong>5. Driver Detail App</strong> - Deep dive into any specific driver
                    <div className="text-xs text-gray-600 ml-4">Viz: Driver trend chart, component breakdown, historical comparison | Interact: Edit values, view data sources, export details</div>
                  </div>
                  <div>
                    <strong>6. Board Report App</strong> - Executive summary and presentation builder
                    <div className="text-xs text-gray-600 ml-4">Viz: Key metrics dashboard, scenario comparison, executive summary | Interact: Select metrics, generate PDF, customize layout</div>
                  </div>
                  <div>
                    <strong>7. Historical Trends App</strong> - Long-term accuracy and performance tracking
                    <div className="text-xs text-gray-600 ml-4">Viz: 12-month accuracy trend, forecast vs actual history, learned patterns log | Interact: Date range selector, export data, compare periods</div>
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

export default CashForecasterSpec;