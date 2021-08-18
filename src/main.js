import { Component } from 'react';
import { Row } from 'react-bootstrap';
import data from './data.json';
import HornedBeast from './hornedBeast';

class Main extends Component {
  render() {
    return (
      <Row>
        {data.map((item) => {
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

export default Main;
