import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aprendiendo React 
        </p>

    <div className='Componentes'>  
      {/* mi primer componente */}
        <hr/>
        <MiComponente/>
        <hr/>
        <SegundoComponente/>
        </div>
      
      </header>
    </div>
  );
}

export default App;
