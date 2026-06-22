/**
 * @copyright 2025 SHYAM
 * @license Apache-2.0
 */


const experiences = [
  {
    id: 'exp-1',
    role: 'AI Intern',
    company: 'Flipnow Solutions Pvt. Ltd.',
    location: 'Hyderabad',
    period: 'Jan 2026 — Jun 2026',
    duration: '6 months',
    description: 'Working on AI/ML projects, developing intelligent systems and contributing to production-ready applications.',
    tags: ['AI/ML', 'Python', 'Production Systems']
  },
  {
    id: 'exp-2',
    role: 'AI Video Annotator',
    company: 'Student Tribe',
    location: 'Hyderabad, Telangana',
    period: 'May 2025 — Aug 2025',
    duration: '4 months',
    description: 'Performed AI video annotation tasks, contributing to training data pipelines for computer vision models.',
    tags: ['Computer Vision', 'Data Annotation', 'AI Training']
  }
];


const Experience = () => {
  return (
    <section
      id="experience"
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 mb-4 reveal-up">
          Experience
        </h2>
        <p className="mb-10 max-w-[50ch] reveal-up" style={{ color: 'var(--color-text-secondary)' }}>
          Professional roles where I&apos;ve applied my skills and grown as a developer.
        </p>

        <div className="experience-timeline">
          {experiences.map(({ id, role, company, location, period, duration, description, tags }) => (
            <div key={id} className="experience-card reveal-up">
              <div className="experience-card-inner">
                {/* Timeline dot */}
                <div className="experience-dot" aria-hidden="true"></div>
                
                <div className="experience-header">
                  <div>
                    <h3 className="title-1 experience-role">{role}</h3>
                    <p className="text-base font-medium mt-1" style={{ color: 'var(--color-accent)' }}>
                      {company}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{period}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-tertiary)' }}>
                      {duration} · {location}
                    </p>
                  </div>
                </div>

                <p className="text-sm mt-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="h-7 text-xs grid items-center px-3 rounded-full"
                      style={{
                        color: 'var(--color-text-tertiary)',
                        backgroundColor: 'var(--color-accent-soft)',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
