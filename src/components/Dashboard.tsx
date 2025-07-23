import { Users, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react'

interface CardProps {
  title: string
  value: string
  change: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  changeType: 'positive' | 'negative'
  color: string
}

const Card = ({ title, value, change, icon: Icon, changeType, color }: CardProps) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex items-center mb-4">
        <div className={`inline-flex items-center justify-center w-10 h-10 ${color} rounded-lg mr-3`}>
          <Icon size={20} className="text-white" />
        </div>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
          changeType === 'positive' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {change}
        </span>
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {value}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {title}
      </p>
    </div>
  )
}

const Dashboard = () => {
  const cards = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      icon: Users,
      changeType: 'positive' as const,
      color: 'bg-blue-500',
    },
    {
      title: 'Orders',
      value: '567',
      change: '+8%',
      icon: ShoppingBag,
      changeType: 'positive' as const,
      color: 'bg-emerald-500',
    },
    {
      title: 'Revenue',
      value: '$12,345',
      change: '+15%',
      icon: DollarSign,
      changeType: 'positive' as const,
      color: 'bg-purple-500',
    },
    {
      title: 'Growth',
      value: '23%',
      change: '-2%',
      icon: TrendingUp,
      changeType: 'negative' as const,
      color: 'bg-orange-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">New user registered</span>
                </div>
                <span className="text-xs text-gray-500">2 min ago</span>
              </div>
              <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Order #1234 completed</span>
                </div>
                <span className="text-xs text-gray-500">5 min ago</span>
              </div>
              <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Payment received</span>
                </div>
                <span className="text-xs text-gray-500">10 min ago</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
              <h2 className="text-lg font-semibold text-gray-900">Quick Stats</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Active Sessions</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">145</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Page Views</span>
                <span className="font-semibold text-gray-900">2,453</span>
              </div>
              <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Bounce Rate</span>
                <span className="font-semibold text-gray-900">34%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
