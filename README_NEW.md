# The Test Dashboard

A modern React TypeScript dashboard application built with Vite, featuring a responsive design with multiple views and comprehensive testing.

## Features

- **Dashboard Overview**: Interactive cards showing key metrics and recent activity
- **Data Table**: Searchable user table with action buttons
- **Registration Form**: Complete user registration form with validation
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Testing Suite**: Comprehensive tests using Vitest and Testing Library

## Tech Stack

- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for modern, responsive styling
- **Vitest** for unit testing
- **Lucide React** for beautiful icons
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-test-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/           # React components
│   ├── Dashboard.tsx    # Main dashboard with metrics cards
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── TableView.tsx    # Data table with search
│   ├── FormView.tsx     # User registration form
│   └── __tests__/       # Component tests
├── test/                # Test configuration
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## Component Overview

### Dashboard
- Displays key metrics in card format
- Shows recent activity and quick stats
- Responsive grid layout

### Table View
- Searchable user data table
- Action buttons for view/edit/delete
- Status indicators and role badges

### Form View
- Complete user registration form
- Form validation and submission handling
- Success/error message display

### Sidebar
- Navigation between different views
- Active state highlighting
- Icon-based menu items

## Testing

The project includes comprehensive tests using Vitest and React Testing Library:

- Component rendering tests
- User interaction testing
- Navigation flow testing
- Form submission testing

Run tests with:
```bash
npm run test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
