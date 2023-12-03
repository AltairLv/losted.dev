//@ts-nocheck
"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from "react-spring";

export const Globe = () => {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let width = 0;
    let phi = 600;

    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);

    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2 * 0.4,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 2,
      baseColor: [1, 1, 1],
      markerColor: [108 / 255, 255 / 255, 255 / 255],
      glowColor: [0.8, 0.8, 0.8],
      markers: [{ location: [48.866667, 2.333333], size: 0.06 }],
      scale: 2.4,
      opacity: 0.9,
      offset: [0, width * 2 * 0.4 * 0.6],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.003;
        }
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2 * 0.4;
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div
      className="w-full m-auto"
      style={{
        aspectRatio: 1 / 0.4,
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab"
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
      />
    </div>
  );
};
