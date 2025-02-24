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
      imgSrc: './python.ico',
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: './java.ico',
      label: 'Java',
      desc: 'Programming Language'
    },
    {
      imgSrc: './javascript.ico',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: './nodejs.ico',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: './django.ico',
      label: 'Django',
      desc: 'Web Framework'
    },
    {
      imgSrc: './mongodb.ico',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: './react.ico',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: './tailwindcss.ico',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];


const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                Essential Tools I Use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-w[50ch] reveal-up">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
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
