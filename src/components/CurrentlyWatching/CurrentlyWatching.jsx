import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CurrentlyWatching({ animeList }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (animeList) {
            setLoading(false)
        }
    }, [animeList])

    return (
        <>
            {/* for each anime watching display for current user */}
            <div>
                {loading === true ?
                    <>
                        <h1 className="text-3xl my-6 mx-8">Currently Watching</h1>
                        <h2 className="text-center text-3xl my-6 mx-8">Loading....</h2>
                    </>
                    :
                    <>
                        <h2 className="text-center text-3xl my-6 mx-8">Currently Watching</h2>
                        {animeList[0] ?
                            <div className='flex flex-row justify-center flex-wrap mx-5'>
                                {animeList.map(anime =>
                                    <div key={anime.animeId} className='mx-8 mb-2'>
                                        <div className='w-60'>
                                            <div className="card bg-base-100 shadow-xl h-auto w-60 ">
                                                {/* fix state passed through each link */}
                                                <Link to={`/anime/${anime.animeId}`} state={anime}>
                                                    <figure className='min-h-full'>
                                                        <img src={anime.coverImage} alt={anime.animeTitle} className='min-w-full h-full' />
                                                    </figure>
                                                </Link>
                                            </div>
                                            <div className='text-center my-2'>
                                                <h2 className='font-bold'>{anime.animeTitle}</h2>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            :
                            <h2 className="text-center text-3xl my-6 mx-8">Find something to watch!</h2>
                        }

                    </>
                }
            </div>
        </>
    )
}
