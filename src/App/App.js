import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'
import NotasContainer from '../Notas/components/NotasContainer';
import Ayuda from '../Ayuda/components/Ayuda';
import NotaCreate from '../Notas/components/NotaCreate';
import NavBar from '../Notas/components/NavBar';
import LoginPage from '../Login/LoginPage';
import { FETCH_NOTAS } from '../Notas/actionTypes';

function App() {
    const notas = useSelector((state) => state.notasReducer.notas);
    const dispatch = useDispatch();
    useEffect(() => dispatch({ type: FETCH_NOTAS }), []);
    return (
        <div className='App'>
            <NavBar/>
            <Routes>
                <Route path='/mis-notas' element={ <NotasContainer notas={ notas } /> } />
                <Route path='/help' element={ <Ayuda /> } />
                <Route path='/create-notas' element={ <NotaCreate /> } />
                <Route path='/login' element={ <LoginPage /> } />
            </Routes>
            
        </div>
    );
}

export default App;
