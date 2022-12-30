import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, FormControl, IconButton, Tag, Input } from '@chakra-ui/react'

import { AddIcon, } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux';
import { addHabbit } from '../habit/habitSlice';
import { useSelector } from 'react-redux';

function NewModal(props) {
    const data = useSelector(state => state.habit.data)
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const [activity,setActivity] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {



        const datenew = props.selected?.toLocaleDateString()


        if(activity in data){
            alert("Activity already exists")

        }

        else{
            const newobj = {...data}
            newobj[activity] = []
            dispatch(addHabbit(newobj));
        }


        setShow(false);
        setActivity('')
    }

    const handleChange = (e) => setActivity(e.target.value);

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

                        <Tag htmlFor="text">Please enter an activity</Tag>
                        <Input
                            value={activity}
                            onChange={handleChange}
                            placeholder='Activity'
                            size='sm'
                        />
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