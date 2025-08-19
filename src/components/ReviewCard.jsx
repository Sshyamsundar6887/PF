/**
* @copyright 2025 SHYAM
* @license Apache-2.0
*/ 


import PropTypes from "prop-types"


const ratings = new Array(5);
ratings.fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL"1'}
});


const ReviewCard = ({
    content,
    imgSrc,
    name,
    company
}) => {
  return (
    <div className="p-5 rounded-xl min-w-[320px] flex-col lg:min-w-[420px]" 
         style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="flex items-center gap-1 mb-3">
            {ratings.map(({ icon, style }, key)=>(
                <span
                 key={key}
                 className="material-symbols-rounded text-[18px]"
                 style={style}
                >
                    {icon}
                 </span>
            ))}
        </div>

        <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            {content}
        </p>

        <div className="flex items-center gap-2 mt-auto">
            <figure className="img-box rounded-lg">
                <img
                 src={imgSrc}
                 alt={name}
                 width={44}
                 height={44}
                 loading="lazy"
                 className="img-cover"
                 />
            </figure>

            <div>
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs tracking-wider" style={{ color: 'var(--color-text-tertiary)' }}>
                    {company}
                </p>
                
            </div>
        </div>
    </div>
  )
}

ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
}

export default ReviewCard
