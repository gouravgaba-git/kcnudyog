import React from 'react';

export default function ProductVisualizer({ type = 'tall', liquidGradient, liquidColor, isCommercial = false, name }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 50%, #F1F5F9 0%, #E2E8F0 100%)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #E2E8F0'
      }}
    >
      {/* Background soft ambient hygiene glow */}
      <div
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: liquidColor,
          opacity: 0.18,
          filter: 'blur(24px)',
          zIndex: 0
        }}
      />

      {/* SVG Bottle Rendering */}
      <svg
        width="150"
        height="190"
        viewBox="0 0 150 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1, filter: 'drop-shadow(0 12px 14px rgba(15, 23, 42, 0.12))' }}
      >
        <defs>
          <linearGradient id={`grad-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={liquidColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={liquidColor} stopOpacity="1" />
          </linearGradient>
          
          <linearGradient id="cap-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="glass-glare" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {isCommercial ? (
          /* Commercial 5L Heavy-Duty Can Silhouette */
          <g>
            {/* Can Body */}
            <rect x="25" y="45" width="100" height="135" rx="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            
            {/* Liquid Fill Inside Level */}
            <rect x="28" y="70" width="94" height="107" rx="10" fill={`url(#grad-${type})`} opacity="0.9" />
            
            {/* Sturdy Molded Handle */}
            <path
              d="M38 45 L38 22 Q38 15 48 15 L72 15 Q82 15 82 22 L82 45"
              stroke="#0F172A"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            {/* Handle inner cutout */}
            <rect x="46" y="24" width="28" height="14" rx="4" fill="#F1F5F9" />

            {/* Heavy-Duty Screw Cap */}
            <rect x="88" y="26" width="28" height="18" rx="4" fill="url(#cap-grad)" />
            <line x1="93" y1="26" x2="93" y2="44" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="98" y1="26" x2="98" y2="44" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="103" y1="26" x2="103" y2="44" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="108" y1="26" x2="108" y2="44" stroke="#94A3B8" strokeWidth="1.5" />

            {/* Industrial Label Plate */}
            <rect x="36" y="80" width="78" height="70" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="40" y="84" width="70" height="14" fill="#16195E" rx="3" />
            <text x="75" y="94" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              KCN UDYOG
            </text>
            <text x="75" y="112" fill="#0F172A" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              COMMERCIAL PACK
            </text>
            <rect x="48" y="122" width="54" height="16" rx="3" fill="#DCFCE7" />
            <text x="75" y="133" fill="#0D8249" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              5 LITRE CAN
            </text>

            {/* Measurement Ticks on side */}
            <line x1="118" y1="90" x2="124" y2="90" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="120" y1="110" x2="124" y2="110" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="118" y1="130" x2="124" y2="130" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="120" y1="150" x2="124" y2="150" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>
        ) : type === 'pump' ? (
          /* Handwash Pump Bottle */
          <g>
            {/* Pump mechanism */}
            <rect x="68" y="18" width="14" height="20" fill="#CBD5E1" />
            <path d="M50 18 L85 18 L92 24 L50 24 Z" fill="url(#cap-grad)" />
            <path d="M48 24 Q36 26 34 32" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" fill="none" />
            <rect x="64" y="38" width="22" height="12" rx="2" fill="url(#cap-grad)" />

            {/* Ergonomic Teardrop Body */}
            <path
              d="M75 50 C55 50 40 70 40 100 C40 145 48 178 75 178 C102 178 110 145 110 100 C110 70 95 50 75 50 Z"
              fill="#FFFFFF"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            {/* Liquid Fill */}
            <path
              d="M75 66 C58 66 45 82 45 106 C45 144 52 173 75 173 C98 173 105 144 105 106 C105 82 92 66 75 66 Z"
              fill={`url(#grad-${type})`}
              opacity="0.9"
            />

            {/* Front Label */}
            <rect x="52" y="94" width="46" height="52" rx="6" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
            <rect x="55" y="98" width="40" height="10" fill="#16195E" rx="2" />
            <text x="75" y="105.5" fill="#FFFFFF" fontSize="5.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              KCN UDYOG
            </text>
            <circle cx="75" cy="120" r="7" fill={liquidColor} opacity="0.3" />
            <text x="75" y="122.5" fill="#0F172A" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              +
            </text>
            <text x="75" y="137" fill="#64748B" fontSize="5.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              250ml PUMP
            </text>
          </g>
        ) : type === 'angled' ? (
          /* Bathroom Angled Nozzle Bottle */
          <g>
            {/* Angled Neck & Cap */}
            <path d="M70 42 L62 16 L76 12 L84 38 Z" fill="url(#cap-grad)" />
            <path d="M62 16 L52 13 L56 7 L66 10 Z" fill="#DC2626" />
            
            {/* Bottle Body */}
            <path
              d="M76 42 L55 58 Q42 70 42 90 L42 165 Q42 178 56 178 L94 178 Q108 178 108 165 L108 85 Q108 60 84 42 Z"
              fill="#FFFFFF"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            {/* Liquid Fill */}
            <path
              d="M74 54 L57 66 Q46 76 46 94 L46 162 Q46 173 57 173 L93 173 Q104 173 104 162 L104 90 Q104 68 82 54 Z"
              fill={`url(#grad-${type})`}
              opacity="0.92"
            />

            {/* Label */}
            <rect x="52" y="95" width="46" height="56" rx="5" fill="#FFFFFF" />
            <rect x="55" y="99" width="40" height="12" fill="#16195E" rx="2" />
            <text x="75" y="108" fill="#FFFFFF" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              KCN UDYOG
            </text>
            <text x="75" y="123" fill="#1D4ED8" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              POWER CLEAN
            </text>
            <text x="75" y="142" fill="#64748B" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              500ml NOZZLE
            </text>
          </g>
        ) : (
          /* Tall Squeeze Bottle (Dishwash & Surface) */
          <g>
            {/* Flip Cap */}
            <rect x="65" y="18" width="20" height="14" rx="2" fill="url(#cap-grad)" />
            <rect x="68" y="12" width="14" height="6" rx="2" fill="#DC2626" />

            {/* Sleek Ergonomic Squeeze Body */}
            <path
              d="M65 32 Q50 38 46 65 Q42 95 48 120 Q44 150 46 170 Q47 178 58 178 L92 178 Q103 178 104 170 Q106 150 102 120 Q108 95 104 65 Q100 38 85 32 Z"
              fill="#FFFFFF"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            {/* Liquid Fill */}
            <path
              d="M65 44 Q53 49 50 70 Q46 96 52 120 Q48 148 50 167 Q51 173 59 173 L91 173 Q99 173 100 167 Q102 148 98 120 Q104 96 100 70 Q97 49 85 44 Z"
              fill={`url(#grad-${type})`}
              opacity="0.9"
            />

            {/* Gloss reflection highlight */}
            <path
              d="M54 65 Q50 95 54 120 L58 120 Q54 95 58 65 Z"
              fill="url(#glass-glare)"
            />

            {/* Label */}
            <rect x="54" y="85" width="42" height="54" rx="6" fill="#FFFFFF" />
            <rect x="57" y="89" width="36" height="11" fill="#16195E" rx="2" />
            <text x="75" y="97.5" fill="#FFFFFF" fontSize="5.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              KCN UDYOG
            </text>
            <text x="75" y="112" fill="#0F172A" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              GoCare
            </text>
            <text x="75" y="128" fill="#64748B" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              500ml / 1L
            </text>
          </g>
        )}
      </svg>

      {/* Floating Pack Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          backgroundColor: isCommercial ? 'var(--brand-navy)' : 'var(--brand-green)',
          color: '#ffffff',
          fontSize: '0.7rem',
          fontWeight: 700,
          padding: '3px 8px',
          borderRadius: '6px',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
        }}
      >
        {isCommercial ? 'Wholesale Bulk' : 'Retail Bottle'}
      </div>
    </div>
  );
}
