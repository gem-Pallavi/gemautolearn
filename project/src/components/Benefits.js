import '../css/benefits.css';
import SquareCard from './SquareCard';
import RectangleCard from './RectangleCard';
import courses from '../images/courses.png';
import dashboard from '../images/dashboard.png';
import expert from '../images/expert.png';
import progress from '../images/progress.png';
import practice from '../images/practice.png';

function Benfits(){
    return (
        <div className="container benefits-section">
            <div className="row first-row">
                <div className="col-md-5 my-auto title-para">
                    <div className="benefit-title">
                        <h1>Why Choose Us ?</h1>
                    </div>
                    <div className="benefit-para">
                        <p>Gateway to Automation Excellence
                        </p>
                    </div>
                </div>
                <div className="col-md-6 parent-title">
                    <div className="row" >
                        <div className="col-6 titles" id='top-left-tile'>
                            <SquareCard title={"Interactive Courses"} iconImage={<img src={courses} alt='' className='benefit-img' />} backContent={ "Immerse yourself in hands-on learning with our interactive courses for automation testing, empowering you to master cutting-edge tools and techniques." } />
                        </div>
                        <div className="col-6 titles" id='top-right-tile'>
                            <RectangleCard title={"Personalized Dashboard"} iconImage={<img src={dashboard} alt='' className='benefit-img-1'/>} backContent={ "Empower your experience with a personalized dashboard, tailored to fuel your individual preferences and optimize your workflow." } />
                        </div>   
                    </div>
                </div>
            </div>
            <div className="row second-titles">
            <div className="col-md-3"></div>
            <div className="row col-md-9" id='bottom-row'>
            <div className="row">
                        <div className="col-4 titles" id='bottom-left-tile'>
                            <SquareCard title={"Expert Guidance"} iconImage={ <img src={expert} alt='' className='benefit-img-2' /> } backContent={ "Navigate the complexities with confidence through expert guidance tailored to your unique journey." } />
                        </div>
                        <div className="col-4 titles" id='bottom-middle-tile'>
                            <RectangleCard title={"Progress Proficiency Level"} iconImage={<img src={progress} alt='' className='benefit-img-3' />} backContent={ "Track and advance your proficiency levels seamlessly with our Progress Proficiency feature, ensuring continuous growth in your skills journey." } />
                        </div>
                        <div className="col-4 titles" id='bottom-right-tile'>
                            <SquareCard title={"Practice Questions"} iconImage={<img src={practice} alt='' className='benefit-img' />} backContent={ "Sharpen your skills and reinforce knowledge with our comprehensive set of practice questions, your key to mastering the subject." } />
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
}
  
export default Benfits;

