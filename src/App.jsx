import './App.css'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <h1>Dashboard</h1>
        <p><strong>Welcome back!</strong></p>
      </main>
    </div>
  )
}

export default App