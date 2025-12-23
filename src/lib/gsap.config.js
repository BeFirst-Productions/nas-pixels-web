// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { TextPlugin } from 'gsap/TextPlugin';

// // Register GSAP plugins (tree-shaken in production)
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger, TextPlugin);
// }

// // Common animation configurations
// export const animationConfig = {
//   duration: 0.8,
//   ease: 'power2.out',
//   stagger: 0.1,
// };

// // Safe GSAP getter (prevents SSR issues)
// export const getGSAP = () => {
//   if (typeof window === 'undefined') {
//     return null;
//   }
//   return gsap;
// };

// // Common animations
// export const fadeInUp = {
//   opacity: 0,
//   y: 20,
//   duration: animationConfig.duration,
//   ease: animationConfig.ease,
// };

// export const staggerFadeIn = {
//   opacity: 0,
//   y: 20,
//   duration: animationConfig.duration,
//   ease: animationConfig.ease,
//   stagger: animationConfig.stagger,
// };

// // Initialize ScrollTrigger defaults
// export const initScrollTrigger = () => {
//   if (typeof window !== 'undefined') {
//     ScrollTrigger.defaults({
//       toggleActions: 'play none none reverse',
//       start: 'top 80%',
//     });
//   }
// };

// export default gsap;