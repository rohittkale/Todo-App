import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import FilterTabs from './components/FilterTabs'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.filter(todo => !todo.completed).length

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">
            <span className="title-icon">✓</span>
            Todo App
          </h1>
          <p className="subtitle">Stay organized and productive</p>
        </header>

        <TodoForm onAddTodo={addTodo} />

        <div className="stats">
          <div className="stat">
            <span className="stat-number">{activeCount}</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat">
            <span className="stat-number">{completedCount}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat">
            <span className="stat-number">{todos.length}</span>
            <span className="stat-label">Total</span>
          </div>
        </div>

        <FilterTabs
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
          hasCompleted={completedCount > 0}
        />

        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />

        {filteredTodos.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <p>
              {filter === 'active' && 'No Active Todos!'}
              {filter === 'completed' && 'No Completed Todos!'}
              {filter === 'all' && 'No Todos Yet!'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App