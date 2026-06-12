import { Link } from 'react-router-dom'
import {
  Inbox,
  Users,
  FolderOpen,
  Briefcase,
  Clock,
  CreditCard,
  Layout,
  CalendarDays,
  GraduationCap,
  Triangle,
  Sparkles,
  ChartNoAxesColumn
} from 'lucide-react'

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo — triángulo — lleva al home */}
      <Link to="/" className="sidebar-logo">
        <Triangle size={18} />
      </Link>

      {/* Plus button */}
      <div className="sidebar-plus">
        +
      </div>

      {/* Nav items */}
      <nav className="sidebar-nav">

        <Link to="/coworker" className="nav-item" title="Canopy Coworker">
          <Sparkles size={20} />
        </Link>

        <Link to="/inbox" className="nav-item" title="Inbox">
          <Inbox size={20} />
        </Link>

        <Link to="/clients" className="nav-item" title="Clients">
          <Users size={20} />
        </Link>

        <Link to="/files" className="nav-item" title="Files">
          <FolderOpen size={20} />
        </Link>

        <Link to="/work" className="nav-item" title="Work">
          <Briefcase size={20} />
        </Link>

        <Link to="/time" className="nav-item" title="Time">
          <Clock size={20} />
        </Link>

        <Link to="/billing" className="nav-item" title="Billing">
          <CreditCard size={20} />
        </Link>

        <Link to="/templates" className="nav-item" title="Templates">
          <Layout size={20} />
        </Link>

        <Link to="/insights" className="nav-item" title="Insights">
          <ChartNoAxesColumn size={20} />
        </Link>

      </nav>

      {/* Bottom icons */}
      <div className="sidebar-bottom-icons">
        <Link to="/calendar" className="nav-item-icon" title="Calendar">
          <CalendarDays size={20} />
        </Link>
        <Link to="/academy" className="nav-item-icon" title="Academy">
          <GraduationCap size={20} />
        </Link>
      </div>

      {/* User initials at bottom */}
      <div className="sidebar-user">
        DV
      </div>

    </aside>
  )
}

export default Sidebar