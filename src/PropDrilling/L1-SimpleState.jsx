/* eslint-disable @typescript-eslint/no-unused-vars,no-eval */
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import BlueBox from './L2Left-BlueBox';
import GreyBox from './L2Right-GreyBox';
import { Row, Col } from 'react-bootstrap';

export default function SimpleState() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Adams');
  const [color, setColor] = useState('blue');

  function change(evt) {
    const { name, value } = evt.target;

    const fnName = 'set' + name[0].toUpperCase() + name.slice(1);
    const str = `${fnName}("${value}")`;

    eval(str);
  }

  return (
    <Row>
      <Col md='6'>
        <BlueBox firstName={firstName} lastName={lastName} color={color} />
      </Col>
      <Col md='6'>
        <GreyBox
          firstName={firstName}
          lastName={lastName}
          color={color}
          onChange={change}
        />
      </Col>
    </Row>
  );
}