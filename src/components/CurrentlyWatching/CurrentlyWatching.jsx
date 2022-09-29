import React from 'react'
import { useEffect, useState  } from 'react'
import { getCurrentlyWatching } from '../../services/profileService'

export default function CurrentlyWatching({ user }) {
    const [current, setCurrent] = useState(null)

    useEffect(() => {
        // call function to retrieve logged in user's currently watching list
        // getCurrentlyWatching(user.profile._id)
        //     .then(animes => {
        //         setCurrent(animes)
        //     })
    }, [])

    return (
        <>
            <h1>Currently Watching</h1>
            {/* for each anime watching display for current user */}
        </>
    )
}
