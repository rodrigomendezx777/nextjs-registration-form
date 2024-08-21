import React, { ReactNode } from 'react'
import { Container } from './card.style'


interface CardProps{
    children: ReactNode
}


const Card: React.FC <CardProps> = ({children}) => {


  return (
    <Container>
        {children}
    </Container>
  )
}

export default Card