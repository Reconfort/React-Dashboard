import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Container>
        <b>NetOne</b>
        Fort<span>.</span>
    </Container>
  )
}

export default Logo

const Container = styled.h3`
    color: rgb(42, 92, 192);
    letter-spacing: 1.2px;
    text-transform: uppercase;
    `