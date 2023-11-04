import { useContext } from 'react';
import MyContext from './MyContext';

export default function DisplayData() {
  const { firstName, lastName, color } = useContext(MyContext);
  return (
    <h1 style={{ color: color }}>
      The name is {firstName} {lastName}
    </h1>
  );
}
