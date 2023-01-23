import styled from "styled-components";
import respond from "@/styles/respond";

export const Wrapper = styled.div`
    margin-block-end: 16em;
    position: relative;
    padding-inline: 1.5em;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 2.4em;

    ${respond.lg`
        margin-block-end: 20em;
        margin-inline: auto;
        max-width: 118em;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        gap: 4em;
    `}
`

export const ImgWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 1em;
    width: 2.5em;
    aspect-ratio: 55/45;
    z-index: 1;
    transform: translate(50%, -100%);

    ${respond.lg`
        width: 6em;
        left: .5em;
        transform: translate(0, -80%);
        z-index: -1;
    `}
`