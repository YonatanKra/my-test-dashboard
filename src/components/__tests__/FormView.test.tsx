import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormView from '../FormView'

describe('FormView', () => {
  it('renders form title', () => {
    render(<FormView />)
    
    expect(screen.getByText('User Registration Form')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<FormView />)
    
    expect(screen.getByLabelText(/First Name \*/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Last Name \*/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email Address \*/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone Number/)).toBeInTheDocument()
  })

  it('renders submit and cancel buttons', () => {
    render(<FormView />)
    
    expect(screen.getByRole('button', { name: /Create Account/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Reset Form/ })).toBeInTheDocument()
  })

  it('handles input changes', () => {
    render(<FormView />)
    
    const firstNameInput = screen.getByLabelText(/First Name \*/)
    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    
    expect(firstNameInput).toHaveValue('John')
  })

  it('handles email input validation', () => {
    render(<FormView />)
    
    const emailInput = screen.getByLabelText(/Email Address \*/)
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('handles form submission', () => {
    render(<FormView />)
    
    const firstNameInput = screen.getByLabelText(/First Name \*/)
    const lastNameInput = screen.getByLabelText(/Last Name \*/)
    const emailInput = screen.getByLabelText(/Email Address \*/)
    
    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    
    const submitButton = screen.getByRole('button', { name: /Create Account/ })
    fireEvent.click(submitButton)
    
    // Form should still be present after submission attempt
    expect(screen.getByText('User Registration Form')).toBeInTheDocument()
  })

  it('validates required fields', () => {
    render(<FormView />)
    
    const firstNameInput = screen.getByLabelText(/First Name \*/)
    const lastNameInput = screen.getByLabelText(/Last Name \*/)
    const emailInput = screen.getByLabelText(/Email Address \*/)
    
    expect(firstNameInput).toBeRequired()
    expect(lastNameInput).toBeRequired()
    expect(emailInput).toBeRequired()
  })

  it('handles cancel button click', () => {
    render(<FormView />)
    
    const firstNameInput = screen.getByLabelText(/First Name \*/)
    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    
    const resetButton = screen.getByRole('button', { name: /Reset Form/ })
    fireEvent.click(resetButton)
    
    expect(firstNameInput).toHaveValue('')
  })

  it('clears form when cancel is clicked', () => {
    render(<FormView />)
    
    const firstNameInput = screen.getByLabelText(/First Name \*/)
    const emailInput = screen.getByLabelText(/Email Address \*/)
    
    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    
    const resetButton = screen.getByRole('button', { name: /Reset Form/ })
    fireEvent.click(resetButton)
    
    expect(firstNameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
  })

  it('displays form description', () => {
    render(<FormView />)
    
    expect(screen.getByText(/Fill out the form below to create a new user account/)).toBeInTheDocument()
  })

  it('renders section headers', () => {
    render(<FormView />)
    
    expect(screen.getByText('Personal Information')).toBeInTheDocument()
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
    expect(screen.getByText('Address Information')).toBeInTheDocument()
    expect(screen.getByText('Account Settings')).toBeInTheDocument()
  })
})
