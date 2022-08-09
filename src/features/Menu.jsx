import React from 'react'
import styled from 'styled-components'

const Menu = () => {
  return (
    <Container>
        <a href="#">Dashboard</a>
        <a href="#">Account</a>
        <a href="#">Clients</a>
        <a href="#">Product</a>
        <a href="#">Deals</a>
        <a href="#">FAQ</a>
    </Container>
  )
}

export default Menu

const Container = styled.div`
    display: flex;
    grid-gap: 5px;
    a{
        padding: 0 20px 10px 20px;
        border-bottom: 2px solid transparent;
    }
    a:hover{
        border-bottom: 2px solid rgb(42, 92, 192);
    }
`