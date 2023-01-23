import styled from "styled-components";
import respond from "@/styles/respond";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Article = styled.article`
    margin-block-start: 2.4em;
    text-align: center;

    & h2 {
        margin-block-end: .8rem;
    }

    ${respond.lg`
        max-width: 35em;
    `}
`