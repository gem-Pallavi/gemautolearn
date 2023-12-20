import '../../../css/graphs.css';
import Footer from '../../Footer';
import Navigation from '../../Navigation';
import Question from '../Question';
import SubmitAnswer from '../SubmitAnswer';
import { Link } from 'react-router-dom';
import { Chart } from "react-google-charts";

export default function Graphs() {
    const data = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2020", 1000, 650, 375],
        ["2021", 1170, 460, 250],
        ["2022", 660, 1120, 300],
        ["2023", 1030, 540, 350],
      ];
      
    const options = {
        chart: {
          subtitle: "Sales, Expenses, and Profit: 2020-2023",
        },
      };

  return (  
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Graphs"} question={<ul className='question-ul'>
                <li>Calculate the total Sales from 2021 to 2023</li>
                <li>Calculate the difference between the Expenses of 2020 and 2021</li>
                <li>Find the number of years where Profit is greater than 300</li>
            </ul> } />
        <div className='container graphs'>
            <Chart className='chartComponent'
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    </div>
    <SubmitAnswer nextLink={<Link to='/bouncingBall' className='next-link'>Next Question</Link>} />
    <Footer />
    </>
  );
}
