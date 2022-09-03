import { useState, useRef, useEffect } from 'react'

export default function useTyping(text, timeout = 400) {
  let [isTyping, setIsTyping] = useState(false)
  let timeoutRef = useRef(null)

  const endTyping = () => {
    setIsTyping(false)
    clearInterval(timeoutRef.current)
  }

  useEffect(() => {
    if (!isTyping) {
      setIsTyping(true)
      timeoutRef.current = setInterval(endTyping, timeout)
    } else {
        clearInterval(timeoutRef.current)
        timeoutRef.current = setInterval(endTyping, timeout)
    }

    return () => clearInterval(timeoutRef.current)
  }, [text])

  return isTyping
}
