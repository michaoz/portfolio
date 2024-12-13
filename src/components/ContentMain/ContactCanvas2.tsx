import { useEffect, useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/Contact.css';
import p5 from 'p5';
import CanvasWave from './CanvasWave';

// このp5をnewするやり方だと少し動作が変？ -> ReactP5Wrapperのやり方の方を採用
// （キーボードの上矢印で上にスクロールしようとしたら一瞬ページがガクガクする）
const ContactCanvas = () => {

    useEffect(() => {
        new p5(CanvasWave)
    }, [CanvasWave]);
    
    return (
        <div className="contact-anim-container">
        </div>
    );
}

export default ContactCanvas;