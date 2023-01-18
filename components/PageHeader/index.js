import React from 'react'
import { Container, Logo } from '..'
import { Nav,Wrapper, NavList, NavItem} from './style'

const index = () => {
  return (
    <header>
      <Container>
        <Wrapper>
          <Logo/>
          <Nav>
              <NavList>
                  <NavItem>Features</NavItem>
                  <NavItem>Features</NavItem>
                  <NavItem>Features</NavItem>
              </NavList>
          </Nav>
        </Wrapper>
    
      </Container>
        
    </header>
  )
}

export default index