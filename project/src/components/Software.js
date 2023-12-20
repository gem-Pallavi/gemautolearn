import { useNavigate } from 'react-router-dom';
import '../css/software.css';
import bgVid from '../images/bgVid.mp4';

export default function Software() {
  const openInNewTab = () => {
    window.open('/login', '_blank', 'noopener,noreferrer');
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  let navigate = useNavigate();
  const routeDashboard = () => {
    let path ='/dashboard';
    navigate(path);
  }

    return (
        <div className="container-fluid main-container">
          <video autoPlay loop muted playsInline id='software-background'>
            <source src={bgVid} type="video/mp4" />
          </video>
        <div className="smaller-div">
          <div className="left-content">
            <h1 className="heading">Are You Ready to Begin Your Software Testing Journey?</h1>
            <p className="subheading">Embark on a Seamless Path to Software Testing Excellence with Us!</p>
          </div>
          <div className="right-content">
            <button className="login-button" onClick={openInNewTab} >Login</button>
            <button className="dashboard-button" onClick={ () => {scrollToTop(); routeDashboard();} }>Dashboard</button>
          </div>
        </div>
        </div>
    );
}
