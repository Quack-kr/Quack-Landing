import React, { type PropsWithChildren } from "react";

interface IDimProps {
  className?: string;
  opacity?: number;
  isWhite?: boolean;
}

export function Dim({
  className = "",
  opacity = 0,
  isWhite = false,
  children,
}: PropsWithChildren<IDimProps>) {
  const overlayStyle = {
    backgroundColor: isWhite ? "white" : "black",
    opacity,
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-[3000] shadow-lg ${className}`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={overlayStyle}
      />
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
}
