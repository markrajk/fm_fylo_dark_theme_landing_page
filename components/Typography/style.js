import styled, { css } from "styled-components";
import respond from "@/styles/respond";

const textH1 = styled.h1`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.display};
        font-size: 2.4em;
        line-height: 1.5;
        font-weight: ${theme.font.weight.bold};

        ${respond.lg`
            font-size: 4em;
        `}   
    `}
`

const textH2 = styled.h2`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.display};
        font-size: 1.8em;
        line-height: 1.3;
        font-weight: ${theme.font.weight.bold};

        ${respond.lg`
            font-size: 4em;
            line-height: 1.06;
        `}   
    `}
`

const textH3 = styled.h3`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.display};
        font-size: 1.8em;
        line-height: 1.3;
        font-weight: ${theme.font.weight.bold};

        ${respond.lg`
            font-size: 2em;
            line-height: 1.2;
        `}   
    `}
`

const textH4 = styled.h4`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.display};
        font-size: 1.8em;
        line-height: 1.3;
        font-weight: ${theme.font.weight.bold};

        ${respond.lg`
            font-size: 3.2em;
            line-height: 1.5;
        `}   
    `}
`

const textH5 = styled.h5`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.body};
        font-size: 1em;
        line-height: 1.2;
        font-weight: ${theme.font.weight.bold};
        letter-spacing: .5px;
    `}
`

const textBodySmall = styled.p`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.body};
        font-size: 1em;
        line-height: 1.8;

        ${respond.lg`
            font-size: 1.4em;
            line-height: 1.5;
        `}
    `}
`

const textBody = styled.p`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.body};
        font-size: 1.4em;
    `}
`

const textBodyBig = styled.p`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.body};
        font-size: 1.4em;

        ${respond.lg`
            font-size: 1.6em;
        `}
    `}
`

const textBodyHero = styled.p`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.body};
        font-size: 1.4em;

        ${respond.lg`
            font-size: 2em;
        `}
    `}
`

const textLink = styled.span`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.body};
        font-size: 1.2em;
        line-height: 1.3;
        color: inherit;

        ${respond.lg`
            font-size: 1.6em;
        `}
    `}
`

const textTag = styled.p`
    ${({ theme, font }) => css`
        font-family: ${font ? theme.font.family[font] : theme.font.family.body};
        font-size: .8em;
        line-height: 1.2;
        letter-spacing: .5px;
    `}
`



export default {
    textH1,
    textH2,
    textH3,
    textH4,
    textH5,
    textBodySmall,
    textBody,
    textBodyBig,
    textBodyHero,
    textLink,
    textTag
}