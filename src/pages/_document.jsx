import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="no">
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dt3k2apqd/image/upload/v1677831075/Norsk%20Nett/norsk_nett_favicon_wkgvvi.svg"
        />
        <link rel="stylesheet" href="https://use.typekit.net/hat7gwm.css" />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
