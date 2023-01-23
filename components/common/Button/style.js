import styled, { css } from "styled-components";

export const Wrapper = styled.button`
    ${({ theme }) => css`
    position: relative;
    font-size: 1rem;
    height: 4.8em;
    padding-inline: 2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.color.accent};
    border: 0;
    border-radius: 2.4em;
    outline: none;
    color: inherit;
    overflow: hidden;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    

    & > *:first-child {
        z-index: 2;
    }

    &::after {
        content: "";
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: hsla(186, 62%, 72%, 1);
        z-index: 1;
        transition: opacity ${theme.transition.fast} ease;
    }

    &:hover:after {
        opacity: 1;
    }
    `}
`