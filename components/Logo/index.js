import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Logo = () => {
  return (
    <Link href="#">
        <Image width={80} height={24} src={'images/logo.svg'} />
    </Link>
  )
}

export default Logo