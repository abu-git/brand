import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function About() {
  return (
    <div className='bg-white dark:bg-slate-900 lg:h-screen'>
        <Navigation />
        <section className='bg-white dark:bg-slate-900 mt-8 px-6 grid grid-cols-1 md:grid-cols-2 '>
            {/*--- Left Div on big screens Top Div on small screens ---*/}
            <div className='dark:bg-slate-900 md:text-5xl lg:text-6xl text-4xl font-bold text-right pr-5 pb-5 '>
                <h1>We are a group of African creatives in different places in the world with a common goal to create and give back to the creative community. This is one of our contributions.</h1>
            </div>
            {/*--- Right Div on big screens Bottom Div on small screens ---*/}
            <div className='bg-white dark:bg-slate-800 rounded drop-shadow-lg px-3 py-5 items-center '>
                <h4 className='text-2xl font-light'><span className='text-3xl font-semibold'>Brand.</span> is a media company that aims to highlight the works of young, hard-working and deserving creatives from the continent. We aim to cover a large spectrum of music genres and art. We want to connect the thriving diasporan with the nerdy and resourceful African child.</h4>
                <br />

                <h4 className='text-2xl font-light'>Hopefully, we can give voice to the unheard and inspire the young one. Stay with us on this journey.</h4>
            </div>
        </section>
        <Footer />
    </div>
    
  )
}

export default About