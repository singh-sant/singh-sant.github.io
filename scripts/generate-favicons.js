const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  favicon16: { width: 16, height: 16, name: 'favicon-16x16.png' },
  favicon32: { width: 32, height: 32, name: 'favicon-32x32.png' },
  apple: { width: 180, height: 180, name: 'apple-touch-icon.png' },
  android192: { width: 192, height: 192, name: 'android-chrome-192x192.png' },
  android512: { width: 512, height: 512, name: 'android-chrome-512x512.png' }
};

async function generateFavicons() {
  const inputImage = path.join(__dirname, '../public/favicon/profile.png');
  const outputDir = path.join(__dirname, '../public/favicon');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate favicons for each size
  for (const [key, config] of Object.entries(sizes)) {
    await sharp(inputImage)
      .resize(config.width, config.height, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(path.join(outputDir, config.name));
    
    console.log(`Generated ${config.name}`);
  }

  // Generate favicon.ico (32x32)
  await sharp(inputImage)
    .resize(32, 32, {
      fit: 'cover',
      position: 'center'
    })
    .toFormat('ico')
    .toFile(path.join(outputDir, 'favicon.ico'));
  
  console.log('Generated favicon.ico');
}

generateFavicons().catch(console.error); 