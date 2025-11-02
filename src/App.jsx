/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/

/**
 * Node Modules
 */
import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
* Contexts
*/
import { ThemeProvider } from "./contexts/ThemeContext";

/**
* Components
*/
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const APP = () => {

  useGSAP(()=>{
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    
    // Helper function to check if element is already in viewport or above fold
    const isElementInViewport = (el) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Consider element visible if it's above the bottom of viewport (with margin)
      return rect.top < windowHeight + 100 && rect.bottom > -100;
    };
    
    // Immediately show elements that are already visible
    const showVisibleElements = () => {
      const allRevealElements = document.querySelectorAll('.reveal-up');
      allRevealElements.forEach(el => {
        if (isElementInViewport(el)) {
          gsap.set(el, { opacity: 1, y: 0, scale: 1 });
          el.classList.add('revealed');
        }
      });
    };
    
    // Show visible elements immediately
    showVisibleElements();
    
    // Handle window load and resize
    const handleLoad = () => showVisibleElements();
    const handleResize = () => {
      setTimeout(showVisibleElements, 100);
    };
    
    window.addEventListener('load', handleLoad);
    window.addEventListener('resize', handleResize);

    // Enhanced reveal-up animations with stagger support
    const elements = gsap.utils.toArray('.reveal-up');
    
    elements.forEach((element, index)=>{
      // Skip if already marked as revealed
      if (element.classList.contains('revealed')) {
        return;
      }
      
      // Check if element is already visible (above fold or in viewport)
      const alreadyVisible = isElementInViewport(element);
      
      // On mobile or reduced motion, always show immediately
      if (isMobile || prefersReducedMotion || alreadyVisible) {
        gsap.set(element, { 
          opacity: 1,
          y: 0,
          scale: 1
        });
        element.classList.add('revealed');
        return;
      }
      
      // Set initial state only if not already visible and animations enabled
      gsap.set(element, { 
        y: 30, 
        opacity: 0.5,
        scale: 0.98
      });

      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 70%',
          toggleActions: 'play none none none',
          markers: false,
          once: true, // Only animate once
          onEnter: () => {
            element.classList.add('revealed');
          }
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        delay: Math.min(index * 0.05, 0.3) // Reduced stagger
      });
    });

    // Stagger animation for grids (skills, projects) - only if not reduced motion and not mobile
    if (!prefersReducedMotion && !isMobile) {
      const skillCards = gsap.utils.toArray('.skill-card.reveal-up');
      if (skillCards.length > 0) {
        const container = skillCards[0]?.parentElement;
        const isVisible = container && isElementInViewport(container);
        
        if (!isVisible && skillCards.every(card => !card.classList.contains('revealed'))) {
          gsap.set(skillCards, { 
            y: 30, 
            opacity: 0.6,
            rotationX: 5
          });

          gsap.to(skillCards, {
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
              onEnter: () => {
                skillCards.forEach(card => card.classList.add('revealed'));
              }
            },
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: {
              amount: 0.4,
              from: 'start'
            }
          });
        } else {
          skillCards.forEach(card => {
            gsap.set(card, { opacity: 1, y: 0, rotationX: 0 });
            card.classList.add('revealed');
          });
        }
      }

      // Stagger animation for project cards
      const projectCards = gsap.utils.toArray('.project-card.reveal-up');
      if (projectCards.length > 0) {
        const container = projectCards[0]?.parentElement;
        const isVisible = container && isElementInViewport(container);
        
        if (!isVisible && projectCards.every(card => !card.classList.contains('revealed'))) {
          gsap.set(projectCards, { 
            y: 40, 
            opacity: 0.6,
            scale: 0.95
          });

          gsap.to(projectCards, {
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
              onEnter: () => {
                projectCards.forEach(card => card.classList.add('revealed'));
              }
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            stagger: {
              amount: 0.5,
              from: 'start'
            }
          });
        } else {
          projectCards.forEach(card => {
            gsap.set(card, { opacity: 1, y: 0, scale: 1 });
            card.classList.add('revealed');
          });
        }
      }
    } else {
      // Ensure all elements are visible if reduced motion or mobile
      const allCards = document.querySelectorAll('.skill-card.reveal-up, .project-card.reveal-up');
      allCards.forEach(card => {
        gsap.set(card, { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotationX: 0 
        });
        card.classList.add('revealed');
      });
    }

    // Parallax effect for hero image - only on desktop and not reduced motion
    if (!prefersReducedMotion && window.innerWidth >= 1024) {
      const heroImage = document.querySelector('.hero-image img');
      if (heroImage) {
        gsap.to(heroImage, {
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          y: 50,
          scale: 1.02,
          ease: 'none'
        });
      }
    }

    // Cleanup function
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []); // Add empty dependency array to run only once

  return (
    <ThemeProvider>
      <ReactLenis root>
          <Header />
          <main>
              <Hero />
              <About />
              <Skill />
              <Work />
              <Review />
              <Contact />
          </main>
          <Footer  />
      </ReactLenis>
    </ThemeProvider>
  )
} 


export default APP;