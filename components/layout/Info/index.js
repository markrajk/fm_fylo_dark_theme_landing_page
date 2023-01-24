import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Container, Typography as T, Icon } from '@/components'

import { Wrapper, Grid, ImageWrapper, Article } from './style'

const Hero = () => {
    const [color, setColor] = useState(null);

    const onMouseEnterHandler = () => {
        setColor('#ffffff')
    }

    const onMouseLeaveHandler = () => {
        setColor(null)
    }

    return (
        <Wrapper>
            <Container>
                <Grid>
                    <ImageWrapper>
                        <Image src="/images/illustration-stay-productive.png" fill="100%" sizes="(min-width: 992px) 72em, 100vw" alt="clip art" />
                    </ImageWrapper>

                    <div>
                        <Article>
                            <T tag="textH2">Stay productive, wherever you are</T>
                            <T tag="textBodyBig">
                                Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                            </T>
                            <T tag="textBodyBig">
                                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                            </T>
                        </Article>
                        <Link href="#" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
                            <T tag="textLink">See how Fylo works </T>
                            <Icon icon="arrow-right" size="12" color={color} />
                        </Link>
                    </div>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Hero