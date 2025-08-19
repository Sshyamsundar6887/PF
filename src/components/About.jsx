/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/


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


const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">
            <div className="about-card reveal-up">
                <p className="text-lg mb-6 md:mb-8 md:text-xl md:max-w-[60ch]" style={{ color: 'var(--color-text-secondary)' }}>
                Welcome! I&apos;m S.Shyam Sundar, a fresher with lots of enthusiasm for learning new technologies and building new projects. Combining creativity and technical expertise. Eager to learn lots of new things.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {aboutItems.map(({label, number }, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                <span className="font-bold md:text-3xl" style={{ color: 'var(--color-accent)' }}>+</span>
                            </div>

                            <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>{label}</p>
                        </div>
                        ))
                    }
                    <img
                        src="./logo.ico"
                        alt="logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
