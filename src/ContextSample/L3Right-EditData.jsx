import { useContext } from 'react';
import MyContext from './MyContext';
import { Form } from 'react-bootstrap';

//Hooks only work with functions
export default function EditData() {
  const { firstName, lastName, color, onChange } = useContext(MyContext);
  return (
    <>
      <Form.Control
        value={firstName}
        name='firstName'
        placeholder='First Name'
        onChange={onChange}
        className='mb-4'
      />
      {lastName !== undefined && (
        <Form.Control
          value={lastName}
          name='lastName'
          placeholder='Last Name'
          onChange={onChange}
          className='mb-4'
        />
      )}
      <Form.Control
        value={color}
        name='color'
        placeholder='Color'
        onChange={onChange}
      />
    </>
  );
}

//
//
//
//
//
//
//
//
//
//
//
//
//
