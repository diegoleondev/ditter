import React, { createContext, useContext, useEffect, useState } from "react";

interface ViewportContext {
  provider: { children: React.ReactNode };
  state: {
    size: "mobile" | "tablet" | "desktop";
  };
}

const initialState = {
  size: "mobile" as ViewportContext["state"]["size"],
};

type Breakpoint = {
  name: ViewportContext["state"]["size"];
  range: [number, number];
};

const breakpoints: Array<Breakpoint> = [
  { name: "mobile", range: [0, 499] },
  { name: "tablet", range: [500, 999] },
  { name: "desktop", range: [1000, 2000] },
];

const viewport = createContext(initialState);

export const useViewport = () => useContext(viewport);

export function ViewportProvider({ children }: ViewportContext["provider"]) {
  const [size, setSize] = useState<ViewportContext["state"]["size"]>(
    initialState.size
  );

  const calculateBreackpoint = (width: number) => {
    const breakpoint = breakpoints.find(({ range }) => {
      const [min, max] = range;

      const estaRango = width >= min && width <= max ? true : false;
      return estaRango;
    })!.name;

    setSize(breakpoint);
  };

  const handleResize = (event: any) => {
    const { target } = event;

    const width = target.innerWidth;

    calculateBreackpoint(width);
  };

  useEffect(() => {
    calculateBreackpoint(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <viewport.Provider value={{ size }}>{children}</viewport.Provider>;
}
