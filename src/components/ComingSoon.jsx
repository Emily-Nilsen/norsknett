import Image from 'next/image'

import { Container } from '@/components/Container'
import { Newsletter } from './Newsletter'

export function ComingSoon() {
  return (
    <div className="relative flex min-h-screen">
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/My%20Next%20Coffee/My_Next_Coffee_desktop_with_logo_r4mvhl.webp"
          alt="Indulge in the rich and diverse flavours of coffee beans from My Next Coffee"
          fill
          className="h-full w-full object-cover"
          unoptimized
          priority
        />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-r from-stone-900 sm:block" />
      <div className="absolute inset-0 sm:hidden">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/My%20Next%20Coffee/My_Next_Coffee_mobile_v2_hri287.webp"
          alt="Indulge in the rich and diverse flavours of coffee beans from My Next Coffee"
          fill
          className="h-full w-full object-cover"
          unoptimized
          priority
        />
      </div>
      <div className="absolute h-[100vh] w-full bg-gradient-to-b from-stone-900 sm:hidden" />
      <div className="absolute bottom-0 left-0 h-[100vh] w-full bg-gradient-to-t from-stone-900/90 sm:hidden" />
      <div className="absolute inset-0 bg-stone-900/20" />
      <main className="z-1 relative flex w-screen py-6 sm:py-12">
        <Container className="w-full">
          <div className="flex flex-col justify-between space-y-20">
            <div className="">
              <div className="flex w-full justify-center">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/My%20Next%20Coffee/my_next_coffee_dark_bg_wwg8nt.svg"
                  alt="My Next Coffee logo - supporting fair wages and sustainable production of coffee beans"
                  width={110}
                  height={110}
                />
              </div>
              <div className="prose my-12 mb-0 max-w-lg lg:prose-xl sm:my-24 md:my-32">
                <p className="mt-3 text-left text-lg text-white sm:text-2xl ">
                  Discover unique coffee beans from around the world with My
                  Next Coffee! We’re more than just a coffee retailer - we’re
                  committed to helping coffee bean producers earn fair wages by
                  enabling them to grow and process their beans.
                </p>
                <p className="mt-6 text-left text-lg text-white sm:mt-3 sm:text-2xl">
                  We can offer you the freshest and most authentic coffee
                  experience possible by providing local coffee producers with
                  the knowledge and infrastructure to support the entire coffee
                  bean production process.
                </p>
              </div>
            </div>
            <div className="">
              <Newsletter />
              <footer className="sm:my-4">
                <p className="my-3 text-stone-200 sm:my-6">
                  info@mynextcoffee.com
                </p>
                <p className="text-sm text-stone-400">
                  &copy; My Next Coffee, {new Date().getFullYear()}. All rights
                  reserved.
                </p>
              </footer>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}
