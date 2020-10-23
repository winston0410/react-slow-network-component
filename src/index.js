import React from 'react'

function SlowNetwork (props) {
  console.log(NetworkInformation.downlink)
  console.log(NetworkInformation.downlinkMax)
  console.log(NetworkInformation.effectiveType)
  console.log(NetworkInformation.saveData)

  return (
    <p>
      slow network
    </p>
  )
}

export default SlowNetwork
