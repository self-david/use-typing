import { useState } from 'react'
import useTyping from './hooks/useTyping'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const isTyping = useTyping(text)

  return (
    <div className='App'>
      <h2>detect if it is writing</h2>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
        spellcheck="false"
      />
      <div className='typing-out'>
        <p>is typing:</p>
        { isTyping
          ? <p className='typing'>✅</p>
          : <p className='typing'>❌</p>
        }
      </div>
    </div>
  )
}

export default App
