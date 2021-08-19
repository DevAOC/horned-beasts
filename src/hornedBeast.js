import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import SelectedBeast from './selectedBeast';
import heart from './img/white-heart.png';

export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      modal: false,
    };
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };

  handleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <>
        <Col style={{ marginTop: '15px', marginBottom: '15px' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={this.props.src}
              alt={this.props.keyword}
              title={this.props.keyword}
              onClick={this.handleModal}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Button variant="danger" onClick={this.handleClick}>
                <img src={heart} alt="" width="25px" />
                <span> </span>
                {this.state.clicks}
              </Button>
            </Card.Body>
          </Card>
          <SelectedBeast
            title={this.props.title}
            src={this.props.src}
            alt={this.props.keyword}
            description={this.props.description}
            show={this.state.modal}
            onClose={this.handleModal}
          />
        </Col>
      </>
    );
  }
}
