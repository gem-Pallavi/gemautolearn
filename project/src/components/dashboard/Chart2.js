import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart2({ selectedTechnology }) {
  const [chartData, setChartData] = useState({
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [12, 10, 18],
        backgroundColor: ['#3A917A', '#038562', '#22594A'],
      },
    ],
  });

  useEffect(() => {
    if (selectedTechnology === 'selenium') {
      setChartData({
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
          {
            data: [10, 26, 14],
            backgroundColor: ['#3A917A', '#038562', '#22594A'],
          },
        ],
      });
    } else if (selectedTechnology === 'api') {
      setChartData({
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
          {
            data: [10, 15, 25],
            backgroundColor: ['#3A917A', '#038562', '#22594A'],
          },
        ],
      });
    } else if (selectedTechnology === 'technology') {
      setChartData({
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
          {
            data: [25, 15, 10],
            backgroundColor: ['#3A917A', '#038562', '#22594A'],
          },
        ],
      });
    } else if (selectedTechnology === 'mobile') {
      setChartData({
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
          {
            data: [25, 15, 10],
            backgroundColor: ['#3A917A', '#038562', '#22594A'],
          },
        ],
      });
    } else if (selectedTechnology === 'performance') {
      setChartData({
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
          {
            data: [25, 15, 10],
            backgroundColor: ['#3A917A', '#038562', '#22594A'],
          },
        ],
      });
    } else if (selectedTechnology === 'database') {
      setChartData({
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
          {
            data: [25, 15, 10],
            backgroundColor: ['#3A917A', '#038562', '#22594A'],
          },
        ],
      });
    } else if (selectedTechnology === 'security') {
      setChartData({
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
          {
            data: [25, 15, 10],
            backgroundColor: ['#3A917A', '#038562', '#22594A'],
          },
        ],
      });
    }
  }, [selectedTechnology]);

  const chartOptions = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 15,
          },
        },
      },
      cutout: '75%',
    },
  };

  return (
    <>
      <h5 style={{ textAlign: 'center' }}>Progress</h5>
      <Doughnut className='chart1' id='chart2js' data={chartData} options={chartOptions} width={450} height={250} />
    </>
  );
}
