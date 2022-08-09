import React,{ useState } from 'react'
import styled from 'styled-components'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Profile = () => {
    const [showProfile, setshowProfile] = useState(false);
  return (
    <Container>
        <span>
            <Profiles src="asset/image/profile.jpg" className=' rounded-full'/>
            {
                showProfile ?
                <button onClick={() => setshowProfile(false)}><FaChevronUp/></button>
                :
                <button onClick={() => setshowProfile(true)}><FaChevronDown/></button>
            }
        </span>
        <DropDown show={showProfile}>
            <li>Profile</li>
            <li>Account</li>
            <li>Hello</li>
            <li>Hello</li>
            <span>
                <button>Add account</button>
                <button>Sign Out</button>
            </span>
        </DropDown>
    </Container>
  )
}

export default Profile

const Container= styled.div`
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 6px;
    }
`

const Profiles = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100px;
`

const DropDown = styled.div`
    background-color: rgb(191 219 254);
    /* border: 2px solid black; */
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 0;
    margin: 5px 20px 0 0;
    box-shadow: 4px 6px 10px #25436079;
    grid-gap: 10px;
    transition: ease-in-out 0.5s;
    li{
        list-style: none;
        text-align: right;
        border-bottom: 1px solid;
        padding: 5px 0 5px 0;
        transition: ease-in-out 0.5s;
    }
    li:hover{
        transform: scale(1.1);
    }
    span{
        display: flex;
        align-items: center;
        width: 100%;
        button{
            background-color: #254360;
            padding: 5px 10px;
            color: aliceblue;
            border-radius: 10px 0 0 10px;
            transition: ease-in-out 0.5s;
        }
        button:last-child{
            border-radius: 0 10px 10px 0;
            background-color: #4c2828;
        }
        button:hover{
            transform: scale(1.1);
        }
    }
    margin-top: ${ props => props.show ? '0.5%' : '-100%' };
    z-index: 100;
`