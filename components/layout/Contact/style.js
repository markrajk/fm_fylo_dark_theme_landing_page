import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 4em 2.8em;
    background-color: ${({ theme }) => theme.color.darkBlue};
    text-align: center;

    & h2 {
        margin-block-end: 1.6rem;
    }

    & > p:first-of-type {
        margin-block-end: 3.2rem;
    }

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 17em;
        background-color: ${({ theme }) => theme.color.darkGray};
        z-index: -1;
    }
`

export const Input = styled.input`
    padding-left: 2.9rem;
    width: 100%;
    height: 4.8rem;
    border-radius: 2.4rem;
    background-color: ${({ theme }) => theme.color.white};
    border: 0;
    outline: none;
    font-size: 1rem;

    &::placeholder {
        color: hsla(0, 0%, 75%, 1);
    }
`

export const MessageText = styled.p`
    margin-block: 0.4rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.red};
    text-align: left;
    padding-left: 2.9rem;
    height: 1.5rem;
`