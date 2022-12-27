import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card, CardBody, Heading, Stack, StackDivider, FormControl, IconButton, HStack, Tag, Select, Input } from '@chakra-ui/react'

import { AddIcon, DeleteIcon, CopyIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux';
import { appendData } from './habitSlice';


function NewModal() {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

    const [selection,setSelection] = useState("blank")




    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        console.log("reached")
        dispatch(appendData(selection));
        setShow(false);
    }

    const handleChange = (e) => setSelection(e.target.value);
    

    

    return (
        <>
            <IconButton
                colorScheme='blue'
                aria-label='Call Segun'
                size='lg'
                align='center'
                marginLeft='150px'
                marginRight='100px'
                isRound='true'
                icon={<AddIcon />}
                onClick={handleShow}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add an activity</Modal.Title>
                </Modal.Header>

                <Modal.Body>


                    <FormControl>

                        <Tag htmlFor="text">Please Select an Option</Tag>
                        <Select placeholder='Select option' value = {selection} onChange= {handleChange} >
                            <option value='Gym'>Gym</option>
                            <option value='Run'>Run</option>
                            <option value='Read'>Read</option>
                            <option value='Meditate'>Meditate</option>
                            <option value='Music'>Music</option>
                        </Select>
                        {/* <button>Submit</button> */}
                    </FormControl>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={ () => handleSubmit() }>
                        Save Changes
                    </Button>

                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewModal;