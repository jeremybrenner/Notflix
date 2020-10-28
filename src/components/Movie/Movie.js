import './Movie.css';
import React, { useEffect, useReducer, Suspense } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MovieModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

}

function Movie({ movie }) {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <div className="movie-card">
      <div>{movie.Title}</div>
      <img 
        src={movie.Poster}
        onClick={() => setModalShow(true)}
      />
      <MovieModal 
        show={modalShow} 
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Movie;