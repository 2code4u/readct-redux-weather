  
import React, { useEffect, useState } from 'react'

export const Time = () => {
  const startDate = new Date()
  const [time, setTime] = useState(startDate)
  
  useEffect(() => {
    let timerId = 0
    timerId = setInterval(
      () => tick(), 
      1000
    )

    return () => {
      clearInterval(timerId)
    }
  }, [])

  function tick() {
    setTime( new Date())
  }

  return (
    <div className="time-block">
      <h2>Время</h2>
      <div className="tick-block">
        {time.toLocaleTimeString() || '??-??'}
      </div>
    </div>
  )
}