import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

 const fichaMedica = {
  sangre: "0+",
  estado: "sano",
  altura:"6.1"


 }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aprendiendo React 
        </p>

    <div className='Componentes'>  
        <hr/>
        <MiComponente/>
        <hr/>
        <SegundoComponente/>
        <hr/>
        <TercerComponente
         nombre = "Ezequiel"
         apellido = "Cruz Diaz"
         ficha = {fichaMedica} 
        />
        </div>
      
      </header>
    </div>
  );
}

export default App;
