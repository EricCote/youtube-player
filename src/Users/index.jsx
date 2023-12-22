import useUsers from './useUsers';

export default function Users() {
  const [users] = useUsers();

  return (
    <>
      <h1>Usagers</h1>
      <p>Ceci est la liste</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.image} height={50} />
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </>
  );
}
