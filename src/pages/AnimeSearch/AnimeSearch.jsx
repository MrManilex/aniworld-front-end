import React from 'react'
// import { useState } from 'react'
// import { searchAnimes } from '../../services/animeService'

export default function AnimeSearch({ animes, handleChange, handleSearch }) {
    return (
        <>
            <main>
                <form autoComplete='off' onSubmit={handleSearch}>
                    <input className="input" type="text" name="search" placeholder="Search Anime" autoComplete="off" onChange={handleChange} />
                </form>
                {animes ?
                    <>
                        {animes.map(anime =>
                            <div key={anime.id}>
                                <img src={anime.bannerImage} alt={`${anime.title.romaji}'s banner`} />
                                <img src={anime.coverImage.large} alt={anime.title.romaji} />
                                <p>{anime.title.romaji}</p>
                                <p>Description: {anime.description}</p>
                                {anime.trailer &&
                                    <>
                                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${anime.trailer.id}M,7U6Y5T43  QA`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </>
                                }
                                {!anime.trailer &&
                                    <p>No Trailer</p>
                                }
                            </div>
                        )}
                    </>
                    :
                    <div>Search Anime!</div>
                }
            </main>
        </>
    )
}
