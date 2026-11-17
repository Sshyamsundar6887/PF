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
    imgSrc: `${import.meta.env.BASE_URL}clausewise.png`,
    title: 'CLAUSEWISE',
    tags: ['Python', 'LLM API', 'Gradio', 'NLP'],
    projectLink: 'https://github.com/Sshyamsundar6887/Clausewise'
  },
  {
    id: 'work-2',
    imgSrc: `${import.meta.env.BASE_URL}AUD-IMG.png`,
    title: 'Audio-To-Image Pipeline',
    tags: ['Python', 'Generative AI', 'API', 'Jupyter'],
    projectLink: 'https://github.com/Sshyamsundar6887/audio-to-image'
  },
  {
    id: 'work-3',
    imgSrc: `${import.meta.env.BASE_URL}rag-system.jpg`,
    title: 'RAG System',
    tags: ['Python', 'RAG', 'Vector Search', 'Jupyter'],
    projectLink: 'https://github.com/Sshyamsundar6887/RAG-test'
  },
  {
    id: 'work-4',
    imgSrc: `${import.meta.env.BASE_URL}agro-trained.jpg`,
    title: 'Agro Trained Vision Model',
    tags: ['Python', 'Computer Vision', 'Deep Learning', 'Jupyter'],
    projectLink: 'https://github.com/Sshyamsundar6887/agro-trained'
  },
  {
    id: 'work-5',
    imgSrc: `${import.meta.env.BASE_URL}aws-rental.jpg`,
    title: 'AWS Cloud Rental Platform',
    tags: ['AWS', 'HTML5', 'CSS3', 'JavaScript'],
    projectLink: 'https://github.com/Sshyamsundar6887/AWS-RENTal'
  },
  {
    id: 'work-6',
    imgSrc: `${import.meta.env.BASE_URL}e-journal-work-6.png`,
    title: 'E-Journal Digital App',
    tags: ['TypeScript', 'React', 'CSS3'],
    projectLink: 'https://github.com/Sshyamsundar6887/E-journal-'
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
          A selection of repositories from my GitHub — from Generative AI pipelines to cloud applications.
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
