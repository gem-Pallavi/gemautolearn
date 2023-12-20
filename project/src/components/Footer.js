import '../css/footer.css';
import icon from '../images/icon.png';

function Footer() {
    return (
      <footer className="bg py-3">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-md-5 newsletter">
              <div className='row'>
                  <div className='footer-logo'>
                    {/* <img src={icon} alt='' className='footer-img' /> */}
                  </div>
              </div>
              <div className='row'>
                  <h6 className='newsletter-title'>
                    Subscribe to our newsletter
                  </h6>
              </div>
              <div className='row'>
              <form className='d-flex newsletter-form'>
                <div className='input-group search-box'>
                  <input className="form-control" type='search' placeholder='Enter your email' id='footer-form'/>
                    <button className='subscribe-btn'>
                      Subscribe
                    </button>
                </div>
              </form>
              </div>
            </div>
            <div className="col-md-7">
              <div className='row justify-content-around'>
              <div className="col-md-3">
              <h5 className="footer-title">Account</h5>
              <ul>
                <ol><a href='/comingSoon'>Interactive Courses</a></ol>
                <ol><a href="/practice">Practice Labs</a></ol>
                <ol><a href='/comingSoon'>Expert Guidance</a></ol>
                <ol><a href='/comingSoon'>Dashboard</a></ol>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="footer-title">Social</h5>
              <ul>
                <ol><a href='https://instagram.com/gemini.solutions?igshid=MmU2YjMzNjRlOQ==' target='_blank'>Instagram</a></ol>
                <ol><a href='https://www.facebook.com/gemsolindia/' target='_blank'>Facebook</a></ol>
                <ol><a href='https://twitter.com/GeminiIndia' target='_blank'>Twitter</a></ol>
                <ol><a href='https://www.linkedin.com/company/gemini-solutions-india/mycompany/' target='_blank'>LinkedIn</a></ol>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="footer-title">Company</h5>
              <ul>
                <ol><a href='#'>Get in Touch</a></ol>
                <ol><a href='#'>Terms</a></ol>
                <ol><a href='#'>Privacy Policy</a></ol>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="footer-title">What's new</h5>
              <ul>
                <ol><a href='#'>Updates</a></ol>
              </ul>
            </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  