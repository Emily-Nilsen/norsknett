import Link from 'next/link'

export function Newsletter() {
  return (
    <div className="pb-16 pt-60 sm:py-24">
      <div className="max-w-lg">
        <div className="text-3xl tracking-tight text-white sm:text-4xl">
          <h2 className="max-w-lg text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Get notified for the launch of My Next Coffee.
          </h2>{' '}
          <p className="mt-2 max-w-md text-lg leading-8 tracking-normal text-stone-300">
            Join us in supporting sustainable coffee production while indulging
            in the world’s best beans!
          </p>
        </div>
        <form
          action="#"
          subject="Subscribe to My Next Coffee"
          name="My Next Coffee - Newsletter"
          data-netlify="true"
          method="POST"
          className="mt-10 max-w-md"
        >
          <input
            type="hidden"
            name="subject"
            value="Subscribe to My Next Coffee"
          />
          <input
            type="hidden"
            name="form-name"
            value="My Next Coffee - Newsletter"
          />
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-800 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-yellow-800 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-800"
            >
              Notify me
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-stone-200">
            We care about your data. Read our{' '}
            <Link
              href="/privacy"
              className="font-semibold text-yellow-700 transition duration-300 ease-in-out hover:text-yellow-800"
            >
              privacy&nbsp;policy
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
