import useCaching from './useCaching';

export default function useUsers() {
  const [users, setUsers] = useCaching('users', getAllUsers);

  async function getAllUsers() {
    const result = await fetch('https://dummyjson.com/users');
    const data = await result.json();

    setUsers(data.users);
  }

  return [users, setUsers];
}
