import React from 'react'
import useSlowNetwork from './useSlowNetwork.js'

function SlowNetwork ({ definition, children }) {
  const [slowNetworkSignal, checkNetwork] = useSlowNetwork(definition)
  return children([slowNetworkSignal, checkNetwork])
}

export default SlowNetwork
