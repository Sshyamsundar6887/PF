/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/


/**
 * Node modules
 */
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Ensure all elements are visible by default
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 1, y: 0 });
      }
      if (statusRef.current && statusRef.current.children) {
        Array.from(statusRef.current.children).forEach(child => {
          gsap.set(child, { opacity: 1, scale: 1 });
        });
      }
      if (buttonsRef.current && buttonsRef.current.children) {
        Array.from(buttonsRef.current.children).forEach(child => {
          gsap.set(child, { opacity: 1, y: 0 });
        });
      }
      if (heroImageRef.current) {
        gsap.set(heroImageRef.current, { opacity: 1, scale: 1 });
      }

      // Only animate if not reduced motion
      if (!prefersReducedMotion) {
        // Hero title animation - split text effect
        if (titleRef.current) {
          gsap.from(titleRef.current, {
            y: 50,
            opacity: 0.3,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.1
          });
        }

        // Status badge animation
        if (statusRef.current && statusRef.current.children) {
          gsap.from(statusRef.current.children, {
            scale: 0.8,
            opacity: 0.5,
            duration: 0.4,
            ease: 'back.out(1.4)',
            stagger: 0.08,
            delay: 0.05
          });
        }

        // Buttons animation
        if (buttonsRef.current && buttonsRef.current.children) {
          gsap.from(buttonsRef.current.children, {
            y: 20,
            opacity: 0.5,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1,
            delay: 0.3
          });
        }

        // Hero image animation
        if (heroImageRef.current) {
          gsap.from(heroImageRef.current, {
            scale: 1.05,
            opacity: 0.5,
            duration: 1,
            ease: 'power2.out',
            delay: 0.2
          });
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
     id="home"
     className="section hero-section"
     ref={heroRef}
    >
        <div className="container">
            <div className="hero-content">

            <div className="hero-text">
                <div className="flex items-center gap-3" ref={statusRef}> 
                    <figure className="img-box w-9 h-9 rounded-lg hero-avatar">
                        <img
                         src={`${import.meta.env.BASE_URL}Law.jpg`}
                         width={40}
                         height={40}
                         alt="Shyam portrait"
                         className="img-cover"
                        />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for Work
                    </div>
                </div>
                <h2 className="headline-1 hero-title" ref={titleRef}>
                 Eager to learn new things and build projects to develop both myself and my community
                </h2>

                <div className="flex items-center gap-3" ref={buttonsRef}>
                    <ButtonPrimary
                        label="Download CV"
                        icon="download"
                        href="./CV.pdf"
                    />

                    <ButtonOutline
                        href="#about"
                        label="Scroll down"
                        icon="arrow_downward"
                    />
                </div>
            </div>

            <div className="hero-image">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-gray-400 via-25% via-black-500/40 to-65% rounded-[60px] overflow-hidden hero-image-wrapper">
                    <img
                     src={`${import.meta.env.BASE_URL}hero-banner.png`}
                     width={656}
                     height={800}
                     alt="SHYAM"
                     className="w-full hero-main-image"
                     ref={heroImageRef}
                    />
                </figure>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
