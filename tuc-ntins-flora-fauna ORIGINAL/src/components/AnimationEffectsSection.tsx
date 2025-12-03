import { useEffect, useRef } from "react";

const AnimationEffectsSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        const rect = parallaxRef.current.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = (scrollY - rect.top) * 0.5;
          parallaxRef.current.style.transform = `translateY(${offset}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes floatingIcon {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-floating {
          animation: floatingIcon 3s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        /* Stagger animations */
        .stagger-1 {
          animation-delay: 0.1s;
        }

        .stagger-2 {
          animation-delay: 0.2s;
        }

        .stagger-3 {
          animation-delay: 0.3s;
        }

        .stagger-4 {
          animation-delay: 0.4s;
        }

        .stagger-5 {
          animation-delay: 0.5s;
        }

        /* Smooth transitions */
        .transition-smooth {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .transition-smooth-lg {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Parallax effect */
        .parallax-container {
          overflow: hidden;
        }

        .parallax-element {
          will-change: transform;
        }

        /* Hover effects */
        .hover-lift {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .hover-scale {
          transition: transform 0.3s ease-out;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .hover-tilt {
          perspective: 1000px;
        }

        .hover-tilt:hover {
          transform: rotateX(5deg) rotateY(-5deg);
        }

        /* Loading skeleton */
        .skeleton {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        /* Fade in on scroll */
        .fade-in-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-on-scroll.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Counter animation */
        .counter {
          font-variant-numeric: tabular-nums;
        }

        /* Text gradient animation */
        .gradient-text-animate {
          background: linear-gradient(
            90deg,
            #38a169,
            #f59e0b,
            #38a169
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }

        /* Scroll trigger animations */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
        }

        .scroll-reveal.revealed {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Enhanced animation examples for the site */}
      <div ref={parallaxRef} className="parallax-element pointer-events-none" />
    </>
  );
};

export default AnimationEffectsSection;
