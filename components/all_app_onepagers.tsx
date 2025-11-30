import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AppOnePagers = () => {
  const [currentApp, setCurrentApp] = useState(0);

  const apps = [
    {
      name: "FastClose",
      tagline: "Close 40-70% Faster - And Keep Getting Faster",
      category: "MONTH-END CLOSE",
      problem: [
        "Close takes 7-10 days (or longer) every month",
        "Finance team works late nights and weekends",
        "Manual checklists and spreadsheets scattered everywhere",
        "No visibility into what's done, what's blocked",
        "Same bottlenecks every month but no time to fix them"
      ],
      solution: "A prebuilt month-end close app that automates task management, reconciliation routing, and approval workflows—while keeping your close logic clean and maintainable.",
      outOfBox: [
        "Standard close checklist with common tasks",
        "Integration to major ERPs for trial balance",
        "Approval workflow engine",
        "Real-time dashboard showing progress",
        "Notification system for blocked tasks"
      ],
      customize: [
        "Add step: Verify intercompany eliminations",
        "Route AP reconciliations to Sarah",
        "Flag journal entries over $100K for CFO",
        "Define close complete as: all reconciliations signed off",
        "Send summary to board on day 4"
      ],
      outcomes: [
        { metric: "40-70%", label: "Faster Close Time", detail: "From 10 days to 3-5 days" },
        { metric: "100%", label: "Task Visibility", detail: "Real-time dashboard" },
        { metric: "80%", label: "Reduced Late Nights", detail: "Normal hours during close" },
        { metric: "0", label: "Technical Debt", detail: "Stays maintainable" }
      ],
      features: [
        "Task Dependencies: Automatic sequencing",
        "Smart Routing: Auto-assigned tasks",
        "Bottleneck Detection: Alerts on delays",
        "Version Control: Track changes over time",
        "Reconciliation Hub: Centralized location",
        "Approval Workflows: Multi-level reviews",
        "Audit Trail: Complete history",
        "Mobile Access: Approve anywhere"
      ],
      quote: "We went from a 10-day close to 5 days in our first month. When our controller left, the new person understood the entire process on day one.",
      attribution: "Controller, Mid-Market Manufacturing"
    },
    {
      name: "AutoReconcile",
      tagline: "Automate 80-95% of Reconciliations - Without Creating Tech Debt",
      category: "RECONCILIATION",
      problem: [
        "Reconciliations take days of manual matching",
        "Excel spreadsheets prone to errors and formula breaks",
        "No standardization across accounts or entities",
        "Difficult to track who reviewed what and when",
        "Complex matching rules become unmaintainable code"
      ],
      solution: "Automated reconciliation platform that matches transactions using rules you define in English, learns exception patterns, and keeps matching logic clean and understandable.",
      outOfBox: [
        "Bank account reconciliation templates",
        "GL to subledger matching engine",
        "Multi-currency reconciliation support",
        "Variance analysis and reporting",
        "Approval workflow with sign-offs"
      ],
      customize: [
        "Match bank transactions if date within 2 days and amount exact",
        "Flag variances over $1,000 for manual review",
        "Auto-approve reconciliations with variance under $100",
        "Route credit card reconciliations to department managers",
        "Require CFO sign-off on cash accounts"
      ],
      outcomes: [
        { metric: "80-95%", label: "Auto-Matched", detail: "Transactions reconciled automatically" },
        { metric: "75%", label: "Time Saved", detail: "Hours freed for analysis" },
        { metric: "98%", label: "Accuracy Rate", detail: "Near-perfect matching" },
        { metric: "3 days", label: "Faster Close", detail: "Reconciliations done earlier" }
      ],
      features: [
        "Intelligent Matching: Multi-criteria rules",
        "Exception Learning: Patterns captured automatically",
        "Variance Analysis: Root cause identification",
        "Bulk Operations: Process thousands at once",
        "Template Library: Reusable matching rules",
        "Audit Documentation: Auto-generated evidence",
        "Multi-Entity: Centralized control",
        "Integration: Connect any data source"
      ],
      quote: "We used to spend 2 days every month on bank reconciliations. Now it takes 2 hours, and the matching logic is so clear that anyone on the team can modify it.",
      attribution: "Senior Accountant, Financial Services"
    },
    {
      name: "CashForecaster",
      tagline: "Improve Forecast Accuracy 20-40% - With Models You Can Explain",
      category: "CASH PLANNING",
      problem: [
        "Forecast accuracy is only 60-70%, making cash planning difficult",
        "Manual consolidation from multiple sources takes days",
        "Can't quickly model different scenarios",
        "Black-box forecasts that CFO can't explain to board",
        "Models break when business changes"
      ],
      solution: "Cash forecasting platform where you define driver-based models in English, system updates forecasts daily with actual data, and all assumptions are transparent and explainable.",
      outOfBox: [
        "13-week rolling cash forecast template",
        "Integration to AR, AP, payroll systems",
        "Scenario modeling and comparison",
        "Cash position dashboard and alerts",
        "Historical accuracy tracking"
      ],
      customize: [
        "Revenue forecast: Average Deal Size × Number of Deals × Close Rate",
        "Q4 typically 30% higher due to year-end buying",
        "Payment terms: Enterprise customers pay in 45 days, SMB in 30",
        "Seasonal working capital: Increase inventory in Q3",
        "Alert me when cash position drops below $500K"
      ],
      outcomes: [
        { metric: "20-40%", label: "Better Accuracy", detail: "Forecast vs. actual variance reduced" },
        { metric: "90 min", label: "Daily Update", detail: "vs. 2 days monthly" },
        { metric: "5x", label: "More Scenarios", detail: "Model what-ifs instantly" },
        { metric: "100%", label: "Explainable", detail: "CFO can walk through logic" }
      ],
      features: [
        "Driver Trees: Model cause and effect",
        "Daily Refresh: Auto-update with actuals",
        "Scenario Manager: Compare multiple futures",
        "Sensitivity Analysis: Identify key drivers",
        "Rolling Forecasts: Always looking ahead 13 weeks",
        "Variance Analysis: Understand differences",
        "Assumptions Log: Track all changes",
        "Board Reports: Auto-generated summaries"
      ],
      quote: "For the first time, I can explain to the board exactly why our cash forecast changed and what assumptions drive it. The model evolves with our business.",
      attribution: "CFO, SaaS Company"
    },
    {
      name: "PolicyGuard",
      tagline: "Reduce Policy Violations 30-50% - With Clear Audit Trail",
      category: "COMPLIANCE",
      problem: [
        "Policy violations discovered weeks after they occur",
        "Manual expense reviews slow and inconsistent",
        "Difficult to track who approved what and why",
        "Policies documented in PDFs nobody reads",
        "Exception approvals done via email with no trail"
      ],
      solution: "Automated policy enforcement that checks transactions in real-time, learns exception patterns, and maintains a complete audit trail of all decisions and approvals.",
      outOfBox: [
        "Expense policy enforcement templates",
        "Real-time transaction monitoring",
        "Approval routing and escalation",
        "Policy violation alerts and reporting",
        "Exception tracking and documentation"
      ],
      customize: [
        "Expenses over $500 require manager approval",
        "Travel to recurring client sites can use prior approval",
        "Flag any expense with 'entertainment' if over $200",
        "Conference expenses may be approved retroactively if registered in advance",
        "Send monthly violation summary to CFO"
      ],
      outcomes: [
        { metric: "30-50%", label: "Fewer Violations", detail: "Caught before they occur" },
        { metric: "Real-time", label: "Detection", detail: "vs. weeks later" },
        { metric: "100%", label: "Audit Trail", detail: "Every decision documented" },
        { metric: "60%", label: "Faster Review", detail: "Automated policy checks" }
      ],
      features: [
        "Real-Time Monitoring: Check as transactions post",
        "Smart Routing: Auto-send to right approver",
        "Exception Patterns: Learn from past decisions",
        "Policy Library: Define rules in English",
        "Violation Analytics: Trend identification",
        "Mobile Approvals: Review anywhere",
        "Integration: Pull data from any system",
        "Compliance Reports: Audit-ready documentation"
      ],
      quote: "Policy violations dropped by 40% in the first quarter. Auditors love that they can trace every approval decision back to either a policy rule or a documented exception.",
      attribution: "VP Finance, Healthcare Services"
    },
    {
      name: "InvoiceFlow",
      tagline: "Process Invoices 50-76% Faster - On Your Terms",
      category: "AP AUTOMATION",
      problem: [
        "Invoice processing takes days of manual data entry",
        "Matching invoices to POs is time-consuming and error-prone",
        "No visibility into approval status or bottlenecks",
        "Payment prioritization done manually in spreadsheets",
        "Vendor inquiries require searching through emails"
      ],
      solution: "Intelligent invoice processing that automates data capture, matches to POs using your rules, routes for approval, and schedules payments based on your cash strategy.",
      outOfBox: [
        "OCR for invoice data capture",
        "3-way matching engine (PO, receipt, invoice)",
        "Approval workflow automation",
        "Payment scheduling and batch processing",
        "Vendor portal for self-service inquiries"
      ],
      customize: [
        "Match invoice to PO if amounts within 2% and vendor ID matches",
        "Auto-approve invoices under $500 from trusted vendors",
        "Route invoices over $10K to director",
        "Prioritize early payment discounts over standard terms",
        "Alert me 2 days before payment run"
      ],
      outcomes: [
        { metric: "50-76%", label: "Faster Processing", detail: "Minutes vs. hours per invoice" },
        { metric: "95%", label: "Auto-Matched", detail: "PO matching without manual work" },
        { metric: "85%", label: "Early Pay Capture", detail: "Never miss discounts" },
        { metric: "3 days", label: "Reduced DSO", detail: "Better vendor relationships" }
      ],
      features: [
        "Smart OCR: Extract invoice data accurately",
        "3-Way Matching: PO, receipt, invoice",
        "Exception Handling: Learn matching patterns",
        "Payment Optimization: Capture discounts",
        "Approval Routing: Smart assignment",
        "Vendor Portal: Self-service status",
        "Cash Planning: Integrated forecasting",
        "Duplicate Detection: Prevent overpayment"
      ],
      quote: "We process 3x more invoices with the same team. The matching logic is so clear that when we changed vendors, we just updated the rule in English—no IT needed.",
      attribution: "AP Manager, Retail"
    },
    {
      name: "FraudWatch",
      tagline: "Detect Fraud & Anomalies 50%+ Faster - With Explainable Alerts",
      category: "FRAUD DETECTION",
      problem: [
        "Fraud discovered weeks or months after it occurs",
        "Manual transaction reviews can't keep pace with volume",
        "False positives waste investigator time",
        "Detection rules become complex and unmaintainable",
        "Can't explain to auditors how detection works"
      ],
      solution: "Real-time fraud detection that monitors all transactions using rules you define, learns patterns over time, and provides clear explanations for every alert.",
      outOfBox: [
        "Transaction monitoring across all accounts",
        "Anomaly detection using statistical models",
        "Alert prioritization and case management",
        "Investigation workflow and documentation",
        "Reporting for audit and compliance"
      ],
      customize: [
        "Flag any transaction over $25K to unusual vendor",
        "Alert on duplicate payments within 30 days",
        "Monitor for round-dollar amounts over $5K",
        "Detect unusual after-hours transaction patterns",
        "Escalate high-risk alerts to CFO immediately"
      ],
      outcomes: [
        { metric: "50%+", label: "Faster Detection", detail: "Real-time vs. weeks later" },
        { metric: "70%", label: "Fewer False Positives", detail: "Smart pattern learning" },
        { metric: "$500K+", label: "Prevented Losses", detail: "Average per year" },
        { metric: "100%", label: "Explainable", detail: "Every alert has clear reason" }
      ],
      features: [
        "Real-Time Monitoring: Check every transaction",
        "Pattern Learning: Reduce false positives",
        "Risk Scoring: Prioritize investigations",
        "Case Management: Track investigations",
        "Explanation Engine: Why each alert fired",
        "Behavioral Analysis: Detect unusual patterns",
        "Integration: Monitor all financial systems",
        "Compliance Reports: Audit documentation"
      ],
      quote: "We caught a $50K fraudulent payment scheme in 2 days instead of 2 months. Best part: I can explain to the board exactly how our detection logic works.",
      attribution: "Director of Internal Audit, Manufacturing"
    },
    {
      name: "BudgetWatch",
      tagline: "Track Budget vs. Actual in Real-Time - And Keep Teams Accountable",
      category: "BUDGET MANAGEMENT",
      problem: [
        "Budget tracking done manually in spreadsheets",
        "Department managers don't know current spend until month-end",
        "Overruns discovered too late to correct",
        "No visibility into forecast remainder of year",
        "Budget reforecasting takes weeks"
      ],
      solution: "Real-time budget tracking that integrates with all spending systems, alerts managers before overruns, and enables instant reforecasting based on current trends.",
      outOfBox: [
        "Budget vs. actual tracking across all departments",
        "Real-time spend visibility dashboard",
        "Alert system for approaching limits",
        "Variance analysis and reporting",
        "Reforecasting tools and scenario planning"
      ],
      customize: [
        "Alert department manager when 80% of budget spent",
        "Require CFO approval for any spending over budget",
        "Calculate forecast remainder using 3-month average trend",
        "Flag any line item with >15% unfavorable variance",
        "Send weekly budget summary to all managers"
      ],
      outcomes: [
        { metric: "Real-time", label: "Visibility", detail: "vs. waiting for month-end" },
        { metric: "40%", label: "Fewer Overruns", detail: "Alerts prevent surprises" },
        { metric: "2 hours", label: "Reforecast Time", detail: "vs. 2 weeks" },
        { metric: "85%", label: "Manager Engagement", detail: "Own their budgets" }
      ],
      features: [
        "Real-Time Integration: All spending systems",
        "Smart Alerts: Prevent overruns",
        "Drill-Down Analysis: From summary to detail",
        "Forecast Tools: Instant reforecasting",
        "Variance Commentary: Document explanations",
        "Department Portals: Self-service access",
        "What-If Scenarios: Model changes",
        "Board Dashboards: Executive summaries"
      ],
      quote: "Department managers now know their budget status daily instead of monthly. Overruns dropped 40% because we catch issues before they become problems.",
      attribution: "Controller, Healthcare"
    },
    {
      name: "CashCollector",
      tagline: "Reduce DSO by 15-25% - With Intelligent Collection Strategies",
      category: "COLLECTIONS",
      problem: [
        "Collections done manually via spreadsheet tracking",
        "No systematic follow-up on aging invoices",
        "One-size-fits-all approach doesn't work for all customers",
        "Difficult to prioritize which accounts to focus on",
        "No visibility into collection effectiveness"
      ],
      solution: "Intelligent collections management that automates reminders, learns which approaches work for which customers, and prioritizes efforts based on risk and amount.",
      outOfBox: [
        "Aging analysis with risk scoring",
        "Automated reminder campaigns",
        "Collection workflow management",
        "Customer payment history tracking",
        "Performance analytics and reporting"
      ],
      customize: [
        "Send first reminder 5 days before due date",
        "Enterprise customers get phone call, SMB gets email",
        "Escalate to collections after 60 days past due",
        "Priority: >$50K overdue for >30 days",
        "Learn: which reminder timing works best per customer"
      ],
      outcomes: [
        { metric: "15-25%", label: "Reduced DSO", detail: "Collect faster consistently" },
        { metric: "30%", label: "More Collections", detail: "Systematic follow-up" },
        { metric: "2x", label: "Collector Productivity", detail: "Focus on high-value accounts" },
        { metric: "95%", label: "On-time Payments", detail: "Proactive reminders work" }
      ],
      features: [
        "Risk Scoring: Prioritize accounts",
        "Smart Campaigns: Right message, right time",
        "Customer Segmentation: Tailor approach",
        "Workflow Automation: Systematic follow-up",
        "Payment Prediction: Forecast collections",
        "Dispute Management: Track and resolve",
        "Customer Portal: Self-service payment",
        "Performance Analytics: Measure effectiveness"
      ],
      quote: "DSO dropped from 52 to 38 days in 6 months. The system learned that our enterprise customers respond better to phone calls 7 days before due date.",
      attribution: "Credit Manager, B2B SaaS"
    },
    {
      name: "JournalGuard",
      tagline: "Review Journal Entries 50% Faster - Catch Errors Before They Post",
      category: "JOURNAL ENTRY REVIEW",
      problem: [
        "Manual review of every journal entry is time-consuming",
        "Errors and unusual entries discovered after posting",
        "No consistent criteria for what needs detailed review",
        "Difficult to identify patterns in errors",
        "Supporting documentation scattered or missing"
      ],
      solution: "Intelligent journal entry review that flags unusual entries before posting, learns what's normal for your company, and ensures all entries have proper documentation.",
      outOfBox: [
        "Pre-posting anomaly detection",
        "Risk-based review routing",
        "Documentation requirement enforcement",
        "Recurring entry automation",
        "Error pattern identification"
      ],
      customize: [
        "Flag any entry over $100K for CFO review",
        "Detect unusual account combinations",
        "Require supporting docs for all manual accruals",
        "Auto-approve recurring entries if no variance",
        "Learn: what's normal for each account"
      ],
      outcomes: [
        { metric: "50%", label: "Faster Review", detail: "Focus on unusual items only" },
        { metric: "85%", label: "Errors Caught", detail: "Before posting, not after" },
        { metric: "100%", label: "Documentation", detail: "All entries have support" },
        { metric: "0", label: "Manual Recurring", detail: "Automated with approval" }
      ],
      features: [
        "Anomaly Detection: Flag unusual entries",
        "Risk Scoring: Prioritize reviews",
        "Pattern Learning: Understand normal",
        "Documentation Vault: Centralized storage",
        "Recurring Automation: Eliminate manual",
        "Approval Workflows: Right reviewer",
        "Audit Trail: Complete history",
        "Correction Tracking: Learn from errors"
      ],
      quote: "We used to review every journal entry. Now the system flags the 15% that need attention, and we catch errors before they hit the GL.",
      attribution: "Assistant Controller, Technology"
    },
    {
      name: "DataAccuracy",
      tagline: "Increase Data Accuracy to 95%+ - And Keep It There",
      category: "DATA QUALITY",
      problem: [
        "Data quality issues cause reporting delays and errors",
        "No systematic validation before data enters systems",
        "Fixing bad data after the fact is time-consuming",
        "Can't trust reports to be accurate",
        "Quality degrades over time without vigilance"
      ],
      solution: "Automated data quality platform that validates all financial data at entry point, prevents bad data from entering systems, and maintains accuracy over time.",
      outOfBox: [
        "Real-time data validation rules",
        "Data quality dashboards and alerts",
        "Error prevention at source",
        "Duplicate detection and merging",
        "Quality trend monitoring"
      ],
      customize: [
        "Validate: all vendor records have tax ID",
        "Check: GL account codes exist and are active",
        "Flag: any transaction with missing cost center",
        "Prevent: duplicate vendor names with similar spelling",
        "Alert: when data quality score drops below 90%"
      ],
      outcomes: [
        { metric: "95%+", label: "Data Accuracy", detail: "Up from 70-80%" },
        { metric: "80%", label: "Less Rework", detail: "Fix at source, not after" },
        { metric: "3 days", label: "Faster Close", detail: "Clean data needs no fixing" },
        { metric: "Maintained", label: "Over Time", detail: "Quality doesn't degrade" }
      ],
      features: [
        "Entry Validation: Catch errors at source",
        "Duplicate Detection: Prevent duplicates",
        "Reference Checking: Validate against master data",
        "Pattern Learning: Identify data issues",
        "Quality Scoring: Track accuracy trends",
        "Cleansing Rules: Auto-fix common issues",
        "Alert System: Notify on quality drops",
        "Root Cause Analysis: Fix underlying problems"
      ],
      quote: "Data quality was killing our month-end close. Now validation happens at entry, accuracy is 97%, and we spend time on analysis instead of fixing errors.",
      attribution: "Financial Systems Manager, Manufacturing"
    }
  ];

  const app = apps[currentApp];

  const nextApp = () => {
    setCurrentApp((prev) => (prev + 1) % apps.length);
  };

  const prevApp = () => {
    setCurrentApp((prev) => (prev - 1 + apps.length) % apps.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={prevApp}
            className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous App
          </button>
          <div className="text-center">
            <div className="text-sm text-gray-600">FinanceOS Prebuilt App {currentApp + 1} of {apps.length}</div>
            <div className="flex gap-2 mt-2">
              {apps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentApp(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentApp ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={nextApp}
            className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            Next App
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* One-Pager Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6 pb-6 border-b">
            <div>
              <div className="text-sm text-gray-600 mb-2">FinanceOS Prebuilt App</div>
              <h1 className="text-4xl font-bold text-blue-600 mb-2">{app.name}</h1>
              <p className="text-xl text-gray-700">{app.tagline}</p>
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold text-sm">
              {app.category}
            </div>
          </div>

          {/* Problem */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h2 className="font-bold text-lg mb-3">❌ The Problem</h2>
            <ul className="space-y-2">
              {app.problem.map((item, index) => (
                <li key={index} className="text-sm">• {item}</li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h2 className="font-bold text-lg mb-3">✅ The Solution</h2>
            <p className="mb-4">{app.solution}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-sm">Out of the Box:</h3>
                <ul className="space-y-1">
                  {app.outOfBox.map((item, index) => (
                    <li key={index} className="text-xs">✓ {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm">You Customize (In English):</h3>
                <ul className="space-y-1">
                  {app.customize.map((item, index) => (
                    <li key={index} className="text-xs">✏️ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className="mb-6">
            <h2 className="font-bold text-lg mb-4">Measurable Outcomes</h2>
            <div className="grid grid-cols-2 gap-4">
              {app.outcomes.map((outcome, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{outcome.metric}</div>
                  <div className="text-sm font-semibold mb-1">{outcome.label}</div>
                  <p className="text-xs text-gray-600">{outcome.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h2 className="font-bold text-lg mb-3">Key Features</h2>
            <div className="grid grid-cols-2 gap-3">
              {app.features.map((feature, index) => (
                <div key={index} className="flex items-start text-sm">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="bg-gray-100 border-l-4 border-gray-600 p-4 mb-6">
            <p className="text-sm italic mb-2">"{app.quote}"</p>
            <p className="text-xs font-semibold">— {app.attribution}</p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Ready to Get Started?</h2>
            <p className="mb-4 text-sm">Start with our prebuilt app. Customize it to your needs in plain English.</p>
            <div className="flex gap-4 justify-center mb-3">
              <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100">
                Start Free Trial
              </button>
              <button className="border-2 border-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-blue-600">
                Schedule Demo
              </button>
            </div>
            <div className="text-xs opacity-90">
              www.financeos.com/{app.name.toLowerCase()} • hello@financeos.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppOnePagers;