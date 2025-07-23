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
    
    expect(screen.getByText('The Test Dashboard')).toBeInTheDocument()
  })

  it('renders all menu items', () => {
    render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Table View')).toBeInTheDocument()
    expect(screen.getByText('Form')).toBeInTheDocument()
  })

  it('highlights the current view', () => {
    render(<Sidebar currentView="table" onViewChange={mockOnViewChange} />)
    
    const tableButton = screen.getByText('Table View').closest('button')
    expect(tableButton).toHaveClass('bg-blue-100', 'text-blue-700')
  })

  it('calls onViewChange when menu item is clicked', () => {
    render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
    
    fireEvent.click(screen.getByText('Form'))
    expect(mockOnViewChange).toHaveBeenCalledWith('form')
  })
})
