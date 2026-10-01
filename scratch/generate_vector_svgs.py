import os

logo_dir = r'c:\Users\kembo\OneDrive\Desktop\Silda\nuru-nexus\public\logos'
os.makedirs(logo_dir, exist_ok=True)

# ---------------------------------------------------------------------------
# 1. PENTAPATH SVGs (Dark & Light)
# ---------------------------------------------------------------------------
def make_pentapath_svg(mode='dark'):
    primary_color = '#FFFFFF' if mode == 'dark' else '#0F273D'
    red_color = '#E52535'
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" fill="none" class="company-logo-svg company-logo--pentapath">
  <!-- 5 Radiating Spokes -->
  <g fill="{primary_color}">
    <!-- Center spoke (90 deg / straight up) -->
    <rect x="257" y="28" width="26" height="88" rx="6" />
    <!-- Diagonal spokes left -->
    <rect x="257" y="28" width="26" height="88" rx="6" transform="rotate(-38 270 144)" />
    <rect x="257" y="28" width="26" height="88" rx="6" transform="rotate(-74 270 144)" />
    <!-- Diagonal spokes right -->
    <rect x="257" y="28" width="26" height="88" rx="6" transform="rotate(38 270 144)" />
    <rect x="257" y="28" width="26" height="88" rx="6" transform="rotate(74 270 144)" />
  </g>
  
  <!-- Red Chevron / Roof -->
  <path d="M208 190 L270 114 L332 190" fill="none" stroke="{red_color}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />
  
  <!-- Wordmark "Pentapath" -->
  <text x="270" y="278" text-anchor="middle" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif">
    <tspan fill="{primary_color}" font-weight="800" font-size="78" letter-spacing="-0.01em">Penta</tspan>
    <tspan fill="{red_color}" font-weight="800" font-size="78" letter-spacing="-0.01em">path</tspan>
  </text>
  
  <!-- Subtext "GROUP LIMITED" -->
  <text x="270" y="334" text-anchor="middle" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="700" font-size="28" letter-spacing="0.22em" fill="{red_color}">
    GROUP LIMITED
  </text>
</svg>'''

# ---------------------------------------------------------------------------
# 2. JEMNET SVGs (Dark & Light)
# ---------------------------------------------------------------------------
def make_jemnet_svg(mode='dark'):
    text_color = '#FFFFFF' if mode == 'dark' else '#2E1065'
    wave_color = '#A78BFA' if mode == 'dark' else '#7C3AED'
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" fill="none" class="company-logo-svg company-logo--jemnet">
  <!-- Wifi Broadcast Waves above the J -->
  <g stroke="{wave_color}" stroke-linecap="round">
    <path d="M80 62 A 16 16 0 0 1 106 62" stroke-width="5.5" fill="none" />
    <path d="M68 50 A 32 32 0 0 1 118 50" stroke-width="6.5" fill="none" />
    <path d="M56 38 A 48 48 0 0 1 130 38" stroke-width="7.5" fill="none" />
  </g>
  
  <!-- Wordmark "JEMNET" -->
  <text x="30" y="142" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="900" font-size="92" letter-spacing="0.04em" fill="{text_color}">
    JEMNET
  </text>
  
  <!-- Slogan "Stay Connected Stay Ahead" -->
  <text x="34" y="188" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="700" font-style="italic" font-size="28" letter-spacing="0.01em" fill="{text_color}" opacity="0.95">
    Stay Connected Stay Ahead
  </text>
</svg>'''

