# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Theme Toggle & Responsive Design Implementation

### Light/Dark Mode Toggle

The website now features a fully functional light/dark mode toggle with the following features:

#### Features:
- **Smooth Transitions**: All theme changes are animated with CSS transitions
- **Persistent Storage**: Theme preference is saved to localStorage and persists across sessions
- **System Preference Detection**: Automatically detects user's system theme preference on first visit
- **Accessible**: Proper ARIA labels and keyboard navigation support
- **Visual Feedback**: Animated toggle switch with sun/moon icons

#### Implementation:
- **CSS Custom Properties**: All colors, backgrounds, and text use CSS variables for easy theme switching
- **Theme Classes**: Root element gets `.dark` or `.light` classes to control theme
- **Component Structure**: Clean, reusable `ThemeToggle` component

### Responsive Design

The website is now fully responsive with a mobile-first approach:

#### Breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+
- **Large Desktop**: 1200px+

#### Features:
- **Mobile-First CSS**: Base styles target mobile, with progressive enhancement
- **Flexible Grid Systems**: CSS Grid and Flexbox for adaptive layouts
- **Responsive Typography**: Fluid font scaling using `clamp()` and viewport units
- **Touch-Friendly**: Minimum 44px touch targets for mobile devices
- **Optimized Images**: Proper scaling and aspect ratios across all devices
- **Collapsible Navigation**: Mobile hamburger menu with smooth animations

#### Accessibility:
- **WCAG 2.1 AA Compliance**: Proper contrast ratios in both themes
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **High Contrast**: Supports `prefers-contrast: high`

#### Performance:
- **CSS Custom Properties**: Efficient theme switching without JavaScript DOM manipulation
- **Optimized Transitions**: Hardware-accelerated animations
- **Minimal JavaScript**: Theme logic is lightweight and efficient
- **Print Styles**: Optimized styles for printing

### Browser Support:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### Usage:

The theme toggle automatically initializes on page load. Users can:
1. Click the toggle button in the header to switch themes
2. Their preference is automatically saved and restored on future visits
3. The system will respect their OS theme preference if no manual selection has been made

All components now use CSS custom properties for theming, making it easy to add new themes or modify existing ones by updating the CSS variables in the `:root` selector.