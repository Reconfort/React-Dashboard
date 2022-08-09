import React from 'react'
import styled from 'styled-components'
import Chart from '../features/Chart'
import RightOption from '../features/RightOption'
import Search from '../features/Search'
import SmsCard from '../features/SmsCard'

const Body = () => {
  return (
    <Container>
      <LeftOption>
      <Up>
        <h1>Welcome to Netfort Dahboard.</h1>
        <Search/>
      </Up>
        <Sms>
          <SmsCard/>
          <SmsCard/>
          <SmsCard/>
        </Sms>

        <Chart/>

      </LeftOption>
      <RightOption/>
    </Container>
  )
}

export default Body

const Container = styled.div`
  display: flex;
  padding: 12px;
  grid-gap: 10px;
  width: 100%;
  justify-content: space-between;
  h1{
    background-color: aliceblue;
    padding: 10px 80px 10px 20px;
    border-radius: 10px;
    @media (max-width: 768px) {
      width: 60%;
    }
  }
  `
const Sms = styled.div`
  display: flex;
  grid-gap: 10px;
`
const LeftOption = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  grid-gap: 10px;
`
const Up = styled.div`
  display: flex;
  justify-content: space-between;
`