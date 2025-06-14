"use client"
// import { useState, useEffect } from 'react';

// const BackgroundGrid = () => {
//   const [currentBg, setCurrentBg] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBg(prev => prev === 0 ? 1 : 0);
//     }, 15000); // Switch every 15 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const LeatherBackground = ({ isActive }: { isActive: boolean }) => (
//     <div className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}>
//       {/* Rich dark base */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900" />
      
//       {/* Subtle grid pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_40%,black_70%,transparent_100%)] pointer-events-none" />
      
//       {/* Leather texture */}
//       <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='5' cy='5' r='0.5'/%3E%3Ccircle cx='35' cy='15' r='0.8'/%3E%3Ccircle cx='15' cy='35' r='0.6'/%3E%3Ccircle cx='30' cy='30' r='0.4'/%3E%3C/g%3E%3C/svg%3E")`
//       }} />
      
//       {/* Soft ambient lighting */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(100,116,139,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(71,85,105,0.1)_0%,transparent_60%)] pointer-events-none" />
      
//       {/* Fine grain texture */}
//       <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none" style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.15'/%3E%3C/svg%3E")`
//       }} />
      
//       {/* Subtle color accent */}
//       <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none" />
      
//       {/* Depth shadows */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
//     </div>
//   );

//   const CyberBackground = ({ isActive }: { isActive: boolean }) => (
//     <div className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}>
//       {/* Dark cyber base */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900" />
      
//       {/* Animated grid lines */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse pointer-events-none" />
      
//       {/* Neon glow effect */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(255,0,255,0.1)_0%,transparent_50%)] pointer-events-none" />
      
//       {/* Scanning lines */}
//       <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)] pointer-events-none" />
      
//       {/* Moving light beam */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform -skew-x-12 animate-pulse pointer-events-none" />
      
//       {/* Corner highlights */}
//       <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent pointer-events-none" />
//     </div>
//   );

//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       <LeatherBackground isActive={currentBg === 0} />
//       <CyberBackground isActive={currentBg === 1} />
      
//       {/* Optional: Progress indicator */}
//       <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
//         <div className={`w-2 h-2 rounded-full transition-all duration-300 ${currentBg === 0 ? 'bg-white/60' : 'bg-white/20'}`} />
//         <div className={`w-2 h-2 rounded-full transition-all duration-300 ${currentBg === 1 ? 'bg-cyan-400/60' : 'bg-white/20'}`} />
//       </div>
//     </div>
//   );
// };

// export default BackgroundGrid;
///////////////////////////////////////////////////////////

// import { useState, useEffect } from 'react';

// const BackgroundGrid = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePos({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };

//     const animationTimer = setInterval(() => {
//       setTime(prev => prev + 1);
//     }, 50);

//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       clearInterval(animationTimer);
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       {/* Base gradient that shifts with time */}
//       <div 
//         className="absolute inset-0 transition-all duration-1000 ease-out"
//         style={{
//           background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
//             rgba(15, 23, 42, 0.9) 0%, 
//             rgba(30, 41, 59, 0.95) 30%, 
//             rgba(51, 65, 85, 0.98) 60%, 
//             rgba(15, 23, 42, 1) 100%)`
//         }}
//       />

//       {/* Animated grid that pulses */}
//       <div 
//         className="absolute inset-0 opacity-30"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(148, 163, 184, ${0.1 + Math.sin(time * 0.05) * 0.05}) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(148, 163, 184, ${0.1 + Math.sin(time * 0.05) * 0.05}) 1px, transparent 1px)
//           `,
//           backgroundSize: `${30 + Math.sin(time * 0.03) * 5}px ${30 + Math.sin(time * 0.03) * 5}px`,
//           transform: `translate(${Math.sin(time * 0.02) * 2}px, ${Math.cos(time * 0.02) * 2}px)`
//         }}
//       />

