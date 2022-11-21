import '../styles/globals.css'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

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

/* Page Loader settings ----------------------------------*/
function Loading(){
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true)
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => {setLoading(false)}, 1000)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading && (
    <div className='wrapper'>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-98PH4GZC95`}
      />

      <Script id='analytics' strategy='lazyOnload'>
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-98PH4GZC95');`
        }
      </Script>
      
      <Loading />
      <AnimatePresence exitBeforeEnter>
        <ThemeProvider enableSystem={true} attribute="class">
          
          <Component {...pageProps} />
          
              
        </ThemeProvider>
      </AnimatePresence>
    </>
  )
}

export default MyApp
