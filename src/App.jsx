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
    const elements = gsap.utils.toArray('.reveal-up');
    
    elements.forEach((element)=>{
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200px bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.Out',
      })
    });
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