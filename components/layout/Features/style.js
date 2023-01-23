import styled from "styled-components";
import respond from "@/styles/respond";

export const Wrapper = styled.section`
    margin-block-end: 16em;
    display: grid;
    grid-template-columns: ifr;
    grid-template-rows: repeat(4, 1fr);
    gap: 8em;

    ${respond.lg`
        margin-inline: auto;
        max-width: 88em;
        margin-block-end: 13.7em;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);

        & h2 {
            font-size: 2.3em;
        }
    `}
`