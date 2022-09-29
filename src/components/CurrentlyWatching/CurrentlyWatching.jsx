import React from 'react'
import { useEffect, useState } from 'react'
import { getCurrentlyWatching } from '../../services/profileService'
import { Link } from 'react-router-dom'

export default function CurrentlyWatching({ user }) {
    const [current, setCurrent] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // call function to retrieve logged in user's currently watching list
        getCurrentlyWatching(user.profile._id)
            .then(animes => {
                setCurrent(animes)
                setLoading(false)
            })
    }, [])

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
                        <h2 className="text-4xl my-6 mx-8">Currently Watching</h2>
                        {current[0] ?
                            <div className='flex flex-row flex-wrap mx-5'>
                                {current.map(anime =>
                                    <div key={anime.id} className='mx-8 mb-2'>
                                        <div className='w-60'>
                                            <div className="card bg-base-100 shadow-xl h-auto w-60 ">
                                                <Link to={`/anime/${anime.id}`} state={anime}>
                                                    <figure className='min-h-full'>
                                                        {/* <img src={anime.coverImage} alt={anime.animeTitle} className='min-w-full h-full' /> */}
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
