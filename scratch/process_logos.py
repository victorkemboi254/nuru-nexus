import os
from PIL import Image

src_dir = r'C:\Users\kembo\.gemini\antigravity-ide\brain\c6f6bb47-c805-4a40-9bce-13dcf2e9aa4e\.user_uploaded'
out_dir = r'c:\Users\kembo\OneDrive\Desktop\Silda\nuru-nexus\public\logos'
os.makedirs(out_dir, exist_ok=True)

def process_white_bg_logo(filename, name, dark_mode_recolor=None):
    im = Image.open(os.path.join(src_dir, filename)).convert('RGBA')
    w, h = im.size
    
    out_orig = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    out_dark_bg = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    
    min_x, min_y, max_x, max_y = w, h, 0, 0
    
    for y in range(h):
        for x in range(w):
            r, g, b, a = im.getpixel((x, y))
            # Distance from white
            drop = 255 - min(r, g, b)
            
            if drop <= 6:
                continue
                
            # Smooth alpha transition near white
            if drop < 20:
                alpha = (drop - 6) / 14.0
            else:
                alpha = min(1.0, drop / 120.0 + 0.3)
                if drop > 80:
                    alpha = 1.0
                    
            a_int = int(alpha * 255)
            
            # Unblend color from white: C_true = (C_obs - (1 - alpha)*255) / alpha
            if alpha > 0.05:
                inv_a = 1.0 / alpha
                r_true = max(0, min(255, int((r - (1.0 - alpha) * 255) * inv_a)))
                g_true = max(0, min(255, int((g - (1.0 - alpha) * 255) * inv_a)))
                b_true = max(0, min(255, int((b - (1.0 - alpha) * 255) * inv_a)))
            else:
                r_true, g_true, b_true = r, g, b
                
            out_orig.putpixel((x, y), (r_true, g_true, b_true, a_int))
            
            # Dark mode recolor (for rendering on dark background #0B0D13)
            if dark_mode_recolor:
                r_d, g_d, b_d = dark_mode_recolor(r_true, g_true, b_true)
                out_dark_bg.putpixel((x, y), (r_d, g_d, b_d, a_int))
            else:
                out_dark_bg.putpixel((x, y), (r_true, g_true, b_true, a_int))
                
            if a_int > 50:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)
                
    pad = 12
    bbox = (max(0, min_x - pad), max(0, min_y - pad), min(w, max_x + pad), min(h, max_y + pad))
    cropped_orig = out_orig.crop(bbox)
    cropped_dark = out_dark_bg.crop(bbox)
    
    cropped_orig.save(os.path.join(out_dir, f'{name}.png'))
    cropped_dark.save(os.path.join(out_dir, f'{name}-white.png'))
    print(f'{name} processed. Size: {cropped_orig.size}')

# 1. Pentapath recolor: Navy elements -> White, Red elements -> Vibrant Red
def pentapath_dark_recolor(r, g, b):
    # Red is high R, low G, low B
    if r > 150 and g < 75 and b < 75:
        # Keep bright red
        return (235, 45, 55)
    # Navy or dark elements become crisp white on dark background
    return (255, 255, 255)

# 2. Silda recolor: Navy letters -> White, Cyan waves & text -> Cyan, Purple dots -> Purple
def silda_dark_recolor(r, g, b):
    # Purple dot has high B, medium R, lower G (e.g. 92, 92, 229)
    if b > 160 and r > 60 and g < 140:
        return (120, 115, 245)
    # Cyan wave/text has high B, high G, low R (e.g. 0, 163, 224)
    if b > 160 and g > 130 and r < 80:
        return (40, 185, 245)
    # Navy letters become white
    return (255, 255, 255)

# 3. DLTOO recolor: Black text ("TOO") -> White, Gold elements -> Rich Gold
def dltoo_dark_recolor(r, g, b):
    # Gold has high R, medium G, low B (e.g. 188, 125, 23)
    if r > 130 and g > 80 and b < 70:
        return (212, 165, 60) # radiant warm gold #D4A53C
    # Black text becomes white
    return (255, 255, 255)

# 4. Jemnet
def process_jemnet():
    im = Image.open(os.path.join(src_dir, 'media_1790844672647.jpg')).convert('RGB')
    w, h = im.size
    
    out_white = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    out_dark = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    
    min_x, min_y, max_x, max_y = w, h, 0, 0
    
    for y in range(h):
        for x in range(w):
            r, g, b = im.getpixel((x, y))
            # In purple gradient: green is ~40-85, blue is ~170-225, red is ~60-125
            # In white text: r, g, b are all high (>160)
            
            # White intensity based on excess over purple background:
            val = min(r, g, b)
            if val > 120 and (r > 150 and g > 130):
                alpha = max(0.0, min(1.0, (val - 110) / 95.0))
                a_int = int(alpha * 255)
                if a_int > 0:
                    out_white.putpixel((x, y), (255, 255, 255, a_int))
                    out_dark.putpixel((x, y), (90, 70, 200, a_int))
                    if a_int > 60:
                        min_x = min(min_x, x)
                        min_y = min(min_y, y)
                        max_x = max(max_x, x)
                        max_y = max(max_y, y)
                        
    pad = 8
    bbox = (max(0, min_x - pad), max(0, min_y - pad), min(w, max_x + pad), min(h, max_y + pad))
    cropped_white = out_white.crop(bbox)
    cropped_dark = out_dark.crop(bbox)
    
    cropped_white.save(os.path.join(out_dir, 'jemnet.png'))
    cropped_white.save(os.path.join(out_dir, 'jemnet-white.png'))
    cropped_dark.save(os.path.join(out_dir, 'jemnet-dark.png'))
    print(f'Jemnet processed. Size: {cropped_white.size}')

process_white_bg_logo('media_1790844672503.jpg', 'pentapath', pentapath_dark_recolor)
process_white_bg_logo('media_1790844672770.png', 'silda', silda_dark_recolor)
process_white_bg_logo('media_1790844672805.png', 'dltoo', dltoo_dark_recolor)
process_jemnet()
print('All logos successfully processed!')

