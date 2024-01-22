

import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three'
import { useGLTF } from "@react-three/drei";
import polyscene from '../assets/3d/polyisland.glb'

const PolyIsland = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree();

  const { nodes, materials } = useGLTF(polyscene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95

  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    lastX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true)

    //Check if client uses touchscreen
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    //update the reference for the last client position
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    //preventing default and propagation. Setting rotation to false
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);

  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();


    if (isRotating) {
      //check if client is using touchscreen
      const clientX = e.touches
        ? e.touches[0].clientX
        : e.clientX;
      //calculate change in horizontal position
      const delta = (clientX - lastX.current) / viewport.width;
      //Update island rotation based on the mouse
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      //update the reference for the last client position
      lastX.current = clientX;
      //update rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    };

  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    //event listeners for each pointer and key event
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleTouchStart, handleTouchMove, handleTouchEnd]);
  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group {...props} ref={islandRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.319, -0.469, 1.093]} scale={20}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials["Material.031"]}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials["Material.032"]}
            />
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials["Material.033"]}
            />
          </group>
          <group
            position={[9.95, 8.714, -11.299]}
            rotation={[-0.057, -0.945, -0.115]}
            scale={0.427}
          >
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <group
            position={[8.594, 8.123, -1.48]}
            rotation={[-0.304, -1.095, -0.025]}
            scale={0.552}
          >
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={nodes.Object_16.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.Object_17.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <group
            position={[7.243, 8.999, 9.669]}
            rotation={[0.234, -0.929, 0.064]}
            scale={0.432}
          >
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={nodes.Object_20.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <group
            position={[6.023, 7.012, 7.997]}
            rotation={[-0.304, -1.095, -0.025]}
            scale={0.245}
          >
            <mesh
              geometry={nodes.Object_23.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.Object_25.geometry}
              material={materials["Material.005"]}
            />
          </group>
          {/* <group
            position={[11.185, 8.141, 4.914]}
            rotation={[0.158, -1.014, 0.011]}
            scale={0.522}
          >
            <mesh
              geometry={nodes.Object_27.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={nodes.Object_28.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.Object_29.geometry}
              material={materials["Material.005"]}
            />
          </group> */}
          <group
            position={[13.874, 7.631, 8.292]}
            rotation={[-0.079, -1.072, 0.026]}
            scale={0.617}
          >
            <mesh
              geometry={nodes.Object_31.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={nodes.Object_32.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.Object_33.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <group
            position={[8.999, 3.536, 14.352]}
            rotation={[-0.277, -0.011, -0.233]}
            scale={0.401}
          >
            <mesh
              geometry={nodes.Object_35.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              geometry={nodes.Object_36.geometry}
              material={materials["Material.008"]}
            />
          </group>
          <group
            position={[8.073, 3.61, 15.064]}
            rotation={[0.202, 0.112, 0.11]}
            scale={0.224}
          >
            <mesh
              geometry={nodes.Object_38.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              geometry={nodes.Object_39.geometry}
              material={materials["Material.008"]}
            />
          </group>
          <group
            position={[-10.927, 6.741, 10.82]}
            rotation={[0.231, 0.23, 0.207]}
            scale={0.471}
          >
            <mesh
              geometry={nodes.Object_41.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              geometry={nodes.Object_42.geometry}
              material={materials["Material.008"]}
            />
          </group>
          <group
            position={[-6.765, 4.849, 6.004]}
            rotation={[-0.284, 0.065, -0.342]}
            scale={0.471}
          >
            <mesh
              geometry={nodes.Object_44.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              geometry={nodes.Object_45.geometry}
              material={materials["Material.008"]}
            />
          </group>
          <group
            position={[-10.2, 6.379, -10.031]}
            rotation={[-0.172, -0.332, -0.075]}
            scale={0.225}
          >
            <mesh
              geometry={nodes.Object_47.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              geometry={nodes.Object_48.geometry}
              material={materials["Material.008"]}
            />
          </group>
          <group
            position={[-3.409, 4.78, -4.205]}
            rotation={[0.11, 0.432, -0.111]}
            scale={0.471}
          >
            <mesh
              geometry={nodes.Object_50.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              geometry={nodes.Object_51.geometry}
              material={materials["Material.008"]}
            />
          </group>
          <group
            position={[-1.677, 5.054, -5.754]}
            rotation={[0.466, 0.466, -0.086]}
            scale={0.366}
          >
            <mesh
              geometry={nodes.Object_53.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              geometry={nodes.Object_54.geometry}
              material={materials["Material.008"]}
            />
          </group>
          <mesh
            geometry={nodes.Object_9.geometry}
            material={materials["Material.001"]}
            position={[0.319, 1.961, 1.093]}
            scale={26.299}
          />
          <mesh
            geometry={nodes.Object_56.geometry}
            material={materials["Material.011"]}
            position={[-13.446, 17.923, 9.532]}
          />
          <mesh
            geometry={nodes.Object_58.geometry}
            material={materials["Material.021"]}
            position={[0.636, 0.321, 36.617]}
            scale={0.075}
          />
          <mesh
            geometry={nodes.Object_60.geometry}
            material={materials["Material.028"]}
            position={[-47.987, 0.363, 3.973]}
            scale={0.075}
          />
          <mesh
            geometry={nodes.Object_62.geometry}
            material={materials["Material.028"]}
            position={[-49.58, 0.338, 4.008]}
            scale={0.075}
          />
        </group>
      </group>
    </a.group>
  );
}

export default PolyIsland;
