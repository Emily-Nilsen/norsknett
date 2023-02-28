import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ComingSoon } from '@/components/ComingSoon'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          My Next Coffee - Discover unique coffee beans from around the world
        </title>
        <meta
          name="description"
          content="Discover unique coffee beans worldwide. My Next Coffee supports fair wages and sustainable production. Coming soon!"
        />
      </Head>
      {/* <Header /> */}
      <main>
        <ComingSoon />
        {/* <Hero /> */}
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        {/* <Reviews /> */}
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
