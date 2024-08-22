import React, { ReactNode } from 'react'
import { Container } from './mainLayout.style'


interface MainLayoutProps{
    children: ReactNode
}


const MainLayout: React.FC <MainLayoutProps> = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default MainLayout