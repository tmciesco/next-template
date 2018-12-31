import React from 'react'
import ContainerStyles from './Styles'

export const Wrapper = ({ children, w, ...others}) => {
  return (
    <ContainerStyles w={w} {...others}>
      {children}
    </ContainerStyles>
  )
}