//       {/* Cyber grid overlay */}
//       <div 
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(0, 255, 255, ${0.2 + Math.sin(time * 0.08) * 0.1}) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255, 0, 255, ${0.15 + Math.cos(time * 0.08) * 0.1}) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px',
//           transform: `translate(${Math.cos(time * 0.03) * 3}px, ${Math.sin(time * 0.03) * 3}px) rotate(${Math.sin(time * 0.01) * 0.5}deg)`
//         }}
//       />

//       {/* Dynamic floating particles */}
//       {[...Array(12)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
//           style={{
//             left: `${20 + (i * 7) + Math.sin(time * 0.02 + i) * 20}%`,
//             top: `${30 + Math.cos(time * 0.015 + i) * 30}%`,
//             transform: `scale(${0.5 + Math.sin(time * 0.03 + i) * 0.5})`,
//             boxShadow: `0 0 ${4 + Math.sin(time * 0.04 + i) * 4}px rgba(0, 255, 255, 0.8)`
//           }}
//         />
//       ))}

//       {/* Scanning beam effect */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `linear-gradient(
//             ${90 + Math.sin(time * 0.01) * 45}deg,
//             transparent 0%,
//             rgba(0, 255, 255, 0.03) 45%,
//             rgba(0, 255, 255, 0.08) 50%,
//             rgba(0, 255, 255, 0.03) 55%,
//             transparent 100%
//           )`,
//           transform: `translateX(${Math.sin(time * 0.008) * 100}px)`
//         }}
//       />

//       {/* Mouse-following glow */}
//       <div 
//         className="absolute w-96 h-96 pointer-events-none transition-all duration-300 ease-out"
//         style={{
//           left: `${mousePos.x}%`,
//           top: `${mousePos.y}%`,
//           transform: 'translate(-50%, -50%)',
//           background: `radial-gradient(circle, 
//             rgba(100, 116, 139, 0.15) 0%, 
//             rgba(0, 255, 255, 0.05) 40%, 
//             transparent 70%
//           )`,
//           filter: `blur(${2 + Math.sin(time * 0.05) * 1}px)`
//         }}
//       />

//       {/* Leather texture with subtle animation */}
//       <div 
//         className="absolute inset-0 opacity-30 mix-blend-overlay"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='${1.5 + Math.sin(time * 0.04) * 0.3}'/%3E%3Ccircle cx='10' cy='10' r='${0.8 + Math.sin(time * 0.06) * 0.2}'/%3E%3Ccircle cx='50' cy='20' r='${1.2 + Math.cos(time * 0.05) * 0.3}'/%3E%3Ccircle cx='20' cy='50' r='${0.9 + Math.sin(time * 0.07) * 0.2}'/%3E%3C/g%3E%3C/svg%3E")`,
//           transform: `translate(${Math.sin(time * 0.01) * 2}px, ${Math.cos(time * 0.01) * 2}px)`
//         }}
//       />

//       {/* Ambient color waves */}
//       <div className="absolute inset-0 opacity-40">
//         <div 
//           className="absolute inset-0"
//           style={{
//             background: `radial-gradient(
//               ellipse at ${30 + Math.sin(time * 0.02) * 20}% ${40 + Math.cos(time * 0.015) * 30}%,
//               rgba(59, 130, 246, 0.1) 0%,
//               transparent 60%
//             )`
//           }}
//         />
//         <div 
//           className="absolute inset-0"
//           style={{
//             background: `radial-gradient(
//               ellipse at ${70 + Math.cos(time * 0.025) * 20}% ${60 + Math.sin(time * 0.02) * 30}%,
//               rgba(147, 51, 234, 0.08) 0%,
//               transparent 60%
//             )`
//           }}
//         />
//       </div>

