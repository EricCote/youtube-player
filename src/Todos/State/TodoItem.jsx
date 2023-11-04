import { ListGroup, Button } from 'react-bootstrap';

export default function TodoItem({
  onToggle,
  onDelete,
  onEdit,
  completed,
  text,
}) {
  return (
    <ListGroup.Item onClick={onToggle} action as='a'>
      <CustomCheckbox text={text} completed={completed} />
      <Button className='float-end mt-2' variant='warning' onClick={onDelete}>
        🗑️
      </Button>
    </ListGroup.Item>
  );
}

function CustomCheckbox({ text, completed }) {
  return (
    <div className='form-check float-start my-3'>
      <input
        type='checkbox'
        className='form-check-input'
        checked={completed}
        onChange={() => null}
      />
      <label
        className={
          'form-check-label' +
          (completed ? ' text-decoration-line-through text-muted' : '')
        }
      >
        {text}
      </label>
    </div>
  );
}
