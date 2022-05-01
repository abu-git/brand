import Head from "next/head"

function Layout({children}) {
  return (
    <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="A small media company established in 2022" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        </Head>
        {children}
    </>
  )
}

export default Layout