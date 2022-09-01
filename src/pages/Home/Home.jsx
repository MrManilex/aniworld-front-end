import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const Home = () => {
    const { user } = useAuthContext()

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;
