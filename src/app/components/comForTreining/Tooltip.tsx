"use client";

import { useState, useRef, useEffect } from "react";

type Position = "bottom" | "top" | "right" | "left";

type TooltipProps = {
  children: React.ReactNode;
  position: Position;
  content: string;
  delay?: number;
};
export default function Tooltip({
  children,
  position,
  content,
  delay = 300,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const positionStyles = {
    bottom: "top-full left-1/2 -translate-x-1/2",
    top: "bottom-full left-1/2 -translate-x-1/2",
    right: "left-full top-1/2 -translate-y-1/2",
    left: "right-full top-1/2 -translate-y-1/2",
  };

  const showTooltip = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(true);
      timeoutRef.current = null;
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          hideTooltip();
        }
      }}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {isVisible && (
        <div
          className={`absolute bg-gray-100 text-gray-600 rounded-lg p-2 ${positionStyles[position]}`}
        >
          {content}
        </div>
      )}

      {children}
    </div>
  );
}
