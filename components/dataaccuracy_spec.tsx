import React, { useState } from 'react';
import { Zap, Bot, Smartphone, ChevronDown, ChevronRight, Code, MessageSquare, Layout } from 'lucide-react';

const DataAccuracySpec = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">DataAccuracy App</h1>
          <p className="text-xl text-indigo-100 mb-4">Complete Technical Specification</p>
          <p className="text-sm text-indigo-200 mb-6">Increase data accuracy to 95%+ and maintain quality over time</p>
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
                <p className="text-gray-600">How DataAccuracy components work together</p>
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
                    <strong className="text-indigo-600">Automations</strong> prevent bad data from entering: validate at entry point, enforce business rules, detect duplicates, standardize formats, cross-check references, and quarantine invalid data before it pollutes the system.
                  </p>
                  <p>
                    <strong className="text-purple-600">Agents</strong> handle the complex cases: investigate data anomalies, resolve conflicting information, research missing references, suggest corrections, and learn what constitutes "good" vs "bad" data for your specific business.
                  </p>
                  <p>
                    <strong className="text-pink-600">Apps</strong> provide visibility and control: dashboards show data quality scores in real-time, validation screens catch errors before submission, cleansing tools fix batches of bad data, and alerts notify when quality drops.
                  </p>
                  <div className="bg-white p-4 rounded mt-4">
                    <strong>Example end-to-end flow:</strong>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-700">
                      <li>User enters new vendor in <em>Data Entry App</em></li>
                      <li>Entry Validation Automation runs instantly, checking: required fields, valid formats, business rules</li>
                      <li>System flags: "Tax ID format invalid" and "Address missing postal code"</li>
                      <li>User sees errors highlighted in form before submission</li>
                      <li>User corrects tax ID, adds postal code</li>
                      <li>Duplicate Detection Automation finds similar vendor: "ABC Corp" vs existing "ABC Corporation"</li>
                      <li>System asks: "Is this the same vendor?" with side-by-side comparison</li>
                      <li>User clicks "Ask Agent"</li>
                      <li><em>Duplicate Resolution Agent</em> investigates: checks tax ID, address, phone, recent transactions</li>
                      <li>Agent concludes: "Different vendors - tax IDs don't match, different states"</li>
                      <li>User confirms, vendor saved</li>
                      <li>Reference Validation Automation verifies tax ID with IRS database</li>
                      <li>Quality Score Calculation updates: Vendor data quality = 98%</li>
                      <li><em>Data Quality Dashboard</em> updates in real-time</li>
                      <li>Pattern Learning Automation notes: "Users often miss postal codes - add stronger validation"</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h3 className="font-bold mb-2">The Core Philosophy: Prevent, Not Fix</h3>
                <p className="text-sm">Traditional data quality tools find bad data after it's already in the system. DataAccuracy prevents bad data from entering in the first place through validation at the point of entry, while also providing tools to clean existing data and maintain quality over time.</p>
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
                <p className="text-gray-600">12 core automations that ensure data quality</p>
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
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> As user types in any data entry form (real-time)</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When user enters data in any field:
  Get validation rules for this field type
  
  Apply format validations:
    If field is email:
      - Check contains @ and domain
      - Validate domain has valid TLD
      - Flag common typos (gmial.com, yaho.com)
    
    If field is phone:
      - Check has correct number of digits for country
      - Remove formatting characters, validate numeric
      - Suggest format: (XXX) XXX-XXXX
    
    If field is tax ID (EIN):
      - Check format: XX-XXXXXXX
      - Validate first 2 digits are valid prefix
      - Check not in list of fake test EINs
    
    If field is date:
      - Parse and validate is real date
      - Check not in future (unless allowed)
      - Validate not unreasonably old (e.g., birth date not 150 years ago)
    
    If field is currency amount:
      - Validate is numeric
      - Check decimal places (max 2 for USD)
      - Flag if outside expected range for this field type
  
  Apply business rule validations:
    Check required fields are not empty
    Check conditional requirements (if X then Y is required)
    Validate against value lists (state codes, country codes)
    Check cross-field logic (start date before end date)
    Validate calculated fields match formulas
  
  Apply reference validations:
    If references another entity (vendor ID, customer ID, account code):
      Check entity exists in system
      Check entity is active (not deleted or suspended)
      Verify user has permission to use this entity
  
  As validation runs, show immediate feedback:
    Green checkmark: Valid
    Red X with message: Invalid - show specific error
    Yellow warning: Valid but suspicious - suggest review
    Blue info: Suggestion for improvement
  
  Do not allow form submission if any critical validations fail
  Allow submission with warnings but log them for review`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">validation.get_rules(field_type, entity_type)</code> - Get validation rules</div>
                    <div>• <code className="bg-white px-1">format.validate_email(email_string)</code> - Validate email format</div>
                    <div>• <code className="bg-white px-1">format.validate_phone(phone_string, country)</code> - Validate phone format</div>
                    <div>• <code className="bg-white px-1">format.validate_tax_id(tax_id, type)</code> - Validate tax ID</div>
                    <div>• <code className="bg-white px-1">reference.check_exists(entity_type, entity_id)</code> - Check entity exists</div>
                    <div>• <code className="bg-white px-1">rules.evaluate(field_name, value, context)</code> - Evaluate business rules</div>
                    <div>• <code className="bg-white px-1">feedback.show_inline(field_id, status, message)</code> - Show validation feedback</div>
                  </div>
                </div>
              </div>

              {/* Automation 2 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Intelligent Duplicate Detection Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> Before saving any new or modified master data record</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When user attempts to save a new or modified record:
  Determine entity type (vendor, customer, employee, account, product)
  
  Build search criteria for potential duplicates:
    For vendors/customers:
      - Exact match on tax ID/EIN (if present)
      - Fuzzy match on company name (>85% similar)
      - Match on phone number
      - Match on email domain
      - Fuzzy match on address
    
    For employees:
      - Exact match on SSN (if present)
      - Exact match on email
      - Fuzzy match on name + birth date
    
    For accounts:
      - Exact match on account code
      - Exact match on external account number
    
    For products:
      - Exact match on SKU or UPC
      - Fuzzy match on product name + manufacturer
  
  Search existing records using criteria:
    Apply fuzzy matching algorithms:
      - Levenshtein distance for text similarity
      - Soundex for phonetic matching
      - Token-based matching for multi-word names
    
    Calculate similarity score for each potential match (0-100%)
  
  Categorize potential duplicates:
    If similarity >= 95%: "Very Likely Duplicate"
    If similarity 80-95%: "Possible Duplicate"  
    If similarity 60-80%: "Similar - Review Recommended"
    
  For Very Likely Duplicates:
    Block save with error: "Potential duplicate found"
    Show side-by-side comparison
    Require user to confirm: "This is a new entity" or "This is a duplicate"
    If confirmed new, allow save but log for audit
    If confirmed duplicate, merge or link to existing
  
  For Possible Duplicates:
    Show warning with list of similar records
    Allow save but flag for review
    Create review task for data steward
  
  For Similar records:
    Show info message with suggestions
    Allow save, log similarity for future analysis
  
  Learn from user decisions:
    If user confirms "not a duplicate" 3+ times for similar pattern:
      Update duplicate detection rules to reduce false positives
    If user confirms "is a duplicate" that scored <95%:
      Strengthen detection criteria for this pattern`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">duplicate.build_search_criteria(entity_type, record)</code> - Build search</div>
                    <div>• <code className="bg-white px-1">search.fuzzy_match(field_a, field_b, algorithm)</code> - Fuzzy match</div>
                    <div>• <code className="bg-white px-1">similarity.calculate_score(record_a, record_b)</code> - Calculate similarity</div>
                    <div>• <code className="bg-white px-1">duplicate.categorize(similarity_score)</code> - Categorize duplicate</div>
                    <div>• <code className="bg-white px-1">ui.show_comparison(record_a, record_b)</code> - Show side-by-side</div>
                    <div>• <code className="bg-white px-1">merge.link_records(record_a, record_b)</code> - Link duplicates</div>
                  </div>
                </div>
              </div>

              {/* Automation 3 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Data Standardization Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> On save, before data is committed to database</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When record is being saved:
  Apply standardization transformations for each field:
    
    Text fields (names, descriptions):
      - Trim leading and trailing whitespace
      - Replace multiple spaces with single space
      - Remove special characters if not allowed
      - Fix common encoding issues (smart quotes, em dashes)
      - Standardize case if required (Title Case for names, UPPER for codes)
    
    Address fields:
      - Standardize street abbreviations (Street → St, Avenue → Ave)
      - Standardize directionals (North → N, South → S)
      - Uppercase state codes
      - Format postal codes by country standard
      - Parse into structured components (street, city, state, zip)
      - If US address: Validate against USPS database, correct if possible
    
    Phone numbers:
      - Strip all formatting characters
      - Add country code if missing (default to US +1)
      - Store in E.164 format: +1XXXXXXXXXX
      - Keep display format separate: (XXX) XXX-XXXX
    
    Email addresses:
      - Convert to lowercase
      - Trim whitespace
      - Remove duplicate dots in domain
      - Validate MX record exists for domain
    
    Currency amounts:
      - Round to appropriate decimal places (2 for USD)
      - Store as decimal type, not float
      - Validate not negative unless allowed
    
    Dates:
      - Convert all dates to ISO format: YYYY-MM-DD
      - Store in UTC timezone
      - Keep user's timezone separately for display
    
    Codes and IDs:
      - Convert to uppercase if alphanumeric codes
      - Remove special characters
      - Pad with leading zeros if fixed length
      - Validate against format pattern (e.g., XXX-XXXXX)
  
  Apply business-specific standardizations:
    Vendor names:
      - Remove legal suffixes for matching (Inc, LLC, Corp)
      - Store legal name in separate field
      - Create searchable "doing business as" name
    
    Product codes:
      - Standardize SKU format across divisions
      - Map legacy codes to new system codes
      - Maintain cross-reference table
    
    Account codes:
      - Pad to standard length
      - Validate against chart of accounts structure
      - Auto-assign department/division codes if missing
  
  Log all transformations for audit:
    Record: Original value → Standardized value
    Reason: Which rule was applied
    Timestamp: When transformation occurred
  
  If standardization changes value significantly:
    Flag for user review
    Show: "We standardized X to Y - is this correct?"`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">text.clean(string, rules)</code> - Clean text data</div>
                    <div>• <code className="bg-white px-1">address.standardize(address_obj, country)</code> - Standardize address</div>
                    <div>• <code className="bg-white px-1">address.validate_usps(address)</code> - Validate with USPS</div>
                    <div>• <code className="bg-white px-1">phone.format(phone_number, format_type)</code> - Format phone</div>
                    <div>• <code className="bg-white px-1">email.validate_mx(email)</code> - Check MX record</div>
                    <div>• <code className="bg-white px-1">transform.apply_rule(field, value, rule_id)</code> - Apply transformation</div>
                    <div>• <code className="bg-white px-1">audit.log_transformation(field, original, transformed)</code> - Log change</div>
                  </div>
                </div>
              </div>

              {/* Automation 4 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Cross-System Reference Validation Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After save, asynchronously validates external references</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When record with external references is saved:
  Queue for async validation (don't block save)
  
  For each external reference field:
    Determine reference type:
      - Tax ID (EIN, SSN, VAT): Validate with government database
      - Bank account: Validate routing number is real
      - Address: Validate deliverability with postal service
      - Credit card: Validate using Luhn algorithm
      - Website URL: Validate domain resolves and is reachable
      - Email: Validate MX records and optionally send verification
    
    Perform validation:
      If Tax ID (EIN):
        - Call IRS EIN validation API
        - Check format: XX-XXXXXXX
        - Validate checksum if applicable
        - Result: Valid, Invalid, or Unable to Verify
      
      If Bank Routing Number:
        - Check against ABA routing number database
        - Validate 9-digit format and checksum
        - Return bank name if valid
      
      If Address:
        - Call USPS Address Validation API
        - Check deliverability
        - Return corrected address if different
      
      If Credit Card:
        - Validate Luhn checksum
        - Identify card type (Visa, MC, Amex)
        - Check length matches card type
        - Do NOT validate if active (that requires transaction)
      
      If Website:
        - Validate URL format
        - Check DNS resolution
        - Attempt HTTPS connection
        - Verify SSL certificate is valid
      
      If Email:
        - Validate format
        - Check MX records exist
        - Optionally: Send verification code
  
  Record validation results:
    Status: Verified, Failed, Unable to Validate, Pending
    Last checked: Timestamp
    Next check: Schedule for re-validation
    Error details: If failed, why
  
  Handle validation failures:
    If critical field (Tax ID) fails validation:
      - Set record status to "Pending Verification"
      - Block transactions using this record
      - Create task for data steward to review
      - Send alert to record owner
    
    If non-critical field fails:
      - Log warning
      - Continue allowing record use
      - Flag for periodic review
  
  Schedule re-validation:
    Critical fields (Tax IDs): Validate annually
    Bank accounts: Validate quarterly  
    Addresses: Validate when used or annually
    Emails: Validate when used or if bounces
    Websites: Validate monthly
  
  Update data quality score based on validation results`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">external.validate_tax_id(tax_id, country)</code> - Validate with IRS/gov</div>
                    <div>• <code className="bg-white px-1">external.validate_routing_number(routing_num)</code> - Check ABA database</div>
                    <div>• <code className="bg-white px-1">external.validate_address_usps(address)</code> - USPS validation</div>
                    <div>• <code className="bg-white px-1">validation.luhn_check(card_number)</code> - Credit card checksum</div>
                    <div>• <code className="bg-white px-1">network.check_mx_records(email_domain)</code> - Check MX records</div>
                    <div>• <code className="bg-white px-1">network.validate_url(url)</code> - Check URL resolves</div>
                    <div>• <code className="bg-white px-1">queue.schedule_revalidation(record_id, field, interval)</code> - Schedule check</div>
                  </div>
                </div>
              </div>

              {/* Automation 5 */}
              <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">5. Data Quality Score Calculation Automation</h3>
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Triggers:</strong> After any data change, continuously in background</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">ENGLISH AS CODE:</div>
                  <pre className="text-xs overflow-x-auto font-mono">
{`When calculating data quality score for a record:
  Initialize score components:
    Completeness score = 0
    Accuracy score = 0
    Consistency score = 0
    Timeliness score = 0
    Uniqueness score = 0
  
  Calculate Completeness (0-100):
    Count required fields that are filled
    Count optional important fields that are filled
    Completeness = (filled required fields / total required) * 70 +
                   (filled optional fields / total optional) * 30
  
  Calculate Accuracy (0-100):
    Check validation status of each field:
      - Format valid: +10 points per field
      - External validation passed: +15 points per field
      - Failed validation: -20 points per field
      - Never validated: 0 points
    Normalize to 0-100 scale
  
  Calculate Consistency (0-100):
    Check for contradictory data:
      - State in address matches state in separate field
      - Country code matches phone country code
      - Currency matches customer country
      - Billing address consistent with shipping address
    Consistency = (passing checks / total checks) * 100
  
  Calculate Timeliness (0-100):
    Check how current the data is:
      - Last updated within 30 days: 100 points
      - Last updated 30-90 days: 80 points
      - Last updated 90-365 days: 60 points
      - Last updated >365 days: 40 points
      - Never updated: 20 points
    
    Check if pending re-validation:
      - If re-validation overdue: Reduce by 30 points
  
  Calculate Uniqueness (0-100):
    Check if duplicate exists:
      - No duplicates found: 100 points
      - Possible duplicate (flagged): 70 points
      - Confirmed duplicate (not merged): 30 points
  
  Calculate Overall Quality Score:
    Overall = (Completeness * 0.30 +
               Accuracy * 0.30 +
               Consistency * 0.20 +
               Timeliness * 0.10 +
               Uniqueness * 0.10)
  
  Categorize quality level:
    95-100: Excellent
    85-94: Good
    70-84: Fair
    50-69: Poor
    <50: Critical
  
  Store quality metrics with record:
    Overall score
    Component scores
    Last calculated timestamp
    Quality level category
    Issues found (list)
  
  Update aggregate quality metrics:
    Calculate average quality by entity type
    Track quality trends over time
    Identify entities with declining quality
  
  Trigger alerts if quality drops:
    If overall score drops >10 points: Alert owner
    If score drops below 70: Alert data steward
    If critical entity <50: Block usage, escalate`}
                  </pre>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Used:</strong>
                  <div className="mt-1 space-y-1">
                    <div>• <code className="bg-white px-1">quality.calculate_completeness(record, schema)</code> - Completeness score</div>
                    <div>• <code className="bg-white px-1">quality.calculate_accuracy(record, validations)</code> - Accuracy score</div>
                    <div>• <code className="bg-white px-1">quality.check_consistency(record, rules)</code> - Consistency checks</div>
                    <div>• <code className="bg-white px-1">quality.calculate_timeliness(last_updated)</code> - Timeliness score</div>
                    <div>• <code className="bg-white px-1">quality.calculate_overall(components, weights)</code> - Overall score</div>
                    <div>• <code className="bg-white px-1">metrics.update_aggregate(entity_type, score)</code> - Update aggregates</div>
                  </div>
                </div>
              </div>

              {/* Remaining Automations Summary */}
              <div className="bg-gray-100 p-4 rounded text-sm">
                <strong className="block mb-2">Automations 6-12:</strong>
                <ul className="mt-2 space-y-2 list-none">
                  <li><strong>6. Anomaly Detection</strong> - Statistical analysis to flag outliers and unusual patterns</li>
                  <li><strong>7. Batch Data Cleansing</strong> - Clean existing bad data using learned correction rules</li>
                  <li><strong>8. Data Enrichment</strong> - Auto-fill missing data from external sources (address from zip, company from domain)</li>
                  <li><strong>9. Validation Rule Learning</strong> - Learn validation patterns from good data, suggest new rules</li>
                  <li><strong>10. Data Quarantine</strong> - Isolate invalid data, prevent from being used until corrected</li>
                  <li><strong>11. Quality Trend Monitoring</strong> - Track quality metrics over time, alert on degradation</li>
                  <li><strong>12. Compliance Reporting</strong> - Generate data quality reports for audit and compliance</li>
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
                <p className="text-gray-600">5 specialized agents that handle data quality challenges</p>
              </div>
            </div>
            {expandedSection === 'agents' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'agents' && (
            <div className="p-6 border-t space-y-6">
              
              {/* Agent 1 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">1. Duplicate Resolution Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Investigates potential duplicates, determines if same entity, recommends merge or keep separate</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT PROMPT (Summary):</div>
                  <div className="text-xs space-y-2">
                    <p className="font-semibold">You are the Duplicate Resolution Agent for DataAccuracy.</p>
                    <p><strong>Your role:</strong> Investigate potential duplicate records by analyzing all available data points and determining whether two entities are actually the same or legitimately different.</p>
                    <p><strong>Investigation process:</strong></p>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Compare all identifying fields (name, tax ID, address, phone, email)</li>
                      <li>Analyze transaction history - do they interact with same parties?</li>
                      <li>Check timing - were they created around same time (suspicious) or years apart?</li>
                      <li>Look for distinguishing features - different locations, different contacts</li>
                      <li>Research external data - company registrations, public records</li>
                      <li>Calculate probability they're the same entity (0-100%)</li>
                      <li>Provide recommendation with clear reasoning</li>
                    </ol>
                    <p><strong>Your recommendations:</strong> "Definitely duplicate - merge", "Likely duplicate - suggest merge", "Possibly related - link but don't merge", "Different entities - keep separate"</p>
                  </div>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">compare.all_fields(record_a, record_b)</code></div>
                    <div>• <code className="bg-white px-1">transactions.get_history(entity_id)</code></div>
                    <div>• <code className="bg-white px-1">external.search_company(name, state)</code></div>
                    <div>• <code className="bg-white px-1">similarity.calculate_probability()</code></div>
                    <div>• <code className="bg-white px-1">merge.preview(record_a, record_b)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 2 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">2. Data Correction Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Suggests corrections for invalid or suspicious data based on context and patterns</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Identify common data entry errors (typos, transpositions, wrong formats)</li>
                    <li>Suggest corrections based on context (state should be CA not C, phone area code matches city)</li>
                    <li>Use external data sources to validate and correct (address lookup, company name standardization)</li>
                    <li>Learn correction patterns from user confirmations</li>
                    <li>Propose bulk corrections for similar issues across multiple records</li>
                    <li>Explain reasoning: "Changed ST to Street based on USPS standards"</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">errors.identify_type(field, value)</code></div>
                    <div>• <code className="bg-white px-1">corrections.suggest(error_type, context)</code></div>
                    <div>• <code className="bg-white px-1">external.lookup_correct_value()</code></div>
                    <div>• <code className="bg-white px-1">patterns.learn_correction(before, after)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 3 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">3. Missing Data Research Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Finds missing required data by searching internal systems and external sources</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Search across all internal systems for missing information</li>
                    <li>Check transaction history, emails, documents for clues</li>
                    <li>Use external APIs to enrich data (company lookup by domain, address by coordinates)</li>
                    <li>Make intelligent inferences (if city and state known, suggest likely zip codes)</li>
                    <li>Propose confidence level for found data</li>
                    <li>When can't find data, suggest who to contact or where to look</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">search.across_systems(entity, field)</code></div>
                    <div>• <code className="bg-white px-1">transactions.extract_data(field_type)</code></div>
                    <div>• <code className="bg-white px-1">external.enrich_company(name)</code></div>
                    <div>• <code className="bg-white px-1">inference.suggest_value(context)</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 4 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">4. Anomaly Investigation Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Investigates unusual data patterns to determine if error or legitimate outlier</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Analyze statistical outliers (values far from mean/median)</li>
                    <li>Investigate unusual patterns (customer in Alaska with Florida phone)</li>
                    <li>Check for data entry errors that create outliers (extra zero, decimal in wrong place)</li>
                    <li>Research context to determine if anomaly is legitimate (one-time large order vs. data error)</li>
                    <li>Calculate probability of error vs. legitimate outlier</li>
                    <li>Recommend: "Correct to likely value", "Flag for review", or "Accept as valid"</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">statistics.detect_outliers(dataset)</code></div>
                    <div>• <code className="bg-white px-1">patterns.check_unusual(record)</code></div>
                    <div>• <code className="bg-white px-1">context.research_anomaly(field, value)</code></div>
                    <div>• <code className="bg-white px-1">probability.calculate_error_likelihood()</code></div>
                  </div>
                </div>
              </div>

              {/* Agent 5 */}
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">5. Data Quality Assistant Agent</h3>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Role:</strong> Answers questions, provides guidance, explains quality scores</p>
                
                <div className="bg-white p-3 rounded mb-3">
                  <div className="text-xs text-gray-500 mb-2">AGENT CAPABILITIES:</div>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Explain why data quality score is low and how to improve it</li>
                    <li>Guide users through data cleansing workflows</li>
                    <li>Answer questions: "Why was this flagged?" "How do I fix this?"</li>
                    <li>Provide tips for preventing data quality issues</li>
                    <li>Show quality trends and improvement opportunities</li>
                  </ul>
                </div>

                <div className="text-xs bg-gray-50 p-3 rounded">
                  <strong>Tools Available:</strong>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    <div>• <code className="bg-white px-1">quality.explain_score(record_id)</code></div>
                    <div>• <code className="bg-white px-1">guidance.get_improvement_steps()</code></div>
                    <div>• <code className="bg-white px-1">help.search_knowledge_base(question)</code></div>
                    <div>• <code className="bg-white px-1">trends.get_quality_metrics(period)</code></div>
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
                <p className="text-gray-600">7 interactive apps for managing data quality</p>
              </div>
            </div>
            {expandedSection === 'apps' ? <ChevronDown /> : <ChevronRight />}
          </button>
          
          {expandedSection === 'apps' && (
            <div className="p-6 border-t space-y-6">
              
              {/* App 1 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">1. Data Quality Dashboard</h3>
                <p className="text-sm text-gray-700 mb-3">Real-time overview of data quality across all entities</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Overall quality score gauge (0-100)</div>
                      <div className="bg-white p-2 rounded">• Quality by entity type (vendors, customers, products)</div>
                      <div className="bg-white p-2 rounded">• Quality trend line (last 6 months)</div>
                      <div className="bg-white p-2 rounded">• Issue breakdown pie chart (duplicates, incomplete, invalid)</div>
                      <div className="bg-white p-2 rounded">• Top 10 problem areas (entities with lowest scores)</div>
                      <div className="bg-white p-2 rounded">• Quality heat map by department/division</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">CLICK</span>
                        <span>Click entity type → Drill into details</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">FILTER</span>
                        <span>Filter: All/Critical/Poor quality only</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Run Quality Scan" → Recalculate all</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Export Report" → PDF/Excel</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>Ask Assistant about quality</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 2 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">2. Smart Data Entry Forms</h3>
                <p className="text-sm text-gray-700 mb-3">Data entry with real-time validation and intelligent suggestions</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Form fields with inline validation status</div>
                      <div className="bg-white p-2 rounded">• Required field indicators</div>
                      <div className="bg-white p-2 rounded">• Error messages and suggestions</div>
                      <div className="bg-white p-2 rounded">• Duplicate warning panel</div>
                      <div className="bg-white p-2 rounded">• Quality score preview (updates as you type)</div>
                      <div className="bg-white p-2 rounded">• Field help tooltips</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">INPUT</span>
                        <span>Real-time validation as you type</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Apply Suggestion" → Use agent's correction</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Check for Duplicates" → Manual check</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Save" → Blocked if critical errors</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-purple-100 px-1 rounded mr-1 text-[10px]">CHAT</span>
                        <span>"Why is this invalid?" → Ask agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 3 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">3. Duplicate Management App</h3>
                <p className="text-sm text-gray-700 mb-3">Review, merge, and resolve duplicate records</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Potential duplicates list with similarity scores</div>
                      <div className="bg-white p-2 rounded">• Side-by-side comparison view</div>
                      <div className="bg-white p-2 rounded">• Matching criteria indicators (what matched)</div>
                      <div className="bg-white p-2 rounded">• Merge preview (combined record)</div>
                      <div className="bg-white p-2 rounded">• Transaction impact analysis</div>
                      <div className="bg-white p-2 rounded">• Agent recommendation badge</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Ask Agent to Investigate" → Get analysis</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Merge Records" → Combine into one</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Link as Related" → Don't merge but link</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-red-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Mark as Different" → Not duplicate</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">SELECT</span>
                        <span>Choose master record for merge</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App 4 */}
              <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded">
                <h3 className="font-bold text-lg mb-2">4. Bulk Data Cleansing App</h3>
                <p className="text-sm text-gray-700 mb-3">Clean multiple records at once using learned rules</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📊 Visualizations:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded">• Records needing cleansing (table with issues)</div>
                      <div className="bg-white p-2 rounded">• Preview of proposed changes</div>
                      <div className="bg-white p-2 rounded">• Impact analysis (records affected)</div>
                      <div className="bg-white p-2 rounded">• Cleansing rule builder</div>
                      <div className="bg-white p-2 rounded">• Progress bar during batch processing</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Interactions:</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-yellow-100 px-1 rounded mr-1 text-[10px]">FILTER</span>
                        <span>Filter by issue type, entity, date range</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Suggest Corrections" → Agent proposes fixes</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-blue-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Preview Changes" → See before/after</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-green-100 px-1 rounded mr-1 text-[10px]">BTN</span>
                        <span>"Apply to All" → Bulk update</span>
                      </div>
                      <div className="bg-white p-2 rounded flex items-center">
                        <span className="bg-orange-100 px-1 rounded mr-1 text-[10px]">UNDO</span>
                        <span>"Rollback" → Undo batch changes</span>
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
                    <strong>5. Validation Rule Manager</strong> - Create and manage validation rules in English
                    <div className="text-xs text-gray-600 ml-4">Viz: Rule list, performance metrics, test results | Interact: English rule editor, test rules, activate/deactivate</div>
                  </div>
                  <div>
                    <strong>6. Quality Trends & Analytics</strong> - Historical analysis and improvement tracking
                    <div className="text-xs text-gray-600 ml-4">Viz: Trend charts, improvement metrics, problem areas | Interact: Date range selector, drill-downs, export reports</div>
                  </div>
                  <div>
                    <strong>7. Data Quarantine Review</strong> - Review and fix quarantined records
                    <div className="text-xs text-gray-600 ml-4">Viz: Quarantined records list, issue details, correction suggestions | Interact: Fix and release, bulk operations, delegate to steward</div>
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

export default DataAccuracySpec;