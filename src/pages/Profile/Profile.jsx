import React from 'react'

export default function Profile({ user }) {

    return (
        <>
            <main className='flex flex-col'>
                {/* Banner Image Here  */}
                <div className='flex flex-row text-center self-center '>
                    {user.profile.avatar ?
                        <div className="mx-10 avatar">
                            <div className="w-24 rounded-xl ">
                                <img src={user.profile.avatar} alt={`${user.profile.username}'s Avatar`} />
                            </div>
                        </div>
                        :
                        <label tabIndex="0" className="mx-10 btn btn-ghost btn-circle avatar self-center" style={{ pointerEvents: 'none' }}>
                            <div className="w-10 rounded-full">
                                <span className="text-4xl">{user.profile.username[0]}</span>
                            </div>
                        </label>
                    }
                    <div>
                        <h2 className='text-4xl'>{user.profile.username}'s profile</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
            </main>

        </>
    )
}
