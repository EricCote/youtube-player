import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);

  async function getAllUsers() {
    const result = await fetch('https://dummyjson.com/users');
    const data = await result.json();

    setUsers(data.users);
  }

  useEffect(() => {
    if (window.localStorage.getItem('users')) {
      setUsers(JSON.parse(window.localStorage.getItem('users')));
    } else {
      getAllUsers();
    }
  }, []);

  useEffect(() => {
    return () => {
      if (users.length > 0) {
        window.localStorage.setItem('users', JSON.stringify(users));
      }
    };
  }, [users]);

  return (
    <>
      <h1>Usagers</h1>
      <p>Ceci est la liste</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.image} />
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </>
  );
}
