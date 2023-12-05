import {useEffect, useRef} from 'react'
import birdScene from '../assets/3d/bird.glb';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';

const Bird = () => {
  const birdRef = useRef()
  const { scene, animations } = useGLTF(birdScene) 
  const { actions } = useAnimations(animations, birdRef)
  useEffect(() => {
    actions['Take 001'].play()
  }, [actions]);
  useFrame(({clock, camera}) => {
    // function to update Y position to simulate flight moving in a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime)* 0.2 +2
    //Check if the bird reached a certain endpoint relative to camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      //Change direction to backwards and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      //Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    //Update the x and z axis positions based on direction    
    if (birdRef.current.rotation.y === 0) {
      //Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      //Moving backwards
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  })
  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird