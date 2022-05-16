import '../styles/globals.css'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

/*
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-98PH4GZC95"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-98PH4GZC95');
</script>
*/



function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script
      strategy='lazyOnload'
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TUNESKETCH_GOOGLE_ANALYTICS}`}
    />

    <Script strategy='lazyOnload'>
      {
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', ${process.env.NEXT_PUBLIC_TUNESKETCH_GOOGLE_ANALYTICS});`
      }
    </Script>

    <AnimatePresence exitBeforeEnter>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
    </>
  )
}

export default MyApp
