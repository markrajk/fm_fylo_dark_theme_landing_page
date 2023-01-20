import styled, { css } from "styled-components";
import respond from '@/styles/respond'

export const Wrapper = styled.header`
    ${({ theme }) => css`
        padding-block: 2.4em;
        width: 100%;
        background-color: ${theme.color.darkBlue};
    `}
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.4em;
`

export const NavItem = styled.li`
    color: ${({ theme }) => theme.color.white};

    &:hover a {
        text-decoration: underline;
        text-shadow: .5px 0 0 ${({ theme }) => theme.color.white};
    }

    & a {
        text-decoration: none;
        color: inherit;
    }
`