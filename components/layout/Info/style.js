import styled, { css } from 'styled-components';
import respond from '@/styles/respond';

export const Wrapper = styled.section`
    position: relative;
`

export const Grid = styled.div`
    ${({ theme }) => css`
        padding-block: 0 16em;

        ${respond.lg`
            padding-block: 0 17.9em;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            gap: 5.7em;
            align-items: center;
            justify-content: start;
            text-align: left;
        `}
    `}

    & a {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: .5rem;
        font-size: 1rem;
        text-decoration: none;
        color: ${({ theme }) => theme.color.cyan};

        &::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 100%;
            max-width: 0;
            height: 1px;
            background-color: ${({ theme }) => theme.color.white};
            transition: max-width .2s ease-in-out;
        }

        &:hover {
            color: ${({ theme }) => theme.color.white};

            &:after {
                max-width: 100%;
            }
        }
    }
`;

export const ImageWrapper = styled.div`
    margin-block-end: 4.8em;
    position: relative;
    width: 100%;
    aspect-ratio: 720/534;

    ${respond.lg`
        margin-block-end: 0;
    `}
`

export const Article = styled.article`
    text-align: center;

    & h2 {
        max-width: 40rem;
        margin-block-end: 1.6rem;
    }

    & > p {
        margin-block-end: 1.6rem;
        text-align: left;
        max-width: 56rem;
    }


    ${respond.lg`
        & h2 {
            text-align: left;
        }
    `}
`