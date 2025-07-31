// // import { motion } from "framer-motion";

// // const AnimatedGradientBackground = () => (
// //   <motion.div
// //     className="fixed inset-0 -z-10"
// //     initial={{ opacity: 0.7 }}
// //     animate={{ opacity: [0.7, 1, 0.7] }}
// //     transition={{ duration: 8, repeat: Infinity }}
// //     style={{
// //       background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
// //       width: "100vw",
// //       height: "100vh",
// //     }}
// //   />
// // );

// // export default AnimatedGradientBackground;


// // import { useEffect, useRef } from "react";

// // // Animated blob background using canvas
// // const AnimatedGradientBackground = () => {
// //   const canvasRef = useRef<HTMLCanvasElement>(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
// //     const ctx = canvas.getContext("2d");
// //     let animationFrameId: number;

// //     // Resize canvas to fill window
// //     const resize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };
// //     resize();
// //     window.addEventListener("resize", resize);

// //     // Blob properties
// //     const blobs = [
// //       { x: 200, y: 200, r: 120, dx: 1.2, dy: 1.1, color: "#a1c4fd" },
// //       { x: 600, y: 400, r: 180, dx: -1.1, dy: 1.3, color: "#c2e9fb" },
// //       { x: 1000, y: 300, r: 140, dx: 1.3, dy: -1.2, color: "#fbc2eb" },
// //     ];

// //     function draw() {
// //       if (!ctx) return;
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// //       blobs.forEach((blob) => {
// //         ctx.beginPath();
// //         ctx.arc(blob.x, blob.y, blob.r, 0, 2 * Math.PI);
// //         ctx.fillStyle = blob.color + "88"; // semi-transparent
// //         ctx.shadowColor = blob.color;
// //         ctx.shadowBlur = 40;
// //         ctx.fill();
// //         ctx.closePath();
// //       });
// //     }

// //     function animate() {
// //       blobs.forEach((blob) => {
// //         blob.x += blob.dx;
// //         blob.y += blob.dy;
// //         // Bounce off edges
// //         if (blob.x + blob.r > canvas.width || blob.x - blob.r < 0) blob.dx *= -1;
// //         if (blob.y + blob.r > canvas.height || blob.y - blob.r < 0) blob.dy *= -1;
// //       });
// //       draw();
// //       animationFrameId = requestAnimationFrame(animate);
// //     }

// //     animate();

// //     return () => {
// //       window.removeEventListener("resize", resize);
// //       cancelAnimationFrame(animationFrameId);
// //     };
// //   }, []);

// //   return (
// //     <canvas
// //       ref={canvasRef}
// //       className="fixed inset-0 -z-10 w-full h-full"
// //       style={{ pointerEvents: "none" }}
// //     />
// //   );
// // };

// // export default AnimatedGradientBackground;


// // import { useEffect, useRef } from "react";

// // // Animated flowing waves background using canvas
// // const AnimatedGradientBackground = () => {
// //   const canvasRef = useRef<HTMLCanvasElement>(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
// //     const ctx = canvas.getContext("2d");
// //     let animationFrameId: number;
// //     let t = 0;

// //     // Resize canvas to fill window
// //     const resize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };
// //     resize();
// //     window.addEventListener("resize", resize);

// //     function drawWaves() {
// //       if (!ctx) return;
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// //       // Draw 3 animated waves
// //       for (let i = 0; i < 3; i++) {
// //         ctx.beginPath();
// //         for (let x = 0; x <= canvas.width; x += 2) {
// //           const y =
// //             Math.sin((x / 180) + t + i) * (20 + i * 10) +
// //             Math.cos((x / (90 - i * 10)) + t * (1.2 + i * 0.2)) * (10 + i * 8) +
// //             canvas.height / 2 + i * 40;
// //           ctx.lineTo(x, y);
// //         }
// //         ctx.lineTo(canvas.width, canvas.height);
// //         ctx.lineTo(0, canvas.height);
// //         ctx.closePath();
// //         ctx.fillStyle =
// //           i === 0
// //             ? "rgba(161,196,253,0.25)"
// //             : i === 1
// //             ? "rgba(194,233,251,0.18)"
// //             : "rgba(251,194,235,0.13)";
// //         ctx.fill();
// //       }
// //     }

