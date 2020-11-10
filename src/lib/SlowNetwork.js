import React from 'react'
import useSlowNetwork from './useSlowNetwork.js'

function SlowNetwork ({ definition, children }) {
  const [isSlowNetwork, isOffline, setIsSlowNetwork, setIsOffline] = useSlowNetwork(definition)
  return children([isSlowNetwork, isOffline, setIsSlowNetwork, setIsOffline])
}

export default SlowNetwork
