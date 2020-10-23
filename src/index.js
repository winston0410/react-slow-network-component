import React, { useEffect, useState } from 'react'
import {
  returnIf
} from '@blackblock/common-utilities'

const defaultDef = {
  effectiveType: '2g',
  downlink: '1',
  saveData: true
}

function SlowNetwork ({ slowNetworkDef = defaultDef, returnElement }) {
  const [slowConnectionFlag, setslowConnectionFlag] = useState(false)

  useEffect(() => {
    const networkInformation = navigator.connection || navigator.mozConnection || navigator.webkitConnection

    const isSlowNetwork = ''

    if (networkInformation.effectiveType) {

    }

    if (networkInformation.saveData === true) {
      setslowConnectionFlag(true)
    }
  })

  // const returnIf = function (predicate) {
  //   return function (value1) {
  //     return function (value2) {
  //       return function (testValue) {
  //         const $1 = predicate(testValue) === true
  //
  //         if ($1) {
  //           return value1
  //         }
  //         return value2
  //       }
  //     }
  //   }
  // }

  console.log(returnIf)

  //
  // const content = returnIf(
  //   (x) => x === true
  // )(<p>slow network</p>)(<p>fast network</p>)(slowConnectionFlag)

  const content = ''

  return (
    <>
      { content }
    </>
  )
}

export default SlowNetwork
