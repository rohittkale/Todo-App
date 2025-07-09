import { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTodo(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          <span>+</span>
        </button>
      </div>
    </form>
  )
}

export default TodoForm
