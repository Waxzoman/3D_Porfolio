import React from 'react'


import planceScene from '../assets/3d/plane.glb'; 
import { Gltf, useGLTF } from '@react-three/drei';

const Plane = () => {
  const {scene, animations} = useGLTF(planceScene)  
  return (
    <mesh>
          <primitive object={scene} />
    </mesh>
  )
}

export default Plane