import React, { useRef } from 'react';

import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { CREATE_NOTA } from '../actionTypes';

function NotaCreate() { 
    const textInputBody = useRef(null), textInputTitle = useRef(null);

    const dispatch = useDispatch();
    const crearNota = () => dispatch({ type: CREATE_NOTA, parameters: { title: textInputTitle.current.value, body: textInputBody.current.value } });

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <Card className='bg-warning' style={{ width: '25rem', height: '25rem' }}>
                <Card.Body>
                    <Card.Title>
                        <Form.Control ref={textInputTitle}/>             
                    </Card.Title>
                    <Card.Text className='mt-3'>
                        <Form.Control as='textarea' style={{ height: '19.5rem', resize: 'none' }}  ref={textInputBody}/>
                    </Card.Text>
                </Card.Body>
            </Card>     
            
            <Button variant="primary" className='mt-4' onClick={crearNota}>Agregar nota</Button>
        </div>       
    );
}

export default NotaCreate;