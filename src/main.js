import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import data from "./data.json";
import HornedBeast from "./hornedBeast";

class Main extends Component {
  render() {
    const renderBeastArr = data.map((item) => {
      return (
        <HornedBeast
          title={item.title}
          src={item.image_url}
          keyword={item.keyword}
          description={item.description}
        />
      );
    });
    return renderBeastArr;
  }
}

export default Main;
