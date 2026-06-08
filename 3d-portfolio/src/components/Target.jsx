import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TARGET_MODEL_PATH = '/models/target_stand/scene.gltf';
const TARGET_SCALE = 0.10;

const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF(TARGET_MODEL_PATH);
    
    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        });
    });

    return (
        <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={TARGET_SCALE}>
            <primitive object={scene} />
        </group>
    );
};

export default Target;

useGLTF.preload(TARGET_MODEL_PATH);