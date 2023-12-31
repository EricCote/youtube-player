import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) => (
  <ListGroup className='my-4'>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        {...todo}
        onToggle={() => onToggleTodo(todo.id)}
        onDelete={(evt) => {
          evt.stopPropagation();
          onDeleteTodo(todo.id);
        }}
        onEdit={(newText) => {
          if (onEditTodo) onEditTodo(todo.id, newText);
        }}
      />
    ))}
  </ListGroup>
);

export default TodoList;
