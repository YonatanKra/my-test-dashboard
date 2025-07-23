<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# The Test Dashboard Project

This is a React TypeScript dashboard application built with Vite. The project includes:

## Tech Stack
- React 19 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Vitest for testing
- Lucide React for icons

## Project Structure
- **Dashboard**: Main overview with cards showing metrics and recent activity
- **Table View**: Data table with search functionality and action buttons
- **Form View**: User registration form with validation and submission handling
- **Sidebar**: Navigation component for switching between views

## Key Components
- `App.tsx`: Main application component with view routing
- `Sidebar.tsx`: Navigation sidebar with menu items
- `Dashboard.tsx`: Dashboard overview with metric cards
- `TableView.tsx`: Data table with search and actions
- `FormView.tsx`: User registration form

## Testing
- Use Vitest for unit testing
- Testing utilities from @testing-library/react
- Test files are located in `__tests__` folders

## Styling Guidelines
- Use Tailwind CSS classes for styling
- Follow responsive design principles
- Use consistent color schemes (blue for primary, gray for secondary)
- Maintain proper spacing and typography scales
