import React, { useCallback, useState } from 'react'

const useForceUpdate = () => {
  const [, setState] = useState(null)

  const forceUpdate = useCallback(() => {
    setState(Math.random())
  }, [])

  return forceUpdate
}

export default useForceUpdate