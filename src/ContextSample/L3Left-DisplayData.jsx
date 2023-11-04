import { useContext } from 'react';
import MyContext from './MyContext';

export default function DisplayData() {
  const { firstName, color } = useContext(MyContext);
  return <h1 style={{ color: color }}>The name is {firstName}</h1>;
}
