import React ,{useState} from 'react'
import styled from 'styled-components'
import {GoClock, GoThreeBars} from 'react-icons/go'
import { FaWindowClose } from 'react-icons/fa'
const Sidebar = () => {
  const [burgerState, setBurgerState] = useState(false);
  return (
    <Container>
      <Bars>
        {burgerState ? 
        <FaWindowClose onClick={() => setBurgerState(false)}/>
        :
        <GoThreeBars onClick={() => setBurgerState(true)}/>
      }

      </Bars>
      <SideMenu show={burgerState}>
        <a href="#">Dashboard</a>
        <a href="#">Account</a>
        <a href="#">Client</a>
        <a href="#">Product</a>
        <a href="#">Deals</a>
        <a href="#">FAQ </a>
        <a href="#">Sign Out </a>
      </SideMenu>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``
const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  margin-top: 0.75rem;
  background-color: rgb(191 219 254);
  left: 0;
  border-radius: 0 20px 20px 0;
  transform: ${ props => props.show ? 'translateX(0)' : 'translateX(-200%)'};
  transition: transform 0.5s ease-in-out;
  height: calc(100vh - 3rem);
  a{
    padding: 10px 4rem 10px 2rem;
    border-bottom: 1px solid rgb(42, 92, 192);
    transition: ease-in-out 0.5s;
  }
  a:hover{
    background-color:rgb(191 219 254);
    border-radius: 0 10px 10px 0;
    color: red;
    transform: scale(1.1);
  }
  a:last-child{
    bottom: 0;
    position: absolute;
    width: 100%;
    background-color: rgb(42, 92, 192);
    color: rgb(191 219 254);
    border-radius: 0 0 20px 0px;
    /* background-color: red; */
  }
`
const Bars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    position: absolute;
  }
`