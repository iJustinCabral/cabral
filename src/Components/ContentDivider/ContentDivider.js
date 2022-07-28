import React from 'react'
import { Divider, Square, TriangleBottom, TriangleTop } from './ContentDivider.elements'

const ContentDivider = () => {
  return (
    <Divider>
        <TriangleTop />
        <Square />
        <TriangleBottom />
    </Divider>
  )
}

export default ContentDivider