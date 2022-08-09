import React from 'react'
import "./App.css"
import styled from 'styled-components'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Body from './components/body'

const App = () => {
  return (
    <Container className='bg-blue-100 w-full h-full'>
      <Head>
        <Header/>
      </Head>
      <BodyContent className='flex'>
        <Body/>
      </BodyContent>
    </Container>
  )
}

export default App

const Container = styled.div`
  height: 100vh;
`
const Head = styled.div``
const BodyContent = styled.div``