import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'

export default function Privacy() {
  return (
    <div className="relative h-full w-full px-6 py-32 lg:px-8">
      <div className="-mt-20 flex w-full justify-center pt-10 pb-20">
        <div className="flex flex-col items-center">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1677848712/Norsk%20Nett/norsknett_dark_bg_xdnrfb.svg"
            alt="Logo for Norsk Nett, et selskap som tilbyr webutvikling og grafisk design"
            width={100}
            height={159}
          />
          <p className="flex items-center bg-gradient-to-b from-[#7fc898] to-cyan-600 bg-clip-text text-center font-display text-2xl text-transparent">
            norsk nett
          </p>
        </div>
      </div>
      <div className="z-1 relative mx-auto max-w-2xl text-base leading-7 text-stone-500">
        <p className="text-base font-semibold leading-7 text-cyan-600">
          Norsk Nett personvernerklæring
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Personvernerklæring for abonnenter av Norsk Nett nyhetsbrev
        </h1>
        <p className="mt-6 text-xl font-light leading-8">
          For å kunne sende deg vårt nyhetsbrev trenger vi din e-postadresse. Vi
          vil kun bruke denne informasjonen til å sende deg nyhetsbrevet og vil
          aldri dele denne informasjonen med noen tredjepart.
        </p>
        <div className="mt-10 text-xl leading-8">
          <p>
            Vi vil lagre din e-postadresse på våre sikre servere så lenge du
            abonnerer på vårt nyhetsbrev. Hvis du ønsker å avslutte
            abonnementet, kan du når som helst melde deg av ved å klikke på
            avmeldingslenken i nyhetsbrevet.
          </p>

          <p className="mt-10 text-xl font-light leading-8">
            Vi vil lagre din e-postadresse på våre sikre servere så lenge du
            abonnerer på vårt nyhetsbrev. Hvis du ønsker å avslutte
            abonnementet, kan du når som helst melde deg av ved å klikke på
            avmeldingslenken i nyhetsbrevet.
          </p>

          <p className="mt-8">
            Hvis du har spørsmål eller bekymringer angående vår
            personvernerklæring, vennligst kontakt oss på{' '}
            <span className="font-light text-cyan-600">info@norsknett.no</span>.
          </p>

          <Link className="pb-16" href="/">
            <button
              type="button"
              className="my-12 inline-flex items-center rounded-md border border-transparent bg-cyan-700 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm transition duration-300 ease-in-out hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Gå tilbake
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
