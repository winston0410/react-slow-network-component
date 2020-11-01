import React from 'react'
import useSlowNetwork from './useSlowNetwork.js'

function SlowNetwork ({ definition, children }) {
  const slowNetworkSignal = useSlowNetwork(definition)
  return children(slowNetworkSignal)
}

export default SlowNetwork
