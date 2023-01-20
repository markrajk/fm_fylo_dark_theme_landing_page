import React from 'react'
import PropTypes from 'prop-types'
import Tags from './style'

const Typography = ({ children, style, tag, font, as }) => {

  const Tag = Tags[tag];

  return (
    <Tag style={style} font={font} as={as}>{children}</Tag>
  )
}

Typography.defaultProps = {
  tag: 'p',
}

Typography.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.object,
  tag: PropTypes.string,
  font: PropTypes.string,
  as: PropTypes.string,
}

export default Typography