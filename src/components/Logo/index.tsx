import React from "react";

type LogoProps = {
  size?: number;
};

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.57355 50.1162V15.1331C1.57355 3.26389 20.094 12.0096 20.094 24.5036V50.1162C20.094 50.1162 20.094 54.4891 15.4639 54.4891H6.20366C6.20366 54.4891 1.57355 54.4891 1.57355 50.1162Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        d="M22.7399 51.0164V23.2357C22.7399 13.8102 41.2603 20.7553 41.2603 30.677V51.0164C41.2603 51.0164 41.2603 54.489 36.6302 54.489H27.37C27.37 54.489 22.7399 54.489 22.7399 51.0164Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        d="M43.906 51.0164V23.2357C43.906 13.8102 62.4265 20.7553 62.4265 30.677V51.0164C62.4265 51.0164 62.4265 54.489 57.7963 54.489H48.5361C48.5361 54.489 43.906 54.489 43.906 51.0164Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
};

export default Logo;
