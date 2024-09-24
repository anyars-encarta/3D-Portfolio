import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  // const decals = [
  //   { position: [0, 0, 1], rotation: [2 * Math.PI, 0, 6.25] },
  //   { position: [0, 0.5, 1], rotation: [2 * Math.PI, 0.5, 6.25] },
  //   { position: [0.5, 0, 1], rotation: [2 * Math.PI, 0, 6.75] },
  //   { position: [-0.5, 0, 1], rotation: [2 * Math.PI, 0, 5.75] },
  //   // { position: [0, -0.5, 1], rotation: [2 * Math.PI, -0.5, 6.25] },
  // ];

  // const meshRef = useRef();

  // useFrame(() => {
  //   meshRef.current.rotation.x += 0.01;
  //   meshRef.current.rotation.y += 0.01;
  // });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshLambertMaterial color='#468500' polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={decal} />
        {/* {decals.map((decalProps, index) => (
          <Decal key={index} position={decalProps.position} rotation={decalProps.rotation} flatShading map={decal} />
        ))} */}
      </mesh>
    </Float>
  )
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameLoop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
};

export default BallCanvas;