import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/My%20Next%20Coffee/my_next_coffee_favicon_nkwr6i.svg"
        />
        <link rel="stylesheet" href="https://use.typekit.net/wfu3yua.css" />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
