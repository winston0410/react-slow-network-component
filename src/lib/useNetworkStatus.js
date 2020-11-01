import React, { useState, useEffect, useCallback } from 'react'

const useNetworkStatus = (initialValue = {}) => {
  const [networkStatus, setNetworkStatus] = useState(initialValue)

  const getNetworkStatus = useCallback(() => {
    const networkInformation = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    console.log('getNetworkStatus', networkInformation)
    setNetworkStatus(networkInformation) // Why?
  }, [])

  useEffect(() => {
    const networkInformation = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    setNetworkStatus(networkInformation)
    networkInformation.addEventListener('change', getNetworkStatus)

    return () => {
      networkInformation.removeEventListener('change', getNetworkStatus)
    }
  }, [getNetworkStatus, networkStatus])

  return networkStatus
}

export default useNetworkStatus
