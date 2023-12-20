import NextChapter from './practiceLabs/NextChapter'
import Navigation from './Navigation'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function MasteryUnleashed() {
  let navigate = useNavigate();
  const routeMasteryUnleashed = () => {
    let path = '/accordian';
    navigate(path);
  }

  return (
    <>
    <Navigation />
    <NextChapter chapter={"Mastery Unleashed"} chapterName={"'Progressing Forward'"} chapterDesc={"It's time for the ultimate challenge! Where the elite prove their mettle, demonstrating unwavering determination and resilience as they navigate a challenging landscape, ultimately achieving greatness amidst the most formidable trials that test their true potential!"} link={routeMasteryUnleashed} />
    <Footer />
    </>
  )
}
