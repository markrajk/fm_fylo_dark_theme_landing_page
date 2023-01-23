import styled, { css } from 'styled-components';
import respond from '@/styles/respond';

export const Wrapper = styled.section`
    position: relative;
    background-color: ${({ theme }) => theme.color.darkBlue};
    z-index: 1;


    & .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        z-index: -1;

        & .top {
            width: 100%;
            height: 14.1em;
            background-image: url('/images/bg-curvy-mobile.svg');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: center;

            ${respond.lg`
                background-image: url('/images/bg-curvy-desktop.svg');
                height: 44.9em;
            `}
        }

        & .bottom {
            width: 100%;
            height: 50%;
            background-color: ${({ theme }) => theme.color.darkMain};


            ${respond.lg`
                height: 0;
            `}
        }
    }
`

export const Grid = styled.div`
    ${({ theme }) => css`
        padding-block: 2.2em 12em;

    ${respond.lg`
        padding-block-start: 0;
        padding-block-end: 15.8em;
    `}
    `}
`;

export const ImageWrapper = styled.div`
    margin-block-end: 3.3em;
    position: relative;
    width: 100%;
    aspect-ratio: 720/534;

    ${respond.lg`
        margin-block-end: 3.6em;
        max-width: 72em;
        margin-inline: auto;
    `}
`

export const Article = styled.article`
    text-align: center;

    & h1 {
        margin-block-end: 1.5rem;
    }

    & > p {
        margin-block-end: 3.2rem;
        padding-inline: .5rem;
    }

    ${respond.lg`
        max-width: 73.4em;
        margin-inline: auto;

        & h1 {
            margin-block-end: 3.2rem;
        }

        & > p {
            padding-inline: 7.25rem;
        }
    `}
`