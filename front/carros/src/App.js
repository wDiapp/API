import { Route, Router, RouterProvider, Routes, createBrowserRouter }
from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CarroForm from './components/CarroCadastro';
import Carro from './components/Carro';
import CadastrarMarca from './components/MarcaCadastro';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Carro />} />
      <Route path='/cadastrar' element={<CarroForm />} />
      <Route path='/cadastrarMarcas' element={<CadastrarMarca />} />
    </Routes>
    </>
  );
}

export default App;
