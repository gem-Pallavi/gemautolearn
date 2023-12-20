import '../css/nextChapter.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Confetti from 'react-confetti';


export default function Congrats() {
  return (
    <>
    <Navigation />
    <div className='container congrats'>
        <Confetti className='confetti' numberOfPieces={60} />
        <h1 className='chapter-heading'>Congratulations!</h1>
        <p className='chapter-description'>You have successfully completed the training!</p>
    </div>
    <Footer />
    </>
  )
}
