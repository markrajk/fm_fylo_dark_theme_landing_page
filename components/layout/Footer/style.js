import styled from "styled-components";

export const Wrapper = styled.footer`
    padding: 5rem .3em;
    padding-top: 8.3em;
    background-color: ${({ theme }) => theme.color.darkGray};
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
    'logo' 
    'location'
    'info'
    'listOne'
    'listTwo'
    'social';

    & .logo {
        margin-block-end: 3.5rem;
        grid-area: logo;
    }
`

export const InfoWrapper = styled.div`
    grid-area: info;
`

export const Info = styled.div`
    margin-block-end: 1.5rem;
    grid-area: location;
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    align-items: start;
    gap: 1.5rem;

    & svg {
        margin-block-start: .2rem;
    }
`

export const List = styled.ul`
    list-style: none;

    &.listOne {
        grid-area: listOne;
    }

    &.listTwo {
        grid-area: listTwo;
    }

    &:first-of-type {
        margin-block-end: 4.8rem;
    }

    &:last-of-type {
        margin-block-end: 5.6rem;
    }
`

export const ListItem = styled.li`
    color: ${({ theme }) => theme.color.white};

    &:hover a {
        text-shadow: .5px 0 0 ${({ theme }) => theme.color.white};
    }

    & a {
        text-decoration: none;
        color: inherit;
    }
`

export const Social = styled.div`
    grid-area: social;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-self: center;
`

export const IconWrapper = styled.div`
    padding: .7re;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.8rem;
    aspect-ratio: 1/1;
    border: 1px solid #DFE4F0;
    border-radius: 50%;
`