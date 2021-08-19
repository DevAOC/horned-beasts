import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class SelectedBeast extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img
              variant="top"
              src={this.props.src}
              alt={this.props.keyword}
              title={this.props.keyword}
              onClick={this.handleModal}
            />
            <Card.Body>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
