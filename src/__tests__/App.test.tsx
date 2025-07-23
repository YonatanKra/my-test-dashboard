import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('should render the dashboard by default', () => {
    render(<App />)
    
    expect(screen.getByText('Test Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Dashboard Overview')).toBeInTheDocument()
  })

  it('should switch to table view when table menu item is clicked', () => {
    render(<App />)
    
    fireEvent.click(screen.getByText('Table View'))
    expect(screen.getByText('Users Table')).toBeInTheDocument()
  })

  it('should switch to form view when form menu item is clicked', () => {
    render(<App />)
    
    fireEvent.click(screen.getByText('Form'))
    expect(screen.getByText('User Registration Form')).toBeInTheDocument()
  })
})
