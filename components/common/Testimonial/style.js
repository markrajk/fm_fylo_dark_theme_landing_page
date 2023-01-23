import styled from "styled-components";
import respond from "@/styles/respond";

export const Wrapper = styled.div`
    padding-inline: 2rem;
    padding-block: 2.4em 2.2rem;
    background-color: hsla(217, 31%, 18%, 1);
    border-radius: 4px;

    ${respond.lg`
        padding-inline: 2.4rem;
        padding-block: 4em 2.6rem;
    `}
`

export const Info = styled.div`
    margin-block-start: 1.6em;
    display:grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
        'image name'
        'image position';
    gap: 0.4em 0.8em;
`

export const ImgWrapper = styled.div`
    position: relative;
    grid-area: image;
    width: 2.4em;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
`