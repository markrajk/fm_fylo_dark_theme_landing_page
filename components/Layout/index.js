import React from 'react'
import { PageHeader } from '..'

const Layout = ({children}) => {
  return (
    <>
    <PageHeader/>
    <main>{children}</main>
    </>
  )
}

export default Layout