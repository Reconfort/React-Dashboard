import React from 'react'
import styled from 'styled-components'
import Logo from '../features/Logo'
import Menu from '../features/Menu'
import NavMenu from '../features/NavMenu'
import Sidebar from './sidebar'

const Header = () => {
  return (
    <Container>
        <LeftItem>
            <Sidebar/>
            <Logo/>
        </LeftItem>
        <NavList>
          <Menu/>
        </NavList>
        <NavMenu/>
    </Container>
  )
}

export default Header

const Container = styled.div`
background-color: rgb(191 219 254);
    border-bottom:  1px solid rgb(191 219 254);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 0 10px;
    width: 100%;
    z-index: 105;
    `
const Bars = styled.div``

const LeftItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    `
const NavList = styled.div`
  
  @media (max-width:768px) {
    display: none;
  }
`