import React from 'react';

export default function Logo({
  size = 'medium',
  height: customHeight,
  className = '',
  style = {},
  showTagline = false,
}) {
  const heightMap = {
    xs: 32,
    small: 44,
    medium: 52,
    large: 64,
    xl: 80,
  };

  const computedHeight = customHeight || heightMap[size] || 48;
  // Artwork bounding box: x=120..495 (width 375), y=20..355 (height 335) -> aspect ratio ≈ 1.12
  const computedWidth = Math.round(computedHeight * (375 / 335));

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        ...style,
      }}
      className={`kcn-logo-wrapper ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="120 20 375 335"
        height={computedHeight}
        width={computedWidth}
        preserveAspectRatio="xMidYMid meet"
        style={{
          display: 'block',
          maxHeight: '100%',
          userSelect: 'none',
          filter: 'drop-shadow(0 1px 2px rgba(7, 80, 160, 0.12))',
          transition: 'transform 0.25s ease',
        }}
        aria-label="KCN UDYOG Logo"
        role="img"
      >
        <title>KCN UDYOG Logo</title>
        <g transform="translate(0,375) scale(0.1,-0.1)">
          {/* Upper leaf: Yellow */}
          <path
            fill="#FFCC19"
            d="M3760 3362 c-297 -132 -564 -372 -658 -593 -19 -44 -19 -45 4 -159 37 -191 47 -307 41 -509 -6 -222 -44 -444 -102 -594 -8 -20 -15 -42 -15 -47 0 -5 36 17 81 48 44 31 91 64 105 73 13 8 68 52 122 97 309 255 483 537 563 910 26 124 36 372 20 497 -12 93 -58 294 -70 307 -3 4 -44 -10 -91 -30z"
          />

          {/* Center leaf: Blue */}
          <path
            fill="#0750A0"
            d="M2805 2812 c-172 -150 -287 -295 -370 -466 -78 -159 -96 -232 -102 -401 -5 -150 -9 -124 76 -530 32 -159 51 -310 51 -423 l0 -77 56 60 c112 122 193 222 251 311 277 422 335 930 171 1497 -17 59 -34 107 -37 107 -4 0 -47 -35 -96 -78z"
          />

          {/* Left leaf: Blue */}
          <path
            fill="#0750A0"
            d="M1694 1888 c-148 -141 -275 -340 -314 -494 -24 -94 -26 -226 -5 -309 66 -261 321 -505 653 -625 75 -27 65 -35 140 110 109 209 154 432 132 650 -28 267 -172 519 -378 659 -54 36 -135 81 -147 81 -3 0 -39 -32 -81 -72z"
          />

          {/* Right leaf: Yellow */}
          <path
            fill="#FFCC19"
            d="M4140 1709 c-677 -69 -1294 -442 -1677 -1014 -33 -50 -77 -123 -97 -163 l-37 -73 113 6 c706 39 1233 200 1653 504 44 32 79 63 77 70 -1 7 2 10 8 6 12 -8 125 90 244 210 97 99 214 243 283 349 l52 81 -24 7 c-92 24 -425 34 -595 17z"
          />
        </g>
      </svg>
    </div>
  );
}
