import { useState, useRef, useEffect } from 'react'

export default function useTyping(text, timeout = 400) {
  let [isTyping, setIsTyping] = useState(false)
  let timeoutRef = useRef(null)

  const endTyping = () => {
    setIsTyping(false)
    clearTimeout(timeoutRef.current)
  }

  useEffect(() => {
    if (isTyping) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(endTyping, timeout)
    } else {
      setIsTyping(true)
      timeoutRef.current = setTimeout(endTyping, timeout)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [text])

  return isTyping
}
