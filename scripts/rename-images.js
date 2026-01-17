const fs = require('fs');
const path = require('path');

// This script helps rename screenshot images
// Since we can't view images directly, we'll create a systematic naming approach
// You may need to manually review and adjust names based on image content

const imagesDir = path.join(__dirname, '../public/images');
const files = fs.readdirSync(imagesDir);

// Filter only screenshot files
const screenshots = files.filter(file => file.startsWith('Screenshot') && file.endsWith('.webp'));

console.log(`Found ${screenshots.length} screenshot files to rename.`);
console.log('\nCurrent files:');
screenshots.forEach((file, index) => {
  console.log(`${index + 1}. ${file}`);
});

console.log('\nSuggested naming convention:');
console.log('Since these appear to be website screenshots, suggested names:');
console.log('- homepage-screenshot.webp');
console.log('- tours-page-screenshot.webp');
console.log('- destinations-screenshot.webp');
console.log('- gallery-screenshot.webp');
console.log('- contact-page-screenshot.webp');
console.log('- about-page-screenshot.webp');
console.log('- Or based on content: team-building-activity.webp, river-rafting.webp, etc.');
console.log('\nPlease review the images and update this script with appropriate names.');

// Example: If you know what each image contains, you can uncomment and modify this:
/*
const renameMap = {
  'Screenshot 2026-01-17 185629.webp': 'homepage-hero.webp',
  'Screenshot 2026-01-17 185655.webp': 'tours-page.webp',
  // Add more mappings here
};

screenshots.forEach(oldName => {
  if (renameMap[oldName]) {
    const oldPath = path.join(imagesDir, oldName);
    const newPath = path.join(imagesDir, renameMap[oldName]);
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${oldName} -> ${renameMap[oldName]}`);
  }
});
*/
