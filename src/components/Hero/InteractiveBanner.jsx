"use client";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { cn } from "@/utils/cn";
import Loading from "../Common/Loading";

export default function InteractiveBanner() {
  return (
    <>
      <div
        className={cn(
          "relative h-[60dvh] w-full",
          "bg-gradient-to-b from-slate-300 via-transparent to-slate-400",
        )}
      >
        <ThreeFiber />
      </div>
      <ControlsInfo />
    </>
  );
}

function ThreeFiber() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {/* <Box position={[0, 0, 0]} /> */}

      <Dog />
      <OrbitControls />
    </Canvas>
  );
}

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  useFrame((state, delta) => (ref.current.rotation.y += delta / 4));

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "orange" : "steelblue"} />
    </mesh>
  );
}

function Dog() {
  const { scene } = useGLTF("./models/dog.glb");

  return <primitive object={scene} scale={[1, 1, 1]} position={[0, 0, 0]} />;
}

function ControlsInfo() {
  return (
    <div className="flex justify-end  bg-slate-400 p-2">
      <button
        className={cn(
          "size-12 rounded-lg bg-primary text-2xl text-white opacity-50",
          "dark:bg-white dark:text-black",
          "transition-opacity duration-300 hover:opacity-100",
        )}
        onClick={() => {}}
      >
        ?
      </button>
    </div>
  );
}
