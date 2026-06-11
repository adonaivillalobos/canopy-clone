import { useState } from 'react'

function Header({ name }) {

  const [activeTab, setActiveTab] = useState('overview')

  return (
    <header className="header">

      <h1>Welcome, {name}</h1>

      <div className="tabs">
        <button
          className={activeTab === 'overview' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>

        <button
          className={activeTab === 'admin' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('admin')}
        >
          Admin
        </button>
      </div>

    </header>
  )
}

export default Header