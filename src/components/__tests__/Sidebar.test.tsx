import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Sidebar from '../Sidebar'

describe('Sidebar', () => {
  const mockOnViewChange = vi.fn()
  
  beforeEach(() => {
    mockOnViewChange.mockClear()
  })

  // Static UI elements that don't depend on API props
  describe('static UI elements', () => {
    it('should render the sidebar with correct title and branding', () => {
      render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
      
      expect(screen.getByText('Test Dashboard')).toBeInTheDocument()
      expect(screen.getByText('Analytics & Insights')).toBeInTheDocument()
    })

    it('should render all configured menu items', () => {
      render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
      
      expect(screen.getByText('Dashboard')).toBeInTheDocument()
      expect(screen.getByText('Table View')).toBeInTheDocument()
      expect(screen.getByText('Form')).toBeInTheDocument()
    })

    it('should display icons for each menu item', () => {
      const { container } = render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
      
      const svgElements = container.querySelectorAll('svg')
      expect(svgElements.length).toBeGreaterThanOrEqual(3)
    })

    it('should display admin user section at bottom', () => {
      render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
      
      expect(screen.getByText('Admin User')).toBeInTheDocument()
      expect(screen.getByText('Online')).toBeInTheDocument()
    })

    it('should render with proper accessibility attributes', () => {
      render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
      
      const menuButtons = screen.getAllByRole('button')
      expect(menuButtons).toHaveLength(3)
      
      menuButtons.forEach(button => {
        expect(button).toBeInTheDocument()
      })
    })
  })

  // Tests for currentView API prop
  describe('currentView prop', () => {
    it('should highlight the clicked item only', () => {
      render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
      
      const dashboardButton = screen.getByText('Dashboard').closest('button')
      const tableButton = screen.getByText('Table View').closest('button')
      const formButton = screen.getByText('Form').closest('button')
      
      expect(dashboardButton).toHaveClass('bg-white/10', 'text-white', 'shadow-lg')
      expect(tableButton).toHaveClass('text-slate-300')
      expect(formButton).toHaveClass('text-slate-300')
    });

    it('should show pulsing indicator only on the active view button', () => {
      render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
      
      const dashboardButton = screen.getByText('Dashboard').closest('button')
      const tableButton = screen.getByText('Table View').closest('button')
      const formButton = screen.getByText('Form').closest('button')
      
      const dashboardPulse = dashboardButton?.querySelector('.animate-pulse')
      const tablePulse = tableButton?.querySelector('.animate-pulse')
      const formPulse = formButton?.querySelector('.animate-pulse')
      
      expect(dashboardPulse).toBeInTheDocument() // Active view has pulse
      expect(tablePulse).not.toBeInTheDocument() // Inactive views don't have pulse
      expect(formPulse).not.toBeInTheDocument()
    });

    it('should apply correct gradient colors for active state', () => {
      render(<Sidebar currentView="table" onViewChange={mockOnViewChange} />)
      
      const tableButton = screen.getByText('Table View').closest('button')
      const gradientElement = tableButton?.querySelector('.bg-gradient-to-r')
      
      expect(gradientElement).toBeInTheDocument()
    })
  });

  // Tests for onViewChange API prop
  describe('onViewChange callback', () => {
    it('should call onViewChange with the clicked view name', () => {
      render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
      
      fireEvent.click(screen.getByText('Table View'))
      fireEvent.click(screen.getByText('Form'))
      fireEvent.click(screen.getByText('Dashboard'))
      
      expect(mockOnViewChange).toHaveBeenCalledTimes(3)
      expect(mockOnViewChange).toHaveBeenNthCalledWith(1, 'table')
      expect(mockOnViewChange).toHaveBeenNthCalledWith(2, 'form')
      expect(mockOnViewChange).toHaveBeenNthCalledWith(3, 'dashboard')
    })

    it('should call onViewChange when Enter key is pressed on focused button', async () => {
      const user = userEvent.setup()
      render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
      
      const tableButton = screen.getByText('Table View').closest('button')!
      
      // Focus the button and press Enter (keyboard-only interaction)
      tableButton.focus()
      await user.keyboard('{Enter}')
      
      expect(mockOnViewChange).toHaveBeenCalledWith('table')
    })

    it('should call onViewChange when Space key is pressed on focused button', async () => {
      const user = userEvent.setup()
      render(<Sidebar currentView="dashboard" onViewChange={mockOnViewChange} />)
      
      const formButton = screen.getByText('Form').closest('button')!
      
      // Tab to the button and press Space
      formButton.focus()
      await user.keyboard(' ')
      
      expect(mockOnViewChange).toHaveBeenCalledWith('form')
    })
  })
})
