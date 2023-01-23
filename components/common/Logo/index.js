import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'



const Logo = ({ width, height, responsive }) => {
  if (responsive) {
    width = '176'
    height = '52'
  }
  return (
    <Link className='logo' href="/">
      <Image responsive={responsive} width={width} height={height} src={'/images/logo.svg'} alt="Fylo app logo" />
    </Link>
  )
}

Logo.defaultProps = {
  width: '80',
  height: '24',
  responsive: false
}

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  responsive: PropTypes.bool
}

export default Logo