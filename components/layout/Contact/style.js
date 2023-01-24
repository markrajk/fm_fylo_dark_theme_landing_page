import styled from "styled-components";
import respond from "@/styles/respond";

export const Wrapper = styled.div`
position: relative;
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 17em;
        background-color: ${({ theme }) => theme.color.darkGray};
        z-index: -1;

        ${respond.lg`
            height: 11.6em;
        `}
    }
`

export const Content = styled.div`
    padding: 4em 2.8em;
    background-color: ${({ theme }) => theme.color.darkBlue};
    text-align: center;

    & h2 {
        margin-block-end: 1.6rem;
    }

    & > p:first-of-type {
        margin-block-end: 3.2rem;
    }

    ${respond.lg`
        padding: 4.2em 7.7em 2.2em;
        margin-inline: auto;
        max-width: 86.3rem;

        & > p:first-of-type {
            margin-inline: auto;
            margin-block-end: 3.2rem;
            max-width: 67.3rem;
        }

        & > div {
            width: 100%;
            display: flex;
            align-items: start;
            gap: 2.9em;

            & button {
                width: 20rem!important;
            }

            & > div {
                flex: 1;
            }
        }


    `}

    
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