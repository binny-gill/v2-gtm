import Link from 'next/link'
import { Book, FileText, Zap, Target } from 'lucide-react'

export default function Home() {
  const pages = [
    {
      title: 'All App One-Pagers',
      description: 'Browse all 10 prebuilt app one-pagers',
      href: '/all-app-onepagers',
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Marketing Guide',
      description: 'Complete marketing strategy and messaging guide',
      href: '/marketing-guide',
      icon: Book,
      color: 'green'
    },
    {
      title: 'Three Capabilities',
      description: 'Automations, Agents, and Apps explained',
      href: '/three-capabilities',
      icon: Zap,
      color: 'purple'
    },
    {
      title: 'FastClose Spec',
      description: 'FastClose app specification',
      href: '/fastclose-spec',
      icon: Target,
      color: 'red'
    },
    {
      title: 'AutoReconcile Spec',
      description: 'AutoReconcile app specification',
      href: '/autoreconcile-spec',
      icon: Target,
      color: 'orange'
    },
    {
      title: 'BudgetWatch Spec',
      description: 'BudgetWatch app specification',
      href: '/budgetwatch-spec',
      icon: Target,
      color: 'yellow'
    },
    {
      title: 'CashCollector Spec',
      description: 'CashCollector app specification',
      href: '/cashcollector-spec',
      icon: Target,
      color: 'teal'
    },
    {
      title: 'CashForecaster Spec',
      description: 'CashForecaster app specification',
      href: '/cashforecaster-spec',
      icon: Target,
      color: 'cyan'
    },
    {
      title: 'DataAccuracy Spec',
      description: 'DataAccuracy app specification',
      href: '/dataaccuracy-spec',
      icon: Target,
      color: 'indigo'
    },
    {
      title: 'FraudWatch Spec',
      description: 'FraudWatch app specification',
      href: '/fraudwatch-spec',
      icon: Target,
      color: 'pink'
    },
    {
      title: 'JournalGuard Spec',
      description: 'JournalGuard app specification',
      href: '/journalguard-spec',
      icon: Target,
      color: 'rose'
    },
    {
      title: 'PolicyGuard Spec',
      description: 'PolicyGuard app specification',
      href: '/policyguard-spec',
      icon: Target,
      color: 'amber'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            FinanceOS GTM Materials
          </h1>
          <p className="text-xl text-gray-600">
            Marketing and product materials for FinanceOS platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => {
            const Icon = page.icon
            const colorClasses: Record<string, { bg: string; text: string }> = {
              blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
              green: { bg: 'bg-green-100', text: 'text-green-600' },
              purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
              red: { bg: 'bg-red-100', text: 'text-red-600' },
              orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
              yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
              teal: { bg: 'bg-teal-100', text: 'text-teal-600' },
              cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600' },
              indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
              pink: { bg: 'bg-pink-100', text: 'text-pink-600' },
              rose: { bg: 'bg-rose-100', text: 'text-rose-600' },
              amber: { bg: 'bg-amber-100', text: 'text-amber-600' },
            }
            const colors = colorClasses[page.color] || colorClasses.blue
            return (
              <Link
                key={page.href}
                href={page.href}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-6 border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-start mb-4">
                  <div className={`${colors.bg} p-3 rounded-lg mr-4`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {page.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {page.description}
                    </p>
                  </div>
                </div>
                <div className="text-blue-600 text-sm font-semibold mt-4">
                  View →
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

