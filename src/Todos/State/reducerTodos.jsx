let currentId = 4;

export function reducerTodos(todos, action) {
  switch (action.type) {
    case 'toggleTodo':
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'addTodo':
      return [
        ...todos,
        {
          id: currentId++,
          text: action.payload,
          completed: false,
        },
      ];
    case 'deleteTodo':
      return todos.filter((todo) => todo.id !== action.payload);
  }
  return todos;
}
