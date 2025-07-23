import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Sidebar from '../Sidebar'

describe('Sidebar', () => {
  const mockOnViewChange = vi.fn()
  
  beforeEach(() => {
    mockOnViewChange.mockClear()
  })

  it('renders the sidebar with correct title', () => {
    render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    expect(screen.getByText('Test Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Analytics & Insights')).toBeInTheDocument()
  })

  it('renders all menu items with icons', () => {
    render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Table View')).toBeInTheDocument()
    expect(screen.getByText('Form')).toBeInTheDocument()
  })

  it('highlights the current view correctly', () => {
    render(<Sidebar currentView="table" onViewChange={mockOnViewChange} />)
    
    const tableButton = screen.getByText('Table View').closest('button')
    const dashboardButton = screen.getByText('Dashboard').closest('button')
    
    expect(tableButton).toHaveClass('bg-white/10', 'text-white')
    expect(dashboardButton).toHaveClass('text-slate-300')
  })

  it('calls onViewChange when menu items are clicked', () => {
    render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    fireEvent.click(screen.getByText('Table View'))
    expect(mockOnViewChange).toHaveBeenCalledWith('table')
    
    fireEvent.click(screen.getByText('Form'))
    expect(mockOnViewChange).toHaveBeenCalledWith('form')
  })

  it('renders with proper accessibility attributes', () => {
    render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    const menuButtons = screen.getAllByRole('button')
    expect(menuButtons).toHaveLength(3)
    
    menuButtons.forEach(button => {
      expect(button).toBeInTheDocument()
    })
  })

  it('displays icons for each menu item', () => {
    const { container } = render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    const svgElements = container.querySelectorAll('svg')
    expect(svgElements.length).toBeGreaterThanOrEqual(3)
  })

  it('shows correct styling for active state', () => {
    render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    const dashboardButton = screen.getByText('Dashboard').closest('button')
    expect(dashboardButton).toHaveClass('bg-white/10', 'text-white', 'shadow-lg')
  })

  it('shows correct styling for inactive states', () => {
    render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    const tableButton = screen.getByText('Table View').closest('button')
    const formButton = screen.getByText('Form').closest('button')
    
    expect(tableButton).toHaveClass('text-slate-300')
    expect(formButton).toHaveClass('text-slate-300')
  })

  it('displays admin user section at bottom', () => {
    render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    expect(screen.getByText('Admin User')).toBeInTheDocument()
    expect(screen.getByText('Online')).toBeInTheDocument()
  })

  it('shows active indicators for current view', () => {
    const { container } = render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    const activeIndicators = container.querySelectorAll('.animate-pulse')
    expect(activeIndicators.length).toBeGreaterThan(0)
  })
})
