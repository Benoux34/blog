"use client";

import { useEffect, useState } from "react";

const GetMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{
    mouseX: number;
    mouseY: number;
  }>({
    mouseX: 0,
    mouseY: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        mouseX: e.clientX,
        mouseY: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export { GetMousePosition };
