/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
    {
      imgSrc: `${import.meta.env.BASE_URL}python.ico`,
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}java.ico`,
      label: 'Java',
      desc: 'Programming Language'
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}javascript.ico`,
      label: 'JavaScript',
      desc: 'Interaction'
    },
    /**{
      imgSrc: './nodejs.ico',
      label: 'NodeJS',
      desc: 'Web Server'
    },*/
    {
      imgSrc: `${import.meta.env.BASE_URL}django.ico`,
      label: 'Django',
      desc: 'Web Framework'
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}mongodb.ico`,
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}react.ico`,
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}tailwindcss.ico`,
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}R.png`,
      label: 'R',
      desc: 'Data Analysis'
    },
  ];


const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                Essential Tools I Use
            </h2>

            <p className="mt-3 mb-8 max-w-[50ch] reveal-up" style={{ color: 'var(--color-text-secondary)' }}>
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="skills-grid">
                {
                     skillItem.map(({ imgSrc, label, desc }, key)=>(
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                     ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill
