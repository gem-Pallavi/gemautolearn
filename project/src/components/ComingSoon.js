import Navigation from "./Navigation";
import Footer from "./Footer";
import '../css/comingSoon.css';

export default function ComingSoon() {
    return (
        <>
        <Navigation />
        <div className="container coming-soon">
            <h1>Coming Soon!</h1>
            <p>Hang on! Our developer is working on it!</p>
        </div>
        <Footer />
        </>
    );
}