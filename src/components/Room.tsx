//Test codecode

// import React, { useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

// const Room = () => {
//     const [changeColor, setSphereColor] = useState("white");
//     const handleSphereClick = () => {
//         setSphereColor(changeColor === "white" ? "red" : "white");
//       };
//   return (
//     <Canvas>

//       <ambientLight intensity={0.3} />
//       <pointLight position={[0, 5, 5]} intensity={1.5} />

//       <mesh position={[0, 1, 0]}>
//         <cylinderGeometry args={[0.02, 0.03, 1.5, 32]} />
//         <meshStandardMaterial color="gray" />
//       </mesh>

//       <mesh position={[0, 1.75, 0]} rotation={[0, Math.PI / 2, 0]}>
//          <cylinderGeometry args={[0.6, 0.5, 0.05, 50]} />
//         <meshStandardMaterial color="darkgray" />
//         </mesh>

//         <mesh position={[0, -0.06, 0]} onClick={handleSphereClick}>
//         <sphereGeometry args={[0.45, 32, 32]}/>
//         <meshStandardMaterial
//           emissive="yellow"
//           emissiveIntensity={1}
//           color={changeColor}
//         />
//       </mesh>
//       <OrbitControls maxPolarAngle={Math.PI / 2}/>

//     </Canvas>

//   );
// };

// export default Room;

import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Room = () => {
  const { scene } = useGLTF("./src/assets/room.glb");
  const lightRoom = useRef<THREE.PointLight>(null);
  const [isLightOn, setIsLightOn] = useState(true);
  const [cursor, setCursor] = useState("default");

  const ClickCircle = () => {
    if (lightRoom.current) {
      lightRoom.current.intensity = isLightOn ? 0 : 1.5;
    }
    setIsLightOn(!isLightOn);
  };

  const PointerIn = () => {
    setCursor("pointer");
  };

  const PointerOut = () => {
    setCursor("default");
  };

  return (
    <>
      <style>
        {`
                body {
                  cursor: ${cursor};
                }
              `}
      </style>
      <Canvas>
        <ambientLight intensity={1.23} />

        <pointLight
          ref={lightRoom}
          intensity={1.5}
          position={[-1.25, 1.39, -0.8]}
          decay={0.5}
          color={new THREE.Color(0xffffeb).getHex()}
        />

        <mesh
          position={[-1.25, 1.39, -0.9]}
          scale={[0.1, 0.1, 0.1]}
          onClick={ClickCircle}
          onPointerOver={PointerIn}
          onPointerOut={PointerOut}
        >
          <circleGeometry args={[1, 32, 32]} />
          <meshPhongMaterial color="black" />
        </mesh>

        <primitive object={scene} castShadow />

        <OrbitControls
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </>
  );
};

export default Room;

//   <Canvas  gl={(canvas) => {
//   const renderer = new THREE.WebGLRenderer({ canvas });
//   (renderer as any).physicallyCorrectLights = true;
//   return renderer;
// }}>
