import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'

export default function Privacy() {
  return (
    <div className="relative h-full w-full bg-yellow-800/10 px-6 py-32 lg:px-8">
      <div className="-mt-20 flex w-full justify-center pt-10 pb-20">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1677586250/My%20Next%20Coffee/my_next_coffee_dark_bg_wwg8nt.svg"
          alt="My Next Coffee logo - supporting fair wages and sustainable production of coffee beans"
          width={89}
          height={89}
        />
      </div>
      <div className="z-1 relative mx-auto max-w-2xl text-base leading-7 text-stone-600">
        <p className="text-base font-semibold leading-7 text-yellow-700">
          My Next Coffee Privacy Policy
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Your privacy matters to us - learn how we protect your information
        </h1>
        <p className="mt-6 text-xl leading-8 text-stone-700">
          At My Next Coffee, we take the privacy of our subscribers very
          seriously. By subscribing to our newsletter, you agree to receive
          emails from us containing information about our products, promotions,
          and company updates. We will not share your personal information with
          any third-party organizations unless required by law.
        </p>
        <div className="mt-10 text-xl leading-8">
          <p>
            We collect personal information such as your name and email address
            solely for the purpose of sending you our newsletter. We use
            industry-standard security measures to protect your data and ensure
            that it is not misused, altered, or accessed without authorization.
          </p>

          <p className="mt-8">
            You can unsubscribe from our newsletter at any time by clicking the
            “Unsubscribe” link located at the bottom of our emails. If you have
            any questions or concerns regarding our privacy policy or how we
            handle your personal information, please contact us at{' '}
            <span className="font-semibold text-yellow-800">
              privacy@mynextcoffee.com
            </span>
            .
          </p>
          <p className="mt-8">
            By subscribing to our newsletter, you acknowledge that you have read
            and agree to our privacy policy. We may update this policy from time
            to time, and any changes will be posted on our website.
          </p>
          <Link className="pb-16" href="/">
            <button
              type="button"
              className="my-12 inline-flex items-center rounded-md border border-transparent bg-yellow-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm transition duration-300 ease-in-out hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:ring-offset-2"
            >
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
