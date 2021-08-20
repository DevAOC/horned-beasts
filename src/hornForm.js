import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { FormText } from 'react-bootstrap';

export default class HornForm extends Component {
  render() {
    return (
      <Form style={{ width: '50%', margin: 'auto', marginTop: '15px', marginBottom: '15px' }}>
        <FormText style={{ color: 'black' }}>Search by Horn-Count</FormText>
        <Form.Select onChange={this.props.changeHandler} aria-label="Filter horn amount">
          <option value="No filter">No filter</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
      </Form>
    );
  }
}
