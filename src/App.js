import logo from './logo.svg';
import './App.css';
import Initiater from './components/Initiater';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
        
        <p> Do an online business deal using a trustless Middleman</p>
    <Initiater/>
        <p> You can't use our service yet. I have no clue how it works yet</p>
        <a
          className="App-link"
          href="https://github.com/DeBelg/SimpleEscrow/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Mf (DeBelg)
        </a>
      </header>
    </div>
  );
}

export default App;
