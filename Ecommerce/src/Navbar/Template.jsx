import { Container } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const Template = ({children}) => {
  return (
   <Container maxW={"container.xl"}>
   <div className=" font-sans">
   <Navbar/>
    {children}
   </div>
   </Container>
  )
}

export default Template