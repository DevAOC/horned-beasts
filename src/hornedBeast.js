import { Component } from "react";

export default class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.src}
          alt={this.props.keyword}
          title={this.props.keyword}
        />
        <p>{this.props.description}</p>
      </>
    );
  }
}
