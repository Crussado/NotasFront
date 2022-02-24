import React from 'react';

import NotaView from './NotaView';
import { Container, Col, Row } from 'react-bootstrap';

function NotasContainer({ notas }) {
    return (
        <Container>
            <Row>
                { 
                    notas.map((nota, id) => 
                        <Col md={ 4 } key={ id }>
                            <NotaView nota={ nota }/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}

export default NotasContainer;