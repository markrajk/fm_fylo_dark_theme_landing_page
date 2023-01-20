import React from 'react'
import PropTypes from 'prop-types'

const Testimonial = ({ testimonial }) => {
    return (
        <div>
            <p>{testimonial.testimonial}</p>
            <p>{testimonial.name}</p>
            <p>{testimonial.position}</p>
            <img src={testimonial.img} />
            <p>test</p>
        </div>
    )
}

Testimonial.propTypes = {
    testimonial: PropTypes.object.isRequired
}

export default Testimonial