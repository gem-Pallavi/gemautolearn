import { useState, useEffect } from 'react'
import Navigation from '../../Navigation'
import Footer from '../../Footer'
import Question from '../Question'
import SubmitAnswer from '../SubmitAnswer'
import { Link } from 'react-router-dom'

export default function DynamicClass() {
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);

            const secondTimeout = setTimeout(() => {
                setIsVisible(true);
            }, 3000);

            return () => clearTimeout(secondTimeout);
        }, 3000);

        return () => clearTimeout(timeout);
        }, [isVisible]);

    const [dynamic, setDynamic] = useState("new class");

    useEffect(() => {
        if(isVisible) {
            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var len = 5;  
            var randomName = '';  

            for (var i=0; i<len; i++) {  
                var num = Math.floor(Math.random() * characters.length);  
                randomName += characters.substring(num, num+1);
            }
            const randomClass = `${randomName}`;
            setDynamic(randomClass);
        }
    }, [isVisible]);
    
    return (
    <>
    <Navigation />
    <div className='container'>
        <Question quesTitle={"Dynamic Class"} question={<ul className='question-ul'>
            <li>Locate the button 'Dynamic Class'</li>
            <li>Retrieve the class name of the button</li>
            <li>Wait for 3 seconds for the button to reappear</li>
            <li>Retrieve the class name of the 'Dynamic Class' button</li>
            <li>Verify that the class names retrieved are different</li>
        </ul>} />

        <div className='container dynamic-class'>
            {isVisible && <button className={dynamic} id='longpress-btn'>Dynamic Class</button>}
        </div>
    </div>
    <SubmitAnswer nextLink={<Link to='/iframe' className='next-link'>Next Question</Link>} />
    <Footer />
    </>
  )
}

 