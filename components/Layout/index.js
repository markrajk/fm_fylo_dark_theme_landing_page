import React from 'react'
import { PageHeader } from '..'
import PropTypes from 'prop-types'

import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  weights: [400, 700],
  subsets: ['latin'],
})

const Layout = ({children}) => {
  return (
    <>
    <PageHeader/>
    <main className={openSans.className}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired,
}

export default Layout