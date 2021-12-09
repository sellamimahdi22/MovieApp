
import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap';
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
const Edit = ({movie,edit}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [Name, setName] = useState(movie.Name);
    const [Date, setDate] = useState(movie.Date);
    const [image, setImage] = useState(movie.image);
    const [Rating, setRating] = useState(movie.Rating);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const handleRating = (x) => setRating(x)

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedMovie = {
            id:movie.id,
            Name,
            Date,
            image,
            Rating
        }
        edit(movie.id,editedMovie)
        closeModal()
    }
    
    return (
        <div>
            <Button onClick={openModal}>Edit</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
           <Form onSubmit={handleSubmit} >
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
                    <Button variant="primary"  class="btn btn-secondary btn-lg btn-block" onClick={closeModal}>
                        Cancel
                    </Button>
                </Form>
      </Modal>
        </div>
    )
}

export default Edit
