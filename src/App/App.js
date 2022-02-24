import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap';
import NotasContainer from '../Notas/components/NotasContainer';
import Ayuda from '../Ayuda/components/Ayuda';

function App() {
  const notas = useSelector((state) => state.notasReducer.notas);
  return (
    <div className='App'>
      <Navbar bg='primary' variant='dark'>
          <Navbar.Brand href='mis-notas'>Notas</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='mis-notas'>Mis notas</Nav.Link>
            <Nav.Link href='help'>Ayuda</Nav.Link>
          </Nav>
      </Navbar>
      <Routes>
        <Route path='/mis-notas' element={ <NotasContainer notas={ notas } /> } />
        <Route path='/help' element={ <Ayuda /> } />
      </Routes>
    </div>
  );
}

export default App;
