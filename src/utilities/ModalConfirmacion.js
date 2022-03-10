import React from 'react';

import { Modal, Button } from 'react-bootstrap';
import {useSelector} from 'react-redux';

function ModalConfirmacion({ show, closeModal, success, msj }) {
    const disabled = useSelector((state) => state.notasReducer.apiLoading);
    return (
        <Modal size='md' centered show={ show }>
            <Modal.Header>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Confirmación
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {msj}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button disabled={ disabled } onClick={ success }>Si</Button>
                <Button disabled={ disabled } variant='secondary' onClick={ closeModal }>No</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalConfirmacion;
