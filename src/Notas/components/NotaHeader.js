import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

function NotaHeader() { 
    return (
        <Navbar bg='primary' variant='dark'>
            <Navbar.Brand href='mis-notas'>Notas</Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href='mis-notas'>Mis notas</Nav.Link>
                <Nav.Link href='help'>Ayuda</Nav.Link>
                <Nav.Link href='create-notas'>Crear nota</Nav.Link>
            </Nav>
        </Navbar>     
    );
}

export default NotaHeader;