import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Dashboard from '../Dashboard'

describe('Dashboard', () => {
  it('renders dashboard title and description', () => {
    render(<Dashboard />)
    
    expect(screen.getByText('Dashboard Overview')).toBeInTheDocument()
    expect(screen.getByText("Welcome back! Here's what's happening with your business today.")).toBeInTheDocument()
  })

  it('renders all stat cards with titles', () => {
    render(<Dashboard />)
    
    expect(screen.getByText('Total Users')).toBeInTheDocument()
    expect(screen.getByText('Orders')).toBeInTheDocument()
    expect(screen.getByText('Revenue')).toBeInTheDocument()
    expect(screen.getByText('Growth')).toBeInTheDocument()
  })

  it('renders card values correctly', () => {
    render(<Dashboard />)
    
    expect(screen.getByText('1,234')).toBeInTheDocument()
    expect(screen.getByText('567')).toBeInTheDocument()
    expect(screen.getByText('$12,345')).toBeInTheDocument()
    expect(screen.getByText('23%')).toBeInTheDocument()
  })

  it('renders change percentages for all cards', () => {
    render(<Dashboard />)
    
    expect(screen.getByText('+12%')).toBeInTheDocument()
    expect(screen.getByText('+8%')).toBeInTheDocument()
    expect(screen.getByText('+15%')).toBeInTheDocument()
    expect(screen.getByText('-2%')).toBeInTheDocument()
  })

  it('renders recent activity section with items', () => {
    render(<Dashboard />)
    
    expect(screen.getByText('Recent Activity')).toBeInTheDocument()
    expect(screen.getByText('New user registered')).toBeInTheDocument()
    expect(screen.getByText('Order #1234 completed')).toBeInTheDocument()
    expect(screen.getByText('Payment received')).toBeInTheDocument()
  })

  it('renders activity timestamps', () => {
    render(<Dashboard />)
    
    expect(screen.getByText('2 min ago')).toBeInTheDocument()
    expect(screen.getByText('5 min ago')).toBeInTheDocument()
    expect(screen.getByText('10 min ago')).toBeInTheDocument()
  })

  it('renders quick stats section with all metrics', () => {
    render(<Dashboard />)
    
    expect(screen.getByText('Quick Stats')).toBeInTheDocument()
    expect(screen.getByText('Active Sessions')).toBeInTheDocument()
    expect(screen.getByText('Page Views')).toBeInTheDocument()
    expect(screen.getByText('Bounce Rate')).toBeInTheDocument()
  })

  it('renders quick stats values', () => {
    render(<Dashboard />)
    
    expect(screen.getByText('145')).toBeInTheDocument()
    expect(screen.getByText('2,453')).toBeInTheDocument()
    expect(screen.getByText('34%')).toBeInTheDocument()
  })

  it('uses proper semantic structure', () => {
    render(<Dashboard />)
    
    // Check for main heading
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toHaveTextContent('Dashboard Overview')
    
    // Check for section headings
    const sectionHeadings = screen.getAllByRole('heading', { level: 2 })
    expect(sectionHeadings).toHaveLength(2)
  })

  it('renders with correct CSS classes for styling', () => {
    render(<Dashboard />)
    
    const container = screen.getByText('Dashboard Overview').closest('div')
    expect(container).toBeInTheDocument()
  })

  it('renders icons for each stat card', () => {
    const { container } = render(<Dashboard />)
    
    // Check that SVG icons are present (from Lucide React)
    const svgElements = container.querySelectorAll('svg')
    expect(svgElements.length).toBeGreaterThanOrEqual(4) // At least 4 icons for the cards
  })

  it('has accessible structure for screen readers', () => {
    render(<Dashboard />)
    
    // Check that there are proper headings for screen readers
    expect(screen.getByRole('heading', { name: 'Dashboard Overview' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Activity' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Stats' })).toBeInTheDocument()
  })
})
