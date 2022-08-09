import React from 'react'
import styled from 'styled-components'
import { FaBell, FaChevronDown, FaQuestion } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import Profile from './Profile'

const NavMenu = () => {
  return (
    <Container className='flex'>
        <a href="#"><FaBell/></a>
        <a href="#"><FaQuestion/></a>
        <a href="#"><FiSettings/></a>
        <Profile/>
    </Container>
  )
}

export default NavMenu

const Container = styled.div`
    justify-content: center;
    align-items: center;
    grid-gap: 12px;
`