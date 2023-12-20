import React from 'react'
import NextChapter from './practiceLabs/NextChapter'
import Navigation from './Navigation'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function ProgressingForward() {
  let navigate = useNavigate();
  const routeProgessingForward = () => {
    let path = '/nestedCheckbox';
    navigate(path);
  }

  return (
    <>
    <Navigation />
    <NextChapter chapter={"Progressing Forward"} chapterName={"'The Beginning'"} chapterDesc={"It's time for for a thrilling phase where your skills evolve, challenges intensify, and your journey towards mastery and expertise takes flight, guiding you to new heights of personal and professional achievement!"} link={routeProgessingForward} />
    <Footer />
    </>
  )
}
