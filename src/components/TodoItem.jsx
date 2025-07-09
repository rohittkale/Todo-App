import { useState } from 'react'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim())
    }
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit()
    }
    if (e.key === 'Escape') {
      setEditText(todo.text)
      setIsEditing(false)
    }
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        className="toggle-button"
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed ? '✓' : '○'}
      </button>
      
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyPress}
          className="edit-input"
          autoFocus
        />
      ) : (
        <span
          className="todo-text"
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      
      <div className="actions">
        <button
          className="edit-button"
          onClick={() => setIsEditing(true)}
        >
          ✎
        </button>
        <button
          className="delete-button"
          onClick={() => onDelete(todo.id)}
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default TodoItem

