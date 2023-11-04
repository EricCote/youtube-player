import DisplayData from './L3Left-DisplayData';

export default function BlueBox({ firstName, lastName, color }) {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        height: '200px',
        borderRadius: '5px',
        padding: '5px 20px',
      }}
    >
      <DisplayData firstName={firstName} lastName={lastName} color={color} />
    </div>
  );
}
