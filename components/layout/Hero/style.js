import styled, { css } from 'styled-components';

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
        }

        & .bottom {
            width: 100%;
            height: 50%;
            background-color: ${({ theme }) => theme.color.darkMain};
        }
    }
`

export const Grid = styled.div`
    ${({ theme }) => css`
        padding-block: 2.2em 12em;

    `}
`;

export const ImageWrapper = styled.div`
    margin-block-end: 3.3em;
    position: relative;
    width: 100%;
    aspect-ratio: 720/534;
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
`