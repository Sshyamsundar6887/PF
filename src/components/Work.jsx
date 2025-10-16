/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/


/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: `${import.meta.env.BASE_URL}lms1.jpg`,
      title: 'Library Management System',
      tags: ['python','HTML5','CSS3','JavaScript','sqlite3'],
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}hotel.jpg`,
      title: 'Hotel Management System Application',
      tags: ['Java','NetBeans','MySQL'],
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}AUD-IMG.png`,
      title: 'Audio-To-Image',
      tags: ['Development', 'API', 'Python', 'jupyter notebook'],
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}clausewise.png`,
      title: 'CLAUSEWISE',
      tags: ['Development', 'API', 'Python', 'gradio'],
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}project-6.jpg`,
      title: 'IDEAHUB',
      tags: [''],
      projectLink: ''
    },
    /**{
      imgSrc: './project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://sshyamsundar6887.github.io/PF/'
    },*/
  ];


const Work = () => {
  return (
    <section
        id="work"
        className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio highlights
            </h2>

            <div className="work-grid">
                {works.map(({ imgSrc, title, tags, projectLink }, key) =>(
                    <ProjectCard
                     key={key}
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
