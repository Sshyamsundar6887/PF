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
      label: 'Project done',
      number: 5
    },
    {
      label: 'Years of experience',
      number: 1
    }
  ];

// Number counting animation function
const animateNumber = (element, targetNumber, duration = 2000) => {
  const startNumber = 0;
  const startTime = performance.now();

  const updateNumber = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (easeOutCubic)
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
      // Animate numbers when section comes into view
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
                <p className="text-lg mb-6 md:mb-8 md:text-xl md:max-w-[60ch]" style={{ color: 'var(--color-text-secondary)' }}>
                Welcome! I&apos;m S.Shyam Sundar, a fresher with lots of enthusiasm for learning new technologies and building new projects. Combining creativity and technical expertise. Eager to learn lots of new things.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {aboutItems.map(({label, number }, key) => (
                        <div key={key} className="stat-item">
                            <div className="flex items-center md:mb-2">
                                <span 
                                    className="text-2xl font-bold md:text-4xl stat-number" 
                                    ref={el => numbersRef.current[key] = el}
                                >
                                    0
                                </span>
                                <span className="font-bold md:text-3xl stat-plus" style={{ color: 'var(--color-accent)' }}>+</span>
                            </div>

                            <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>{label}</p>
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
