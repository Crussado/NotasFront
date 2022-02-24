import React, { useState } from 'react';

import { Card, Row, Col } from 'react-bootstrap';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material/';
import { useDispatch } from 'react-redux';

import ModalConfirmacion from '../../utilities/ModalConfirmacion';
import { DELETE_NOTA } from '../actionTypes';

function NotaView({ nota }) {
    const styles = {
        cardStyle: { width: '18rem', marginTop: '1rem', backgroundColor: 'yellow' },
        titleStyle: { textAlign: 'center' }
    }
    const dispatch = useDispatch();
    const borrarNota = (nota) => dispatch({ type: DELETE_NOTA, parameters: { id: nota.id } });

    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);
    return (
        <div>
            <Card style={ styles.cardStyle }>
                <Card.Body>
                    <Card.Title style={ styles.titleStyle }>{ nota.title }</Card.Title>
                    <Card.Text>
                        { nota.body }
                    </Card.Text>
                    <Row className='justify-content-end'>
                        <Col xs={ 3 }>
                            <IconButton onClick={ () => showModal() }>
                                <DeleteOutlineIcon/>
                            </IconButton>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <ModalConfirmacion show={ show } closeModal={ closeModal } success={ () => borrarNota(nota) }/>
        </div>
    );
}

export default NotaView;