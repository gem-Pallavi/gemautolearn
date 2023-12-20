import '../../../css/dateTime.css';
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import SubmitAnswer from "../SubmitAnswer";
import Question from "../Question";
import { Link } from "react-router-dom";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker"
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function DateTimePicker() {
  return (
    <>
    <Navigation />
    <div className="container">
        <Question quesTitle={"Date and Time Picker"} question={<ul className='question-ul'>
                    <li>Set date as '08<sup>th</sup> June 2001'</li>
                    <li>Set time as '07:35PM'</li>
                </ul> } 
        />
        <div className='continer picker'> 
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateTimePicker className="dateTime" />
          </LocalizationProvider>
        </div>
    </div>
    <SubmitAnswer nextLink={<Link to='/graphs' className='next-link'>Next Question</Link>} />
    <Footer />
    </>
  );
}
