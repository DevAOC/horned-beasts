import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import beasts from './data.json';
import HornedBeast from './hornedBeast';
import { FormText } from 'react-bootstrap';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: beasts,
    };
  }

  changeHandler = (event) => {
    switch (event.target.value) {
      case '1':
        this.setState({
          show: beasts.filter((beast) => beast.horns === 1),
        });
        break;
      case '2':
        this.setState({
          show: beasts.filter((beast) => beast.horns === 2),
        });
        break;
      case '3':
        this.setState({
          show: beasts.filter((beast) => beast.horns === 3),
        });
        break;
      case '100':
        this.setState({
          show: beasts.filter((beast) => beast.horns === 100),
        });
        break;
      default:
        this.setState({
          show: beasts,
        });
    }
  };

  render() {
    return (
      <>
        <Form style={{ width: '50%', margin: 'auto', marginTop: '15px', marginBottom: '15px' }}>
          <FormText style={{ color: 'black' }}>Search by Horn-Count</FormText>
          <Form.Select onChange={this.changeHandler} aria-label="Filter horn amount">
            <option value="no filter">No filter</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        </Form>
        <Row>
          {this.state.show.map((item) => {
            return (
              <>
                <HornedBeast
                  title={item.title}
                  src={item.image_url}
                  keyword={item.keyword}
                  description={item.description}
                />
              </>
            );
          })}
        </Row>
      </>
    );
  }
}
