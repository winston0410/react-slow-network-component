import React from 'react'
import {
  ImageObject
} from '@blackblock/react-schema-library'
import {
  getMime
} from './utilities/_Helper.js'
import {
  defaultWhenEmpty,
  showIfValueExist
} from '@blackblock/common-utilities'

function Img ({
  source = [], children, imgAttr, captionAttr, ...attr
}) {
  // const combinedData = {
  //   source: [],
  //   src: '',
  //   ...imageData
  // }

  // const sourceArray = combinedData.source.map((source) => {
  //   return <source media={source.media} srcset={source.srcset} type={getMime(source.srcset)}></source>
  // })
  //

  // Filter out attr.src and attr.alt
  // const finalSrc = defaultWhenEmpty(combinedData.src)(attr.src)
  // const finalAlt = defaultWhenEmpty(combinedData.alt)(attr.alt)
  const caption = showIfValueExist(<figcaption itemProp="caption" {...captionAttr}>{attr.caption}</figcaption>)(attr.caption)

  const sourceArray = source.map((item) => {
    return <source media={item.media} srcset={item.srcset} type={getMime(item.srcset)}></source>
  })

  return (
    <ImageObject as='figure' {...attr}>
      <picture>
        {sourceArray}
        <img src={attr.src} alt={attr.alt} itemProp="contentUrl" loading="lazy" {...imgAttr} />
      </picture>
      {caption}
      {children}
    </ImageObject>
  )
}

export default Img
