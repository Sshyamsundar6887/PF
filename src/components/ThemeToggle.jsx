/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/

/**
 * Node modules
 */
import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const buttonRef = useRef(null);

  useEffect(() => {
    // Add animation class when theme changes
    if (buttonRef.current) {
      buttonRef.current.classList.add('animate-toggle');
      const timer = setTimeout(() => {
        buttonRef.current?.classList.remove('animate-toggle');
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isDark]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle-icon">
        <span className="material-symbols-rounded">
          {isDark ? 'dark_mode' : 'light_mode'}
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;

