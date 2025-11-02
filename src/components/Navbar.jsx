/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/

/**
 * Node modules
 */
import { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

// Move navItems outside component to avoid recreation on every render
const navItems = [
    {
      id: 'home',
      label: 'Home',
      link: '#home',
      className: 'nav-link active'
    },
    {
      id: 'about',
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      id: 'work',
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      id: 'reviews',
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    {
      id: 'contact',
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
];

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const sectionsRef = useRef([]);
    const navLinksRef = useRef([]);

    const updateActiveBoxPosition = useCallback((element) => {
        if (element && activeBox.current) {
            activeBox.current.style.top = `${element.offsetTop}px`;
            activeBox.current.style.left = `${element.offsetLeft}px`;
            activeBox.current.style.width = `${element.offsetWidth}px`;
            activeBox.current.style.height = `${element.offsetHeight}px`;
        }
    }, []);

    useEffect(() => {
        // Cache DOM queries once
        sectionsRef.current = document.querySelectorAll('section');
        navLinksRef.current = document.querySelectorAll('.nav-link');

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const sections = sectionsRef.current;
                    const navLinks = navLinksRef.current;

                    let currentSection = '';

                    sections.forEach(section => {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.offsetHeight;
                        const scrollPosition = window.pageYOffset;

                        // Adjust the offset value here
                        if (scrollPosition >= sectionTop - sectionHeight / 2) {
                            currentSection = section.getAttribute('id');
                        }
                    });

                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').includes(currentSection)) {
                            link.classList.add('active');
                            lastActiveLink.current = link;
                        }
                    });

                    updateActiveBoxPosition(lastActiveLink.current);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial call to set the active link on page load
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [updateActiveBoxPosition]);

    const handleNavClick = useCallback((event, link) => {
        event.preventDefault();
        const targetElement = document.querySelector(link);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            lastActiveLink.current?.classList.remove('active');
            event.target.classList.add('active');
            lastActiveLink.current = event.target;
            updateActiveBoxPosition(event.target);
        }
    }, [updateActiveBoxPosition]);

    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            {navItems.map(({ id, label, link, className }) => (
                <a
                    href={link}
                    key={id}
                    className={className}
                    onClick={(event) => handleNavClick(event, link)}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
};

export default Navbar;