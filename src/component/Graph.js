import Chart from "chart.js/auto";
import React from 'react';
import { Bar } from "react-chartjs-2";

const Graph = () => {

  const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            align: "end",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 500,
            ticks: {
              stepSize: 100,
            },
            grid: {
              display: true,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      };
    
      return (
        <div
          id="mainGraph"
          className="grid grid-cols-1 p-6 justfy-center items-center max-w-[85%] md:max-w-[98%] mx-auto my-5 border-2 rounded-2xl drop-shadow bg-white "
        >
          <div className=" max-h-[250px] md:max-h-[350px] pb-6 w-full m-auto mb-3">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="font-bold text-2xl">Activities</h3>
                <div className="flex text-gray-500 pl-3 gap-2 items-center">
                  <p>May - June 2021</p>
                  
                </div>
              </div>
            </div>
            <Bar
              datasetIdKey="mainGraph"
              data={{
                labels: [" ", "Week 1", "Week 2", "Week 3", "Week 4", " "],
                datasets: [
                    {
                    id: 1,
                    label: "User",
                    data: [0, 500, 350, 200, 400, 0],
                    backgroundColor: "#98D89E",
                    borderRadius: 3,
                  },
                 {
                    id: 2,
                    label: "Guest",
                    data: [0, 400, 450, 300, 340, 0],
                    backgroundColor: "#EE8484",
                    borderRadius: 3,
                  },
                  
                  
                ],
              }}
              options={options}
            />
          </div>
        </div>
  )
}

export default Graph;