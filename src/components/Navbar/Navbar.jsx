import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar({ user, handleLogout }) {
    return (
        <div className="navbar bg-base-100 w-8/12 m-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/home">Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='' className="justify-between">
                                Search
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to="/search/anime">Anime</Link></li>
                                <li><Link to="/search/manga" style={{ pointerEvents: 'none' }}>Manga</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/browse" style={{ pointerEvents: 'none' }}>Browse</Link></li>
                        <li><Link to="/news">News</Link></li>
                    </ul>
                </div>
                <Link to="/home" className="btn btn-ghost normal-case text-xl">AniWorld</Link>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal p-0 gap-2'>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/browse" style={{ pointerEvents: 'none' }}>Browse</Link></li>
                    <li><Link to="/search/anime">Anime</Link></li>
                    <li><Link to="/search/manga" style={{ pointerEvents: 'none' }}>Manga</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
            </div>
            <div className="navbar-end">

                {user &&
                    <>
                        <div className="form-control">
                            {/* <input type="text" placeholder="Search" className="input input-bordered" /> */}
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <span className="text-2xl">{user.email[0]}</span>
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={`/user/${user.profile.username}`}>
                                        Profile
                                        {/* <span className="badge">New</span> */}
                                    </Link>
                                </li>
                                <li><Link to="/user/settings">Settings</Link></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                    </>
                }
                {!user &&
                    <>
                        <Link className="btn btn-ghost" to="/login">Login</Link>
                        <Link className="btn btn-info" to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </div>
    )
}
