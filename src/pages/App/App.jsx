import "./App.css"
import { useEffect, useState } from 'react';
import { searchAnimes } from '../../services/animeService';
import Navbar from '../../components/Navbar/Navbar';
import AnimeSearch from "../../components/AnimeSearch/AnimeSearch";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [animes, setAnimes] = useState(null)
  const [formData, setFormData] = useState({
    title: ''
  })
  
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



  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<AnimeSearch animes={animes} handleChange={handleChange} handleSearch={handleSearch} />} />
      </Routes>
    </>
  );
}

export default App;
