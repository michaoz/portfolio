import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/About.css';
import { createNoise2D } from 'simplex-noise';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei/core/OrbitControls';
import { Stats } from '@react-three/drei/core/Stats';
import { vertexShader, fragmentShader } from '../CommonFeature/js/shader';

type PropTypeCanvasWave = {
    reachContactPage: boolean,
    propWidth: number,
    propHeight: number,
}

const Particles = () => {

    const planePositions = useMemo(() => {
        const planeGeometry = new THREE.PlaneGeometry(6, 6, 128, 128);
        const positions = planeGeometry.attributes.position.array;
        return positions;
    }, []);

    const shaderArgs = useMemo(() => ({
        uniforms: {
            uTime: { value: 0 },
            vlak3color1: { value: new THREE.Color('#686aef')},
            vlak3color2: { value: new THREE.Color('#33197a')}
        },
        vertexShader,
        fragmentShader
    }), []);

    useFrame(() => {
        shaderArgs.uniforms.uTime.value++;
    })

    return (
        <points rotation={[-Math.PI / 2.7, -10, 0]}>
            <bufferGeometry attach="geometry">
                <bufferAttribute 
                    attach="attributes-position"
                    array={planePositions}
                    itemSize={3}
                    count={planePositions.length / 3}
                />
            </bufferGeometry>
            <shaderMaterial 
                args={[shaderArgs]}
                transparent
                depthTest={false}
                depthWrite={false}
            />
        </points>
    )
}

const CanvasParticlesWave = () => {
    // const { reachContactPage, propWidth, propHeight } = props;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    return (
        <Canvas className="canvas-particles-wave-anim" ref={canvasRef} dpr={2}>
            <color attach="background" args={["#141414"]} />
            <OrbitControls makeDefault/>
            {/* <Stats /> */}
            <Particles />
        </Canvas>
    );
}

export default CanvasParticlesWave;