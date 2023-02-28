import Link from 'next/link'

export function Newsletter() {
  return (
    <div className="pb-16 pt-60 sm:py-24">
      <div className="max-w-lg">
        <div className="text-3xl tracking-tight text-white sm:text-4xl">
          <h2 className="max-w-lg text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Varsle meg om lanseringen av Norsk Nett.
          </h2>{' '}
          <p className="mt-2 max-w-md text-lg leading-8 tracking-normal text-stone-300">
            Kontakt oss for å lære mer!
          </p>
        </div>
        <form
          action="#"
          subject="Abonner på Norsk Nett-nyhetsbrevet"
          name="Norsk Nett - Nyhetsbrevet"
          data-netlify="true"
          method="POST"
          className="mt-10 max-w-md"
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
              E-post
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
              placeholder="Skriv inn din e-postadresse"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-lime-900 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
            >
              Varsle meg
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-stone-200">
            Vi bryr oss om dine data. Les{' '}
            <Link
              href="/privacy"
              className="font-semibold text-lime-700 transition duration-300 ease-in-out hover:text-lime-900"
            >
              personvernserklæringen
            </Link>{' '}
            vår.
          </p>
        </form>
      </div>
    </div>
  )
}
