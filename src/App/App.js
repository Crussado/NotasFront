import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import NotasContainer from '../Notas/components/NotasContainer';
import Ayuda from '../Ayuda/components/Ayuda';
import NotaCreate from '../Notas/components/NotaCreate';
import NavBar from '../Notas/components/NavBar';
import LoginPage from '../Login/LoginPage';

function App() {
    const  apiLoadingOn = useSelector((state) => state.notasReducer.apiLoading);
    return (
        <div className='App'>
            <NavBar/>
            {
                apiLoadingOn && <Spinner className='position-fixed top-50 start-50' style={{ zIndex: '1060' }} animation="border" />
            }
            <Routes>
                <Route path='/' element={ <NotasContainer /> } />
                <Route path='/help' element={ <Ayuda /> } />
                <Route path='/create-notas' element={ <NotaCreate /> } />
                <Route path='/login' element={ <LoginPage /> } />
            </Routes>
            
        </div>
    );
}

export default App;
