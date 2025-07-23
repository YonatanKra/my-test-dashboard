import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders the dashboard by default', () => {
    render(<App />)
    
    expect(screen.getByText('Test Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Dashboard Overview')).toBeInTheDocument()
  })

  it('switches to table view when table menu item is clicked', () => {
    render(<App />)
    
    fireEvent.click(screen.getByText('Table View'))
    expect(screen.getByText('Users Table')).toBeInTheDocument()
  })

  it('switches to form view when form menu item is clicked', () => {
    render(<App />)
    
    fireEvent.click(screen.getByText('Form'))
    expect(screen.getByText('User Registration Form')).toBeInTheDocument()
  })

  it('highlights the active menu item', () => {
    render(<App />)
    
    const dashboardButton = screen.getByText('Dashboard').closest('button')
    expect(dashboardButton).toHaveClass('bg-white/10', 'text-white')
  })
})
