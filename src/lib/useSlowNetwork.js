import React, { useState, useEffect, useCallback } from 'react'
import {
  isSlowNetwork as _isSlowNetwork
} from '@blackblock/slow-network-checker'

// Mock network hook
const useNetworkStatus = ''

// Pass

function useSlowNetwork (definition) {
  const [slowNetworkSignal, setSlowNetworkSignal] = useState(false)
  const networkStatus = useNetworkStatus()

  const checkNetwork = useCallback(() => setSlowNetworkSignal(
    _isSlowNetwork(definition, networkStatus)
  ))

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
