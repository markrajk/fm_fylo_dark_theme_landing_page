import {css} from 'styled-components'

const size = {
    xs: '375px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
}

const respond = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${size[label]}) {
            ${css(...args)}
        }
    `
    return acc
}
, {})

export default respond