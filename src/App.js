import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Reis Focus 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <section>
          <form>
              <input type="text" placeholder="Titulo"/>
              <textarea></textarea>
              <button>Criar Nota</button>
          </form>
        </section>
      </header>
    
    </div>
  );
}

export default App;
