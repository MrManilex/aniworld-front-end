import { useState, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { searchAnimes } from '../../services/animeService'
import { useAuthContext } from "../../hooks/useAuthContext"
import { useLogout } from '../../hooks/useLogout'
import Navbar from '../../components/Navbar/Navbar'
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import Home from "../Home/Home"
import AnimeSearch from '../AnimeSearch/AnimeSearch'
import AnimeDetails from '../AnimeDetails/AnimeDetails'
import Profile from '../Profile/Profile'
import ProfileSettings from '../ProfileSettings/ProfileSettings'
import { getCurrentlyWatching } from '../../services/profileService'

function App() {
  const [animes, setAnimes] = useState(null)
  const [formData, setFormData] = useState({
    title: ''
  })
  const [animeList, setAnimeList] = useState(null)

  const { user } = useAuthContext()
  const { logout } = useLogout()
  const navigate = useNavigate()

  useEffect(() => {
    // call function to retrieve logged in user's currently watching list
    if (user) {
      getCurrentlyWatching(user.profile._id)
        .then(response => {
          if (response.error) {
            logout()
          } else {
            setAnimeList(response)
          }
        })
    }
  }, [user])

  const handleSearch = evt => {
    evt.preventDefault()
    searchAnimes(formData)
      .then(animes => {
        setAnimes(animes)
      }).catch(error => {
        console.log(error)
      })
  }

  const handleChange = e => {
    setFormData({
      formData,
      [e.target.name]: e.target.value
    })
  }

  const handleLogout = () => {
    logout()
    setAnimes(null)
    navigate('/home')
  }

  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <Routes>
        <Route path='/' element={user ? <Navigate to='/home' /> : <Navigate to='/login' />} />
        <Route path='/home' element={user ? <Home setAnimes={setAnimes} animeList={animeList} /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <Login setAnimes={setAnimes} /> : <Navigate to='/home' />} />
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/home' />} />

        {/* Profile Section */}
        <Route path='/user/:username' element={user ? <Profile user={user} /> : <Login />} />
        <Route path='/user/settings' element={user ? <ProfileSettings user={user} /> : <Login />} />

        {/* Anime Section */}
        <Route path='/search/anime' element={<AnimeSearch animes={animes} handleChange={handleChange} handleSearch={handleSearch} />} />
        <Route path='/anime/:id'
          element={
            <AnimeDetails user={user} setAnimeList={setAnimeList} animeList={animeList} />} />
      </Routes>
    </>
  )
}

export default App
