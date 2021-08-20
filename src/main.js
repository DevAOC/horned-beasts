import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import beasts from './data.json';
import HornedBeast from './hornedBeast';
import HornForm from './hornForm';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: beasts,
    };
  }

  changeHandler = (event) => {
    if (event.target.value === 'No filter') {
      this.setState({
        show: beasts,
      });
    } else {
      this.setState({
        show: beasts.filter((beast) => beast.horns === parseInt(event.target.value)),
      });
    }
  };

  render() {
    return (
      <>
        <HornForm changeHandler={this.changeHandler} />
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
