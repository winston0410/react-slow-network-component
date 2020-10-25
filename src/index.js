import React, { useEffect, useState } from 'react'
import {
  returnIf
} from '@blackblock/common-utilities'
import {
  isSlowNetwork
} from '@blackblock/slow-network-checker'

const defaultDef = {
  effectiveType: '2g',
  downlink: 1,
  saveData: true,
  rtt: 10
}

function SlowNetwork ({ slowNetworkDefinition = defaultDef, returnElement }) {
  const [slowConnectionFlag, setslowConnectionFlag] = useState(false)

  useEffect(() => {
    const networkInformation = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    const isConnectionSlow = isSlowNetwork(slowNetworkDefinition)(networkInformation)
    setslowConnectionFlag(isConnectionSlow)
  }, [])

  const content = returnIf(
    (x) => x === true
  )(<p>slow network</p>)(<p>fast network</p>)(slowConnectionFlag)

  return (
    <>
      { content }
    </>
  )
}

export default SlowNetwork
