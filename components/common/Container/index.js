import React from 'react'
import { Wrapper } from './style'

const Container = ({ children, style }) => {
  return (
    <Wrapper className='container' style={style}>{children}</Wrapper>
  )
}

export default Container