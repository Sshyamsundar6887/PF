/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/


/**
* Node modules
*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


/**
 * Components
 */
import App from './App.jsx';


/**
 * CSS links
 */
import './index.css'
import 'lenis/dist/lenis.css'

// Add class to indicate JavaScript is enabled (for progressive enhancement)
document.documentElement.classList.add('js-enabled');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
