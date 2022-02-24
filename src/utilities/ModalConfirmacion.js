import React from 'react';

import { Modal, Button } from 'react-bootstrap';

function ModalConfirmacion({ show, closeModal, success }) {
    return (
        <Modal size='lg' centered show={ show } onHide={ closeModal }>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Confirmacion
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Esta seguro que desea borrar la nota?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={ () => { success(); closeModal(); } }>Si</Button>
                <Button variant='secondary' onClick={ () => closeModal() }>No</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalConfirmacion;
