interface DisplayDataProps {
  firstName: string;
  lastName?: string;
  color: string;
}

export default function DisplayData({
  firstName,
  lastName,
  color,
}: DisplayDataProps) {
  return (
    <h1 style={{ color: color }}>
      The name is {firstName} {lastName}
    </h1>
  );
}
