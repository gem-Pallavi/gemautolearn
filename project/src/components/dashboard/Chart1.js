import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Form from 'react-bootstrap/Form';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart1( {onTechnologyChange} ) {
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const [chartData, setChartData] = useState({
    labels: ['Attempted', 'Unattempted'],
    datasets: [
      {
        data: [25, 25],
        backgroundColor: ['#038562', '#C6C6C6'],
      },
    ],
  });

  const handleTechnologyChange = (event) => {
    setSelectedTechnology(event.target.value);
    onTechnologyChange(event.target.value);
    if (event.target.value === 'selenium') {
      setChartData({
        labels: ['Attempted', 'Unattempted'],
        datasets: [
          {
            data: [10, 26],
            backgroundColor: ['#038562', '#C6C6C6'],
          },
        ],
      });
    } else if (event.target.value === 'api') {
      setChartData({
        labels: ['Attempted', 'Unattempted'],
        datasets: [
          {
            data: [10, 15],
            backgroundColor: ['#038562', '#C6C6C6'],
          },
        ],
      });
    } else if (event.target.value === 'technology') {
      setChartData({
        labels: ['Attempted', 'Unattempted'],
        datasets: [
          {
            data: [25, 25],
            backgroundColor: ['#038562', '#C6C6C6'],
          },
        ],
      });
    } else if (event.target.value === 'mobile') {
      setChartData({
        labels: ['Attempted', 'Unattempted'],
        datasets: [
          {
            data: [25, 25],
            backgroundColor: ['#038562', '#C6C6C6'],
          },
        ],
      });
    } else if (event.target.value === 'performance') {
      setChartData({
        labels: ['Attempted', 'Unattempted'],
        datasets: [
          {
            data: [25, 25],
            backgroundColor: ['#038562', '#C6C6C6'],
          },
        ],
      });
    } else if (event.target.value === 'database') {
      setChartData({
        labels: ['Attempted', 'Unattempted'],
        datasets: [
          {
            data: [25, 25],
            backgroundColor: ['#038562', '#C6C6C6'],
          },
        ],
      });
    } else if (event.target.value === 'security') {
      setChartData({
        labels: ['Attempted', 'Unattempted'],
        datasets: [
          {
            data: [25, 25],
            backgroundColor: ['#038562', '#C6C6C6'],
          },
        ],
      });
    }
  };

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
      <Form.Select className='select-tech' onChange={handleTechnologyChange}>
        <option value="technology">Select Technology</option>
        <option value="selenium">Selenium</option>
        <option value="api">API</option>
        <option value="mobile">Mobile Testing</option>
        <option value="performance">Performance</option>
        <option value="database">Database</option>
        <option value="security">Security</option>
      </Form.Select>
      <Doughnut className='chart1' data={chartData} options={chartOptions} width={450} height={250} />
    </>
  );
}
