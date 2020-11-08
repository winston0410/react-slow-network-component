import React, { useState, useEffect, useCallback } from 'react'
import {
  isSlowNetwork as _isSlowNetwork
} from '@blackblock/slow-network-checker'
import { useNetwork } from 'react-use'

function useSlowNetwork (definition) {
  const [slowNetworkSignal, setSlowNetworkSignal] = useState(false)
  const networkStatus = useNetwork()

  const checkNetwork = useCallback(() => setSlowNetworkSignal(
    _isSlowNetwork(definition, networkStatus)
  ), [networkStatus, definition])

  useEffect(() => {
    const networkInformation = navigator.connection || navigator.mozConnection || navigator.webkitConnection

    networkInformation.addEventListener('change', checkNetwork)

    return () => {
      networkInformation.removeEventListener('change', checkNetwork)
    }
  })

  return slowNetworkSignal
}

export default useSlowNetwork
