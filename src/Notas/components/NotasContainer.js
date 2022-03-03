import React from 'react';

import NotaView from './NotaView';
import { Container, Col, Row } from 'react-bootstrap';

function NotasContainer({ notas }) {
    return (
        <Container fluid='xl'>
            <Row className='mb-4'>
                {  
                    notas.map((nota, id) => 
                    <Col md={ 6 } xl={ 4 } key={ id } className='d-flex justify-content-center'> 
                        <NotaView nota={ nota }/>
                    </Col>
                    )
                } 
            </Row>     
        </Container>
    );
}

export default NotasContainer;