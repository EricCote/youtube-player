import ModifyData from './L3Right-ModifyData';

export default function GreyBox({ firstName, lastName, color, onChange }) {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        borderRadius: '5px',
        padding: '5px 20px 20px',
      }}
    >
      <h1>Modify State (Property Drilling)</h1>
      <ModifyData
        firstName={firstName}
        lastName={lastName}
        color={color}
        onChange={onChange}
      />
      {/* <ModifyData {...props} /> */}
    </div>
  );
}
