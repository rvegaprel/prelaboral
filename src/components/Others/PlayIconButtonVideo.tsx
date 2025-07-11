import React from "react";

interface PlayIconButtonVideoProps {
  onClick: () => void;
  size?: number;
  fill?: string;
  triangleFill?: string;
  className?: string;
}

const PlayIconButtonVideo: React.FC<PlayIconButtonVideoProps> = ({
  onClick,
  size = 123,
  fill = "#00D5E8",
  triangleFill = "rgba(0, 0, 0, 0.4)",
  className = "",
}) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 123 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="61.5" cy="61.5" r="61.5" fill={fill} />
        <polygon points="50,40 85,61.5 50,83" fill={triangleFill} />
      </svg>
    </div>
  );
};

export default PlayIconButtonVideo;
