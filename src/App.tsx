import React from 'react';
import { Col, Container } from 'react-bootstrap';
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
    <Container>
      <Col xs={6}>
        <div className='my-4'>
          <AddressControl onChange={onChangeHandler} onBlur={onBlurHandler} value='' />
        </div>
      </Col>
    </Container>
  );
}

export default App;
