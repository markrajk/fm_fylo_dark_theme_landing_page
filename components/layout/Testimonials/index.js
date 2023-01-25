import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import { Container, Testimonial } from '@/components'

import { Wrapper, ImgWrapper } from './style'

const Testimonials = ({ testimonials }) => {
    const router = useRouter()

    if (router.isFallback) return <div>Loading...</div>

    return (
        <Container>

            <Wrapper>
                <ImgWrapper>
                    <Image src="/images/bg-quotes.png" fill="100%" sizes='(min-width: 992px) 6em, 2.5em' alt="image of quotes" />
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