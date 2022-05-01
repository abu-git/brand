import Head from "next/head"

function Meta({title, description, image, twcard, url, domain, type}) {
  return (
    <Head>
        <meta property='og:url' content={url} />
        <meta property='og:type' content={type} />
        <meta property='og:title' content={title} />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property='og:image' content={image} key="ogimg" ></meta>

        <meta name="twitter:card" content={twcard} key="tcard"></meta>
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} key="ttitle"></meta>
        <meta name="twitter:description" content={description} key='tdesc'  />
        <meta name="twitter:image" content={image} key="timg" ></meta>
    </Head>
  )
}

export default Meta