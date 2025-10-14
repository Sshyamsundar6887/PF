/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/

/**
 * Node modules
 */
import { useState } from 'react';

/**
 * Components
 */
import Navbar from "./Navbar"
import ThemeToggle from './ThemeToggle';


const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">            
                <h1>
                    <a 
                        href="/PF/#" 
                        className="logo"
                    >
                        <img
                            src="./logo.ico"
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="SHYAM Logo"
                        />
                    </a>
                </h1>

                <div className="nav-wrapper">
                    <button 
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                        aria-label={navOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    <Navbar navOpen={navOpen} />
                </div>

                <div className="header-actions">
                    <a
                        href="#contact" 
                        className="btn btn-secondary max-md:hidden"
                    >
                        Contact Me
                    </a>
                    <ThemeToggle />
                </div>
                </div>
            </div>
        </header>
    );
}

export default Header
