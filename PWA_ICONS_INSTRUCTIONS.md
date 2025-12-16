# PWA Icon Instructions

To complete the PWA setup, you need to create icon files for the manifest.

## Required Icons

1. **icon-192.png** (192x192 pixels)
2. **icon-512.png** (512x512 pixels)

## How to Create

### Option 1: Use an Online Tool
1. Go to https://realfavicongenerator.net/ or https://www.pwabuilder.com/imageGenerator
2. Upload your logo or a "SM" monogram
3. Download the generated icons
4. Place them in `/public/` folder

### Option 2: Manual Creation
1. Create a square image with your logo/monogram
2. Export at 512x512 pixels (PNG format with transparency)
3. Resize a copy to 192x192 pixels
4. Save both as:
   - `icon-192.png`
   - `icon-512.png`
5. Place them in the `/public/` folder

## Design Recommendations
- Use the accent color (#64ffda) as the primary color
- Background: Black (#000000) or transparent
- Text: "SM" or "Madhav" or your logo
- Keep it simple and recognizable at small sizes
- Ensure good contrast for visibility

## Testing
After adding icons:
1. Build the project: `npm run build`
2. Test on mobile device or Chrome DevTools (Application tab)
3. Try "Add to Home Screen" feature
