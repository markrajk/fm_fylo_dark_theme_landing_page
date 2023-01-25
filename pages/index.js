import Head from 'next/head'

import { getAllTestimonials } from '@/lib/testimonials'

import { Hero, Features, Info, Testimonials, Contact, Footer } from '@/components'


export async function getStaticProps() {
  let { data, error } = await getAllTestimonials()

  return {
    props: {
      testimonials: data,
      fallback: false
    }
  }
}

export default function Home({ testimonials }) {
  return (
    <>
      <Head>
        <title>Fylo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
