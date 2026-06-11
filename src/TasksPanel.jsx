import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

function TasksPanel() {

  const stats = [
    { label: 'Tasks overdue', value: 0 },
    { label: 'Due this week', value: 0 },
    { label: 'Due next week', value: 0 },
    { label: 'Future tasks', value: 0 },
  ]

  const chartData = [
    { week: 'MAY 17', completed: 3, incomplete: 0, overdue: 0 },
    { week: 'MAY 24', completed: 2, incomplete: 0, overdue: 0 },
    { week: 'LAST WEEK', completed: 10, incomplete: 0, overdue: 0 },
    { week: 'THIS WEEK', completed: 4, incomplete: 0, overdue: 0 },
    { week: 'NEXT WEEK', completed: 0, incomplete: 0, overdue: 0 },
    { week: 'JUN 21', completed: 0, incomplete: 0, overdue: 0 },
    { week: 'JUN 28', completed: 0, incomplete: 0, overdue: 0 },
  ]

  return (
    <div className="tasks-panel">

      {/* Header */}
      <div className="tasks-header">
        <h2>Tasks</h2>
        <a href="#" className="view-all">View all tasks</a>
      </div>

      {/* Stats row */}
      <div className="tasks-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <XAxis
            dataKey="week"
            tick={{ fontSize: 11, fill: '#9ca3af' }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#9ca3af' }}
          />
          <Tooltip />
          <Bar dataKey="completed" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default TasksPanel