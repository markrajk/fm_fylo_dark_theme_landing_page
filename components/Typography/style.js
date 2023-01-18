import styled, { css } from "styled-components";
import respond from "@/styles/respond";

const h1 = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.font.size.fs800[0]};
        line-height: 1.5;

        ${respond.lg`
            font-size: ${theme.font.size.fs800[1]};
        `}
    `}
`

export default {
    h1,
}