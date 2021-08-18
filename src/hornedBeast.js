import { Component } from 'react';
import {Button} from 'react-bootstrap';
import heart from './img/white-heart.png';

export default class HornedBeast extends Component {

  constructor (props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.src}
          alt={this.props.keyword}
          title={this.props.keyword}
          width="400px"
        />
        <p>{this.props.description}</p>
        <Button variant="danger" onClick={this.handleClick}>
          <img src={heart} alt="" width="25px" />
          <span>  </span>
          {this.state.clicks}
        </Button>
      </>
    );
  }
}
