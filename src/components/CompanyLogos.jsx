import { memo } from 'react'

// ============================================================================
// 1. DLTOO ADVOCATES VECTOR BRAND LOGO
// ============================================================================
export const DltooLogo = memo(({ mode = 'dark', className = '', ...props }) => {
  const goldColor = mode === 'dark' ? '#D4AF37' : '#C59239'
  const tooColor = mode === 'dark' ? '#FFFFFF' : '#111111'

  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      className={`company-brand-logo company-brand-logo--dltoo ${className}`}
      aria-label="DLTOO & Company Advocates"
      {...props}
    >
      {/* Top Law Pillar & Scale Emblem */}
      <g fill={goldColor}>
        <rect x="228" y="24" width="64" height="6" rx="2" />
        <rect x="220" y="34" width="80" height="7" rx="2.5" />
        <rect x="257" y="41" width="6" height="96" rx="1.5" />
        <path
          d="M252 46 C 214 46, 214 132, 252 132 Z"
          fill="none"
          stroke={goldColor}
          strokeWidth="5.5"
        />
        <path
          d="M268 46 C 306 46, 306 132, 268 132 Z"
          fill="none"
          stroke={goldColor}
          strokeWidth="5.5"
        />
      </g>

      {/* Main Title: D.L. in Gold, TOO in White / Charcoal */}
      <g fontFamily="'Newsreader', 'Playfair Display', Georgia, serif">
        <text x="96" y="238" fontSize="94" fontWeight="600" fill={goldColor}>
          D.L.
        </text>

        {/* Flourish swoosh curve under D.L. */}
        <path
          d="M174 240 C 205 240, 235 258, 275 258 C 300 258, 312 250, 318 244"
          fill="none"
          stroke={goldColor}
          strokeWidth="5.5"
          strokeLinecap="round"
        />

        {/* T in TOO */}
        <text x="274" y="238" fontSize="94" fontWeight="600" fill={tooColor}>
          T
        </text>

        {/* Interlocked OO Rings */}
        <circle cx="360" cy="208" r="34" fill="none" stroke={tooColor} strokeWidth="12" />
        <circle cx="398" cy="208" r="34" fill="none" stroke={tooColor} strokeWidth="12" />
      </g>

      {/* Subtext "& Company Advocates" */}
      <text
        x="260"
        y="306"
        textAnchor="middle"
        fontFamily="'Newsreader', 'Playfair Display', Georgia, serif"
        fontWeight="600"
        fontSize="32"
        fill={goldColor}
      >
        &amp; Company Advocates
      </text>
    </svg>
  )
})

// ============================================================================
// 2. SILDA EDUTECH VECTOR BRAND LOGO
// ============================================================================
export const SildaLogo = memo(({ mode = 'dark', className = '', ...props }) => {
  const primaryColor = mode === 'dark' ? '#FFFFFF' : '#081A42'
  const cyanColor = '#00A3E0'
  const purpleColor = '#6366F1'

  return (
    <svg
      viewBox="0 0 380 280"
      fill="none"
      className={`company-brand-logo company-brand-logo--silda ${className}`}
      aria-label="SILDA EduTech"
      {...props}
    >
      {/* Top 4 Flowing Cyan Wave Ribbons */}
      <g strokeLinecap="round" fill="none">
        <path
          d="M125 58 C 155 32, 195 28, 225 44 C 250 56, 272 44, 280 38"
          stroke={cyanColor}
          strokeWidth="6.5"
          opacity="0.95"
        />
        <path
          d="M135 68 C 162 44, 198 40, 228 54 C 250 64, 268 54, 274 50"
          stroke={cyanColor}
          strokeWidth="6"
          opacity="0.8"
        />
        <path
          d="M148 78 C 172 56, 202 54, 230 65 C 248 73, 262 66, 268 62"
          stroke={cyanColor}
          strokeWidth="5.5"
          opacity="0.65"
        />
        <path
          d="M162 88 C 182 70, 206 68, 232 76 C 246 82, 256 78, 260 76"
          stroke={cyanColor}
          strokeWidth="5"
          opacity="0.5"
        />
      </g>

      {/* Wordmark "Silda" with purple dot accents */}
      <g>
        {/* S */}
        <path
          d="M84 140 C 72 134, 52 142, 52 156 C 52 178, 86 170, 86 194 C 86 210, 68 214, 52 206"
          stroke={primaryColor}
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />

        {/* i: upright stem and purple dot */}
        <circle cx="116" cy="120" r="10" fill={purpleColor} />
        <path d="M116 148 L116 208" stroke={primaryColor} strokeWidth="15" strokeLinecap="round" />

        {/* l: tall vertical stem */}
        <path d="M148 116 L148 208" stroke={primaryColor} strokeWidth="15" strokeLinecap="round" />

        {/* d: circular bowl and tall stem */}
        <circle cx="196" cy="176" r="28" stroke={primaryColor} strokeWidth="15" fill="none" />
        <path d="M224 116 L224 208" stroke={primaryColor} strokeWidth="15" strokeLinecap="round" />

        {/* a: circular loop with purple center eye dot */}
        <circle cx="282" cy="176" r="28" stroke={primaryColor} strokeWidth="15" fill="none" />
        <path d="M310 162 L310 208" stroke={primaryColor} strokeWidth="15" strokeLinecap="round" />
        <circle cx="282" cy="176" r="12" fill={purpleColor} />
      </g>

      {/* Subtext "Enterprise Limited" */}
      <text
        x="182"
        y="254"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontWeight="500"
        fontSize="26"
        letterSpacing="0.04em"
        fill={cyanColor}
      >
        Enterprise Limited
      </text>
    </svg>
  )
})

