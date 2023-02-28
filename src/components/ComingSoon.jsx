import Image from 'next/image'

import { Container } from '@/components/Container'
import { Newsletter } from './Newsletter'

export function ComingSoon() {
  return (
    <div className="relative flex min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Norsk%20Nett/tomas-robertson-wu_a2B7QGbQ-unsplash_apr6ne.jpg"
          alt="Indulge in the rich and diverse flavours of coffee beans from My Next Coffee"
          fill
          className="h-full w-full object-cover"
          unoptimized
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900" />
      <div className="absolute inset-0 bg-gray-900/20" />

      <main className="z-1 relative flex w-screen py-6 sm:py-12">
        <Container className="w-full">
          <div className="flex flex-col justify-between ">
            <div className="">
              <div className="flex w-full justify-center">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Norsk%20Nett/norsk_nett_white_bg_ybtx3m.svg"
                  alt="My Next Coffee logo - supporting fair wages and sustainable production of coffee beans"
                  width={110}
                  height={110}
                />
              </div>
              <div className="prose mx-auto mt-24 mb-0 max-w-lg lg:prose-xl sm:my-24 md:my-32 ">
                <p className="mt-3 text-center text-2xl text-white sm:text-3xl">
                  Snart lanserer vi profesjonelle nettside- og grafisk
                  design-tjenester for små norske bedrifter og entreprenører.
                </p>
              </div>
            </div>
            <div className="">
              <Newsletter />
              <footer className="sm:my-4">
                <p className="my-3 text-stone-200 sm:my-6">info@norsknett.no</p>
                <p className="text-sm text-stone-400">
                  &copy; Norsk Nett, {new Date().getFullYear()}. Copyright.
                </p>
              </footer>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}
