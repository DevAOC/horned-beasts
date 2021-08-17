import { Component } from "react";

export default class Footer extends Component {
  render() {
    return <h3>{this.props.author}</h3>;
  }
}
