// import "./App.css"
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { searchAnimes } from '../../services/animeService';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from '../../hooks/useLogout'
import Navbar from '../../components/Navbar/Navbar';
import AnimeSearch from '../AnimeSearch/AnimeSearch';
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Home from "../Home/Home";
import AnimeDetails from '../AnimeDetails/AnimeDetails';

function App() {
  const [animes, setAnimes] = useState(null)
  const [formData, setFormData] = useState({
    title: ''
  })

  const { user } = useAuthContext()
  const { logout } = useLogout()
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  }, [])

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
        <Route path='/home' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/home' />} />
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/home' />} />
        <Route path='/search/anime' element={<AnimeSearch animes={animes} handleChange={handleChange} handleSearch={handleSearch} />} />
        <Route path='/anime/:id' element={<AnimeDetails />} />
      </Routes>
    </>
  );
}

export default App;
