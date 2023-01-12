import React, {useEffect} from "react";
import { View } from "react-native";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

// TODO : ADD MODEL 3D

function Box() {
  const ref = React.useRef();
  useFrame((state, delta) => (ref.current.rotation.y += delta));

  // const materials = useLoader(MTLLoader, "../../../assets/mesh/mesh.mtl");
  // const object = useLoader(OBJLoader, "../../../assets/mesh/mesh.obj", (loader) => {
  //   materials.preload();
  //   loader.setMaterials(materials);
  // });

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[3.5, 3, 0.7]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0, 0, 0.4]}>
        <boxGeometry args={[2.5, 2.5, 0.2]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
    // <mesh ref={ref} position={[0, 0, 0]} scale={[3.5, 3.5, 3.5]}>
    //   <primitive object={object} />
    //   <meshStandardMaterial
    //     color="#ff0000"
    //     opacity={0.1}
    //     transparent
    //     shininess={50}
    //   />
    // </mesh>
  );
}

function Model() {
  return (
    <View style={{ width: "100%", height: 300, zIndex: '91' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </View>
  );
}

export default Model;
