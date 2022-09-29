import React from 'react'
import Trending from '../../components/Trending/Trending'
import CurrentlyWatching from '../../components/CurrentlyWatching/CurrentlyWatching'
import { useEffect } from 'react'

const Home = ({ setAnimes, user }) => {

    useEffect(() => {
        setAnimes(null)
    })

    return (
        <>
            <main>
                <h2 className="text-center text-4xl m-5">Home Page</h2>
                <CurrentlyWatching user={user} />
                <Trending />
            </main>
        </>
    );
}

export default Home;
