// import logo from './logo.svg'
import './App.css';
import { useState } from 'react';
import { searchAnimes } from './services/animeService';

function App() {
  const [animes, setAnimes] = useState(null)
  const [formData, setFormData] = useState({
    title: ''
  })

  // function handleSearch() {
  //   searchAnimes(formData.search)
  //     .then(animes => {
  //       setAnimes(animes)
  //     }).catch(error => {
  //       console.log(error)
  //     })
  // }
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

  // if(formData){
  //   console.log(formData.search)
  // }


  return (
    <div className="App">
      <form autoComplete='off' onSubmit={handleSearch}>
        <input className="input" type="text" name="search" placeholder="Search Anime" autoComplete="off" onChange={handleChange}/>
      </form>
      {/* <button onClick={search}>Click me to search for Demon Slayer!!</button> */}
      {animes ?
        <>
          {animes.map(anime =>
            <div key={anime.id}>
              <p>Romaji: {anime.title.romaji} English: {anime.title.english}</p>
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
