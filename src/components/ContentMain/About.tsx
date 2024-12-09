import { useCallback, useEffect, useRef, useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/About.css';
import { PropTypeContentMainAbout } from '../../type/PropTypeContentMainAbout';
import { createNoise2D } from 'simplex-noise';

const About = (props: PropTypeContentMainAbout) => {
    const { reachAboutPage } = props;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [stageW, setStageW] = useState<number>(800);  // screen width
    const [stageH, setStageH] = useState<number>(600);  // screen height
    const frameRef = useRef<number>(0);

    useEffect(() => {
        if (reachAboutPage) {
            // 2Dの描画命令群を取得
            const cxt = canvasRef.current?.getContext("2d");
            if (!canvasRef.current || !cxt) {
                // throw new Error("Failed to get canvas element.")
                // throw new Error("Failed to get context.")
                console.log("Cannot display canvas on About page because failing to get canvas element or context.")
            } else {
                tick(cxt);
            }
        } else {
            cancelAnimationFrame(frameRef.current);
        }
    }, [reachAboutPage])

    const handleBackgroundAnimation = (reachAboutPage: boolean) => {
    };
    
    const tick = (cxt: CanvasRenderingContext2D) => {
        frameRef.current = requestAnimationFrame(() => tick(cxt));
        const time = Date.now() / 1000;  // 媒介変数（時間）
        // const time = performance.now() / 4000;
        // console.log("Date: ", Date.now());
        // console.log("performance: ", performance.now());

        draw(cxt, time);    
    };
 
    const draw = (cxt: CanvasRenderingContext2D, time: number) => {
        if (cxt != null) {
            const canvasWidth = cxt.canvas.width;
            const canvasHeight = cxt.canvas.height;

            cxt.clearRect(0, 0, canvasWidth, canvasHeight);  // clear/reset the screen
            cxt.lineWidth = 1.2;  // line width
            cxt.beginPath();  // begin a new path
            cxt.strokeStyle =  "#fff";
            cxt.fillStyle = "rgba(20, 20, 20, 0.5)";
            cxt.lineCap = "square";
            cxt.fillRect(0, 0, canvasWidth, canvasHeight);

            const segmentNum = 150;  // 分割数
            const lineNum = 5;  // the number of lines
            const amplitude = canvasHeight / 2.5;  // 振幅：値が大きい->波の縦振れの幅が大きくなる
            
            var xOffset = 0;
            [...Array(lineNum).keys()].forEach((j: number) => {
                [...Array(segmentNum).keys()].forEach((i: number) => {
                    const x = (i / (segmentNum - 1)) * canvasWidth + xOffset;  // x coordinate

                    /* Defining the y coordinate ptn1: with radian */
                    const radian = (i / segmentNum) * Math.PI + time;  // radian
                    const y = amplitude * Math.sin(radian) + canvasHeight / 2;  // y coordinate
                    /* Defining the y coordinate ptn1: with radian end */

                    if (i === 0) {
                        cxt.moveTo(x, y);  // begining position of the line
                    } else {
                        cxt.lineTo(x, y);  // end position of the line
                    }
                    console.log(`x, y: ${x}, ${y}`);  // To check if the canvas line is moving
                });
                if (j % 2 === 0) {
                    xOffset += 15;
                } else if (j % 3 === 0 || j % 5 === 0) {
                    xOffset += 20;
                } else {
                    xOffset -= 4;
                }
            });
            cxt.stroke();  // draw a line
        }
    };
    
    return (
        <div>
            <h1>About Me</h1>
            <div className="about-content">
                <div className="about-my-photo">
                    <img src={require("../../images/my-photo-dummy.png")} alt="Photo of Me"/>
                </div>
                <div className="about-text">
                    <p>
                        I am Michiko Aozasa 
                        <br/>
                        or you could call me Mia.
                        <br/>
                        <br/>
                        I am ...
                    </p>
                    <ul className="i-am-list">
                        <li>a full-stack developer.</li>
                        <li>passionate about creating great digital experiences.</li>
                        <li>able to soak up unfamiliar or new information quickly like a sponge.</li>
                    </ul>
                </div>
            </div>
            {/* <canvas id="canvas-about-paint" /> */}
            <div className="wave-bkground-color"></div>
            <div className="wave-bkground-container">
                <canvas className="canvas-wave" ref={canvasRef} ></canvas>
                {/* <div className="paint-bkground visible" id="paint-vis-1"></div>
                <div className="paint-bkground hidden" id="paint-hid-1"></div>
                <div className="paint-bkground visible" id="paint-vis-2"></div>
                <div className="paint-bkground hidden" id="paint-hid-2"></div> */}
            </div>
        </div>
    );
}

export default About;