import { useCallback, useEffect, useRef, useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/About.css';
import { createNoise2D } from 'simplex-noise';

type PropTypeCanvasWave = {
    reachContactPage: boolean,
    propWidth: number,
    propHeight: number,
}

const CanvasWave = (props: PropTypeCanvasWave) => {
    const { reachContactPage, propWidth, propHeight } = props;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [stageW, setStageW] = useState<number>(800);  // screen width
    const [stageH, setStageH] = useState<number>(600);  // screen height
    const frameRef = useRef<number>(0);

    useEffect(() => {
        if (reachContactPage) {
            const cxt = canvasRef.current?.getContext("2d");  // 2Dの描画命令群を取得
            if (!canvasRef.current || !cxt) {
                // throw new Error("Failed to get canvas element.")
                // throw new Error("Failed to get context.")
                console.log("Cannot display canvas on About page because failing to get canvas element or context.")
            } else {
                const initParams = init(cxt, propWidth, propHeight);
                tick(cxt, initParams);
            }
        } else {
            cancelAnimationFrame(frameRef.current);
        }
    }, [reachContactPage])

    
    const tick = (cxt: CanvasRenderingContext2D, initParams: {}) => {
        frameRef.current = requestAnimationFrame(() => tick(cxt, initParams));
        const time = Date.now() / 1000;  // 媒介変数（時間）
        // const time = performance.now() / 4000;
        draw(cxt, time, initParams);    
    };

    const init = (cxt: CanvasRenderingContext2D, propWidth: number, propHeight: number) => {
        const segmentNum = 100;
        let increment = 0;
        let frame = 0;
        let dpr = 2;
        const controls = {
            lineNum: 30,
            amplitude: 200,
            increment: .0005,
            randomNoise: 50,
            opacity: .8,
        }

        // cxt.canvas.width = propWidth * dpr;
        // cxt.canvas.height = propHeight * dpr;
        cxt.canvas.width = cxt.canvas.width * dpr;
        cxt.canvas.height = cxt.canvas.height * dpr;
        cxt.save();
        cxt.scale(dpr, dpr);
        cxt.restore();
        // cxt.canvas.style.width = propWidth + 'px';
        // cxt.canvas.style.height = propHeight + 'px';
        // cxt.canvas.style.width = cxt.canvas.width + 'px';
        // cxt.canvas.style.height = cxt.canvas.height + 'px';

        const gradation = cxt.createLinearGradient(0, 0, cxt.canvas.width, cxt.canvas.height);
        gradation.addColorStop(0, '#FC4752');
        gradation.addColorStop(.25, '#ED4A8D');
        gradation.addColorStop(.5, '#C33AD3');
        gradation.addColorStop(.75, '#7758E1');
        gradation.addColorStop(1, '#5486F2');

        return {
            segmentNum: segmentNum,
            increment: increment,
            frame: frame,
            dpr: dpr,
            gradation,
            controls: controls
        }
    }

    const draw = (cxt: CanvasRenderingContext2D, time: number, initParams: {}) => {
        const copiedInitParams = JSON.parse(JSON.stringify(initParams));
        copiedInitParams.increment += copiedInitParams.controls.increment;

        if (cxt != null) {
            const canvasWidth = cxt.canvas.width;
            const canvasHeight = cxt.canvas.height;
            const segmentNum = copiedInitParams.segmentNum;  // 分割数
            const lineNum = copiedInitParams.controls.lineNum;  // the number of lines
            const opacity = copiedInitParams.controls.opacity;
            const randomNoise = copiedInitParams.controls.randomNoise;
            const amplitude = copiedInitParams.controls.amplitude;  // 振幅：値が大きい->波の縦振れの幅が大きくなる            

            console.log("segmentNum", segmentNum);
            console.log("lineNum", lineNum);;
            console.log("amplitude", amplitude);
            // simplex noise (v4.0.3)
            const noise2D = createNoise2D();

            cxt.clearRect(0, 0, canvasWidth, canvasHeight);  // clear/reset the screen
            cxt.lineWidth = 1;  // line width
            
            // cxt.fillStyle = "rgba(20, 20, 20, 0.5)";
            // cxt.lineCap = "square";
            cxt.fillRect(0, 0, canvasWidth, canvasHeight);

            [...Array(lineNum).keys()].forEach((j: number) => {
                cxt.beginPath();  // begin a new path
                cxt.strokeStyle = copiedInitParams.gradation;
                cxt.globalAlpha = opacity;

                [...Array(segmentNum).keys()].forEach((i: number) => {
                    const x = (i / (segmentNum - 1)) * canvasWidth;  // x coordinate
                    const px = i / (randomNoise + j);
                    const py = i / (randomNoise + j) + copiedInitParams.increment;
                    const y = canvasHeight / 2 + amplitude * noise2D(px, py);  // y coordinate

                    if (i === 0) {
                        cxt.moveTo(x, y);  // begining position of the line
                    } else {
                        cxt.lineTo(x, y);  // end position of the line
                    }
                    console.log(`x, y: ${x}, ${y}`);  // To check if the canvas line is moving
                });
                cxt.stroke();  // draw a line
            });
            
        }
    };
    
    return (
        <canvas className="canvas-wave-anim" ref={canvasRef} ></canvas>
    );
}

export default CanvasWave;