import React from "react";

type LogoProps = {
  size?: number;
  color?: string;
};

const Logo: React.FC<LogoProps> = ({ size, color = "#000000" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 45.6944V19.25C9 10.2778 23 16.8889 23 26.3333V45.6944C23 45.6944 23 49 19.5 49H12.5C12.5 49 9 49 9 45.6944Z"
        fill={color}
        stroke={color}
      />
      <path
        d="M25 46.375V25.375C25 18.25 39 23.5 39 31V46.375C39 46.375 39 49 35.5 49H28.5C28.5 49 25 49 25 46.375Z"
        fill={color}
        stroke={color}
      />
      <path
        d="M41 46.375V25.375C41 18.25 55 23.5 55 31V46.375C55 46.375 55 49 51.5 49H44.5C44.5 49 41 49 41 46.375Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default Logo;
