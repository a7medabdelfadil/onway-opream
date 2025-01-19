import React, { type ReactNode } from "react";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  shadow?: "none" | "sm" | "md" | "lg" | "xl"; 
  border?: "none" | "borderPrimary" | "borderSecondary" | "borderGray";
  padding?: string;
}

/**
 * A simple box component with rounded corners, a light background, and some padding.
 * Can be used to wrap content to visually separate it from other content.
 *
 * @example
 * <Box shadow="md">
 *   <p>This is some content</p>
 * </Box>
 *
 * @param {ReactNode} [children] - The content to be rendered inside the box.
 * @param {string} [className] - Additional CSS classes to be applied to the box.
 * @param {string} [shadow="sm"] - The shadow intensity for the box. Options: "none", "sm", "md", "lg", "xl".
 * @param {object} [props] - Any other props supported by the `div` element.
 *
 * @returns {React.ReactElement} A `div` element with the specified props.
 */
const Box: React.FC<BoxProps> = ({ children, className = "", shadow = "sm", border = "none", padding = "4", ...props }) => {
  return (
    <div
      className={`w-full rounded-xl bg-bgPrimary p-${padding} shadow-${shadow} ${border !== "none" ? `border ${border}` : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
