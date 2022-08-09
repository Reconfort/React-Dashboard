import React from 'react'
import styled from 'styled-components'
import { FaDiceThree } from 'react-icons/fa'

const SmsCard = () => {
  return (
    <Container>
        <span>
            SmsCard
            <ul>
            <FaDiceThree/>
            </ul>
        </span>
        <h2>Web Design <br/>E-commerce</h2>
        <br/>
        <span>
            <p>Progress</p>
            <i>46%</i>
        </span>
        <Progress>
            <span></span>
        </Progress>

        <Footer>
            <Users>
                <User src="asset/image/profile.jpg"/>
                <User src="asset/image/profile.jpg"/>
                <User src="asset/image/profile.jpg"/>
                <User src="asset/image/profile.jpg"/>
            </Users>
            <Guarantee>
                3 days left
            </Guarantee>
        </Footer>

    </Container>
  )
}

export default SmsCard
const Container = styled.div`
    background-color:azure;
    padding: 10px 20px 10px 10px;
    border-radius: 10px;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    box-shadow: 1px 3px 4px rgb(129, 143, 169);
    span{
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
          border:1px solid rgb(42, 92, 192);
          padding: 0 10px;
          border-radius: 100px;
        }
    }
    h2{
        font-weight: 800;
        font-size: 1.5rem;
        margin-top: 15px;
    }
`
const Progress = styled.div`
    background-color: #b8d3f1;
    width: 100%;
    height: 20px;
    margin-top: 10px;
    border-radius: 10px;
    span{
        background-color: rgb(42, 92, 192);
        width: 46%;
        height: 100%;
        border-radius: 10px;
    }
`
const Footer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`
const Users = styled.div`
    display: flex;
`

const User = styled.img`
    margin-top: 20px;
    width: 30px;
    height: 30px;
    border: 1px solid white;
    margin-left: -10px;
    border-radius: 100px;
`

const Guarantee = styled.div`
    margin-top: 20px;
`