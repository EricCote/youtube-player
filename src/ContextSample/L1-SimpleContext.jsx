/* eslint-disable no-unused-vars,no-eval  */
import { useState } from 'react';
import BlueBox from './L2Left-BlueBox';
import GreyBoxes from './L2Right-GreyBoxes';
import { Row, Col } from 'react-bootstrap';
import MyContext from './MyContext';

export default function SimpleContext() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Adams');
  const [color, setColor] = useState('blue');

  function change(evt) {
    const { name, value } = evt.target;

    switch (name) {
      case 'firstName':
        return setFirstName(value);
      case 'lastName':
        return setLastName(value);
      case 'color':
        return setColor(value);
    }

    // const fnName = 'set' + name[0].toUpperCase() + name.slice(1);
    // const str = `${fnName}("${value}")`;

    // eval(str);
  }

  return (
    <MyContext.Provider
      value={{ firstName, lastName, color, onChange: change }}
    >
      <Content />
    </MyContext.Provider>
  );
}

//the following would prevent the content from re-rendering
//when the props are the same (hint: here they are always the same)
//let MemoContent = React.memo(Content);

function Content() {
  return (
    <Row>
      <Col md='6'>
        <BlueBox />
      </Col>
      <Col md='6'>
        <GreyBoxes />
      </Col>
    </Row>
  );
}
