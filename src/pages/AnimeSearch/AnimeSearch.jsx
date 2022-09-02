import React from 'react'
// import { useState } from 'react'
// import { searchAnimes } from '../../services/animeService'

export default function AnimeSearch({ animes, handleChange, handleSearch }) {
    return (
        <>
            <main>
                <div className='text-center my-8'>
                    <form autoComplete='off' onSubmit={handleSearch}>
                        <input className="input input-bordered w-full max-w-xs" type="text" name="search" placeholder="Search Anime" autoComplete="off" onChange={handleChange} />
                    </form>
                </div>
                <div className='flex flex-row flex-wrap'>
                    {animes &&
                        <>
                            {animes.map(anime =>
                                <div key={anime.id} className='mx-8 mb-2'>
                                    {/* <img src={anime.bannerImage} alt={`${anime.title.romaji}'s banner`} /> */}
                                    {/* <div>
                                        <img src={anime.coverImage.large} alt={anime.title.romaji} />
                                        <div className='text-center'>
                                            <p>{anime.title.romaji}</p>
                                        </div>
                                    </div> */}
                                    {/* <p>Description: {anime.description}</p> */}
                                    {/* {anime.trailer &&
                                        <>
                                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${anime.trailer.id}M,7U6Y5T43  QA`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </>
                                    }
                                    {!anime.trailer &&
                                        <p>No Trailer</p>
                                    } */}
                                    <div className='w-60'>
                                        <div className="card bg-base-100 shadow-xl h-auto w-60 ">
                                            <figure className='min-h-full'>
                                                <img src={anime.coverImage.large} alt={anime.title.romaji} className='min-w-full h-full' />
                                            </figure>
                                        </div>
                                        <div className='text-center my-2'>
                                            <h2 className='font-bold'>{anime.title.romaji}</h2>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    }
                </div>
            </main>
        </>
    )
}
