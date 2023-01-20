import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
    position: relative;
`

export const Grid = styled.div`
    ${({ theme }) => css`
        padding-block: 0 16em;

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
`

export const Article = styled.article`
    text-align: center;

    & h2 {
        margin-block-end: 1.6rem;
    }

    & > p {
        margin-block-end: 1.6rem;
        text-align: left;
    }


`