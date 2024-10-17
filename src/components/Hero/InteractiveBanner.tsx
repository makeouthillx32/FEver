"use client";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { cn } from "@/utils/cn";
import Loading from "../Common/Loading";

export default function InteractiveBanner() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  return (
    <>
      {/* THREE FIBER WRAPPER*/}

      <div
        className={cn(
          "relative h-[80dvh] w-full",
          "bg-gradient-to-b from-slate-300 via-transparent to-slate-400",
        )}
      >
        {isOverlayVisible && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70">
            <button
              onClick={() => setIsOverlayVisible(false)}
              className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-black transition-transform hover:scale-105"
            >
              Click to Explore 3D Scene
            </button>
          </div>
        )}
        <ThreeFiber />
        <Controls handleOverlayClick={setIsOverlayVisible} />
      </div>
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
      <pointLight position={[-10, 10, -10]} decay={0} intensity={Math.PI} />
      <Dog />
      <Box position={[5, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
}

function Box(props: any) {
  const ref = useRef<any>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta / 4;
    }
  });

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

function Controls({
  handleOverlayClick,
}: {
  handleOverlayClick: (value: boolean) => void;
}) {
  return (
    <>
      <button
        className={cn(
          "size-12 rounded-full bg-primary text-2xl text-white opacity-50",
          "dark:bg-white dark:text-black",
          "transition-opacity duration-300 hover:opacity-100",
          "absolute bottom-4 right-4",
        )}
        onClick={() => {}}
      >
        ?
      </button>

      <button
        className={cn(
          "size-10 rounded-full bg-primary text-xl text-white opacity-30",
          "dark:bg-white dark:text-black",
          "transition-opacity duration-300 hover:opacity-100",
          "absolute right-4 top-4",
        )}
        onClick={() => handleOverlayClick(true)}
      >
        X
      </button>
    </>
  );
}
