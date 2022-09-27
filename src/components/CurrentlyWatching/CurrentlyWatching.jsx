import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CurrentlyWatching() {
    const [current, setCurrent] = useState(null)

    useEffect(() => {
        // call function to retrieve logged in user's currently watching list
    }, [])

    return (
        <>
            <h1>Currently Watching</h1>
            {/* for each anime watching display for current user */}
        </>
    )
}
