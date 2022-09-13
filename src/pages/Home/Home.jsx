import React from 'react'
import Trending from '../../components/Trending/Trending'
import CurrentlyWatching from '../../components/CurrentlyWatching/CurrentlyWatching'

const Home = () => {

    return (
        <>
            <main>
                <h2 className="text-center text-4xl m-5">Home Page</h2>
                <CurrentlyWatching />
                <Trending />
            </main>
        </>
    );
}

export default Home;
