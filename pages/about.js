import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function About() {
  return (
    <>
        <Navigation />
        <section className='mt-8 px-6 grid grid-cols-1 md:grid-cols-2'>
            <div className='md:text-5xl lg:text-6xl text-4xl font-bold text-right pr-5 pb-5'>
                <h1>We are a group of African creatives in different places in the world with a common goal to create and give back to the creative community. This is one of our contributions.</h1>
            </div>
            <div className='bg-white rounded drop-shadow-lg px-3 py-5 items-center'>
                <h4 className='text-2xl font-light'><span className='text-3xl font-semibold'>Brand.</span> is a media company that aims to highlight the works of young, hard-working and deserving creatives from the continent. We aim to cover a large spectrum of music genres and art. We want to connect the diasporan with the nerdy African child.</h4>
                <br />

                <h4 className='text-2xl font-light'>Hopefully, we can give voice to the unheard and inspire the young one. Stay with us on this journey.</h4>
            </div>
        </section>
        <Footer />
    </>
    
  )
}

export default About