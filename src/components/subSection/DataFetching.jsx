import React, { useEffect, useState } from 'react'

function DataFetching() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1)
    }, 2000)

    return () => {
      clearInterval(interval);
    }
  })

  return (
    <div>
      <h1>{timer}</h1>
    </div>
  )
}

export default DataFetching
