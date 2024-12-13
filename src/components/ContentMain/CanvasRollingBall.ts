import { useCallback, useEffect, useRef, useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/About.css';
import { PropTypeContentMainAbout } from '../../type/PropTypeContentMainAbout';
import { createNoise2D } from 'simplex-noise';

const CanvasRollingBall = (props: PropTypeContentMainAbout) => {
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

}

const initCanvasWave = () => {  
    const segmentNum = 100;
    const increment = 0;
    const frame = 0;
    const dpr = 2;
    let controls = () => {
      let lineNum = 30;
      let amplitude = 200;
      let increment = .005;
      let randomNoise = 50;
      let opacity = .8;
    }
  
    return {
      segmentNum: segmentNum,
      increment: increment,
      frame: frame,
      dpr: dpr,
      controls: controls,
    }
}

export default CanvasRollingBall;