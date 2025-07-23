import { LayoutDashboard, Table, FileText, Sparkles } from 'lucide-react'
import clsx from 'clsx'

type ViewType = 'dashboard' | 'table' | 'form'

interface SidebarProps {
  currentView: ViewType
  onViewChange: (view: ViewType) => void
}

const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard' as ViewType, label: 'Dashboard', icon: LayoutDashboard, color: 'from-blue-500 to-blue-600' },
    { id: 'table' as ViewType, label: 'Table View', icon: Table, color: 'from-emerald-500 to-emerald-600' },
    { id: 'form' as ViewType, label: 'Form', icon: FileText, color: 'from-purple-500 to-purple-600' },
  ]

  return (
    <div className="w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 p-6 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Test Dashboard</h1>
            <p className="text-xs text-slate-400">Analytics & Insights</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-8 px-4">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">
          Navigation
        </div>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = currentView === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={clsx(
                    'w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-300 group relative overflow-hidden',
                    isActive
                      ? 'bg-white/10 text-white shadow-lg backdrop-blur-sm border border-white/20'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 rounded-xl`}></div>
                  )}
                  <div className={clsx(
                    'relative z-10 p-2 rounded-lg transition-all duration-300',
                    isActive 
                      ? `bg-gradient-to-br ${item.color} shadow-lg` 
                      : 'bg-slate-700/50 group-hover:bg-slate-600/50'
                  )}>
                    <Icon size={18} className={clsx(
                      'transition-colors duration-300',
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    )} />
                  </div>
                  <span className={clsx(
                    'relative z-10 font-medium transition-colors duration-300',
                    isActive ? 'text-white' : 'group-hover:text-white'
                  )}>
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="absolute right-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-slate-400">Online</p>
            </div>
            <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
