import React from 'react'
import ContentLoader from 'react-content-loader'

const CardLoader = props => (
  <ContentLoader
    speed={3}
    width={345}
    height={345}
    viewBox='0 0 345 345'
    backgroundColor='#1e1e1e'
    foregroundColor='#242424'
    {...props}>
    <rect x='0' y='0' rx='10' ry='10' width='345' height='345' />
  </ContentLoader>
)

export { CardLoader }
