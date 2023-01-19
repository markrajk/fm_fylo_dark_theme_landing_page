import React from 'react'
import Link from 'next/link'

import { Container, Logo, Typography as T } from '..'

import { Wrapper, Nav, NavList, NavItem } from './style'

const index = () => {
  return (
    <Wrapper>
      <Container style={{ display: 'flex', justifyContent: 'space-between', paddingInline: '2.4em' }}>
        <Logo />
        <Nav>
          <NavList>
            <NavItem>
              <Link href="/">
                <T tag="textLink" as="span">Features</T>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/">
                <T tag="textLink" as="span">Team</T>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/">
                <T tag="textLink" as="span">Sign In</T>
              </Link>
            </NavItem>
          </NavList>
        </Nav>
      </Container>

    </Wrapper>
  )
}

export default index