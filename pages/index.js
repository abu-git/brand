import Head from 'next/head'
import Navigation from '../components/Navigation'
import LandingHeader from '../components/LandingHeader'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navigation />
      {<LandingHeader />}
    </div>
    
  )
}