//       {/* Energy pulses from corners */}
//       <div 
//         className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
//         style={{
//           background: `radial-gradient(circle, 
//             rgba(0, 255, 255, ${0.15 + Math.sin(time * 0.06) * 0.1}) 0%, 
//             transparent 70%
//           )`,
//           transform: `scale(${1 + Math.sin(time * 0.04) * 0.3})`
//         }}
//       />
//       <div 
//         className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
//         style={{
//           background: `radial-gradient(circle, 
//             rgba(255, 0, 255, ${0.12 + Math.cos(time * 0.07) * 0.08}) 0%, 
//             transparent 70%
//           )`,
//           transform: `scale(${1 + Math.cos(time * 0.05) * 0.25})`
//         }}
//       />

//       {/* Depth layers */}
//       <div 
//         className="absolute inset-0 opacity-60"
//         style={{
//           background: `linear-gradient(
//             ${45 + Math.sin(time * 0.005) * 15}deg,
//             transparent 0%,
//             rgba(0, 0, 0, 0.1) 50%,
//             transparent 100%
//           )`
//         }}
//       />

//       {/* Status indicators */}
//       <div className="absolute top-4 right-4 flex space-x-2 z-10">
//         <div 
//           className="w-2 h-2 bg-cyan-400 rounded-full"
//           style={{
//             opacity: 0.4 + Math.sin(time * 0.1) * 0.4,
//             boxShadow: `0 0 ${4 + Math.sin(time * 0.1) * 4}px rgba(0, 255, 255, 0.6)`
//           }}
//         />
//         <div 
//           className="w-2 h-2 bg-purple-400 rounded-full"
//           style={{
//             opacity: 0.4 + Math.cos(time * 0.08) * 0.4,
//             boxShadow: `0 0 ${4 + Math.cos(time * 0.08) * 4}px rgba(147, 51, 234, 0.6)`
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default BackgroundGrid;




///////////////////////////////////////////////////////////





// import { useState, useEffect } from 'react';

// const BackgroundGrid = () => {
//   const [time, setTime] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//   const [ripples, setRipples] = useState([]);

//   useEffect(() => {
//     const animationTimer = setInterval(() => {
//       setTime(prev => prev + 1);
//     }, 16); // ~60fps

//     const handleMouseMove = (e) => {
//       const newPos = {
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       };
//       setMousePos(newPos);
//     };

//     const handleClick = (e) => {
//       const newRipple = {
//         id: Date.now(),
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//         age: 0
//       };
//       setRipples(prev => [...prev.slice(-5), newRipple]); // Keep only last 6 ripples
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('click', handleClick);
    
//     return () => {
//       clearInterval(animationTimer);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('click', handleClick);
//     };
//   }, []);

//   useEffect(() => {
//     const rippleTimer = setInterval(() => {
//       setRipples(prev => 
//         prev.map(ripple => ({ ...ripple, age: ripple.age + 1 }))
//             .filter(ripple => ripple.age < 100)
//       );
//     }, 50);

//     return () => clearInterval(rippleTimer);
//   }, []);

//   // Generate flowing shapes
//   const flowingShapes = [...Array(8)].map((_, i) => ({
//     id: i,
//     x: 20 + (i * 15) + Math.sin(time * 0.01 + i * 0.5) * 30,
//     y: 30 + Math.cos(time * 0.008 + i * 0.7) * 40,
//     scale: 0.5 + Math.sin(time * 0.02 + i) * 0.3,
//     rotation: time * 0.5 + i * 45,
//     hue: (time * 0.2 + i * 30) % 360
//   }));

//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       {/* Deep space base */}
//       <div 
//         className="absolute inset-0"
//         style={{
//           background: `radial-gradient(ellipse at center, 
//             hsl(${220 + Math.sin(time * 0.003) * 20}, 70%, 8%) 0%,
//             hsl(${240 + Math.cos(time * 0.004) * 15}, 60%, 4%) 40%,
//             hsl(${200 + Math.sin(time * 0.002) * 25}, 80%, 2%) 80%,
//             #000000 100%
//           )`
//         }}
//       />

//       {/* Animated liquid shapes */}
//       {flowingShapes.map((shape) => (
//         <div
//           key={shape.id}
//           className="absolute pointer-events-none"
//           style={{
//             left: `${shape.x}%`,
//             top: `${shape.y}%`,
//             width: `${60 + shape.scale * 40}px`,
//             height: `${60 + shape.scale * 40}px`,
//             transform: `translate(-50%, -50%) rotate(${shape.rotation}deg) scale(${shape.scale})`,
//             background: `radial-gradient(ellipse, 
//               hsla(${shape.hue}, 70%, 60%, 0.15) 0%,
//               hsla(${shape.hue + 30}, 80%, 50%, 0.08) 40%,
//               transparent 80%
//             )`,
//             borderRadius: `${30 + Math.sin(time * 0.05 + shape.id) * 20}% ${50 + Math.cos(time * 0.04 + shape.id) * 30}% ${40 + Math.sin(time * 0.06 + shape.id) * 25}% ${60 + Math.cos(time * 0.03 + shape.id) * 20}%`,
//             filter: `blur(${1 + Math.sin(time * 0.02 + shape.id) * 0.5}px)`,
//             opacity: 0.6 + Math.sin(time * 0.03 + shape.id) * 0.3
//           }}
//         />
//       ))}

//       {/* Magnetic field lines */}
//       <div className="absolute inset-0 opacity-30">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute inset-0"
//             style={{
//               background: `conic-gradient(from ${time * 0.3 + i * 60}deg at ${50 + Math.sin(time * 0.01 + i) * 20}% ${50 + Math.cos(time * 0.012 + i) * 25}%, 
//                 transparent 0deg,
//                 hsla(${180 + i * 40}, 60%, 50%, 0.1) ${30 + i * 5}deg,
//                 hsla(${200 + i * 40}, 70%, 60%, 0.15) ${60 + i * 10}deg,
//                 transparent ${90 + i * 15}deg,
//                 transparent 360deg
//               )`,
//               mask: `radial-gradient(ellipse at center, transparent 20%, black 40%, transparent 80%)`
//             }}
//           />
//         ))}
//       </div>

//       {/* Neural network connections */}
//       <div className="absolute inset-0 opacity-20">
//         <svg className="w-full h-full">
//           {[...Array(12)].map((_, i) => {
//             const startX = 20 + (i * 8) + Math.sin(time * 0.02 + i) * 15;
//             const startY = 25 + Math.cos(time * 0.015 + i) * 20;
//             const endX = 60 + Math.sin(time * 0.018 + i + 1) * 25;
//             const endY = 70 + Math.cos(time * 0.022 + i + 1) * 30;
//             const opacity = 0.3 + Math.sin(time * 0.04 + i) * 0.2;
            
//             return (
//               <line
//                 key={i}
//                 x1={`${startX}%`}
//                 y1={`${startY}%`}
//                 x2={`${endX}%`}
//                 y2={`${endY}%`}
//                 stroke={`hsl(${160 + i * 15}, 70%, 60%)`}
//                 strokeWidth="1"
//                 opacity={opacity}
//                 strokeDasharray={`${2 + Math.sin(time * 0.03 + i) * 2} ${4 + Math.cos(time * 0.025 + i) * 3}`}
//                 strokeDashoffset={time * 0.1 + i}
//               />
//             );
//           })}
//         </svg>
//       </div>

//       {/* Mouse follower with trails */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-8 h-8 transition-all duration-300 ease-out"
//             style={{
//               left: `${mousePos.x}%`,
//               top: `${mousePos.y}%`,
//               transform: `translate(-50%, -50%) scale(${0.3 + i * 0.2})`,
//               background: `radial-gradient(circle, 
//                 hsla(${320 + i * 15}, 80%, 70%, ${0.4 - i * 0.08}) 0%,
//                 transparent 70%
//               )`,
//               filter: `blur(${i * 0.5}px)`,
//               animationDelay: `${i * 100}ms`
//             }}
//           />
//         ))}
//       </div>

