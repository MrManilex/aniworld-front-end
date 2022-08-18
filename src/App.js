// import logo from './logo.svg'
import { searchAnimes } from './services/animeService';
import './App.css';

function App() {

  function search(){
    searchAnimes()
  }


  return (
    <div className="App">
      <button onClick={search}>Click me to search for something</button>
    </div>
  );
}

export default App;
