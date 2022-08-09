import React ,{ useState} from 'react'
import styled from 'styled-components'
import PieChart from './Chart/PieChart'
import { UserData } from './Chart/Data'
import Todo from './Todo'


const RightOption = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets:[{
        label: "User Gained",
        data:UserData.map((data) => data.userGain),
        backgroundColor: [
            "#ffd3d3",
            "#76878b",
            "#9dc0c9",
            "#94d1a2",
            "#c88d8d"
        ],
        borderColor:"aliceblue",
        borderWidth:4,
    }]
});
  return (
    <Container>
      <div>
        <Number>1</Number>
        <Number>2</Number>
        <Number>3</Number>
      </div>
      <PieChart chartData={userData}/>
      <Todo/>
    </Container>
  )
}

export default RightOption

const Container = styled.div`
    width: calc(100% - 80%);
    background-color: beige;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    justify-content: center;
    box-shadow: 1px 3px 4px rgb(129, 143, 169);
    padding: 10px;
    @media (max-width: 768px) {
     display : none;
    }
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

`
const Number = styled.button`
  background-color: bisque;
  width: 30%;
  height: 9vh;
  border-radius: 100%;
`