import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getTrending } from '../../services/animeService'
// import { useAuthContext } from '../../hooks/useAuthContext';

const Home = () => {
    // const { user } = useAuthContext()
    const [trending, setTrending] = useState()

    useEffect(() => {
        console.log('finding trending')
        getTrending()
            .then(animes => {
                setTrending(animes)
            })
    }, []);

    return (
        <>
            <main>
                <div className='text-center'>
                    <h2 className="text-4xl m-5">Home Page</h2>
                </div>
                <div className='flex flex-row flex-wrap place-content-center'>
                    {trending &&
                        <>
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
                                            <h2 className='font-bold'>{anime.title.english}</h2>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    }
                </div>
            </main>
        </>
    );
}

export default Home;
