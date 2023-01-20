import React from 'react'
import PropTypes from 'prop-types'

import { Container, Testimonial } from '@/components'

import { Wrapper } from './style'

const Testimonials = ({ testimonials }) => {
    return (
        <Container>
            <Wrapper>
                {
                    testimonials.map((testimonial, index) => (
                        <Testimonial key={index} testimonial={testimonial} />
                    ))
                }
            </Wrapper>
        </Container>
    )
}

Testimonials.propTypes = {
    testimonials: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Testimonials