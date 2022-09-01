import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const Home = () => {
    const { user } = useAuthContext

    return (
        <div>
            <h1>Home Page</h1>
            <p>{ user }</p>
        </div>
    );
}

export default Home;
