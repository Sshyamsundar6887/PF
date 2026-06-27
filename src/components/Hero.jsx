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

      if (!prefersReducedMotion) {
        if (titleRef.current) {
          gsap.from(titleRef.current, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.15
          });
        }

        if (statusRef.current && statusRef.current.children) {
          gsap.from(statusRef.current.children, {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.4)',
            stagger: 0.1,
            delay: 0.05
          });
        }

        if (buttonsRef.current && buttonsRef.current.children) {
          gsap.from(buttonsRef.current.children, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
            delay: 0.4
          });
        }

        if (heroImageRef.current) {
          gsap.from(heroImageRef.current, {
            scale: 1.08,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3
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
        {/* Decorative background orb */}
        <div className="hero-bg-orb" aria-hidden="true"></div>

        <div className="container">
            <div className="hero-content">

            <div className="hero-text">
                <div className="flex items-center gap-3" ref={statusRef}> 
                    <div className="flex items-center gap-1.5 text-sm tracking-wide" style={{ color: 'var(--color-text-tertiary)' }}>
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for Work
                    </div>
                </div>
                <h2 className="headline-1 hero-title" ref={titleRef}>
                 AI/ML Engineer solving real-world problems with intelligent systems
                </h2>

                <p className="text-base mb-6 max-w-[55ch]" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                  Python developer &amp; Generative AI practitioner with hands-on experience building AI-powered applications — from agentic workflows to production-ready ML pipelines.
                </p>

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
                <figure className="w-full max-w-[480px] aspect-square ml-auto bg-gradient-to-t from-gray-400 via-25% via-black-500/40 to-65% rounded-[60px] overflow-hidden hero-image-wrapper">
                    <img
                     src={`${import.meta.env.BASE_URL}hero-banner.png`}
                     width={1196}
                     height={1196}
                     alt="Shyam Sundar"
                     className="w-full h-full object-cover hero-main-image"
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
