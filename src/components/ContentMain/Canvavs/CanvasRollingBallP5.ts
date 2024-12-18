import { useEffect, useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/Contact.css';
import p5 from 'p5';
import { createNoise2D } from 'simplex-noise';

const CanvasRollingBallP5 = (p: p5) => {
  p.setup = () => {
    // let _copiedWindowSize = JSON.parse(JSON.stringify(windowSize));
    // const width = _copiedWindowSize.windowWidth;
    // const heigt = _copiedWindowSize.windowHeight;

    p.createCanvas(400, 400);
    // p.createCanvas(width, heigt);
    p.background(255);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {

      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);

    const simplex = createNoise2D();
  }

}

export default CanvasRollingBallP5;