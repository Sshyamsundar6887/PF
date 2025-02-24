/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/

/**
 * Node modules
 */
import React, { useState } from 'react';

/**
 * Components
 */
import Navbar from "./Navbar"
import MoonComponent from './MoonComponent';


const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle('bg-zinc-900', darkMode);
        document.body.classList.toggle('text-zinc-50', darkMode);
        document.body.classList.toggle('bg-zinc-50', !darkMode);
        document.body.classList.toggle('text-zinc-900', !darkMode);
    };

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md-grid md:grid-cols-[1fr,3fr,1fr] relative">            
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

                <div className="relative md:justify-self-center">
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

                <a
                    href="#contact" 
                    className="btn btn-secondary max-md:hidden md:justify-self-end"
                >
                    Contact Me
                </a>

                <div className="absolute top-0 right-0 p-4">
                    <MoonComponent toggleTheme={toggleTheme} darkMode={darkMode} />
                </div>
            </div>
        </header>
    );
}

export default Header
