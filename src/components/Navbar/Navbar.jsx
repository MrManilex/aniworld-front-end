import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const handleClick = () => {
        logout()
        navigate('/home')
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">AniWorld</a>
                <ul className='menu menu-horizontal p-0 gap-2'>
                    <li><Link to="/home">Home</Link></li>
                    {/* <li><Link to="/profile">Profile</Link></li> */}
                    <li><Link to="/search/anime">Anime</Link></li>
                    <li><Link to="/search/manga"style={{pointerEvents: 'none'}}>Manga</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
            </div>
            <div className="flex-none gap-2 navbar-end">

                {user &&
                    <>
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><button onClick={handleClick}>Logout</button></li>
                            </ul>
                        </div>
                    </>
                }
                {!user &&
                    <>
                        <Link className="btn btn-secondary" to="/login">Login</Link>
                        <Link className="btn btn-info" to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </div>
    )
}
