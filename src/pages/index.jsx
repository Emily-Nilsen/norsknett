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
        <title>Norsk Nett - Profesjonelle nettside- og grafisk design</title>
        <meta
          name="description"
          content="Profesjonelle nettside- og grafisk design-tjenester for små norske bedrifter og entreprenører"
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
