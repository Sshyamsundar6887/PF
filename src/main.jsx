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

document.documentElement.classList.add('dark');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
