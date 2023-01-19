import React from 'react'
import { Wrapper } from './style'

const Container = ({ children, style }) => {
  return (
    <Wrapper style={style}>{children}</Wrapper>
  )
}

export default Container