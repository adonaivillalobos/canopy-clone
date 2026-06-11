import {
  Inbox,
  Users,
  FolderOpen,
  Briefcase,
  Clock,
  CreditCard,
  Layout
} from 'lucide-react'

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo at top */}
      <div className="sidebar-logo">
        C
      </div>

      {/* Plus button */}
      <div className="sidebar-plus">
        +
      </div>

      {/* Nav items */}
      <nav className="sidebar-nav">

        <a href="#" className="nav-item">
          <Inbox size={20} />
          <span>Inbox</span>
        </a>

        <a href="#" className="nav-item">
          <Users size={20} />
          <span>Clients</span>
        </a>

        <a href="#" className="nav-item">
          <FolderOpen size={20} />
          <span>Files</span>
        </a>

        <a href="#" className="nav-item">
          <Briefcase size={20} />
          <span>Work</span>
        </a>

        <a href="#" className="nav-item">
          <Clock size={20} />
          <span>Time</span>
        </a>

        <a href="#" className="nav-item">
          <CreditCard size={20} />
          <span>Billing</span>
        </a>

        <a href="#" className="nav-item">
          <Layout size={20} />
          <span>Templates</span>
        </a>

      </nav>

      {/* User initials at bottom */}
      <div className="sidebar-user">
        DV
      </div>

    </aside>
  )
}

export default Sidebar