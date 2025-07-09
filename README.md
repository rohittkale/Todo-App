# ✅ TodoApp – Task Management Application

A modern, responsive task management web application built with React 18 and Vite. Organize your daily tasks efficiently with an intuitive interface and powerful productivity features.

---

## 🚀 Features

### Core Functionality
- **Task Management**: Create, edit, delete, and toggle task completion status
- **Smart Filtering**: Filter tasks by status (All, Active, Completed)
- **Real-time Statistics**: View active, completed, and total task counts
- **Persistent Storage**: Local storage integration for data persistence across sessions
- **Quick Actions**: Double-click to edit, single-click to toggle completion
- **Bulk Operations**: Clear all completed tasks with one click

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Glassmorphism effects with smooth animations and transitions
- **Interactive Elements**: Hover effects, micro-interactions, and visual feedback
- **Intuitive Interface**: Clean, minimalist design focused on productivity
- **Keyboard Support**: Enter to add tasks, Escape to cancel editing
- **Empty States**: Helpful messages when no tasks match current filter

---

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (Grid, Flexbox, Animations, Backdrop-filter)
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: Local Storage API
- **Fonts**: Google Fonts (Inter)

---

## 📁 Project Structure

```
todo-app/
├── index.html                 # Main HTML file (root level)
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── src/
│   ├── main.jsx              # Application entry point
│   ├── App.jsx               # Main application component
│   ├── App.css               # Main application styles
│   ├── components/           # Reusable React components
│   │   ├── TodoForm.jsx      # Add new task form
│   │   ├── TodoList.jsx      # Task list container
│   │   ├── TodoItem.jsx      # Individual task item
│   │   └── FilterTabs.jsx    # Filter and clear controls
│   └── styles/
│       └── global.css        # Global styles and animations
└── public/                   # Empty (files served from root)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to http://localhost:5173/ to view the application

---

## 📸 Screenshot

### Main Page
![Main Page](https://github.com/rohittkale/Todo-App/blob/main/public/TodoMain.png)

### Add Task
![Add Task](https://github.com/rohittkale/Todo-App/blob/main/public/AddedTask.png)

### Before Complete Task
![Before Complete Task](https://github.com/rohittkale/Todo-App/blob/main/public/BeforeComplete.png)

### After Complete Task
![After Complete Task](https://github.com/rohittkale/Todo-App/blob/98da2ef76a9312d096970695f1b96d6304596e74/public/AfterComplete.png)

---

## 🎯 Usage

### Adding Tasks
- Type your task in the input field
- Click the "+" button or press Enter to add the task
- Tasks are automatically saved to local storage

### Managing Tasks
- **Toggle Completion**: Click the circle icon to mark tasks as complete/incomplete
- **Edit Tasks**: Double-click on task text or click the edit button
- **Delete Tasks**: Click the "×" button to remove tasks
- **Save Changes**: Press Enter to save edits, Escape to cancel

### Filtering Tasks
- **All**: View all tasks regardless of status
- **Active**: Show only incomplete tasks
- **Completed**: Display only completed tasks
- **Clear Completed**: Remove all completed tasks at once

### Statistics Dashboard
- View real-time counts of active, completed, and total tasks
- Statistics update automatically as you manage your tasks

---

## 🔧 Customization

### Modifying Styles
- Edit `src/App.css` for component-specific styles
- Modify `src/styles/global.css` for global styles and animations
- Customize color scheme by updating CSS custom properties

### Adding New Features
The component-based architecture makes it easy to extend:
- Create new components in `src/components/`
- Import and integrate in `App.jsx`
- Add corresponding styles in `App.css`

### Storage Options
Currently uses localStorage. Can be extended to support:
- SessionStorage for temporary data
- IndexedDB for larger datasets
- External APIs for cloud synchronization

---

## 🌟 Key Features Implemented

### Frontend Architecture
- **Component-based design** with reusable, modular components
- **State management** using React hooks (useState, useEffect)
- **Props drilling** for efficient data flow between components
- **Event handling** for comprehensive user interactions

### Modern React Patterns
- **Functional components** with hooks exclusively
- **Controlled components** for form handling
- **Conditional rendering** for dynamic UI updates
- **List rendering** with proper key props for performance

### CSS Techniques
- **CSS Grid** and **Flexbox** for responsive layouts
- **CSS animations** and **smooth transitions**
- **Glassmorphism effects** with backdrop-filter
- **Gradient backgrounds** and **modern shadows**
- **Responsive design** with mobile-first approach

### Performance Optimizations
- **Efficient re-rendering** with proper state management
- **Local storage optimization** for data persistence
- **Smooth animations** without performance impact
- **Responsive images** and **optimized fonts**

---

## 🐛 Known Issues

- Data is stored locally (no cloud synchronization)
- No user authentication or multi-user support
- Limited to single browser/device usage

---

## 🚀 Future Enhancements

- [ ] Add cloud synchronization with user accounts
- [ ] Implement task categories and tags
- [ ] Add due dates and reminders
- [ ] Include task priority levels
- [ ] Add dark/light theme toggle
- [ ] Implement task search functionality
- [ ] Add task sharing capabilities
- [ ] Include productivity analytics
- [ ] Add drag-and-drop reordering
- [ ] Implement task templates

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙋‍♂️ Author
Name: Rohit Pran Kale<br>
Mail: kalerohit1912@gmail.com

---

⭐ **Star this repository if you found it helpful!**
