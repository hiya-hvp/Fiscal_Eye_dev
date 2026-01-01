import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#020617",
        },
        particles: {
          number: {
            value: 70,
            density: { enable: true, area: 800 },
          },
          color: {
            value: ["#22d3ee", "#a855f7", "#38bdf8"],
          },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 140,
            color: "#38bdf8",
            opacity: 0.2,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
