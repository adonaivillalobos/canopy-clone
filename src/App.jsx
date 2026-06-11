import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import CalendarPanel from './CalendarPanel'
import TasksPanel from './TasksPanel'

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header name="David" />
        <main className="content">
          <div className="dashboard-grid">
            <CalendarPanel />
            <TasksPanel />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App