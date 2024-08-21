import React, { ReactNode } from 'react'
import { Container } from './title.style'

interface TitleProps{
    children: ReactNode
}

const Title: React.FC <TitleProps> = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default Title