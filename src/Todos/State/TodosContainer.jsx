import { useReducer, useState } from 'react';
import FilterButtons from './FilterButtons';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import initialTodos from '../Common/initial-todos';
import { StatusFilters } from '../Common/StatusFilters';
import { reducerTodos } from './reducerTodos';
import { reducerFilter } from './reducerFilter';

export default function Todos() {
  const [todos, dispatch] = useReducer(reducerTodos, initialTodos);
  const [visibilityFilter, dispatchFilter] = useReducer(
    reducerFilter,
    StatusFilters.All
  );

  function toggleTodo(id) {
    dispatch({ type: 'toggleTodo', payload: id });
  }

  function addTodo(todoText) {
    dispatch({ type: 'addTodo', payload: todoText });
  }

  function deleteTodo(id) {
    dispatch({ type: 'deleteTodo', payload: id });
  }

  function changeFilter(filter) {
    dispatchFilter({ type: 'newFilter', payload: filter });
  }

  function filterTodos(todos, filter) {
    switch (filter) {
      case StatusFilters.All:
        return todos;
      case StatusFilters.Completed:
        return todos.filter((t) => t.completed);
      case StatusFilters.Active:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  }

  const filteredTodos = filterTodos(todos, visibilityFilter);

  return (
    <div>
      <h1>Todos (using state)</h1>
      <AddTodo onAddTodo={addTodo} />
      <FilterButtons value={visibilityFilter} onChange={changeFilter} />
      <TodoList
        todos={filteredTodos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
}
