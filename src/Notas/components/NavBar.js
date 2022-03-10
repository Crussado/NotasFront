import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

function NavBar() { 
    return (
        <Navbar bg='primary' variant='dark'>
            <Navbar.Brand href='/'>Notas</Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href='help'>Ayuda</Nav.Link>
                <Nav.Link href='create-notas'>Crear nota</Nav.Link>
            </Nav>
        </Navbar>     
    );
}

export default NavBar;