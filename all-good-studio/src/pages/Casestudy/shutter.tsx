import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

import Styles from "./shutter.module.scss";

interface ShutterProps {
  topImage: string;
  bottomImage: string;
  initialPercent?: number;
}

const Shutter: React.FC<ShutterProps> = ({
  topImage,
  bottomImage,
  initialPercent = 50,
}) => {
  const shutterRef = useRef<HTMLDivElement | null>(null);
  const topPanelRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);

  const percentRef = useRef<number>(initialPercent); // live ref for listeners
  const isDraggingRef = useRef<boolean>(false); // live dragging flag

  const [percent, setPercent] = useState<number>(initialPercent);

  // Apply clip and handle position to DOM and sync refs/state
  const applyClipPosition = (p: number, withTransition = false) => {
    const clamped = Math.max(0, Math.min(100, p));
    percentRef.current = clamped;

    if (topPanelRef.current && handleRef.current) {
      if (withTransition) {
        topPanelRef.current.style.transition = "clip-path 0.3s ease";
        handleRef.current.style.transition = "left 0.3s ease";
        window.setTimeout(() => {
          if (topPanelRef.current && handleRef.current) {
            topPanelRef.current.style.transition = "";
            handleRef.current.style.transition = "";
          }
        }, 300);
      }

      topPanelRef.current.style.clipPath = `polygon(0 0, ${clamped}% 0, ${clamped}% 100%, 0 100%)`;
      handleRef.current.style.left = `${clamped}%`;
    }

    // keep React state in sync (but listeners use refs)
    setPercent(clamped);
  };

  // Initialize position on mount / when initialPercent changes
  useEffect(() => {
    applyClipPosition(initialPercent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPercent]);

  // Attach pointer listeners once and use refs inside handlers (no stale closures)
  useEffect(() => {
    const shutter = shutterRef.current;
    const handle = handleRef.current;
    if (!shutter || !handle) return;

    // Start dragging only when pointerdown happens on handle
    const onPointerDownHandle = (ev: PointerEvent) => {
      ev.preventDefault();
      isDraggingRef.current = true;
      // capture pointer so we continue receiving move/up
      (ev.target as Element).setPointerCapture?.(ev.pointerId);
    };

    const onPointerMove = (ev: PointerEvent) => {
      if (!isDraggingRef.current || !shutterRef.current) return;
      const rect = shutterRef.current.getBoundingClientRect();
      const pos = ((ev.clientX - rect.left) / rect.width) * 100;
      applyClipPosition(pos);
    };

    const onPointerUp = (ev: PointerEvent) => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        (ev.target as Element).releasePointerCapture?.(ev.pointerId);
      }
    };

    // Click-to-move behavior on the container (20%)
    const onClickContainer = (ev: MouseEvent) => {
      // if user was dragging, ignore the click
      if (isDraggingRef.current || !shutterRef.current) return;

      const rect = shutterRef.current.getBoundingClientRect();
      const clickX = ev.clientX - rect.left;
      const clickPercent = (clickX / rect.width) * 100;
      const moveAmount = 20; // 20%

      const current = percentRef.current;
      let newPercent: number;
      if (clickPercent > current + 0.5) {
        newPercent = Math.min(current + moveAmount, 100);
      } else if (clickPercent < current - 0.5) {
        newPercent = Math.max(current - moveAmount, 0);
      } else {
        // clicked very close to handle — do nothing
        return;
      }

      applyClipPosition(newPercent, true);
    };

    // Attach listeners
    handle.addEventListener("pointerdown", onPointerDownHandle);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    shutter.addEventListener("click", onClickContainer);

    // Cleanup
    return () => {
      handle.removeEventListener("pointerdown", onPointerDownHandle);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      shutter.removeEventListener("click", onClickContainer);
    };
  }, []); // run once

  return (
    <Box className={Styles.shutterWrapper}>
      <Box className={Styles.shutterHeader}>
        <Typography>Before</Typography>
        <Typography>After</Typography>
      </Box>

      <Box ref={shutterRef} className={Styles.shutter}>
        {/* Top panel (clipped) */}
        <Box
          className={`${Styles["shutter-panel"]} ${Styles["shutter-panel--top"]}`}
          ref={topPanelRef}
        >
          <Box className={Styles["shutter-content"]}>
            <img src={topImage} alt="Top Layer" />
          </Box>
        </Box>

        {/* Bottom panel */}
        <Box
          className={`${Styles["shutter-panel"]} ${Styles["shutter-panel--bottom"]}`}
        >
          <Box className={Styles["shutter-content"]}>
            <img src={bottomImage} alt="Bottom Layer" />
          </Box>
        </Box>

        {/* Handle */}
        <Box
          ref={handleRef}
          className={`${Styles["shutter-handle"]} ${
            isDraggingRef.current ? Styles.dragging : ""
          }`}
          // pointer events handled in effect; keep this for semantics
          role="slider"
          aria-valuenow={Math.round(percent)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span className={Styles["handle-icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M9.04304 6.29297L2.83594 12.5001L9.04304 18.7072L10.4573 17.293L5.66436 12.5001L10.4573 7.70718L9.04304 6.29297ZM14.957 18.7073L21.1641 12.5002L14.957 6.29312L13.5427 7.70733L18.3356 12.5002L13.5427 17.2931L14.957 18.7073Z"
                fill="#282735"
              />
            </svg>
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Shutter;
