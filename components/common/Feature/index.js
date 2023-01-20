import React from 'react'
import PropTypes from 'prop-types'

import { Icon, Typography as T } from '@/components'

import { Wrapper, Article } from './style'

const Feature = ({ children, icon }) => {
    return (
        <Wrapper>
            <Icon icon={icon} size="80" />
            <Article>
                {children}
            </Article>
        </Wrapper>
    )
}

Feature.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    icon: PropTypes.string.isRequired
}

export default Feature