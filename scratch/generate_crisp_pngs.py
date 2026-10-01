import os
import math
from PIL import Image, ImageDraw, ImageFont

out_dir = r'c:\Users\kembo\OneDrive\Desktop\Silda\nuru-nexus\public\logos'
os.makedirs(out_dir, exist_ok=True)

# Helper to load system font or fallback
def get_font(name, size):
    paths = [
        f'C:/Windows/Fonts/{name}.ttf',
        f'C:/Windows/Fonts/{name}.otf',
        'C:/Windows/Fonts/segoeui.ttf',
        'C:/Windows/Fonts/arial.ttf',
        'C:/Windows/Fonts/georgia.ttf',
    ]
    for p in paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

# ---------------------------------------------------------------------------
# 1. GENERATE PENTAPATH (Dark & Light) AT 4X RESOLUTION
# ---------------------------------------------------------------------------
def generate_pentapath(mode='dark'):
    scale = 3
    W, H = 540 * scale, 380 * scale
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    
    primary = (255, 255, 255, 255) if mode == 'dark' else (15, 39, 61, 255)
    red = (229, 37, 53, 255)
    
    cx, cy = 270 * scale, 144 * scale
    spoke_w = int(26 * scale)
    spoke_h = int(88 * scale)
    r_cap = int(6 * scale)
    
    # Draw 5 spokes by rotating around (cx, cy)
    angles = [-74, -38, 0, 38, 74]
    for ang in angles:
        # Create single spoke image
        spoke = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        s_draw = ImageDraw.Draw(spoke)
        
        # Center of spoke is at (cx, 28*scale + spoke_h/2)
        top = 28 * scale
        s_draw.rounded_rectangle(
            (cx - spoke_w//2, top, cx + spoke_w//2, top + spoke_h),
            radius=r_cap,
            fill=primary
        )
        # Rotate around (cx, cy)
        # Negative angle because PIL rotates counter-clockwise
        rotated = spoke.rotate(-ang, resample=Image.Resampling.BICUBIC, center=(cx, cy))
        im = Image.alpha_composite(im, rotated)
    
    draw = ImageDraw.Draw(im)
    # Red Chevron: apex at (270, 114)*scale, feet at (208, 190)*scale and (332, 190)*scale
    # Draw thick lines with rounded ends
    chevron_pts = [(208*scale, 190*scale), (270*scale, 114*scale), (332*scale, 190*scale)]
    draw.line(chevron_pts, fill=red, width=int(24*scale), joint='round')
    # Round caps at feet
    foot_r = int(12 * scale)
    draw.ellipse((208*scale - foot_r, 190*scale - foot_r, 208*scale + foot_r, 190*scale + foot_r), fill=red)
    draw.ellipse((332*scale - foot_r, 190*scale - foot_r, 332*scale + foot_r, 190*scale + foot_r), fill=red)
    
    # Wordmark "Penta" and "path"
    f_main = get_font('segoeuib', int(76 * scale))
    # Measure text
    penta_text = "Penta"
    path_text = "path"
    
    bbox_penta = draw.textbbox((0, 0), penta_text, font=f_main)
    bbox_path = draw.textbbox((0, 0), path_text, font=f_main)
    w_penta = bbox_penta[2] - bbox_penta[0]
    w_path = bbox_path[2] - bbox_path[0]
    
    total_w = w_penta + w_path
    start_x = (W - total_w) // 2
    text_y = int(224 * scale)
    
    draw.text((start_x, text_y), penta_text, font=f_main, fill=primary)
    draw.text((start_x + w_penta, text_y), path_text, font=f_main, fill=red)
    
    # Subtext "GROUP LIMITED"
    f_sub = get_font('segoeuib', int(26 * scale))
    sub_text = "G R O U P   L I M I T E D"
    bbox_sub = draw.textbbox((0, 0), sub_text, font=f_sub)
    w_sub = bbox_sub[2] - bbox_sub[0]
    sub_x = (W - w_sub) // 2
    sub_y = int(310 * scale)
    draw.text((sub_x, sub_y), sub_text, font=f_sub, fill=red)
    
    # Downsample with Lanczos for perfect anti-aliasing
    final = im.resize((540 * 2, 380 * 2), Image.Resampling.LANCZOS)
    filename = 'pentapath-white.png' if mode == 'dark' else 'pentapath.png'
    final.save(os.path.join(out_dir, filename))
    print(f'Generated crisp {filename}: {final.size}')

# ---------------------------------------------------------------------------
# 2. GENERATE JEMNET (Dark & Light)
# ---------------------------------------------------------------------------
def generate_jemnet(mode='dark'):
    scale = 3
    W, H = 520 * scale, 220 * scale
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    
    text_color = (255, 255, 255, 255) if mode == 'dark' else (46, 16, 101, 255)
    wave_color = (167, 139, 250, 255) if mode == 'dark' else (124, 58, 237, 255)
    
    # 3 concentric arcs above J: center around (93*scale, 62*scale)
    # arc 1: radius 16*scale
    # arc 2: radius 32*scale
    # arc 3: radius 48*scale
    cx, cy = 93 * scale, 62 * scale
    for r, width in [(16*scale, int(5.5*scale)), (32*scale, int(6.5*scale)), (48*scale, int(7.5*scale))]:
        draw.arc((cx - r, cy - r, cx + r, cy + r), start=180, end=360, fill=wave_color, width=width)
        
    f_main = get_font('segoeuib', int(92 * scale))
    draw.text((30 * scale, 58 * scale), "JEMNET", font=f_main, fill=text_color)
    
    f_sub = get_font('segoeuii', int(28 * scale))
    draw.text((34 * scale, 160 * scale), "Stay Connected Stay Ahead", font=f_sub, fill=text_color)
    
    final = im.resize((520 * 2, 220 * 2), Image.Resampling.LANCZOS)
    filename = 'jemnet-white.png' if mode == 'dark' else 'jemnet-dark.png'
    final.save(os.path.join(out_dir, filename))
    if mode == 'dark':
        final.save(os.path.join(out_dir, 'jemnet.png'))
    print(f'Generated crisp {filename}: {final.size}')

# ---------------------------------------------------------------------------
# 3. GENERATE SILDA (Dark & Light)
# ---------------------------------------------------------------------------
def generate_silda(mode='dark'):
    scale = 3
    W, H = 380 * scale, 280 * scale
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    
    primary = (255, 255, 255, 255) if mode == 'dark' else (8, 26, 66, 255)
    cyan = (0, 163, 224, 255)
    purple = (99, 102, 241, 255)
    
    # 4 wave ribbons: drawn using smooth curves
    # Silda letters:
    # S
    f_brand = get_font('segoeuib', int(96 * scale))
    # Draw 'S'
    draw.text((46 * scale, 106 * scale), "S", font=f_brand, fill=primary)
    
    # i stem + purple dot
    draw.ellipse((116*scale - 10*scale, 120*scale - 10*scale, 116*scale + 10*scale, 120*scale + 10*scale), fill=purple)
    draw.line([(116*scale, 148*scale), (116*scale, 208*scale)], fill=primary, width=int(15*scale))
    
    # l stem
    draw.line([(148*scale, 116*scale), (148*scale, 208*scale)], fill=primary, width=int(15*scale))
    
    # d
    draw.ellipse((196*scale - 28*scale, 176*scale - 28*scale, 196*scale + 28*scale, 176*scale + 28*scale), outline=primary, width=int(15*scale))
    draw.line([(224*scale, 116*scale), (224*scale, 208*scale)], fill=primary, width=int(15*scale))
    
    # a with purple center dot
    draw.ellipse((282*scale - 28*scale, 176*scale - 28*scale, 282*scale + 28*scale, 176*scale + 28*scale), outline=primary, width=int(15*scale))
    draw.line([(310*scale, 162*scale), (310*scale, 208*scale)], fill=primary, width=int(15*scale))
    draw.ellipse((282*scale - 12*scale, 176*scale - 12*scale, 282*scale + 12*scale, 176*scale + 12*scale), fill=purple)
    
    # 4 waves above
    for idx, (y_off, opacity) in enumerate([(0, 240), (10, 200), (20, 160), (30, 120)]):
        w_col = (cyan[0], cyan[1], cyan[2], opacity)
        pts = [
            (125*scale, (58 + y_off)*scale),
            (175*scale, (34 + y_off)*scale),
            (225*scale, (48 + y_off)*scale),
            (275*scale, (42 + y_off)*scale)
        ]
        draw.line(pts, fill=w_col, width=int((6.5 - idx*0.5)*scale), joint='curve')
    
    # Subtext "Enterprise Limited"
    f_sub = get_font('segoeui', int(26 * scale))
    draw.text((80 * scale, 228 * scale), "Enterprise Limited", font=f_sub, fill=cyan)
    
    final = im.resize((380 * 2, 280 * 2), Image.Resampling.LANCZOS)
    filename = 'silda-white.png' if mode == 'dark' else 'silda.png'
    final.save(os.path.join(out_dir, filename))
    print(f'Generated crisp {filename}: {final.size}')

# ---------------------------------------------------------------------------
# 4. GENERATE DLTOO (Dark & Light)
# ---------------------------------------------------------------------------
def generate_dltoo(mode='dark'):
    scale = 3
    W, H = 520 * scale, 360 * scale
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    
    gold = (212, 175, 55, 255) if mode == 'dark' else (197, 146, 57, 255)
    too_color = (255, 255, 255, 255) if mode == 'dark' else (17, 17, 17, 255)
    
    # Law pillar emblem on top: center at 260*scale
    draw.rounded_rectangle((228*scale, 24*scale, 292*scale, 30*scale), radius=int(2*scale), fill=gold)
    draw.rounded_rectangle((220*scale, 34*scale, 300*scale, 41*scale), radius=int(2.5*scale), fill=gold)
    draw.rounded_rectangle((257*scale, 41*scale, 263*scale, 137*scale), radius=int(1.5*scale), fill=gold)
    # Mirrored scales
    draw.arc((224*scale, 46*scale, 280*scale, 132*scale), start=90, end=270, fill=gold, width=int(5.5*scale))
    draw.arc((240*scale, 46*scale, 296*scale, 132*scale), start=270, end=90, fill=gold, width=int(5.5*scale))
    
    f_serif = get_font('georgiab', int(94 * scale))
    draw.text((96 * scale, 158 * scale), "D.L.", font=f_serif, fill=gold)
    # Underline flourish
    pts = [(174*scale, 240*scale), (235*scale, 258*scale), (275*scale, 258*scale), (318*scale, 244*scale)]
    draw.line(pts, fill=gold, width=int(5.5*scale), joint='curve')
    
    draw.text((274 * scale, 158 * scale), "T", font=f_serif, fill=too_color)
    # Interlocked OO rings
    draw.ellipse((360*scale - 34*scale, 208*scale - 34*scale, 360*scale + 34*scale, 208*scale + 34*scale), outline=too_color, width=int(12*scale))
    draw.ellipse((398*scale - 34*scale, 208*scale - 34*scale, 398*scale + 34*scale, 208*scale + 34*scale), outline=too_color, width=int(12*scale))
    
    # Subtext "& Company Advocates"
    f_sub = get_font('georgiab', int(32 * scale))
    bbox_sub = draw.textbbox((0, 0), "& Company Advocates", font=f_sub)
    w_sub = bbox_sub[2] - bbox_sub[0]
    draw.text(((W - w_sub)//2, 280 * scale), "& Company Advocates", font=f_sub, fill=gold)
    
    final = im.resize((520 * 2, 360 * 2), Image.Resampling.LANCZOS)
    filename = 'dltoo-white.png' if mode == 'dark' else 'dltoo.png'
    final.save(os.path.join(out_dir, filename))
    print(f'Generated crisp {filename}: {final.size}')

generate_jemnet('dark')
generate_jemnet('light')
generate_silda('dark')
generate_silda('light')
generate_dltoo('dark')
generate_dltoo('light')
print('All crisp PNGs successfully regenerated!')

