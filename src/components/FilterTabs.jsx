function FilterTabs({ filter, onFilterChange, onClearCompleted, hasCompleted }) {
  return (
    <div className="filter-tabs">
      <div className="tabs">
        <button
          className={`tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={`tab ${filter === 'active' ? 'active' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={`tab ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Completed
        </button>
      </div>
      {hasCompleted && (
        <button className="clear-button" onClick={onClearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  )
}

export default FilterTabs
