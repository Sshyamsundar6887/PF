/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/

/**
 * Node modules
 */
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const updateActiveBoxPosition = (element) => {
        if (element) {
            activeBox.current.style.top = `${element.offsetTop}px`;
            activeBox.current.style.left = `${element.offsetLeft}px`;
            activeBox.current.style.width = `${element.offsetWidth}px`;
            activeBox.current.style.height = `${element.offsetHeight}px`;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');

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
        };

        window.addEventListener('scroll', handleScroll);

        // Initial call to set the active link on page load
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            {navItems.map(({ label, link, className }, key) => (
                <a
                    href={link}
                    key={key}
                    className={className}
                    onClick={(event) => {
                        event.preventDefault();
                        document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
                        lastActiveLink.current?.classList.remove('active');
                        event.target.classList.add('active');
                        lastActiveLink.current = event.target;
                        updateActiveBoxPosition(event.target);
                    }}
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