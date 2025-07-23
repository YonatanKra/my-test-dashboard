import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TableView from '../TableView'

describe('TableView', () => {
  it('renders table title', () => {
    render(<TableView />)
    
    expect(screen.getByText('Users Table')).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(<TableView />)
    
    const searchInput = screen.getByPlaceholderText('Search users...')
    expect(searchInput).toBeInTheDocument()
  })

  it('renders user data in table', () => {
    render(<TableView />)
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
  })

  it('renders user status badges', () => {
    render(<TableView />)
    
    const activeStatuses = screen.getAllByText('Active')
    const inactiveStatuses = screen.getAllByText('Inactive')
    
    expect(activeStatuses.length).toBeGreaterThan(0)
    expect(inactiveStatuses.length).toBeGreaterThan(0)
  })

  it('renders action buttons for each user', () => {
    const { container } = render(<TableView />)
    
    // Check for action button icons (Eye, Edit, Trash2, MoreVertical)
    const actionButtons = container.querySelectorAll('button svg')
    expect(actionButtons.length).toBeGreaterThan(10) // Multiple users with multiple action buttons each
  })

  it('filters users based on search term', () => {
    render(<TableView />)
    
    const searchInput = screen.getByPlaceholderText('Search users...')
    fireEvent.change(searchInput, { target: { value: 'John' } })
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument()
  })

  it('shows all users when search is cleared', () => {
    render(<TableView />)
    
    const searchInput = screen.getByPlaceholderText('Search users...')
    fireEvent.change(searchInput, { target: { value: 'John' } })
    fireEvent.change(searchInput, { target: { value: '' } })
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
  })

  it('renders table headers', () => {
    render(<TableView />)
    
    // Use more specific queries for table headers
    expect(screen.getByRole('columnheader', { name: /User/ })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /Role/ })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /Status/ })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /Join Date/ })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /Actions/ })).toBeInTheDocument()
  })

  it('handles sort functionality', () => {
    render(<TableView />)
    
    const userHeader = screen.getByRole('columnheader', { name: /User/ })
    fireEvent.click(userHeader)
    
    // The table should still render (testing that sorting doesn't break the component)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
  })

  it('renders add new user button', () => {
    render(<TableView />)
    
    expect(screen.getByText('Add User')).toBeInTheDocument()
  })

  it('displays user count information', () => {
    render(<TableView />)
    
    // Should show some indication of user count or pagination
    expect(screen.getByText(/Showing/)).toBeInTheDocument()
  })
})
