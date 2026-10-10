import React from 'react';

export default function Logo({ size = 'medium', className = '' }) {
  // Dynamic height based on prop
  const height = size === 'small' ? 44 : size === 'large' ? 88 : 56;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 430"
        height={height}
        width="auto"
        style={{ display: 'block', maxHeight: '100%', maxWidth: '100%', userSelect: 'none' }}
        aria-label="KCN UDYOG Logo"
      >
        <title>KCN UDYOG Logo</title>

        {/* City skyline */}
        <g stroke="#ffffff" strokeWidth="5" strokeLinejoin="round">
          <path d="M310 156 L310 103 L356 76 L400 101 L400 174 L355 155 Z" fill="#078fc2" />
          <path d="M322 149 L322 110 L354 91 L354 148 Z" fill="#ffffff" />
          <path d="M365 96 L365 151 L389 162 L389 109 Z" fill="#078fc2" />

          <path d="M365 156 L365 46 L421 17 L474 43 L474 199 L421 184 Z" fill="#29166f" />
          <path d="M377 151 L377 53 L385 49 L385 155 Z" fill="#ffffff" />
          <path d="M392 158 L392 45 L400 41 L400 162 Z" fill="#ffffff" />
          <path d="M407 165 L407 37 L415 33 L415 168 Z" fill="#ffffff" />
          <path d="M422 184 L422 25 L434 31 L434 188 Z" fill="#45358b" />

          <path d="M449 194 L449 79 L494 49 L541 73 L541 222 L496 230 Z" fill="#079f9e" />
          <path d="M461 190 L461 87 L493 67 L493 198 Z" fill="#ffffff" />
          <path d="M505 220 L505 64 L526 76 L526 220 Z" fill="#079f9e" />

          <path d="M535 216 L535 110 L575 86 L617 106 L617 235 L578 240 Z" fill="#29166f" />
          <path d="M547 211 L547 119 L556 114 L556 213 Z" fill="#ffffff" />
          <path d="M564 216 L564 109 L572 105 L572 219 Z" fill="#ffffff" />
          <path d="M582 228 L582 105 L591 110 L591 230 Z" fill="#ffffff" />
        </g>

        {/* Rooftops and houses */}
        <g strokeLinejoin="round">
          <path d="M175 285 L300 174 L434 285 L405 285 L300 201 L204 285 Z" fill="#29166f" />
          <path d="M205 285 L300 202 L396 285 Z" fill="#ffffff" />
          <path d="M226 280 L300 215 L374 280" fill="none" stroke="#078fc2" strokeWidth="5" />

          <path d="M408 281 L568 205 L696 284 L671 287 L568 231 L430 295 Z" fill="#079d50" />
          <path d="M457 280 L568 231 L660 284 Z" fill="#ffffff" />
          <path d="M482 280 L568 244 L635 282" fill="none" stroke="#078fc2" strokeWidth="4" />

          <path d="M180 287 C250 263 293 254 340 264 C399 276 440 299 493 290 C546 282 592 251 631 264 L670 286 C612 268 565 302 510 312 C451 324 407 290 344 285 C289 279 234 299 180 319 Z" fill="#079f9e" />
          <path d="M404 283 C453 309 493 304 531 284 L568 263 L626 286 C577 260 557 269 521 291 C476 316 446 301 420 289 Z" fill="#079d50" />
        </g>

        {/* House windows */}
        <g fill="#078fc2">
          <rect x="276" y="246" width="12" height="12" rx="2" />
          <rect x="292" y="246" width="12" height="12" rx="2" />
          <rect x="276" y="262" width="12" height="12" rx="2" />
          <rect x="292" y="262" width="12" height="12" rx="2" />
        </g>

        <g fill="#29166f">
          <rect x="577" y="262" width="12" height="12" rx="2" />
          <rect x="593" y="262" width="12" height="12" rx="2" />
          <rect x="577" y="278" width="12" height="12" rx="2" />
          <rect x="593" y="278" width="12" height="12" rx="2" />
        </g>

        {/* Broom */}
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M158 215 L174 255" stroke="#29166f" strokeWidth="12" />
          <path d="M153 214 L169 252" stroke="#29166f" strokeWidth="8" />
          <path d="M163 260 L190 251 L197 263 L169 273 Z" fill="#29166f" />
          <path d="M169 269 L202 260 L239 320 L218 329 L187 312 L172 326 L155 320 Z" fill="#078fc2" />
          <path d="M182 278 L174 315 M192 275 L191 321 M202 270 L208 315 M212 278 L224 309" stroke="#ffffff" strokeWidth="4" fill="none" opacity=".8" />
        </g>

        {/* Decorative stars */}
        <g fill="#078fc2">
          <path d="M139 230 L144 242 L156 247 L144 252 L139 264 L134 252 L122 247 L134 242 Z" />
          <path d="M648 83 L653 95 L665 100 L653 105 L648 117 L643 105 L631 100 L643 95 Z" />
          <path d="M714 173 L719 185 L731 190 L719 195 L714 207 L709 195 L697 190 L709 185 Z" />
          <path d="M677 223 L681 232 L691 236 L681 240 L677 249 L673 240 L663 236 L673 232 Z" />
        </g>

        <path d="M455 281 L460 292 L471 297 L460 302 L455 313 L450 302 L439 297 L450 292 Z" fill="#ffffff" />

        {/* Wordmark */}
        <text
          x="400"
          y="405"
          textAnchor="middle"
          fill="#29166f"
          fontFamily="'Plus Jakarta Sans', Arial Narrow, Roboto Condensed, sans-serif"
          fontSize="88"
          fontWeight="700"
          letterSpacing="-1.5"
        >
          KCN UDYOG
        </text>
      </svg>
    </div>
  );
}
