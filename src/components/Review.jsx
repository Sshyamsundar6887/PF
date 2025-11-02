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

// GSAP plugins are registered in App.jsx, no need to register again


/**
 * Components
 */
import ReviewCard from "./ReviewCard";

// Move reviews array outside component to avoid recreation on every render
const reviews = [
    {
      id: 'review-1',
      content: 'Enthusiastic and dedicated to his work. He is a quick learner and always ready to take on new challenges.',
      name: 'Sophia Ramirez',
      imgSrc: `${import.meta.env.BASE_URL}people-1.jpg`,
      company: 'PixelForge'
    },
    {
      id: 'review-2',
      content: 'Actively participated in group discussions and always ready to share his ideas.',
      name: 'Ethan Caldwell',
      imgSrc: `${import.meta.env.BASE_URL}people-2.jpg`,
      company: 'NexaWave'
    },
    {
      id: 'review-3',
      content: 'He is a great team player and always ready to help his friends.',
      name: 'Liam Bennett',
      imgSrc: `${import.meta.env.BASE_URL}people-3.jpg`,
      company: 'CodeCraft'
    },
    {
      id: 'review-4',
      content: 'Ready to learn about new concepts and technologies.',
      name: 'Noah Williams',
      imgSrc: `${import.meta.env.BASE_URL}people-4.jpg`,
      company: 'BrightWeb'
    },
    {
      id: 'review-5',
      content: 'Contributed to the project with his full dedication and commitment.',
      name: 'Ava Thompson',
      imgSrc: `${import.meta.env.BASE_URL}people-5.jpg`,
      company: 'TechMosaic'
    },
    {
      id: 'review-6',
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: `${import.meta.env.BASE_URL}people-6.jpg`,
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
  }, []); // Add empty dependency array to run only once

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
                {reviews.map(({ id, content, name, imgSrc, company  }) => (
                    <ReviewCard
                     key={id}
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
