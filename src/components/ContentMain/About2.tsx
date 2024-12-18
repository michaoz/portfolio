import { useCallback, useEffect, useRef, useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/About.css';
import { PropTypeContentMainAbout } from '../../type/PropTypeContentMainAbout';
import { createNoise2D } from 'simplex-noise';

// この乱数の算出にnoise2Dを使うと、算出が速すぎて滑らかなアニメーションができなさそう？
// -> 三角関数（sin）の算出方法を、一旦採用（本当はperlin noiseを使いたいが...）。
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

            // simplex noise (v4.0.3)
            const noise2D = createNoise2D();

            cxt.clearRect(0, 0, canvasWidth, canvasHeight);  // clear/reset the screen
            cxt.lineWidth = 3;  // line width
            cxt.beginPath();  // begin a new path
            cxt.strokeStyle =  "#fff";

            const segmentNum = 100;  // 分割数
            const lineNum = 60;  // the number of lines
            const amplitude = canvasHeight / 3;  // 振幅
            
            // [...Array(lineNum).keys()].forEach((j: number) => {
                [...Array(segmentNum).keys()].forEach((i: number) => {
                    const x = (i / (segmentNum - 1)) * canvasWidth;  // x coordinate

                    /* Defining the y coordinate ptn1: with radian */
                    // const radian = (i / segmentNum) * Math.PI + time;  // radian
                    // const y = amplitude * Math.sin(radian) + canvasHeight / 2;  // y coordinate
                    /* Defining the y coordinate ptn1: with radian end */

                    /* Defining the y coordinate ptn2: with simplex noise */
                    // const px = i / (50 + j);  // x input (横軸の入力値)
                    // const py = j / 50 + time;  // time input (時間の入力値)
                    const px = i / 50;  // x input (横軸の入力値)
                    const py = time / 3;  // time input (時間の入力値)
                    const y = amplitude * noise2D(px, py) + canvasHeight / 2;  // y coordinate
                    /* Defining the y coordinate ptn2: with simplex noise end */

                    if (i === 0) {
                        cxt.moveTo(x, y);  // begining position of the line
                    } else {
                        cxt.lineTo(x, y);  // end position of the line
                    }
                    console.log(`px, py: ${px}, ${py}`);  // To check if the canvas line is moving                    
                    console.log(`noise2D: ${noise2D(px, py)}`);  // To check if the canvas line is moving                    
                    // console.log(`x, y: ${x}, ${y}`);  // To check if the canvas line is moving
                });
            // });
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