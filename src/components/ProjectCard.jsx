/**
 * @copyright 2025 SHYAM
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from 'prop-types';

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={"project-card group " + classes}>

        <figure className="img-box aspect-[16/10] rounded-lg mb-4 project-image-wrapper">
            <img
             src={imgSrc}
             alt={title}
             loading='lazy'
             className="img-cover project-image"
            />
            <div className="project-overlay"></div>
        </figure>

        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className="title-1 mb-3 project-title">
                    {title}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label) => (
                        <span
                         key={label}
                         className="h-7 text-xs grid items-center px-3 rounded-full project-tag"
                         style={{ 
                           color: 'var(--color-text-tertiary)', 
                           backgroundColor: 'var(--color-accent-soft)',
                           border: '1px solid var(--color-border)'
                         }}
                        >
                         {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-11 h-11 rounded-lg grid place-items-center shrink-0 project-arrow">
                <span
                 className="material-symbols-rounded arrow-icon"
                 aria-hidden="true"
                >
                    arrow_outward
                </span>
            </div>
        </div>

        <a
         href={projectLink}
         target='_blank'
         className="absolute inset-0"
         aria-label={`View ${title} project`}
        ></a>
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard
