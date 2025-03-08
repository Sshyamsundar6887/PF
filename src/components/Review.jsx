/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/ 


/**
 * Node Modules
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";

const reviews = [
    {
      content: 'Enthusiastic and dedicated to his work. He is a quick learner and always ready to take on new challenges.',
      name: 'Sophia Ramirez',
      imgSrc: './people-1.jpg',
      company: 'PixelForge'
    },
    {
      content: 'Actively participated in group discussions and always ready to share his ideas.',
      name: 'Ethan Caldwell',
      imgSrc: './people-2.jpg',
      company: 'NexaWave'
    },
    {
      content: 'He is a great team player and always ready to help his friends.',
      name: 'Liam Bennett',
      imgSrc: './people-3.jpg',
      company: 'CodeCraft'
    },
    {
      content: 'Ready to learn about new concepts and technologies.',
      name: 'Noah Williams',
      imgSrc: './people-4.jpg',
      company: 'BrightWeb'
    },
    {
      content: 'Contributed to the project with his full dedication and commitment.',
      name: 'Ava Thompson',
      imgSrc: './people-5.jpg',
      company: 'TechMosaic'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: './people-6.jpg',
      company: 'Skyline Digital'
    }
  ];


const Review = () => {

  useGSAP(()=>{
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200 80%',
        end: '400% 80%',
        scrub: true 
      },
      x: '-1000'
    })
  });

  return (
    <section
        id="reviews"
        className="section overflow-hidden"
    >
        <div className= "container">
            <h2 className="headline-2 mb-8 reveal-up">
                What my friends say about me
            </h2>
            <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({ content, name, imgSrc, company  },key)=>(
                    <ReviewCard
                     key={key}
                     name={name}
                     imgSrc={imgSrc}
                     company={company}
                     content={content}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Review