// ============================================================================
// 3. JEMNET VECTOR BRAND LOGO
// ============================================================================
export const JemnetLogo = memo(({ mode = 'dark', className = '', ...props }) => {
  const textColor = mode === 'dark' ? '#FFFFFF' : '#2E1065'
  const waveColor = mode === 'dark' ? '#A78BFA' : '#7C3AED'

  return (
    <svg
      viewBox="0 0 520 220"
      fill="none"
      className={`company-brand-logo company-brand-logo--jemnet ${className}`}
      aria-label="JEMNET"
      {...props}
    >
      {/* Wifi Broadcast Waves above the J */}
      <g stroke={waveColor} strokeLinecap="round">
        <path d="M80 62 A 16 16 0 0 1 106 62" strokeWidth="5.5" fill="none" />
        <path d="M68 50 A 32 32 0 0 1 118 50" strokeWidth="6.5" fill="none" />
        <path d="M56 38 A 48 48 0 0 1 130 38" strokeWidth="7.5" fill="none" />
      </g>

      {/* Wordmark "JEMNET" */}
      <text
        x="30"
        y="142"
        fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
        fontWeight="900"
        fontSize="92"
        letterSpacing="0.04em"
        fill={textColor}
      >
        JEMNET
      </text>

      {/* Slogan "Stay Connected Stay Ahead" */}
      <text
        x="34"
        y="188"
        fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="28"
        letterSpacing="0.01em"
        fill={textColor}
        opacity="0.95"
      >
        Stay Connected Stay Ahead
      </text>
    </svg>
  )
})

// ============================================================================
// 4. PENTAPATH GROUP VECTOR BRAND LOGO
// ============================================================================
export const PentapathLogo = memo(({ mode = 'dark', className = '', ...props }) => {
  const primaryColor = mode === 'dark' ? '#FFFFFF' : '#0F273D'
  const redColor = '#E52535'

  return (
    <svg
      viewBox="0 0 540 380"
      fill="none"
      className={`company-brand-logo company-brand-logo--pentapath ${className}`}
      aria-label="Pentapath Group Limited"
      {...props}
    >
      {/* 5 Radiating Spokes */}
      <g fill={primaryColor}>
        <rect x="257" y="28" width="26" height="88" rx="6" />
        <rect x="257" y="28" width="26" height="88" rx="6" transform="rotate(-38 270 144)" />
        <rect x="257" y="28" width="26" height="88" rx="6" transform="rotate(-74 270 144)" />
        <rect x="257" y="28" width="26" height="88" rx="6" transform="rotate(38 270 144)" />
        <rect x="257" y="28" width="26" height="88" rx="6" transform="rotate(74 270 144)" />
      </g>

      {/* Red Chevron / Roof */}
      <path
        d="M208 190 L270 114 L332 190"
        fill="none"
        stroke={redColor}
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wordmark "Pentapath" */}
      <text
        x="270"
        y="278"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
      >
        <tspan fill={primaryColor} fontWeight="800" fontSize="78" letterSpacing="-0.01em">
          Penta
        </tspan>
        <tspan fill={redColor} fontWeight="800" fontSize="78" letterSpacing="-0.01em">
          path
        </tspan>
      </text>

      {/* Subtext "GROUP LIMITED" */}
      <text
        x="270"
        y="334"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
        fontWeight="700"
        fontSize="28"
        letterSpacing="0.22em"
        fill={redColor}
      >
        GROUP LIMITED
      </text>
    </svg>
  )
})

export default {
  DltooLogo,
  SildaLogo,
  JemnetLogo,
  PentapathLogo,
}
