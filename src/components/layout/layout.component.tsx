import React, { ReactNode } from 'react'
import { Container } from './layout.style'


interface LayoutProps{
    children: ReactNode
}


const Layout: React.FC <LayoutProps> = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default Layout