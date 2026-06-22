/**
 * @copyright 2025 SHYAM
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const aboutItems = [
    {
      label: 'Projects completed',
      number: 5
    },
    {
      label: 'Months of experience',
      number: 10
    }
  ];

// Number counting animation function
const animateNumber = (element, targetNumber, duration = 2000) => {
  const startNumber = 0;
  const startTime = performance.now();

  const updateNumber = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * easeProgress);
    
    element.textContent = currentNumber;
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      element.textContent = targetNumber;
    }
  };

  requestAnimationFrame(updateNumber);
};

const About = () => {
  const aboutCardRef = useRef(null);
  const numbersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numbersRef.current.forEach((numElement, index) => {
        if (numElement) {
          const targetNumber = parseInt(aboutItems[index]?.number || 0);
          
          ScrollTrigger.create({
            trigger: aboutCardRef.current,
            start: 'top 70%',
            once: true,
            onEnter: () => {
              animateNumber(numElement, targetNumber);
            }
          });
        }
      });
    }, aboutCardRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">
            <div className="about-card reveal-up" ref={aboutCardRef}>
                <h2 className="headline-2 mb-4">About Me</h2>
                <p className="text-lg mb-4 md:text-xl md:max-w-[65ch]" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                  I&apos;m Shyam Sundar Sriperumbuduru — an AI/ML Engineer and Python Developer. I have a natural curiosity for exploring new technologies, especially in the space of Artificial Intelligence and Machine Learning.
                </p>
                <p className="text-base mb-8 md:max-w-[65ch]" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                  The development of AI/ML technologies fascinates me because of their potential to transform how people interact with the world. I believe in a growth mindset — remaining open-minded, always asking questions, and being willing to explore unfamiliar territory. Currently building expertise in Generative AI and Agentic AI systems.
                </p>

                {/* AWS Certification Badge */}
                <div className="flex items-center gap-2 mb-8 px-4 py-2.5 rounded-xl w-fit" style={{ background: 'var(--color-accent-soft)', border: '1px solid var(--color-border)' }}>
                    <span className="material-symbols-rounded text-lg leading-none flex items-center justify-center" style={{ color: 'var(--color-accent)', fontVariationSettings: '"FILL" 1' }}>verified</span>
                    <span className="text-sm font-semibold leading-none flex items-center" style={{ color: 'var(--color-accent)' }}>AWS Certified Cloud Practitioner</span>
                </div>

                <div className="flex flex-wrap items-center gap-6 md:gap-10">
                    {aboutItems.map(({label}, key) => (
                        <div key={key} className="stat-item">
                            <div className="flex items-center md:mb-2">
                                <span 
                                    className="text-3xl font-bold md:text-5xl stat-number" 
                                    ref={el => numbersRef.current[key] = el}
                                >
                                    0
                                </span>
                                <span className="text-2xl font-bold md:text-4xl stat-plus">+</span>
                            </div>

                            <p className="text-sm font-medium" style={{ color: 'var(--color-text-tertiary)' }}>{label}</p>
                        </div>
                        ))
                    }
                    <img
                        src={`${import.meta.env.BASE_URL}logo.ico`}
                        alt="logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px] about-logo"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