# ---------------------------------------------------------------------------
# 3. SILDA SVGs (Dark & Light)
# ---------------------------------------------------------------------------
def make_silda_svg(mode='dark'):
    primary_color = '#FFFFFF' if mode == 'dark' else '#081A42'
    cyan_color = '#00A3E0'
    purple_color = '#6366F1'
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 280" fill="none" class="company-logo-svg company-logo--silda">
  <!-- Top 4 Flowing Cyan Wave Ribbons -->
  <g stroke-linecap="round" fill="none">
    <path d="M125 58 C 155 32, 195 28, 225 44 C 250 56, 272 44, 280 38" stroke="{cyan_color}" stroke-width="6.5" opacity="0.95" />
    <path d="M135 68 C 162 44, 198 40, 228 54 C 250 64, 268 54, 274 50" stroke="{cyan_color}" stroke-width="6" opacity="0.8" />
    <path d="M148 78 C 172 56, 202 54, 230 65 C 248 73, 262 66, 268 62" stroke="{cyan_color}" stroke-width="5.5" opacity="0.65" />
    <path d="M162 88 C 182 70, 206 68, 232 76 C 246 82, 256 78, 260 76" stroke="{cyan_color}" stroke-width="5" opacity="0.5" />
  </g>
  
  <!-- Wordmark "Silda" with purple dot accents -->
  <g>
    <!-- S -->
    <path d="M84 140 C 72 134, 52 142, 52 156 C 52 178, 86 170, 86 194 C 86 210, 68 214, 52 206" stroke="{primary_color}" stroke-width="16" stroke-linecap="round" fill="none" />
    
    <!-- i: upright stem and purple dot -->
    <circle cx="116" cy="120" r="10" fill="{purple_color}" />
    <path d="M116 148 L116 208" stroke="{primary_color}" stroke-width="15" stroke-linecap="round" />
    
    <!-- l: tall vertical stem -->
    <path d="M148 116 L148 208" stroke="{primary_color}" stroke-width="15" stroke-linecap="round" />
    
    <!-- d: circular bowl and tall stem -->
    <circle cx="196" cy="176" r="28" stroke="{primary_color}" stroke-width="15" fill="none" />
    <path d="M224 116 L224 208" stroke="{primary_color}" stroke-width="15" stroke-linecap="round" />
    
    <!-- a: circular loop with purple eye/dot center -->
    <circle cx="282" cy="176" r="28" stroke="{primary_color}" stroke-width="15" fill="none" />
    <path d="M310 162 L310 208" stroke="{primary_color}" stroke-width="15" stroke-linecap="round" />
    <circle cx="282" cy="176" r="12" fill="{purple_color}" />
  </g>
  
  <!-- Subtext "Enterprise Limited" -->
  <text x="182" y="254" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="500" font-size="26" letter-spacing="0.04em" fill="{cyan_color}">
    Enterprise Limited
  </text>
</svg>'''

# ---------------------------------------------------------------------------
# 4. DLTOO SVGs (Dark & Light)
# ---------------------------------------------------------------------------
def make_dltoo_svg(mode='dark'):
    gold_color = '#D4AF37' if mode == 'dark' else '#C59239'
    too_color = '#FFFFFF' if mode == 'dark' else '#111111'
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 380" fill="none" class="company-logo-svg company-logo--dltoo">
  <!-- Top Law Pillar & Scale Emblem -->
  <g fill="{gold_color}">
    <rect x="228" y="24" width="64" height="6" rx="2" />
    <rect x="220" y="34" width="80" height="7" rx="2.5" />
    <rect x="257" y="41" width="6" height="96" rx="1.5" />
    <!-- Mirrored oval scales/loops -->
    <path d="M252 46 C 214 46, 214 132, 252 132 Z" fill="none" stroke="{gold_color}" stroke-width="5.5" />
    <path d="M268 46 C 306 46, 306 132, 268 132 Z" fill="none" stroke="{gold_color}" stroke-width="5.5" />
  </g>
  
  <!-- Main Title: D.L. in Gold, TOO in White/Black -->
  <g font-family="'Newsreader', 'Playfair Display', Georgia, serif">
    <!-- D.L. -->
    <text x="96" y="238" font-size="94" font-weight="600" fill="{gold_color}">
      D.L.
    </text>
    
    <!-- Flourish swoosh curve under D.L. -->
    <path d="M174 240 C 205 240, 235 258, 275 258 C 300 258, 312 250, 318 244" fill="none" stroke="{gold_color}" stroke-width="5.5" stroke-linecap="round" />
    
    <!-- T in TOO -->
    <text x="274" y="238" font-size="94" font-weight="600" fill="{too_color}">
      T
    </text>
    
    <!-- Interlocked OO Rings in TOO -->
    <circle cx="360" cy="208" r="34" fill="none" stroke="{too_color}" stroke-width="12" />
    <circle cx="398" cy="208" r="34" fill="none" stroke="{too_color}" stroke-width="12" />
  </g>
  
  <!-- Subtext "& Company Advocates" -->
  <text x="260" y="306" text-anchor="middle" font-family="'Newsreader', 'Playfair Display', Georgia, serif" font-weight="600" font-size="32" fill="{gold_color}">
    &amp; Company Advocates
  </text>
</svg>'''

# Save all SVGs
for mode in ['dark', 'light']:
    with open(os.path.join(logo_dir, f'pentapath-{mode}.svg'), 'w', encoding='utf-8') as f:
        f.write(make_pentapath_svg(mode))
    with open(os.path.join(logo_dir, f'jemnet-{mode}.svg'), 'w', encoding='utf-8') as f:
        f.write(make_jemnet_svg(mode))
    with open(os.path.join(logo_dir, f'silda-{mode}.svg'), 'w', encoding='utf-8') as f:
        f.write(make_silda_svg(mode))
    with open(os.path.join(logo_dir, f'dltoo-{mode}.svg'), 'w', encoding='utf-8') as f:
        f.write(make_dltoo_svg(mode))

print('All 8 vector SVGs successfully generated!')
