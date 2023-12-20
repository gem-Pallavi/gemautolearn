import {  Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Assignments from './components/practiceLabs/Assignments';
import EasyMain from './components/practiceLabs/EasyMain';
import MediumMain from './components/practiceLabs/MediumMain';
import HardMain from './components/practiceLabs/HardMain';
import Alerts from './components/questions/easy/Alerts';
import Login from './components/Login';
import ComingSoon from './components/ComingSoon';
import Button from './components/questions/easy/Button';
import ChangeTheme from './components/questions/easy/ChangeTheme';
import Dropdown from './components/questions/easy/Dropdown';
import LongPress from './components/questions/easy/LongPress';
import PopupWindow from './components/questions/easy/PopupWindow';
import RadioCheck from './components/questions/easy/RadioCheck';
import DragDrop from './components/questions/easy/DragDrop';
import Hover from './components/questions/easy/Hover';
import FileUpload from './components/questions/easy/FileUpload';
import Navigate from './components/questions/easy/Navigate';
import ProgressBar from './components/questions/easy/Progress';
import NestedCheckbox from './components/questions/medium/NestedCheckbox';
import ProgressingForward from './components/ProgressingForward';
import DynamicClass from './components/questions/medium/DynamicClass';
import NestedIframe from './components/questions/medium/NestedIframe';
import WebElements from './components/questions/medium/WebElements';
import BrokenImages from './components/questions/medium/BrokenImages';
import ResizeTextbox from './components/questions/medium/ResizeTextbox';
import AutocompleteDropdown from './components/questions/medium/AutocompleteDropdown';
import SvgHandling from './components/questions/medium/SvgHandling';
import ToastMessage from './components/questions/medium/ToastMessage';
import HorizontalScroll from './components/questions/medium/HorizontalScroll';
import SliderDrag from './components/questions/medium/SliderDrag';
import BrokenLink from './components/questions/medium/BrokenLink';
import MasteryUnleashed from './components/MasteryUnleashed';
import AccordianComponent from './components/questions/hard/AccordianComponent';
import ActiveTabs from './components/questions/hard/ActiveTabs';
import DragDropAxis from './components/questions/hard/DragDropAxis';
import WebTable from './components/questions/hard/WebTable';
import FileDownload from './components/questions/hard/FileDownload';
import DateTimePicker from './components/questions/hard/DateTimePicker';
import Graphs from './components/questions/hard/Graphs';
import BouncingBall from './components/questions/hard/BouncingBall';
import Sortable from './components/questions/hard/Sortable';
import FinalForm from './components/questions/hard/FinalForm';
import CarouselComponent from './components/questions/hard/CarouselComponent';
import ChildWindowPopUp from './components/questions/hard/ChildWindowPopUp';
import Child from './components/questions/hard/Child';
import Congrats from './components/Congrats';
import Goal from './components/practiceLabs/Goal';
import Dashboard from './components/dashboard/Dashboard';
import SignUp from './components/SignUp';
import Courses from './components/courses/Courses';

function Routing() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/practice" element={<Assignments />} />  
        <Route path="/easy-main" element={<EasyMain />} />
        <Route path="/intermediate-main" element={<MediumMain />} />
        <Route path="/advance-main" element={<HardMain />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
        <Route path="/buttons" element={<Button />}/>
        <Route path="/theme" element={<ChangeTheme />} />
        <Route path="/dropdown" element={ <Dropdown />} />
        <Route path="/longpress" element={ <LongPress /> } />
        <Route path="/popup" element={ <PopupWindow /> } />
        <Route path="/radioCheck" element={ <RadioCheck /> } />
        <Route path="/dragdrop" element={ <DragDrop /> } />
        <Route path="/hover" element={ <Hover/> } />
        <Route path="/fileUpload" element={ <FileUpload /> } />
        <Route path="/navigate" element={ <Navigate /> } />
        <Route path="/progressBar" element={ <ProgressBar /> } />
        <Route path="/progressingForward" element={ <ProgressingForward /> } />
        <Route path="/nestedCheckbox" element={ <NestedCheckbox/> } />
        <Route path="/dynamicClass" element={ <DynamicClass /> } />
        <Route path="/iframe" element={ <NestedIframe/> } />
        <Route path="/webElement" element={ <WebElements /> }  />
        <Route path="/brokenImages" element={ <BrokenImages /> } />
        <Route path="/resizeTextbox" element={ <ResizeTextbox /> } />
        <Route path="/autocomplete" element={ <AutocompleteDropdown /> } />
        <Route path="/svg" element={ <SvgHandling /> } />
        <Route path="/toastMessage" element={ <ToastMessage /> } />
        <Route path="/horizontalScroll" element={ <HorizontalScroll /> } />
        <Route path="/sliderDrag" element={ <SliderDrag /> } />
        <Route path="/brokenLink" element={ <BrokenLink/> } />
        <Route path="/masteryUnleashed" element={ <MasteryUnleashed /> } />
        <Route path="/accordian" element={ <AccordianComponent/> } />
        <Route path="/activeTab" element={ <ActiveTabs/> } />
        <Route path="/dragDropAxis" element={ <DragDropAxis/> } />
        <Route path="/webTable" element={ <WebTable/> } />
        <Route path="/fileDownload" element={ <FileDownload/> } />
        <Route path="/dateTime" element={ <DateTimePicker/> } />
        <Route path="/graphs" element={ <Graphs /> } />
        <Route path="/bouncingBall" element={ <BouncingBall /> } />
        <Route path="/sortable" element={ <Sortable /> } />
        <Route path="/form" element={ <FinalForm/> } />
        <Route path="/carousel" element={ <CarouselComponent/> } />
        <Route path="/childWindow" element={ <ChildWindowPopUp /> } />
        <Route path="/child" element={ <Child/> } />
        <Route path="/congrats" element={ <Congrats/> } />
        <Route path="/setYourGoal" element={ <Goal /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default Routing;
