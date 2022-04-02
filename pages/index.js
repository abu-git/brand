import Head from 'next/head'
import Navigation from '../components/Navigation'
import LandingHeader from '../components/LandingHeader'
import LandingGrid from '../components/LandingGrid'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navigation />
      {<LandingHeader />}
      <LandingGrid />
    </div>
    
  )
}
