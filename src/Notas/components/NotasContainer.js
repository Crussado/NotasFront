import React, { useState } from 'react';
import NotaView from './NotaView';
import { Container, Col, Row } from 'react-bootstrap';
import ModalConfirmacion from '../../utilities/ModalConfirmacion';
import { useDispatch } from 'react-redux';
import { DELETE_NOTA } from '../actionTypes';

function NotasContainer({ notas }) {
    const dispatch = useDispatch();
    const borrarNota = (nota) => dispatch({ type: DELETE_NOTA, parameters: { id: nota.id } });

    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    const [notaDelete, setNotaDelete] = useState({});

    return (
        <Container fluid='xl'>
            <Row className='mb-4'>
                {  
                    notas.map((nota, id) => 
                    <Col md={ 6 } xl={ 4 } key={ id } className='d-flex justify-content-center'> 
                        <NotaView nota={ nota } setNotaDelete={setNotaDelete} showModal={ showModal }/>
                    </Col>
                    )
                } 
            </Row>  
            <ModalConfirmacion show={ show } closeModal={ closeModal } success={ () => borrarNota(notaDelete) }/>   
        </Container>
    );
}

export default NotasContainer;