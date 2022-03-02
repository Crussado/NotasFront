import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import NotasContainer from '../Notas/components/NotasContainer';
import Ayuda from '../Ayuda/components/Ayuda';
import NotaCreate from '../Notas/components/NotaCreate';
import NotaHeader from '../Notas/components/NotaHeader';
import { FETCH_NOTAS } from '../Notas/actionTypes';

function App() {
  const notas = useSelector((state) => state.notasReducer.notas);
  const dispatch = useDispatch();
  useEffect(() => dispatch({ type: FETCH_NOTAS }), []);
  return (
    <div className='App'>
      <NotaHeader/>
      <Routes>
        <Route path='/mis-notas' element={ <NotasContainer notas={ notas } /> } />
        <Route path='/help' element={ <Ayuda /> } />
        <Route path='/create-notas' element={ <NotaCreate /> } />
      </Routes>
    </div>
  );
}

export default App;
