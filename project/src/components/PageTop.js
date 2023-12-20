import backToTop from '../images/backToTop.png';
import '../css/pageTop.css';

export default function PageTop() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div id='page-top'>
            <img src={backToTop} alt='' onClick={scrollToTop} id="top"/>
        </div>
    );
}