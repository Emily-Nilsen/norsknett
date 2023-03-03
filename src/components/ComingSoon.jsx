import Image from 'next/image'

import { Container } from '@/components/Container'
import { Lanseringen } from './Lanseringen'

export function ComingSoon() {
  return (
    <div className="relative -mb-72 flex min-h-screen sm:-mb-60">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1677830073/Norsk%20Nett/high-tech_mountain_2_zfu4tw.png"
          alt="Abstrakt bilde av en tåkete furuskog foran et høyt, mørkt fjell med en futuristisk, cyanblå og grønn wireframe-teknologibakgrunn som viser en 3D-rutenett-cyber-teknologi AI-tech-wire-nettverk."
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
            <div>
              <div className="flex w-full justify-center sm:justify-start">
                <div className="flex">
                  <Image
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1677848712/Norsk%20Nett/norsknett_dark_bg_xdnrfb.svg"
                    alt="Logo for Norsk Nett, et selskap som tilbyr webutvikling og grafisk design"
                    width={100}
                    height={159}
                  />
                  <p className="flex items-center bg-gradient-to-b from-[#7fc898] to-[#2299d5] bg-clip-text font-display text-2xl text-transparent ">
                    norsk <br /> nett
                  </p>
                </div>
              </div>

              <div className="prose mx-auto mt-24 mb-0 max-w-lg lg:prose-xl sm:my-24 md:my-32 ">
                <p className="mt-3 text-center text-2xl text-white sm:text-3xl">
                  Snart lanserer vi profesjonelle nettside- og grafisk
                  design-tjenester for små norske bedrifter og entreprenører.
                </p>
              </div>
            </div>
            <div className="">
              <Lanseringen />
              {/* <footer className="sm:my-4">
                <p className="my-3 text-stone-200 sm:my-6">info@norsknett.no</p>
                <p className="text-sm text-stone-400">
                  &copy; Norsk Nett, {new Date().getFullYear()}. Copyright.
                </p>
              </footer> */}
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}
