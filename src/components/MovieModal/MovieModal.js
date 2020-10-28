import Movie from "../Movie/Movie";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MovieModal.css'

const MovieModal = (props) => {
  const movie = props.movie;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>{props.movie.Title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>          
            <p className="modal-content">
              <h5>Description</h5>
              <div>
                <div>
                  <span className="modal-field">Year: </span>{movie.Year}
                </div>
                <div>
                  <span className="modal-field">Imdb Id: </span>{movie.imdbID}
                </div>
                <div>
                  <span className="modal-field">Type: </span>{(movie.Type).charAt(0).toUpperCase()+(movie.Type).slice(1)}
                </div> 
              </div>
            </p>
          </Col>
          <Col>
            <p id="poster" className="modal-content">
              <img src={props.movie.Poster}/>
            </p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
    );
  }

export default MovieModal
