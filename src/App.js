import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {
  return (
    <div className='appp-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo' 
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
