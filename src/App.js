// import logo from './logo.svg'
import './App.css';
import { useState } from 'react';
import { searchAnimes } from './services/animeService';

function App() {
  const [animes, setAnimes] = useState(null)

  function search() {
    searchAnimes()
      .then(animes => {
        setAnimes(animes)
      }).catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="App">
      <button onClick={search}>Click me to search for Demon Slayer!!</button>
      {animes ?
        <>
          {animes.map(anime =>
            <>
              <p>{anime.title.romaji}</p>
            </>
          )}
        </>
        :
        <div>click the button!!</div>
      }
    </div>
  );
}

export default App;
