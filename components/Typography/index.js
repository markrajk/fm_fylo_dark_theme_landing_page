import React from 'react'
import PropTypes from 'prop-types'
import Tags from './style'

const Typography = ({ children, style, tag }) => {

  console.log(Tags[tag], tag, 'TAGS')

  const Tag = Tags[tag];

  return (
    <Tag style={style}>{children}</Tag>
    // <h1>TEST</h1>
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
  tag: PropTypes.string
}

export default Typography