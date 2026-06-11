import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import CalendarPanel from './CalendarPanel'

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header name="David" />
        <main className="content">
          <div className="dashboard-grid">
            <CalendarPanel />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App