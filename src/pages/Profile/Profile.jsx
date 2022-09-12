import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Profile({ user }) {

    return (
        <>
            <main>
                <div>
                    {user.profile.avatar &&
                        <img src={user.profile.avatar} alt="User's Avatar" />
                    }
                    <h2>{user.profile.username}'s Profile</h2>
                    <p>{user.email}</p>
                </div>
            </main>

        </>
    )
}
