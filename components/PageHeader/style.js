import styled from "styled-components";
import respond from '@/styles/respond'

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`

export const Wrapper = styled.div`
    padding-block: 2.4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
`

export const NavItem = styled.li`
    color: ${({ theme }) => theme.color.white};

    ${respond.md`
        color: ${({ theme }) => theme.color.red};
    `}
`