//       {/* Click ripples */}
//       {ripples.map((ripple) => (
//         <div
//           key={ripple.id}
//           className="absolute pointer-events-none"
//           style={{
//             left: `${ripple.x}%`,
//             top: `${ripple.y}%`,
//             width: `${ripple.age * 4}px`,
//             height: `${ripple.age * 4}px`,
//             transform: 'translate(-50%, -50%)',
//             border: `2px solid hsla(${200 + ripple.age * 2}, 70%, 60%, ${1 - ripple.age * 0.01})`,
//             borderRadius: '50%',
//             opacity: Math.max(0, 1 - ripple.age * 0.01)
//           }}
//         />
//       ))}

//       {/* Plasma waves */}
//       <div 
//         className="absolute inset-0 opacity-25 mix-blend-screen"
//         style={{
//           background: `
//             radial-gradient(ellipse at ${30 + Math.sin(time * 0.005) * 40}% ${40 + Math.cos(time * 0.007) * 35}%,
//               hsla(${60 + Math.sin(time * 0.003) * 60}, 70%, 50%, 0.3) 0%,
//               transparent 50%
//             ),
//             radial-gradient(ellipse at ${70 + Math.cos(time * 0.006) * 30}% ${60 + Math.sin(time * 0.004) * 40}%,
//               hsla(${300 + Math.cos(time * 0.004) * 80}, 60%, 60%, 0.25) 0%,
//               transparent 50%
//             )
//           `
//         }}
//       />

//       {/* Floating energy orbs */}
//       {[...Array(15)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute pointer-events-none"
//           style={{
//             left: `${10 + (i * 6) + Math.sin(time * 0.008 + i * 0.3) * 80}%`,
//             top: `${20 + Math.cos(time * 0.006 + i * 0.5) * 60}%`,
//             width: `${2 + Math.sin(time * 0.04 + i) * 1}px`,
//             height: `${2 + Math.sin(time * 0.04 + i) * 1}px`,
//             background: `hsla(${120 + i * 20 + time * 0.5}, 80%, 70%, ${0.6 + Math.sin(time * 0.02 + i) * 0.4})`,
//             borderRadius: '50%',
//             boxShadow: `0 0 ${4 + Math.sin(time * 0.03 + i) * 6}px hsla(${120 + i * 20 + time * 0.5}, 80%, 70%, 0.8)`,
//             transform: `scale(${0.5 + Math.sin(time * 0.025 + i) * 0.5})`
//           }}
//         />
//       ))}

//       {/* Edge vignette */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `radial-gradient(ellipse at center, 
//             transparent 0%,
//             transparent 60%,
//             rgba(0, 0, 0, 0.3) 90%,
//             rgba(0, 0, 0, 0.6) 100%
//           )`
//         }}
//       />

//       {/* Status lights */}
//       <div className="absolute bottom-4 left-4 flex space-x-3 z-10">
//         {[...Array(3)].map((_, i) => (
//           <div
//             key={i}
//             className="w-3 h-3 rounded-full"
//             style={{
//               background: `hsla(${i * 120 + time * 0.3}, 70%, 60%, ${0.7 + Math.sin(time * 0.08 + i) * 0.3})`,
//               boxShadow: `0 0 ${6 + Math.sin(time * 0.06 + i) * 4}px hsla(${i * 120 + time * 0.3}, 70%, 60%, 0.8)`,
//               animation: `pulse ${2 + i * 0.5}s infinite alternate ease-in-out`
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BackgroundGrid;



///////////////////////////////////////////////////////////

import React from 'react';

const PastelGridBackgroundDarker = () => {
  const gridSize = 40;
  const numCircles = 7;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Darker pastel gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, #cfd0dc, #b998cf, #89a9cc)`
        }}
      />

      {/* Grid overlay with darker tone */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
  linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
`,

          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* Concentric semi-circles */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(numCircles)].map((_, i) => {
          const radius = (i + 1) * 60;
          return (
            <circle
              key={i}
              cx="50%"
              cy="50%"
              r={radius}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
              fill="none"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default PastelGridBackgroundDarker;
