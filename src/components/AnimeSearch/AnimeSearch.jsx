import React from 'react'
import { useState } from 'react'
// import { searchAnimes } from '../../services/animeService'

export default function AnimeSearch({ animes, handleChange, handleSearch }) {
    return (
        <>
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
                        </div>
                    )}
                </>
                :
                <div>Search Anime!</div>
            }
        </>
    )
}
