"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic'
    
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


interface GraphData {
  x: string;
  y: number;
}

interface SynchronizedChartProps {}

const SynchronizedChart: React.FC<SynchronizedChartProps> = () => {
  const generateData = (count: number, yRange: number): GraphData[] => {
    let i = 0;
    const series: GraphData[] = [];
    while (i < count) {
      const x = `Category ${i + 1}`;
      const y = Math.floor(Math.random() * yRange) + 1;
      series.push({ x, y });
      i++;
    }
    return series;
  };

  const [graphData1, setGraphData1] = useState<GraphData[]>(generateData(10, 100));
  const [graphData2, setGraphData2] = useState<GraphData[]>(generateData(10, 100));

  const refreshChart = () => {
    setGraphData1(generateData(10, 100));
    setGraphData2(generateData(10, 100));
  };

  const chartOptions = {
    xaxis: {
      type: undefined,
      categories: graphData1.map((data) => data.x),
    },
    yaxis: {
      max: 100,
      tickAmount: 10,
      labels: {
        style: {
          colors: '#4c7076',
        },
      },
    },
    colors: ['#c1efea'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      colors: ['#5a838c', '#7b92fc'], // Set different border colors for each area
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        opacityFrom: 1,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    markers: {
      size: 0,
    },
    grid: {
      show: false, // Set this to false to hide the lines at the background
    },
  };

  return (
    <div>
      <Chart
        options={chartOptions}
        series={[
          { name: 'Graph 1', data: graphData1 },
          { name: 'Graph 2', data: graphData2 },
        ]}
        type="area"
        height={400}
      />
      <button onClick={refreshChart} className='m-auto text-light dark:text-white'>Refresh Chart</button>
    </div>
  );
};

export default SynchronizedChart;
