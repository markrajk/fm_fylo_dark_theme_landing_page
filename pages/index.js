import Head from 'next/head'

// import { getAllTestimonials } from '@/lib/testimonials'
import { getAllTestimonials } from './api/testimonials'

import { Hero, Features, Info, Testimonials, Contact, Footer } from '@/components'


export async function getStaticProps() {
  let data = getAllTestimonials()


  return {
    props: {
      testimonials: data,
    }
  }
}

export default function Home({ testimonials }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Fylo landing page with dark theme and features grid</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
      </Head>
      <Hero />
      <Features />
      <Info />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <Footer />
    </>
  )
}
