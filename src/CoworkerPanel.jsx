import { useState } from 'react'

function CoworkerPanel() {

  const [question, setQuestion] = useState('')

  const suggestions = [
    'List all my clients',
    'Show me all open tasks',
    'Show me recent files',
  ]

  return (
    <div className="coworker-panel">

      <div className="coworker-header">
        <span className="coworker-title">Canopy Coworker</span>
        <button className="coworker-open">Open</button>
      </div>

      <p className="coworker-question">
        What would you like to accomplish?
      </p>

      <div className="coworker-suggestions">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="suggestion-btn"
            onClick={() => setQuestion(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>

      {question && (
        <p className="coworker-selected">
          You selected: {question}
        </p>
      )}

    </div>
  )
}

export default CoworkerPanel