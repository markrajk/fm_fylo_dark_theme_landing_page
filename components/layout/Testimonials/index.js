import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import { Container, Testimonial } from '@/components'

import { Wrapper, ImgWrapper } from './style'

const Testimonials = ({ testimonials }) => {
    return (
        <Container>

            <Wrapper>
                <ImgWrapper>
                    <Image src="/images/bg-quotes.png" fill="true" alt="image of quotes" />
                </ImgWrapper>
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