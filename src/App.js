// import logo from './logo.svg'
import './App.css';
import { useState } from 'react';
import { searchAnimes } from './services/animeService';

function App() {
  const [animes, setAnimes] = useState(null)
  const [formData, setFormData] = useState({
    title: ''
  })

  function search(userInput) {
    // searchAnimes(userInput)
    //   .then(animes => {
    //     setAnimes(animes)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    console.log('SEARCHED')
  }

  const handleChange = e => {
    setFormData({
      formData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className="App">
      <form autoComplete='off' onSubmit={search}>
        <input className="input" type="text" name="search" placeholder="Search Anime" autoComplete="off" onChange={handleChange}/>
      </form>
      {/* <button onClick={search}>Click me to search for Demon Slayer!!</button> */}
      {animes ?
        <>
          {animes.map(anime =>
            <div key={anime.id}>
              <p>{anime.title.romaji}</p>
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
