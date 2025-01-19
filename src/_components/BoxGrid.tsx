import React, { ReactNode } from "react";

interface BoxGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  columns?: number; 
  mdColumns?: number; 
  gap?: number;
}

const BoxGrid: React.FC<BoxGridProps> = ({ 
  children, 
  columns = 2, 
  mdColumns = 1, 
  gap = 6, 
  className = "", 
  ...props 
}) => {
  return (
    <div
      className={`grid gap-${gap} ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: `${gap}rem`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default BoxGrid;
