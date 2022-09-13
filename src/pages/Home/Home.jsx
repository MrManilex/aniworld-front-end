import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getTrending } from '../../services/animeService'

const Home = () => {
    const [trending, setTrending] = useState()

    useEffect(() => {
        getTrending()
            .then(animes => {
                setTrending(animes)
            })
    }, []);

    return (
        <>
            <main>
                <h2 className="text-center text-4xl m-5">Home Page</h2>
                <div>
                    <h2 className="text-4xl my-6 mx-8">Trending Now</h2>
                    {trending &&
                        <div className='flex flex-row flex-wrap mx-5'>
                            {trending.map(anime =>
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
            </main>
        </>
    );
}

export default Home;
