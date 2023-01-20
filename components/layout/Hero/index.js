import React from 'react'
import Image from 'next/image'

import { Container, Typography as T, Button } from '@/components'

import { Wrapper, Grid, ImageWrapper, Article } from './style'

const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <ImageWrapper>
                        <Image src="/images/illustration-intro.png" fill alt="clip art" />
                    </ImageWrapper>

                    <Article>
                        <T tag="textH1">All your files in one secure location, accessible anywhere.</T>
                        <T tag="textBodyHero">
                            Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
                        </T>
                        <Button>Get Started</Button>
                    </Article>
                </Grid>
            </Container>
            <div className='background'>
                <div className="top"></div>
                <div className="bottom"></div>
            </div>
        </Wrapper>
    )
}

export default Hero