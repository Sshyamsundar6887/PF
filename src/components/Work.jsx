/**
 * @copyright 2025 SHYAM
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";

// Move works array outside component to avoid recreation on every render
const works = [
    {
      id: 'work-1',
      imgSrc: `${import.meta.env.BASE_URL}lms1.jpg`,
      title: 'Library Management System',
      tags: ['Python','HTML5','CSS3','JavaScript','SQLite'],
      projectLink: ''
    },
    {
      id: 'work-2',
      imgSrc: `${import.meta.env.BASE_URL}project-4.jpg`,
      title: 'Predictive Analytics Model',
      tags: ['Python','Scikit-Learn','Pandas'],
      projectLink: ''
    },
    {
      id: 'work-3',
      imgSrc: `${import.meta.env.BASE_URL}AUD-IMG.png`,
      title: 'Audio-To-Image',
      tags: ['Python', 'API', 'Jupyter'],
      projectLink: ''
    },
    {
      id: 'work-4',
      imgSrc: `${import.meta.env.BASE_URL}clausewise.png`,
      title: 'CLAUSEWISE',
      tags: ['Python', 'API', 'Gradio'],
      projectLink: ''
    },
    {
      id: 'work-5',
      imgSrc: `${import.meta.env.BASE_URL}project-6.jpg`,
      title: 'IDEAHUB',
      tags: ['In Progress'],
      projectLink: ''
    },
  ];


const Work = () => {
  return (
    <section
        id="work"
        className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-4 reveal-up">
                Featured Projects
            </h2>

            <p className="mb-10 max-w-[50ch] reveal-up" style={{ color: 'var(--color-text-secondary)' }}>
              A selection of projects I&apos;ve built — from full-stack web apps to AI-powered tools.
            </p>

            <div className="work-grid">
                {works.map(({ id, imgSrc, title, tags, projectLink }) => (
                    <ProjectCard
                     key={id}
                     imgSrc={imgSrc}
                     title={title}
                     tags={tags}
                     projectLink={projectLink}
                     classes="reveal-up"
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Work
