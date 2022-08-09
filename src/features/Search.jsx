import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <Container>
        <form>
            <input type="text" placeholder='Search here  . . . .' />
        </form>
        <FaSearch style={{color :'white'}}/>
    </Container>
  )
}

export default Search

const Container = styled.div`
    background-color: rgb(42, 92, 192);
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    form{
        width: 100%;
        input{
            background: transparent;
            color: white;
            outline: none;
        }
    }
`