import React from 'react'

function Playlists() {
  return (
    <>
        <div className='mt-6 mb-3 px-6 md:px-10 lg:px-20 text-center ml-2 mr-2 md:ml-4 md:mr-4'>
            <h2 className='text-2xl md:text-4xl p-1 bg-clip-text text-transparent bg-gradient-to-l from-amber-200 to-yellow-900'>There are a ton of amazing creations by African artists. <span className='font-bold'>tunesketch</span> aims to give these gems the proper showcase that they deserve. Get a little taste from our highlighted playlists below</h2>
        </div>

        {/* --------------------SPOTIFY PLAYLISTS EMBED ----------------------------------- */}
        <div className='m-4 text-center md:text-right'>
            <h3 className='text-xl text-black dark:text-white md:text-2xl font-light px-6 md:px-10 lg:px-20 py-3'>Spotify Playlists {'>>>'}</h3>
        </div>
        <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 justify-items-center'>
            <div className='bg-white dark:bg-black px-3 py-5 rounded drop-shadow-lg'>
                <h4 className='text-lg mb-2 text-rose-600'>Tunesketch Playlist Vol 2</h4>
                <iframe style={{borderRadius:12 + 'px'}} src="https://open.spotify.com/embed/playlist/249MZ4EnaWJaXWxNmY0VVm?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>

            <div className='bg-white dark:bg-black px-3 py-5 rounded drop-shadow-lg'>
                <h4 className='text-lg mb-2 text-orange-500'>TunesketchPlaylist Vol 1</h4>
                <iframe style={{borderRadius:12 + 'px'}} src="https://open.spotify.com/embed/playlist/5uYWRefiCaxIhgqIzI0nd5?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            
            <div className='bg-white dark:bg-black px-3 py-5 rounded drop-shadow-lg'>
                <h4 className='text-lg mb-2 text-cyan-600'>African BoomBap Spotify Playlist 2</h4>
                <iframe style={{borderRadius:12 + 'px'}} src="https://open.spotify.com/embed/playlist/7aJJigm0DokSoqLcPyzt3m?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </section>
    </>
  )
}

export default Playlists