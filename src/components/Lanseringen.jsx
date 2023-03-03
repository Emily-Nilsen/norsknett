import Link from 'next/link'

export function Lanseringen() {
  return (
    <div className="bg-t relative z-10 py-36 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 opacity-80 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl xl:max-w-none xl:flex-auto">
            Få varsel når vi lanserer.
          </h2>
          <form
            action="#"
            subject="Abonner på Norsk Nett-nyhetsbrevet"
            name="Norsk Nett - Nyhetsbrevet"
            data-netlify="true"
            method="POST"
            className="w-full max-w-md"
          >
            <input
              type="hidden"
              name="subject"
              value="Abonner på Norsk Nett-nyhetsbrevet"
            />
            <input
              type="hidden"
              name="form-name"
              value="Norsk Nett - Nyhetsbrevet"
            />
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                E-postadresse
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Skriv inn din e-postadresse"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm transition duration-300 ease-in-out hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Gi meg beskjed
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Vi bryr oss om dine data. Les{' '}
              <Link href="/privacy" className="font-semibold text-white">
                personvernserklæringen
              </Link>{' '}
              vår.
            </p>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7fc898" />
                <stop offset={1} stopColor="#2299d5" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
