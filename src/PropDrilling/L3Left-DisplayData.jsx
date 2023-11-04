export default function DisplayData({ firstName, lastName, color }) {
  return (
    <h1 style={{ color: color }}>
      The name is {firstName} {lastName}
    </h1>
  );
}
