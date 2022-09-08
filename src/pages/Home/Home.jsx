import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTrending } from '../../services/animeService'
// import { useAuthContext } from '../../hooks/useAuthContext';

const Home = () => {
    // const { user } = useAuthContext()
    const [trending, setTrending] = useState()

    useEffect(() => {
        console.log('finding trending')
        getTrending()
        .then(animes => {
            setTrending(animes)
        })
    }, []);

    return (
        <>
            <main>
                <div className='text-center'>
                    <h2 className="text-4xl m-5">Home Page</h2>
                </div>
            </main>
        </>
    );
}

export default Home;
