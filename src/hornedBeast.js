import { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import heart from './img/white-heart.png';

export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };

  render() {
    return (
      <>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={this.props.src}
              alt={this.props.keyword}
              title={this.props.keyword}
              // style={{ height: '25rem' }}
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
        </Col>
      </>
    );
  }
}
