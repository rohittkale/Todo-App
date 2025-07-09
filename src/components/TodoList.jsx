import TodoItem from './TodoItem'

function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
          onEdit={onEditTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
