import React from 'react'
import PropTypes from 'prop-types'

import { Typography as T } from '@/components'

import { Wrapper } from './style'

const Button = ({ children }) => {
    return (
        <Wrapper>
            <T tag="textBody" font="display" style={{ fontWeight: '700' }}>{children}</T>
        </Wrapper>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

export default Button