import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import TableView from './components/TableView'
import FormView from './components/FormView'
import './App.css'

type ViewType = 'dashboard' | 'table' | 'form'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard')

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'table':
        return <TableView />
      case 'form':
        return <FormView />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 overflow-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

export default App
