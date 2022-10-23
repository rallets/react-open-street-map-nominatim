import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import { AddressControl } from './components/AddressControl';

const onChangeHandler = (value: string) => {
  console.log('Address changed', value);
}

const onBlurHandler = (value: string) => {
  console.log('Address blur', value);
}

function App() {
  return (
    <Container className='my-4'>
      <Row>
        <Col xs={6}>
          Step 1 - Search for an address
          <AddressControl onChange={onChangeHandler} onBlur={onBlurHandler} value='' />
        </Col>
        <Col xs={6}>
          Step 2 - An address is alreday provided
          <AddressControl onChange={onChangeHandler} onBlur={onBlurHandler} value='Karl Johans gate, Sjøtomta, Sentrum, Oslo, 0154, Norge' />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
