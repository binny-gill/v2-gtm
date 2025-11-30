import React, { useState } from 'react';
import { Zap, Bot, Smartphone, ChevronDown, ChevronRight, Code, MessageSquare, Layout } from 'lucide-react';

const BudgetWatchSpec = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">BudgetWatch App</h1>
          <p className="text-xl text-violet-100 mb-4">Complete Technical Specification</p>
          <p className="text-sm text-violet-200 mb-6">Track budget vs. actual in real-time and keep teams accountable</p>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              <span>9 Automations</span>
            </div>
            <div className="flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              <span>3 Agents</span>
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
                <p className="text-gray-600">How BudgetWatch components work together</p>
              </div>
            </div>
            {expandedSection === 'overview' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'overview' && (
            <div className="p-6 border-t space-y-6">
              <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 p-6 rounded-lg border">
                <h3 className="font-bold text-xl mb-4">The Complete System</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong className="text-violet-600">Automations</strong> continuously monitor spending: importing actuals from all systems, calculating budget vs. actual variances, detecting approaching limits, triggering alerts before overruns, and updating forecasts based on trends.
                  </p>
                  <p>
                    <strong className="text-purple-600">Agents</strong> provide intelligence and insight: explaining variances, forecasting year-end positions, recommending reallocation strategies, answering manager questions, and learning spending patterns to improve predictions.
                  </p>
                  <p>
                    <strong className="text-fuchsia-600">Apps</strong> deliver visibility and control: department dashboards show real-time spend, approval forms enforce limits, variance analysis tools enable explanation, reforecasting apps enable quick updates, and mobile apps allow managers to track on-the-go.
                  </p>
                  <div className="bg-white p-4 rounded mt-4">
                    <strong>Example end-to-end flow:</strong>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-700">
                      <li>Spend Import Automation pulls daily actuals from ERP, AP, payroll, expense systems</li>
                      <li>Variance Calculation Automation computes budget vs. actual for all departments</li>
                      <li>Marketing department reaches 80% of monthly budget on day 20</li>
                      <li>Alert Automation sends warning to Marketing Manager via email and <em>Department Dashboard</em></li>
                      <li>Manager opens <em>Department Dashboard</em>, sees $15K remaining with 10 days left</li>
                      <li>Manager clicks "Explain Variance" button</li>
                      <li><em>Variance Explanation Agent</em> analyzes: "Digital advertising spend 40% over budget due to new campaign launched mid-month"</li>
                      <li>Manager clicks "What if we continue at this pace?"</li>
                      <li><em>Forecast Agent</em> predicts: "At current run rate, you'll be $8K over budget by month end"</li>
                      <li>Manager uses <em>Reforecast App</em> to request budget reallocation from another category</li>
                      <li>Approval Routing Automation sends request to CFO</li>
                      <li>CFO reviews in <em>Budget Approval App</em> and approves reallocation</li>
                      <li>Budget Update Automation adjusts Marketing budget, updates forecasts</li>
                      <li>Department Dashboard shows updated budget and new spend rate</li>
                      <li>Pattern Learning Automation notes: "Marketing typically needs 20% more in Q4 for campaigns"</li>
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
              <div className="bg-violet-100 p-3 rounded-full mr-4">
                <Zap className="w-6 h-6 text-violet-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Automations (English as Code)</h2>
                <p className="text-gray-600">9 core automations that power real-time budget tracking</p>
              </div>
            </div>
            {expandedSection === 'automations' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'automations' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Automation 1 */}
              <div className="border-l-4 border-violet-500 pl-4 bg-violet-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Multi-System Spend Import Automation</h3>
                  <Code className="w-5 h-5 text-violet-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Daily at 1:00 AM, or real-time via webhooks from connected systems</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When spend import runs:
  For each spend source system:
    ERP System (GL actuals):
      Connect to ERP
      Extract actual spend by:
        - Department/cost center
        - GL account
        - Period (current month to date)
      Include: Posted transactions only
      Exclude: Reversing entries, intercompany
    
    Accounts Payable:
      Extract invoices:
        - Approved and paid
        - Department charged
        - PO-backed and non-PO spend
      Include commitments (approved but not yet paid)
    
    Expense Management System:
      Extract employee expenses:
        - Submitted and approved
        - Department allocation
        - Expense category
    
    Payroll System:
      Extract payroll costs:
        - Salary and wages by department
        - Benefits and taxes
        - Bonuses and overtime
    
    Purchase Order System:
      Extract open PO commitments:
        - Approved POs not yet invoiced
        - Encumbered amounts by department
  
  For each extracted transaction:
    Standardize data format:
      - Map to standard chart of accounts
      - Normalize department codes
      - Convert to base currency
      - Extract cost center hierarchy
    
    Categorize spend type:
      - Actual: Posted and paid
      - Committed: Approved but not paid
      - Encumbered: PO issued but not invoiced
    
    Apply business rules:
      - Allocate shared costs to departments
      - Split expenses based on allocation %
      - Handle intercompany eliminations
    
    Validate data quality:
      - Department code exists in org structure
      - Amount is reasonable (not outlier)
      - Date is within valid period
  
  Aggregate to budget line item level:
    Roll up detailed transactions to budget categories
    Calculate month-to-date totals by department
    Include all three spend types: actual + committed + encumbered
  
  Update spend tracking tables:
    - Current month actuals
    - Year-to-date actuals
    - Commitments and encumbrances
    - Last update timestamp
  
  Log import summary:
    - Transactions imported by source
    - Any validation failures
    - Data quality metrics
  
  Trigger Variance Calculation Automation`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">erp.connect(credentials)</code> - Connect to ERP system</div>
                    <div>• <code className="bg-white px-1">erp.get_actuals(department, period)</code> - Extract GL actuals</div>
                    <div>• <code className="bg-white px-1">ap.get_invoices(status, period)</code> - Get AP invoices</div>
                    <div>• <code className="bg-white px-1">expenses.get_approved(department, period)</code> - Get expenses</div>
                    <div>• <code className="bg-white px-1">payroll.get_costs(department, period)</code> - Get payroll</div>
                    <div>• <code className="bg-white px-1">po.get_commitments(department)</code> - Get open POs</div>
                    <div>• <code className="bg-white px-1">data.standardize(transaction, mappings)</code> - Normalize data</div>
                    <div>• <code className="bg-white px-1">data.validate(transaction, rules)</code> - Validate quality</div>
                    <div>• <code className="bg-white px-1">budget.map_to_line_item(transaction)</code> - Map to budget</div>
                  </div>
                </div>
              </div>

              {/* Automation 2 */}
              <div className="border-l-4 border-violet-500 pl-4 bg-violet-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Real-Time Variance Calculation Automation</h3>
                  <Code className="w-5 h-5 text-violet-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After spend import, or when budget changes, or on-demand</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When calculating variances:
  For each budget line item (department + category):
    Get budget data:
      - Annual budget amount
      - Monthly phased budget (if exists)
      - YTD budget (cumulative through current month)
      - Current month budget
    
    Get actual spend data:
      - YTD actual spend (including commitments)
      - Current month actual spend
      - Current month commitments (approved but unpaid)
      - Open encumbrances (PO commitments)
    
    Calculate total exposure:
      Total exposure = Actual + Committed + Encumbered
    
    Calculate variances:
      YTD variance = YTD actual - YTD budget
      YTD variance % = (YTD variance / YTD budget) * 100
      
      Current month variance = Current month actual - Current month budget
      Current month variance % = (Current month variance / Current month budget) * 100
      
      Remaining budget = Annual budget - Total exposure
      Remaining budget % = (Remaining budget / Annual budget) * 100
    
    Categorize variance:
      If unfavorable variance > 15%: "Significantly Over Budget"
      If unfavorable variance > 10%: "Over Budget - Requires Action"
      If unfavorable variance > 5%: "Slightly Over Budget"
      If variance within +/- 5%: "On Track"
      If favorable variance > 5%: "Under Budget"
    
    Calculate utilization rate:
      Utilization = (Total exposure / Annual budget) * 100
    
    Determine status indicator:
      If utilization > 100%: Red (Over budget)
      If utilization > 90%: Yellow (Approaching limit)
      If utilization > 80%: Green with warning
      If utilization <= 80%: Green (Healthy)
    
    Calculate pace metrics:
      Expected utilization at this point in year = (Days elapsed / Days in year) * 100
      Actual utilization vs expected = Actual - Expected
      
      If actual utilization > expected by 10%+: "Spending too fast"
      If actual utilization < expected by 10%+: "Underspending"
      Otherwise: "On pace"
    
    Project year-end:
      If current month data available:
        Average monthly burn = YTD actual / Months elapsed
        Projected annual = Average monthly burn * 12
        Projected variance = Projected annual - Annual budget
      
      Mark if projected to exceed budget at year-end
    
    Generate variance details:
      - Drivers: Which sub-categories over/under
      - Trend: Improving, worsening, or stable
      - Comparison: vs prior month, vs prior year same period
  
  Update variance tracking tables
  Update dashboard metrics
  Trigger Alert Automation for items requiring attention`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">budget.get_line_item(dept, category, period)</code> - Get budget</div>
                    <div>• <code className="bg-white px-1">actuals.get_spend(dept, category, period)</code> - Get actuals</div>
                    <div>• <code className="bg-white px-1">calculations.calculate_variance(actual, budget)</code> - Calculate variance</div>
                    <div>• <code className="bg-white px-1">calculations.calculate_utilization(spent, budget)</code> - Utilization</div>
                    <div>• <code className="bg-white px-1">forecast.project_yearend(ytd, months_elapsed)</code> - Project year-end</div>
                    <div>• <code className="bg-white px-1">variance.categorize(variance_pct)</code> - Categorize variance</div>
                    <div>• <code className="bg-white px-1">analytics.identify_drivers(line_item)</code> - Find drivers</div>
                  </div>
                </div>
              </div>

              {/* Automation 3 */}
              <div className="border-l-4 border-violet-500 pl-4 bg-violet-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Intelligent Alert Automation</h3>
                  <Code className="w-5 h-5 text-violet-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After variance calculation, or when thresholds crossed</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When checking for alert conditions:
  For each department budget:
    Check utilization thresholds:
      If utilization crosses 80% for first time:
        Send notification to department manager:
          "You've used 80% of your annual budget"
          "Remaining: $X for Y months"
          "Current pace: On track / Too fast / Underspending"
        
      If utilization crosses 90%:
        Send escalation to department manager + director:
          "ALERT: 90% budget utilized"
          "Remaining: $X with Y months left"
          "Projected year-end: $X over budget" (if applicable)
          "Recommended action: Review upcoming spend or request reallocation"
      
      If utilization crosses 100%:
        Send urgent alert to manager + director + CFO:
          "URGENT: Budget exceeded"
          "Current overage: $X"
          "All new spend requires CFO approval"
          "Action required: Submit budget adjustment or explain variance"
    
    Check pace vs expected:
      Calculate: Days into period / Total days in period
      Expected utilization at this point = Days % * 100
      
      If actual utilization > expected + 15%:
        Send warning: "Spending faster than planned"
        "At current pace, will exceed budget by month X"
        "Consider: Slowing discretionary spend or reforecasting"
    
    Check variance thresholds:
      If current month variance > 10% unfavorable:
        Send alert: "Current month X% over budget"
        "Drivers: [list top 3 categories driving variance]"
        "Action: Review spend or provide variance explanation"
      
      If variance trend worsening (3 consecutive months increasing):
        Send escalation: "Budget variance trending worse"
        "Month 1: X%, Month 2: Y%, Month 3: Z%"
        "Intervention needed: Review budget assumptions or spending patterns"
    
    Check for approaching limits:
      Get all pending requisitions and approvals
      Calculate: Current spend + Pending = Projected near-term spend
      
      If projected spend would exceed budget:
        Alert before approval:
          "Pending approvals will exceed budget by $X"
          "Review: [list pending items]"
          "Options: Defer items or request budget increase"
    
    Check for spending anomalies:
      If single transaction > 20% of remaining budget:
        Alert: "Large transaction detected: $X"
        "This will consume Y% of remaining budget"
        "Verify: Is this expected/approved?"
      
      If category spike (>50% increase vs prior month):
        Alert: "Unusual spending pattern in [category]"
        "Current month: $X vs Prior month: $Y (Z% increase)"
        "Investigate: Is this planned or error?"
  
  Consolidate alerts:
    Don't send duplicate alerts within 24 hours
    Batch related alerts into summary (vs individual emails)
    Prioritize by severity: Over budget > Approaching limit > Pace warning
  
  Route alerts by severity:
    Info: Show in dashboard only
    Warning: Email to manager
    Critical: Email + SMS to manager + director
    Urgent: Email + SMS to manager + director + CFO
  
  Track alert history:
    Log all alerts sent
    Track: Which alerts led to action
    Learn: Which thresholds most useful
    Adjust: Alert sensitivity based on department patterns`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">alerts.check_thresholds(line_item, thresholds)</code> - Check conditions</div>
                    <div>• <code className="bg-white px-1">alerts.get_alert_history(line_item, days)</code> - Check for duplicates</div>
                    <div>• <code className="bg-white px-1">notifications.send_email(recipients, template, data)</code> - Send email</div>
                    <div>• <code className="bg-white px-1">notifications.send_sms(phone, message)</code> - Send SMS</div>
                    <div>• <code className="bg-white px-1">requisitions.get_pending(department)</code> - Get pending approvals</div>
                    <div>• <code className="bg-white px-1">analytics.detect_anomalies(spending_data)</code> - Detect anomalies</div>
                  </div>
                </div>
              </div>

              {/* Automation 4 */}
              <div className="border-l-4 border-violet-500 pl-4 bg-violet-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Forecast Update Automation</h3>
                  <Code className="w-5 h-5 text-violet-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Weekly on Sunday, or when manager submits reforecast</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When updating forecasts:
  For each department budget line:
    Calculate remaining period:
      Months remaining = Months in year - Current month number
      Days remaining in current month
    
    Analyze spending patterns:
      Method 1 - Straight line:
        Average monthly spend = YTD actual / Months elapsed
        Forecast remaining months = Average monthly * Months remaining
        Total year forecast = YTD actual + Forecast remaining
      
      Method 2 - Trend-based:
        Calculate trend: Is spending increasing/decreasing monthly?
        Apply trend to remaining months
        Total year forecast = YTD + Trended remaining
      
      Method 3 - Seasonality-adjusted:
        Check historical patterns (prior years same period)
        If seasonal pattern exists (e.g., Q4 higher):
          Apply seasonal factors to remaining months
        Total year forecast = YTD + Seasonal adjusted remaining
      
      Method 4 - Manager input:
        If manager has provided bottom-up forecast:
          Use manager's forecast for remaining months
          Total year forecast = YTD + Manager forecast
    
    Select best forecast method:
      If manager forecast exists and recent (< 30 days): Use manager
      Else if clear seasonality detected: Use seasonal
      Else if spend trend is significant: Use trend
      Else: Use straight line
    
    Calculate forecast variance:
      Forecast vs original budget = Forecast - Budget
      Forecast variance % = (Forecast variance / Budget) * 100
    
    Categorize forecast:
      If forecast > budget by 10%+: "Projected Overrun"
      If forecast > budget by 5-10%: "At Risk"
      If forecast within +/- 5%: "On Target"
      If forecast < budget by 5%+: "Projected Underrun"
    
    Identify forecast changes:
      Compare to prior week forecast
      If change > $10K or > 5%:
        Flag as "Forecast Changed Materially"
        Note: Driver of change
    
    Calculate confidence level:
      High confidence (>90%):
        - Manager forecast provided
        - 10+ months of actuals available
        - Stable spending pattern
      
      Medium confidence (70-90%):
        - 6-9 months of actuals
        - Some variability in pattern
        - No manager input
      
      Low confidence (<70%):
        - < 6 months of actuals
        - High variability
        - Significant unknowns
    
  Aggregate forecasts:
    Roll up to department total
    Roll up to division total  
    Roll up to company total
    
    Check for material changes:
      If company forecast change > $100K:
        Alert CFO: "Company forecast changed by $X"
        Provide: Department breakdown of changes
  
  Update forecast tables and dashboards
  
  If material overrun projected:
    Trigger notification to department manager
    Suggest: Submit reforecast or explain variance
    Create: Budget review task if > 10% over`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">forecast.calculate_straight_line(ytd, periods_remaining)</code></div>
                    <div>• <code className="bg-white px-1">forecast.calculate_trend(monthly_actuals)</code></div>
                    <div>• <code className="bg-white px-1">forecast.apply_seasonality(ytd, seasonal_factors)</code></div>
                    <div>• <code className="bg-white px-1">forecast.get_manager_input(dept, period)</code></div>
                    <div>• <code className="bg-white px-1">patterns.detect_seasonality(historical_data)</code></div>
                    <div>• <code className="bg-white px-1">forecast.calculate_confidence(actuals_count, variability)</code></div>
                  </div>
                </div>
              </div>

              {/* Automation 5 */}
              <div className="border-l-4 border-violet-500 pl-4 bg-violet-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">5. Approval Workflow Automation</h3>
                  <Code className="w-5 h-5 text-violet-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> When spend request or budget change submitted</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When approval request submitted:
  Determine request type:
    - Purchase requisition (new spend)
    - Budget reallocation (move $ between categories)
    - Budget increase (request more budget)
    - Variance explanation (explain overrun)
  
  For purchase requisition:
    Check budget availability:
      Remaining budget = Budget - (Actual + Committed + Encumbered)
      
      If request amount <= remaining budget:
        If amount < $5,000:
          Auto-approve (within delegation authority)
          Notify: Manager (FYI)
        
        If amount $5,000 - $25,000:
          Route to: Department manager for approval
          Due date: 2 business days
        
        If amount > $25,000:
          Route to: Director for approval
          Due date: 3 business days
          CC: CFO (FYI)
      
      If request amount > remaining budget:
        Calculate overage amount
        
        If overage < 5% of annual budget:
          Route to: Director + CFO for joint approval
          Flag as: "Over budget but within tolerance"
        
        If overage >= 5% of annual budget:
          Route to: CFO for approval (required)
          Require: Justification and funding source
          Suggest: Consider reallocation or deferral
  
  For budget reallocation request:
    Validate request:
      - Source category has available budget
      - Amount to reallocate is reasonable (<30% of category)
      - Destination category needs the funds
    
    Determine approver:
      If within same department and amount < $50K:
        Route to: Department manager
      
      If cross-department or amount >= $50K:
        Route to: CFO
      
      If affects multiple divisions:
        Route to: CFO + CEO
    
    Attach analysis:
      - Impact on source category (remaining budget)
      - Impact on destination category (new budget)
      - Reason for reallocation
      - Precedent (has this been done before?)
  
  For budget increase request:
    Require supporting information:
      - Reason for increase (new project, cost overrun, wrong assumption)
      - Amount requested
      - Funding source (which budget to reduce or use reserves)
      - Impact if not approved
    
    Route based on amount:
      < $25K: Director approval
      $25K - $100K: CFO approval
      > $100K: CFO + CEO approval
  
  For variance explanation:
    If variance < 10%:
      Manager can provide explanation (no approval needed)
      Logged for audit trail
    
    If variance 10-20%:
      Manager provides explanation
      Route to: Director for acknowledgment
    
    If variance > 20%:
      Manager provides explanation + action plan
      Route to: Director + CFO for review
      Require: Corrective actions or budget adjustment request
  
  Track approval workflow:
    Log: Who approved, when, any comments
    Set: Reminder notifications if approaching due date
    Escalate: If not approved within due date
    
    If approved:
      Execute: Budget change or spending authorization
      Notify: Requestor and stakeholders
      Update: Budget tracking systems
    
    If rejected:
      Notify: Requestor with reason
      Suggest: Alternative approaches or modifications
      Log: Rejection for future reference`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">budget.check_availability(dept, category)</code></div>
                    <div>• <code className="bg-white px-1">approvals.determine_approver(type, amount, dept)</code></div>
                    <div>• <code className="bg-white px-1">workflow.create_approval_task(approver, request, due_date)</code></div>
                    <div>• <code className="bg-white px-1">workflow.check_delegation_authority(user, amount)</code></div>
                    <div>• <code className="bg-white px-1">notifications.send_approval_request(approver, details)</code></div>
                    <div>• <code className="bg-white px-1">budget.execute_change(type, details)</code></div>
                  </div>
                </div>
              </div>

              {/* Remaining Automations Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Automations 6-9:</strong>
                <ul className="mt-2 space-y-2 list-none">
                  <li><strong>6. Weekly Digest Automation</strong> - Sends weekly budget summary to each manager with their spend status</li>
                  <li><strong>7. Year-End Projection</strong> - Monthly calculation of projected year-end by department</li>
                  <li><strong>8. Pattern Learning</strong> - Identifies spending patterns (seasonality, recurring costs) to improve forecasts</li>
                  <li><strong>9. Budget Rollover</strong> - At year-end, handles budget closeout, carries forward commitments, initializes next year</li>
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
                <p className="text-gray-600">3 specialized agents that provide budget intelligence</p>
              </div>
            </div>
            {expandedSection === 'agents' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'agents' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Agent 1 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Budget Advisor Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Answers manager questions, explains variances, provides recommendations</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Budget Advisor Agent for BudgetWatch.</p>
                    <p><strong>Your role:</strong> Help department managers understand their budget status, explain variances, and provide actionable recommendations for staying on track.</p>
                    <p><strong>Context you have access to:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Current budget vs actual for the department</li>
                      <li>YTD spending and utilization rate</li>
                      <li>Spending trends and patterns</li>
                      <li>Variance details and drivers</li>
                      <li>Historical spending data (prior years)</li>
                      <li>Forecast to year-end</li>
                      <li>Pending commitments and approvals</li>
                    </ul>
                    <p><strong>Types of questions you answer:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>"Where do I stand on budget?"</li>
                      <li>"Why am I over/under budget?"</li>
                      <li>"Will I make it through the year?"</li>
                      <li>"What if I approve this new expense?"</li>
                      <li>"Where can I cut spending?"</li>
                      <li>"Should I request more budget?"</li>
                    </ul>
                    <p><strong>When answering:</strong> Be specific with numbers, identify root causes not symptoms, provide 2-3 actionable options, reference historical context</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INTERACTION:</div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-700 mr-2">Manager:</span>
                      <span>"Why am I 12% over budget in Marketing?"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-purple-600 mr-2">Agent:</span>
                      <span>"I've analyzed your Marketing budget variance. You're $47K (12%) over budget. Here's the breakdown:

Primary drivers:
1. Digital advertising: $35K over (74% of total variance)
   - Q3 product launch campaign added mid-quarter
   - Spending at $15K/month vs $10K budgeted
   - This wasn't in original budget assumptions

2. Trade shows: $18K over
   - Attended 2 additional conferences (Q3 industry event, Q4 partner summit)
   - Original budget assumed 4 shows, you've done 6

3. Offsetting factors: Agency fees $6K under budget

Historical context: Marketing typically runs 8-10% over in Q3-Q4 due to year-end campaigns. This pattern occurred last 3 years.

Root cause: Budget was based on prior year which had lower launch activity. This year's product roadmap more aggressive.

Your options:
1. Request budget reallocation: Move $50K from another category with savings (e.g., Travel is $30K under)
2. Reduce Q4 spend: Cut back digital ads to $8K/month for remaining months
3. Request budget increase: Given this is revenue-generating activity, strong case for additional funds

My recommendation: Option 1 (reallocation) - You have cushion in Travel and Events budgets. I can help you draft the reallocation request showing the ROI of the digital campaign."</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">budget.get_status(department)</code></div>
                    <div>• <code className="bg-white px-1">variance.get_details(department)</code></div>
                    <div>• <code className="bg-white px-1">variance.identify_drivers(department)</code></div>
                    <div>• <code className="bg-white px-1">history.get_patterns(department, years)</code></div>
                    <div>• <code className="bg-white px-1">forecast.project_yearend(department)</code></div>
                    <div>• <code className="bg-white px-1">recommendations.generate(situation)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Forecast Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Projects future spend, runs "what-if" scenarios, predicts year-end outcomes</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Project year-end spend based on current trends</li>
                    <li>Run "what-if" scenarios: "What if I continue at this pace?" "What if I cut X by 20%?"</li>
                    <li>Identify when budget will run out at current burn rate</li>
                    <li>Calculate impact of pending decisions on year-end forecast</li>
                    <li>Compare multiple scenarios side-by-side</li>
                    <li>Recommend optimal spend allocation for remaining months</li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">EXAMPLE INTERACTION:</div>
                  <div className="text-xs space-y-2">
                    <div className="flex items-start">
                      <span className="font-bold text-gray-700 mr-2">Manager:</span>
                      <span>"What if I approve this $50K software purchase?"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-purple-600 mr-2">Agent:</span>
                      <span>"I've run the scenario. Here's the impact:

Current situation:
- YTD spent: $450K of $600K budget (75%)
- Months remaining: 3
- Current burn rate: $50K/month
- Projected year-end without purchase: $600K (exactly on budget)

With $50K software purchase:
- New committed amount: $500K
- Remaining budget: $100K for 3 months
- Available monthly budget: $33K/month
- This is a 34% reduction from current $50K/month burn

Risk assessment:
- High risk: Your run rate needs to drop significantly
- Historical pattern: Your Q4 spending is typically 20% higher, not lower
- Pending items: You have $40K in pending approvals

Scenarios:
1. Approve + cut other spend 34%: Tight but possible if you defer non-critical items
2. Approve + request $50K budget increase: Safer approach
3. Defer purchase to next year: Stay on current track

Impact on categories if you approve:
- Must reduce: Travel ($15K savings available), Consultants ($20K savings possible)
- Cannot reduce: Payroll (fixed), Subscriptions (under contract)

My recommendation: This purchase will strain your budget. Either defer to Q1 next year or pair with budget increase request. Show the business case for the software ROI."</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">forecast.calculate_scenario(changes, constraints)</code></div>
                    <div>• <code className="bg-white px-1">forecast.calculate_burn_rate(ytd, months)</code></div>
                    <div>• <code className="bg-white px-1">forecast.project_runout_date(remaining, burn_rate)</code></div>
                    <div>• <code className="bg-white px-1">scenarios.compare_multiple(scenario_list)</code></div>
                    <div>• <code className="bg-white px-1">optimization.recommend_allocation(remaining, priorities)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 3 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Reallocation Strategy Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Suggests budget reallocation opportunities, analyzes cross-department optimization</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Identify categories with excess budget (underspending)</li>
                    <li>Identify categories needing additional funds (overspending)</li>
                    <li>Suggest specific reallocation moves with business rationale</li>
                    <li>Calculate impact of reallocation on both source and destination</li>
                    <li>Draft reallocation request with supporting analysis</li>
                    <li>Consider historical patterns to ensure sustainable reallocation</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">budget.find_underutilized(threshold)</code></div>
                    <div>• <code className="bg-white px-1">budget.find_overutilized(threshold)</code></div>
                    <div>• <code className="bg-white px-1">reallocation.suggest_moves(dept)</code></div>
                    <div>• <code className="bg-white px-1">reallocation.calculate_impact(source, dest, amount)</code></div>
                    <div>• <code className="bg-white px-1">reallocation.draft_request(details)</code></div>
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
              <div className="bg-fuchsia-100 p-3 rounded-full mr-4">
                <Smartphone className="w-6 h-6 text-fuchsia-600" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Apps (Visualizations + Interactions)</h2>
                <p className="text-gray-600">7 interactive apps for budget management</p>
              </div>
            </div>
            {expandedSection === 'apps' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'apps' && (
            <div className="p-6 border-t space-y-6">
              
              {/* App 1 */}
              <div className="border-l-4 border-fuchsia-500 pl-4 bg-fuchsia-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">1. Executive Budget Dashboard</h3>
                <p className="text-sm text-gray-700 mb-3">Company-wide budget overview for CFO and executives</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Company utilization gauge (overall % spent)</div>
                      <div className="bg-white p-2 rounded">• Department comparison bar chart (all depts side-by-side)</div>
                      <div className="bg-white p-2 rounded">• Variance heatmap (red=over, green=under)</div>
                      <div className="bg-white p-2 rounded">• Forecast to year-end line chart</div>
                      <div className="bg-white p-2 rounded">• Top variance table (largest over/under)</div>
                      <div className="bg-white p-2 rounded">• Alert summary panel (critical items)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click department → Drill to detail</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">FILTER</span>
                        <span>Filter: All/Over Budget/Under Budget</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">DROPDOWN</span>
                        <span>View: MTD/QTD/YTD</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Export Report" → PDF/Excel</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Ask Budget Advisor"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 2 */}
              <div className="border-l-4 border-fuchsia-500 pl-4 bg-fuchsia-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">2. Department Manager Dashboard</h3>
                <p className="text-sm text-gray-700 mb-3">Personal budget view for department managers</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• My budget utilization ring (% spent)</div>
                      <div className="bg-white p-2 rounded">• Category breakdown (pie chart)</div>
                      <div className="bg-white p-2 rounded">• Spending trend line (6 months)</div>
                      <div className="bg-white p-2 rounded">• Remaining budget by category (bar chart)</div>
                      <div className="bg-white p-2 rounded">• Alert badges (count of issues)</div>
                      <div className="bg-white p-2 rounded">• Pending approvals list</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Explain My Variance" → Opens agent</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"What If?" → Opens scenario tool</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click category → See transactions</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Request Reallocation"</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>Ask questions anytime</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 3 */}
              <div className="border-l-4 border-fuchsia-500 pl-4 bg-fuchsia-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">3. Variance Analysis App</h3>
                <p className="text-sm text-gray-700 mb-3">Deep-dive variance investigation tool</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Variance waterfall chart</div>
                      <div className="bg-white p-2 rounded">• Driver breakdown table</div>
                      <div className="bg-white p-2 rounded">• Month-over-month comparison</div>
                      <div className="bg-white p-2 rounded">• Budget vs actual vs forecast line</div>
                      <div className="bg-white p-2 rounded">• Transaction drill-down list</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Explain Variance" → Agent analyzes</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">FORM</span>
                        <span>Add variance commentary</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Drill to transaction detail</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Submit Explanation" → Route to CFO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 4 */}
              <div className="border-l-4 border-fuchsia-500 pl-4 bg-fuchsia-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">4. Scenario Planning App</h3>
                <p className="text-sm text-gray-700 mb-3">What-if analysis and forecasting tool</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Current vs projected comparison</div>
                      <div className="bg-white p-2 rounded">• Multiple scenario comparison table</div>
                      <div className="bg-white p-2 rounded">• Impact waterfall (changes → result)</div>
                      <div className="bg-white p-2 rounded">• Forecast confidence indicator</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">INPUT</span>
                        <span>Adjust assumptions (%, $)</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Run Scenario" → Calculate impact</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Ask Forecast Agent"</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Save Scenario" → Name and store</span>
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
                    <strong>5. Reallocation Request App</strong> - Submit and approve budget reallocation requests
                    <div className="text-xs text-gray-600 ml-4">Viz: Source/destination comparison, impact analysis | Interact: Form to request, agent suggests sources, approval workflow</div>
                  </div>
                  <div>
                    <strong>6. Spending Details App</strong> - Transaction-level detail and search
                    <div className="text-xs text-gray-600 ml-4">Viz: Transaction list with filters, category drill-down | Interact: Search by amount/vendor/date, export to Excel, add tags/notes</div>
                  </div>
                  <div>
                    <strong>7. Mobile Manager App</strong> - Quick budget check on mobile
                    <div className="text-xs text-gray-600 ml-4">Viz: Simple gauge, key metrics, alerts | Interact: Approve/reject spend, ask agent questions, view status</div>
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

export default BudgetWatchSpec;