# Contributing to HelpBook

Thank you for your interest in contributing to HelpBook! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 8+ or yarn
- Git

### Setup Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/helpbook-app.git
   cd helpbook-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Copy environment file**
   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── services/      # API and external service integrations
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## 🛠️ Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Use Styled Components for styling
- Write meaningful commit messages

### Component Guidelines
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow the existing styled-components patterns
- Ensure responsive design

### Naming Conventions
- Components: PascalCase (e.g., `UserProfile`)
- Files: camelCase (e.g., `userProfile.tsx`)
- Variables/Functions: camelCase
- Constants: UPPER_SNAKE_CASE

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🐛 Bug Reports

When reporting bugs, please include:
- Description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS information
- Screenshots if applicable

## ✨ Feature Requests

For new features:
- Check existing issues first
- Provide clear use case
- Include mockups if UI-related
- Consider backward compatibility

## 📝 Pull Request Process

1. **Create a branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Write code following guidelines
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/amazing-feature
   ```

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests
- `chore`: Maintain

## 🎨 Design System

### Colors
- Primary: `#4f46e5` to `#7c3aed` (gradient)
- Secondary: `rgba(255, 255, 255, 0.1)`
- Text: `white` on dark backgrounds
- Background: Gradient from `#667eea` to `#764ba2`

### Typography
- Font Family: Inter
- Weights: 300, 400, 500, 600, 700

### Components
- Use glass morphism effects
- Consistent border-radius (8px, 15px, 20px)
- Smooth transitions (0.3s ease)
- Hover effects with subtle transforms

## 🧪 Testing

Currently, we're focusing on manual testing. Automated testing will be added in future phases.

### Manual Testing Checklist
- [ ] Component renders correctly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Accessibility (keyboard navigation, screen readers)
- [ ] Performance (no unnecessary re-renders)

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Styled Components](https://styled-components.com/)
- [Vite Guide](https://vitejs.dev/guide/)

## 🤝 Community

- **Issues**: Report bugs and request features
- **Discussions**: General questions and ideas
- **Discord**: Coming soon for real-time chat

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Annual contributor highlights

---

**Happy Contributing! 🎉**
