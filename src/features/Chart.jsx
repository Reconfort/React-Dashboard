import React, {useState} from 'react'
import BarChat from './Chart/BarChat'
import { UserData } from './Chart/Data';
import styled from 'styled-components';
import LineChart from './Chart/LineChart';
const Chart = () => {
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
    const [userDataLost, setUserDataLost] = useState({
        labels: UserData.map((data) => data.year),
        datasets:[{
            label: "User Losted",
            data:UserData.map((data) => data.userLost),
            backgroundColor: [
                "#ffd3d3",
                "#76878b",
                "#9dc0c9",
                "#94d1a2",
                "#c88d8d"
            ],
            borderColor:"rgb(42, 92, 192",
            borderWidth:2,
        }]
    });
  return (
    <Charts>
        <div>
            <BarChat chartData={userData}/>
        </div>
        <div>
            <LineChart chartData={userDataLost}/>
        </div>
    </Charts>
  )
}

export default Chart

const Charts =styled.div`
    display: flex;
    /* background-color: antiquewhite; */
    border-radius: 10px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px; */
    div{
        background-color: aliceblue;
        width: 49.5%;
        height: 100%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }
    `