"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts}: DoughnutChartProps) => {

  const data = {
    labels: ["Bank1","Bank2","Bank3"],
    datasets: [
      {
        label: "Banks",
        data: [1250,2500,3750],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return <Doughnut 
    data={data} 
    options={{
      animation: {
        animateScale: true,
        animateRotate: true,
        duration: 3000,
      },
      cutout: "60%",
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        
      },
    }}
  
  />
}

export default DoughnutChart