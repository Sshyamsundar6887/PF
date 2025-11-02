# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Responsive Design Implementation

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
- **Optimized Transitions**: Hardware-accelerated animations
- **Print Styles**: Optimized styles for printing

### Browser Support:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

All components use CSS custom properties for theming, making it easy to customize colors and styles by updating the CSS variables in the `:root` selector.