import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'

export default function Privacy() {
  return (
    <div className="relative h-full w-full px-6 py-32 lg:px-8">
      <div className="-mt-20 flex w-full justify-center pt-10 pb-20">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Norsk%20Nett/norsk_nett_white_bg_ybtx3m.svg"
          alt="My Next Coffee logo - supporting fair wages and sustainable production of coffee beans"
          width={89}
          height={89}
        />
      </div>
      <div className="z-1 relative mx-auto max-w-2xl text-base leading-7 text-stone-600">
        <p className="text-base font-semibold leading-7 text-lime-800">
          Norsk Nett personvernerklæring
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Personvernerklæring for abonnenter av Norsk Nett nyhetsbrev
        </h1>
        <p className="mt-6 text-xl leading-8 text-stone-700">
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

          <p className="mt-10 text-xl leading-8">
            Vi vil lagre din e-postadresse på våre sikre servere så lenge du
            abonnerer på vårt nyhetsbrev. Hvis du ønsker å avslutte
            abonnementet, kan du når som helst melde deg av ved å klikke på
            avmeldingslenken i nyhetsbrevet.
          </p>

          <p className="mt-8">
            Hvis du har spørsmål eller bekymringer angående vår
            personvernerklæring, vennligst kontakt oss på{' '}
            <span className="font-semibold text-lime-800">
              info@norsknett.no
            </span>
            .
          </p>

          <Link className="pb-16" href="/">
            <button
              type="button"
              className="my-12 inline-flex items-center rounded-md border border-transparent bg-lime-900 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm transition duration-300 ease-in-out hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-900 focus:ring-offset-2"
            >
              Gå tilbake
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
