// import logo from './logo.svg'
import './App.css';
import { useState } from 'react';
import { searchAnimes } from './services/animeService';

function App() {
  const [animes, setAnimes] = useState(null)
  const [formData, setFormData] = useState({
    title: ''
  })

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
    <div className="App">
      <form autoComplete='off' onSubmit={handleSearch}>
        <input className="input" type="text" name="search" placeholder="Search Anime" autoComplete="off" onChange={handleChange}/>
      </form>
      {animes ?
        <>
          {animes.map(anime =>
            <div key={anime.id}>
              <img src={anime.bannerImage} alt={`${anime.title.romaji}'s banner image`} />
              <img src={anime.coverImage.large} alt={anime.title.romaji} />
              {/* <p>{anime.coverImage.medium}</p> */}
              <p>{anime.title.romaji}</p>
              <p>Description: {anime.description}</p>
            </div>
          )}
        </>
        :
        <div>Search Anime!</div>
      }
    </div>
  );
}

export default App;