// //     function animate() {
// //       t += 0.012;
// //       drawWaves();
// //       animationFrameId = requestAnimationFrame(animate);
// //     }

// //     animate();

// //     return () => {
// //       window.removeEventListener("resize", resize);
// //       cancelAnimationFrame(animationFrameId);
// //     };
// //   }, []);

// //   return (
// //     <canvas
// //       ref={canvasRef}
// //       className="fixed inset-0 -z-10 w-full h-full"
// //       style={{ pointerEvents: "none" }}
// //     />
// //   );
// // };

// // export default AnimatedGradientBackground;


// // import { useEffect, useRef } from "react";

// // // Modern, sleek animated gradient using CSS and framer-motion
// // const AnimatedGradientBackground = () => {
// //   // Optionally, you can animate gradient position or colors with JS or framer-motion
// //   // Here, we use pure CSS for a smooth, modern effect

// //   return (
// //     <div
// //       className="fixed inset-0 -z-10 w-full h-full animate-gradient"
// //       style={{
// //         background:
// //           "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 50%, #fbc2eb 100%)",
// //         backgroundSize: "200% 200%",
// //         animation: "gradientMove 12s ease-in-out infinite",
// //       }}
// //     />
// //   );
// // };

// // export default AnimatedGradientBackground;

// // Add this to your global CSS (e.g., src/index.css or src/App.css):
// /*
// @keyframes gradientMove {
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// }
// .animate-gradient {
//   animation: gradientMove 12s ease-in-out infinite;
// }
// */

// // const AnimatedGradientBackground = () => (
// //   <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
// //     {/* Animated SVG Blob 1 */}
// //     <svg
// //       className="absolute top-0 left-0 animate-blob"
// //       width="600"
// //       height="600"
// //       viewBox="0 0 600 600"
// //       fill="none"
// //       xmlns="http://www.w3.org/2000/svg"
// //       style={{ filter: "blur(60px)", opacity: 0.7 }}
// //     >
// //       <ellipse cx="300" cy="300" rx="220" ry="180" fill="#a1c4fd" />
// //     </svg>
// //     {/* Animated SVG Blob 2 */}
// //     <svg
// //       className="absolute bottom-0 right-0 animate-blob2"
// //       width="500"
// //       height="500"
// //       viewBox="0 0 500 500"
// //       fill="none"
// //       xmlns="http://www.w3.org/2000/svg"
// //       style={{ filter: "blur(80px)", opacity: 0.5 }}
// //     >
// //       <ellipse cx="250" cy="250" rx="180" ry="140" fill="#fbc2eb" />
// //     </svg>
// //     {/* Aurora Gradient Overlay */}
// //     <div className="absolute inset-0 pointer-events-none" style={{
// //       background: "linear-gradient(120deg, rgba(161,196,253,0.2) 0%, rgba(251,194,235,0.2) 100%)",
// //       mixBlendMode: "screen"
// //     }} />
// //   </div>
// // );

// // export default AnimatedGradientBackground;


// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const AnimatedGradientBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true, zIndex: -10 },
//         particles: {
//           number: { value: 60 },
//           color: { value: ["#a1c4fd", "#fbc2eb", "#c2e9fb"] },
//           shape: { type: "circle" },
//           opacity: { value: 0.5 },
//           size: { value: { min: 2, max: 6 } },
//           move: { enable: true, speed: 1.5, direction: "none", outModes: "bounce" },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: true, mode: "push" },
//           },
//           modes: {
//             repulse: { distance: 80 },
//             push: { quantity: 4 },
//           },
//         },
//         background: {
//           color: "#f8fafc",
//         },
//       }}
//     />
//   );
// };

// export default AnimatedGradientBackground;