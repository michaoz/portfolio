import { useEffect, useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/About.css';
import '../../style/components/ContentMain/AboutCanvas.css';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import CanvasParticlesWave from './CanvasParticlesWave';

type typePropContactCanvas = {
    reachContactPage: boolean;
}

const AboutCanvas = () => {
// const ContactCanvas = (prop: typePropContactCanvas) => {
//     const { reachContactPage } = prop;

    const [windowSize, setWindowSize] = useState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
    })
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);  
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);  

    useEffect(() => {
        // Get window width and height.
        const resize = () => {
            setWindowSize({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            })
        }

        window.addEventListener("resize", resize);
        resize();  // First execution

        return () => window.removeEventListener("resize", resize);  // Remove the event listener when unmounting.
    }, [])

    const PropTypeCanvasWave = {
        // reachContactPage: reachContactPage,
        propWidth: 400,
        propHeight: 400
    }

    return (
        <div className="about-anim-container">
            <CanvasParticlesWave />
        </div>
    );
}

export default AboutCanvas;