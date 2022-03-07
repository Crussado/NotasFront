import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material/';


function NotaView({ nota, openModal }) {
    return (
        <div>
            <Card className='mt-4 bg-warning overflow-auto' style={{width: '18rem', height: '10rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        { nota.title }
                    </Card.Title>
                    <Card.Text>
                        { nota.body }
                    </Card.Text>
                    <Row className='justify-content-end'>
                        <Col xs={ 3 }>
                            <IconButton onClick={ openModal }>
                                <DeleteOutlineIcon/>
                            </IconButton>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>            
        </div>
    );
}

export default NotaView;