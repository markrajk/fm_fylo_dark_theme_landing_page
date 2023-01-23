import React from 'react'
import Link from 'next/link'

import { Container, Logo, Typography as T } from '@/components'

import { Wrapper, Nav, NavList, NavItem } from './style'

const PageHeader = () => {
  return (
    <Wrapper>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo responsive />
        <Nav>
          <NavList>
            <NavItem>
              <Link href="/">
                <T tag="textLink" as="span" font="display">Features</T>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/">
                <T tag="textLink" as="span" font="display">Team</T>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/">
                <T tag="textLink" as="span" font="display">Sign In</T>
              </Link>
            </NavItem>
          </NavList>
        </Nav>
      </Container>

    </Wrapper>
  )
}

export default PageHeader