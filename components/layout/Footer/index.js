import React from 'react'
import Link from 'next/link'

import { Container, Logo, Icon, Typography as T } from '@/components'

import { Wrapper, Content, InfoWrapper, Info, List, ListItem, Social, IconWrapper } from './style'

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Logo width="108" height="31" />
                    <Info className='location'>
                        <Icon icon="location" color="white" size={20} />
                        <T tag="textBody" style={{ fontSize: '1.6rem' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </T>
                    </Info>
                    <InfoWrapper className='info'>
                        <Info>
                            <Icon icon="icon-phone" color="white" size={20} />
                            <T tag="textBody" style={{ fontSize: '1.6rem' }}>
                                +1-543-123-4567
                            </T>
                        </Info>
                        <Info>
                            <Icon icon="email" color="white" size={20} />
                            <T tag="textBody" style={{ fontSize: '1.6rem' }}>
                                example@fylo.com
                            </T>
                        </Info>
                    </InfoWrapper>
                    <List className='listOne'>
                        <ListItem>
                            <Link href='/'>
                                <T tag="textBody" as='span' style={{ fontSize: '1.6rem' }}>About Us</T>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='/'>
                                <T tag="textBody" as='span' style={{ fontSize: '1.6rem' }}>Jobs</T>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='/'>
                                <T tag="textBody" as='span' style={{ fontSize: '1.6rem' }}>Press</T>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='/'>
                                <T tag="textBody" as='span' style={{ fontSize: '1.6rem' }}>Blog</T>
                            </Link>
                        </ListItem>
                    </List>
                    <List className='listTwo'>
                        <ListItem>
                            <Link href='/'>
                                <T tag="textBody" as='span' style={{ fontSize: '1.6rem' }}>Contact Us</T>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='/'>
                                <T tag="textBody" as='span' style={{ fontSize: '1.6rem' }}>Terms</T>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='/'>
                                <T tag="textBody" as='span' style={{ fontSize: '1.6rem' }}>Privacy</T>
                            </Link>
                        </ListItem>
                    </List>
                    <Social>
                        <IconWrapper>
                            <Icon icon="facebook" color="white" size={12} />
                        </IconWrapper>
                        <IconWrapper>
                            <Icon icon="twitter" color="white" size={12} />
                        </IconWrapper>
                        <IconWrapper>
                            <Icon icon="instagram" color="white" size={12} />
                        </IconWrapper>
                    </Social>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default Footer