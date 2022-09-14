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
        <div>Upcoming</div>
    )
}
