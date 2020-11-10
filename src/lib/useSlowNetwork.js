import React, { useState, useEffect, useCallback, useMemo } from 'react'
import {
  isSlowNetwork as checkSlowNetwork
} from '@blackblock/slow-network-checker'
import { useNetwork } from 'react-use'

function useSlowNetwork (def) {
  const networkStatus = useNetwork()
  const [isSlowNetwork, setIsSlowNetwork] = useState(false)
  const [isOffline, setIsOffline] = useState(false)

  const defaultDef = useMemo(() => ({
    effectiveType: '2g',
    downlink: 1,
    saveData: true,
    rtt: 1000
  }), [])

  const _def = useMemo(() => ({
    ...defaultDef,
    ...def
  }), [def, defaultDef])

  useEffect(() => {
    // First render the object would be empty
    if (Object.keys(networkStatus).length === 0) {
      return
    }

    if (networkStatus.online === true) {
      setIsOffline(false)
    } else {
      setIsOffline(true)
    }

    if (checkSlowNetwork(_def)(networkStatus)) {
      setIsSlowNetwork(true)
    } else {
      setIsSlowNetwork(false)
    }
  }, [networkStatus, setIsOffline, setIsSlowNetwork, _def])

  return [isSlowNetwork, isOffline, setIsSlowNetwork, setIsOffline]
}

export default useSlowNetwork
