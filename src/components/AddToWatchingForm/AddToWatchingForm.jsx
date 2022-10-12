import React, { useState, useEffect } from 'react'
import { addToWatching } from '../../services/animeService'

export default function AddToWatchingForm({ anime, animeList, setAnimeList }) {
    const [formData, setFormData] = useState({
        animeTitle: '',
        animeId: '',
        coverImage: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // setAnimeList([...animeList, anime])
        // addToWatching(formData)
        console.log('submitted: ', formData)
    }

    const handleAddToWatching = () => {
        setFormData({
            animeTitle: anime.title.userPreferred,
            animeId: anime.id,
            coverImage: anime.coverImage.large
        })
    }

    return (
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <button onClick={handleAddToWatching} className='justify-self-center mt-5 btn btn-info'>Add To Watching</button>
        </form>
    )
}
