import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
export const Add = ({ add }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [Name, setName] = useState('');
    const [Date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [Rating, setRating] = useState('1');

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const handleRating = (x) => setRating(x)
    const handleSubmit = (e) => {
        e.preventDefault();
        const newmovies = {
            id: Math.random(),
            Name,
            Date,
            Rating,
            image,
        }
        add(newmovies)
        closeModal()
    }
    return (
        <div>
            <Button class="btn btn-secondary btn-lg btn-block" variant="primary" size="lg" onClick={openModal}>
                Add Movie
            </Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={Name} onChange={(e) => setName(e.target.value)} required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="url" value={image} onChange={(e) => setImage(e.target.value)}  required/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" value={Date} onChange={(e) => setDate(e.target.value) } required  />
                    </Form.Group>

                    <StarRating handleRating={handleRating} rat={Rating} required />
                    <Button variant="primary" type="submit" class="btn btn-secondary btn-lg btn-block">
                        Confirm
                    </Button>
                    <Button variant="primary"  class="btn btn-secondary btn-lg btn-block">
                        Cancel
                    </Button>
                </Form>

            </Modal>
        </div>
    )
}
export default Add;