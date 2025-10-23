import React, { useEffect, useRef, useState } from "react";
import Styles from "./logo-carousel.module.scss";
import { Box } from "@mui/material";

interface LogoCarouselProps {
  logos: string[];
  speed?: number;
  delay?: number;
  visibleCount?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  className?: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({
  logos = [],
  speed = 0.8,
  delay = 1000,
  visibleCount = { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
  className,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const pausedRef = useRef(true); // start paused
  const posRef = useRef(0);
  const [direction, setDirection] = useState(1);
  const [itemWidth, setItemWidth] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  if (!logos || logos.length === 0) return null;

  // Measure item width dynamically
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateWidth = () => {
      const containerWidth = wrapper.clientWidth;
      let count = visibleCount.xs || 2;

      const w = window.innerWidth;
      if (w >= 1200 && visibleCount.xl) count = visibleCount.xl;
      else if (w >= 992 && visibleCount.lg) count = visibleCount.lg;
      else if (w >= 768 && visibleCount.md) count = visibleCount.md;
      else if (w >= 576 && visibleCount.sm) count = visibleCount.sm;

      setItemWidth(containerWidth / count);
      setMaxTranslate(-(containerWidth / count * logos.length - containerWidth));
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [visibleCount, logos.length]);

  // Intersection observer: start animation when in viewport
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          pausedRef.current = !entry.isIntersecting; // pause if not visible
        });
      },
      { threshold: 0.1 } // start when 10% of section is visible
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  // Animation loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track || itemWidth === 0) return;

    let waitTimeout: NodeJS.Timeout | null = null;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current -= direction * speed;

        if (direction === 1 && posRef.current <= maxTranslate) {
          posRef.current = maxTranslate;
          cancelAnimationFrame(animationRef.current!);
          waitTimeout = setTimeout(() => setDirection(-1), delay);
          return;
        }

        if (direction === -1 && posRef.current >= 0) {
          posRef.current = 0;
          cancelAnimationFrame(animationRef.current!);
          waitTimeout = setTimeout(() => setDirection(1), delay);
          return;
        }

        track.style.transform = `translateX(${posRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      if (waitTimeout) clearTimeout(waitTimeout);
    };
  }, [direction, itemWidth, logos.length, speed, delay, maxTranslate]);

  // Pause on hover
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onEnter = () => (pausedRef.current = true);
    const onLeave = () => (pausedRef.current = false);

    wrapper.addEventListener("mouseenter", onEnter);
    wrapper.addEventListener("mouseleave", onLeave);
    wrapper.addEventListener("touchstart", onEnter);
    wrapper.addEventListener("touchend", onLeave);

    return () => {
      wrapper.removeEventListener("mouseenter", onEnter);
      wrapper.removeEventListener("mouseleave", onLeave);
      wrapper.removeEventListener("touchstart", onEnter);
      wrapper.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <Box className={className}>
      <Box className={Styles.carouselWrapper} ref={wrapperRef}>
        <Box className={Styles.carouselTrack} ref={trackRef}>
          {logos.map((logo, idx) => (
            <Box className={Styles.logoItem} key={idx} style={{ width: itemWidth }}>
              <img src={logo} alt={`logo-${idx}`} draggable={false} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LogoCarousel;
