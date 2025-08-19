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
    <div className={"project-card " + classes}>

        <figure className="img-box aspect-square rounded-lg mg-4">
            <img
             src={imgSrc}
             alt={title}
             loading='lazy'
             className="img-cover"
            />
        </figure>

        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className="title-1 mb-3">
                    {title}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label, key) => (
                        <span
                         key={key}
                         className="h-8 text-sm grid items-center px-3 rounded-lg"
                         style={{ 
                           color: 'var(--color-text-tertiary)', 
                           backgroundColor: 'var(--color-bg-accent)' 
                         }}
                        >
                         {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-11 h-11 rounded-lg grid place-items-center shrink-0" 
                 style={{ 
                   backgroundColor: 'var(--color-accent)', 
                   color: 'var(--color-text-inverse)' 
                 }}>
                <span
                 className="material-symbols-rounded"
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
        ></a>
    </div>
  )
}

ProjectCard.PropTypes ={
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectsLink: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default ProjectCard
