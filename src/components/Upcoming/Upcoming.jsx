import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getUpcoming } from '../../services/animeService'

export default function Upcoming() {
    const [upcoming, setUpcoming] = useState()

    useEffect(() => {
        getUpcoming()
            .then(animes => {
                setUpcoming(animes)
            })
    }, []);

    return (
        <div>
            <h2 className="text-4xl my-6 mx-8">Upcoming Next Season</h2>
            {upcoming &&
                <div className='flex flex-row flex-wrap mx-5'>
                    {upcoming.map(anime =>
                        <div key={anime.id} className='mx-8 mb-2'>
                            <div className='w-60'>
                                <div className="card bg-base-100 shadow-xl h-auto w-60 ">
                                    <Link to={`/anime/${anime.id}`} state={anime}>
                                        <figure className='min-h-full'>
                                            <img src={anime.coverImage.large} alt={anime.title.romaji} className='min-w-full h-full' />
                                        </figure>
                                    </Link>
                                </div>
                                <div className='text-center my-2'>
                                    <h2 className='font-bold'>{anime.title.english ? anime.title.english : anime.title.userPreferred}</h2>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}
