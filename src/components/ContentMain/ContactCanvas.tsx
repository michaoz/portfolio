import { useEffect, useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/Contact.css';
import '../../style/components/ContentMain/ContactCanvas.css';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import CanvasRollingBallP5 from './Canvavs/CanvasRollingBallP5';
import CanvasWave from './Canvavs/CanvasWave';
import CanvasParticlesWave from './Canvavs/CanvasParticlesWave';

type typePropContactCanvas = {
    reachContactPage: boolean;
}

const ContactCanvas = () => {
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
        <div className="contact-anim-container">
            {/* <CanvasParticlesWave /> */}
            {/* <CanvasWave {...PropTypeCanvasWave}/> */}
            {/* <ReactP5Wrapper sketch={CanvasRollingBallP5}></ReactP5Wrapper> */}
        </div>
    );
}

export default ContactCanvas;