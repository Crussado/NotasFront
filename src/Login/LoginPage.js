import React from 'react';

import { Form, Container, Button } from 'react-bootstrap';

function LoginPage() {
    return (
        <Container fluid='lg'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUser">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control className='w-25' type="text" placeholder="User" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control className='w-25' type="password" placeholder="Password" />
                </Form.Group>
            </Form>
            <Button variant="primary">Ingresar</Button>
        </Container>
        
    );
}

export default LoginPage;