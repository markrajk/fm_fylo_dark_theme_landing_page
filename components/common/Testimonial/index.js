import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import { Typography as T } from '@/components'

import { Wrapper, Info, ImgWrapper } from './style'

const Testimonial = ({ testimonial }) => {
    return (
        <Wrapper>
            <T tag="textBodySmall">{testimonial.testimonial}</T>
            <Info>
                <ImgWrapper>
                    <Image src={testimonial.img} fill="true" sizes="(min-width: 992px) 24px, 24px" alt={`${testimonial.name}'s profile image`} />
                </ImgWrapper>
                <T tag="textH5" as="p" font='regular' style={{ gridArea: 'name' }}>{testimonial.name}</T>
                <T tag="textTag" font='regular' style={{ gridArea: 'position' }}>{testimonial.position}</T>
            </Info>
            {/* <p>{testimonial.name}</p>
            <p>{testimonial.position}</p>
            <img src={testimonial.img} />
            <p>test</p> */}
        </Wrapper>
    )
}

Testimonial.propTypes = {
    testimonial: PropTypes.object.isRequired
}

export default Testimonial