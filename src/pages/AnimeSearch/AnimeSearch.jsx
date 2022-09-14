import React from 'react'
import { Link } from 'react-router-dom'
import Trending from '../../components/Trending/Trending'

export default function AnimeSearch({ animes, handleChange, handleSearch }) {
    return (
        <>
            <main>
                <div className='text-center my-8'>
                    <form autoComplete='off' onSubmit={handleSearch}>
                        <input className="input input-bordered w-full max-w-xs" type="text" name="search" placeholder="Search Anime" autoComplete="off" onChange={handleChange} />
                    </form>
                </div>
                {animes ?
                    <div className='flex flex-row flex-wrap place-content-center'>
                        {animes.map(anime =>
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
                    :
                    <Trending />
                }
            </main>
        </>
    )
}
