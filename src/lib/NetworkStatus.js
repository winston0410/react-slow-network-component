import React from 'react'
import useNetworkStatus from './useNetworkStatus.js'

function NetworkStatus ({ initialValue, children }) {
  const networkStatus = useNetworkStatus(initialValue)
  return children(networkStatus)
}

export default NetworkStatus
