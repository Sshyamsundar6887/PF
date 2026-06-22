/**
 * @copyright 2025 SHYAM
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";

// Move skillItem array outside component to avoid recreation on every render
const skillItem = [
    {
      id: 'skill-1',
      imgSrc: `${import.meta.env.BASE_URL}python.ico`,
      label: 'Python',
      desc: 'AI/ML & Backend'
    },
    {
      id: 'skill-2',
      imgSrc: `${import.meta.env.BASE_URL}tensorflow.svg`,
      label: 'TensorFlow',
      desc: 'Deep Learning'
    },
    {
      id: 'skill-3',
      imgSrc: `${import.meta.env.BASE_URL}javascript.ico`,
      label: 'JavaScript',
      desc: 'Web Development'
    },

    {
      id: 'skill-5',
      imgSrc: `${import.meta.env.BASE_URL}mongodb.ico`,
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      id: 'skill-6',
      imgSrc: `${import.meta.env.BASE_URL}pytorch.svg`,
      label: 'PyTorch',
      desc: 'Deep Learning'
    },
    {
      id: 'skill-7',
      imgSrc: `${import.meta.env.BASE_URL}pandas.svg`,
      label: 'Pandas',
      desc: 'Data Analysis'
    },
    {
      id: 'skill-8',
      imgSrc: `${import.meta.env.BASE_URL}R.png`,
      label: 'R',
      desc: 'Data Analysis'
    },
    {
      id: 'skill-9',
      imgSrc: `${import.meta.env.BASE_URL}aws.svg`,
      label: 'AWS',
      desc: 'Cloud Platform'
    },
    {
      id: 'skill-10',
      imgSrc: `${import.meta.env.BASE_URL}docker.svg`,
      label: 'Docker',
      desc: 'Containerization'
    },
    {
      id: 'skill-11',
      imgSrc: `${import.meta.env.BASE_URL}jupyter.svg`,
      label: 'Jupyter',
      desc: 'Interactive Computing'
    },
    {
      id: 'skill-12',
      imgSrc: `${import.meta.env.BASE_URL}opencv.svg`,
      label: 'OpenCV',
      desc: 'Computer Vision'
    },
    {
      id: 'skill-13',
      imgSrc: `${import.meta.env.BASE_URL}keras.svg`,
      label: 'Keras',
      desc: 'Neural Networks'
    },
    {
      id: 'skill-14',
      imgSrc: `${import.meta.env.BASE_URL}numpy.svg`,
      label: 'NumPy',
      desc: 'Scientific Computing'
    },
  ];

const additionalSkills = ['Git', 'Computer Vision', 'NLP', 'Generative AI', 'Agentic AI', 'MLOps', 'Amazon SageMaker', 'AWS Lambda', 'Amazon EC2', 'Amazon S3'];


const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                Tech Stack
            </h2>

            <p className="mt-3 mb-10 max-w-[50ch] reveal-up" style={{ color: 'var(--color-text-secondary)' }}>
            The tools and technologies I use to bring ideas to life — from AI/ML frameworks to full-stack development.
            </p>

            <div className="skills-grid">
                {
                     skillItem.map(({ id, imgSrc, label, desc }) => (
                        <SkillCard
                            key={id}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                     ))
                }
            </div>

            {/* Additional Skills */}
            <div className="flex flex-wrap gap-2 mt-8 reveal-up">
              {additionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="h-8 text-sm grid items-center px-4 rounded-full font-medium"
                  style={{
                    color: 'var(--color-accent)',
                    backgroundColor: 'var(--color-accent-soft)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Skill
