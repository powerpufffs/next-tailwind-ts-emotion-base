import * as React from "react";

interface SpacerProps {
  width?: string | number;
  height?: string | number;
}

const Spacer: React.FC<SpacerProps> = ({ width, height }) => {
  return (
    <div
      className={`
      inline-block
      ${width && `px-${width}`}
      ${height && `py-${height}`}
    `}
    />
  );
};

export default Spacer;
