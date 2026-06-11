import {
  Inbox,
  Users,
  FolderOpen,
  Briefcase,
  Clock,
  CreditCard,
  Layout,
  CalendarDays,
  GraduationCap
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

        <a href="#" className="nav-item" title="Inbox">
          <Inbox size={20} />
        </a>

        <a href="#" className="nav-item" title="Clients">
          <Users size={20} />
        </a>

        <a href="#" className="nav-item" title="Files">
          <FolderOpen size={20} />
        </a>

        <a href="#" className="nav-item" title="Work">
          <Briefcase size={20} />
        </a>

        <a href="#" className="nav-item" title="Time">
          <Clock size={20} />
        </a>

        <a href="#" className="nav-item" title="Billing">
          <CreditCard size={20} />
        </a>

        <a href="#" className="nav-item" title="Templates">
          <Layout size={20} />
        </a>

      </nav>

      {/* Bottom icons */}
      <div className="sidebar-bottom-icons">
        <a href="#" className="nav-item-icon">
          <CalendarDays size={20} />
        </a>
        <a href="#" className="nav-item-icon">
          <GraduationCap size={20} />
        </a>
      </div>

      {/* User initials at bottom */}
      <div className="sidebar-user">
        DV
      </div>

    </aside>
  )
}

export default Sidebar