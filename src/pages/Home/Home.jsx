import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const Home = () => {
    const { user } = useAuthContext()

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
