import { Component } from 'react';

class Header extends Component {
  render() {
    return <h1 style={{ textAlign: 'center' }}>{this.props.title}</h1>;
  }
}

export default Header;
