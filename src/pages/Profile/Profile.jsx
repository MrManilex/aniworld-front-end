import React from 'react'

export default function Profile({ user }) {

    return (
        <>
            <main>
                {/* Banner Image Here  */}
                <div className='flex flex-col text-center'>
                    {user.profile.avatar &&
                        <img src={user.profile.avatar} alt="User's Avatar" />
                    }
                    <div>
                        <h2 className='text-4xl'>{user.profile.username}'s Profile</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
            </main>

        </>
    )
}
