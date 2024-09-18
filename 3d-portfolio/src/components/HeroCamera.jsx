import { useFrame } from "@react-three/fiber";
import { useRef } from "react"

const HeroCamera = ({ children }) => {
    const  groupRef = useRef();

    useFrame((state, delta) => {
        
    });
    
  return (
    <group>{children}</group>
  )
}

export default HeroCamera