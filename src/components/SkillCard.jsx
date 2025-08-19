/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/


/**
 * Node modules
 */
import PropTypes from "prop-types"

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'skill-card group ' + classes}>
        <figure className="skill-icon">
            <img
             src={imgSrc}
             width={32}
             height={32}
             alt={label}
            />
        </figure>
        <div>
            <h3>{label}</h3>

            <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                {desc}
            </p>
        </div>
    </div>
    
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard
