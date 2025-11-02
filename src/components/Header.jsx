/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/

/**
 * Node modules
 */
import React, { useState, useEffect, useRef } from 'react';

/**
 * Components
 */
import Navbar from "./Navbar"
import ThemeToggle from "./ThemeToggle"


const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            
            // Only update scrolled class for styling, keep header always visible
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="header-content">            
                <h1>
                    <a 
                        href="/PF/#" 
                        className="logo"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}logo.ico`}
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
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="btn btn-secondary max-md:hidden"
                    >
                        Contact Me
                    </a>
                </div>
                </div>
            </div>
        </header>
    );
}

export default Header
