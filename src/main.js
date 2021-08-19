import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import beasts from './data.json';
import HornedBeast from './hornedBeast';

export default class Main extends Component {
  render() {
    return (
      <Row>
        {beasts.map((item) => {
          return (
            <HornedBeast
              title={item.title}
              src={item.image_url}
              keyword={item.keyword}
              description={item.description}
            />
          );
        })}
      </Row>
    );
  }
}
