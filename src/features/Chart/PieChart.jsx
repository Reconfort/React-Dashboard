import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'
import styled from 'styled-components'

const PieChart = ({chartData}) => {
  return (
    <Container>
      <Pie data={chartData}/>
    </Container>
  )
}

export default PieChart

const Container = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  box-shadow: 1px 5px 5px gray;
  padding: 10px;
`