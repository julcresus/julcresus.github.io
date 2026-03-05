const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/img');
const supportedFormats = ['.jpg', '.jpeg', '.png'];

// Function to get all files recursively
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to optimize a single image
async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!supportedFormats.includes(ext)) {
    return;
  }

  try {
    const fileName = path.basename(filePath, ext);
    const dir = path.dirname(filePath);
    const webpPath = path.join(dir, `${fileName}.webp`);

    // Skip if WebP already exists
    if (fs.existsSync(webpPath)) {
      console.log(`✓ Skipped (WebP exists): ${path.relative(imagesDir, filePath)}`);
      return;
    }

    // Convert to WebP
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath);

    const originalSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(2);

    console.log(`✓ Optimized: ${path.relative(imagesDir, filePath)} → ${savings}% smaller`);
  } catch (error) {
    console.error(`✗ Error optimizing ${filePath}:`, error.message);
  }
}

// Main function
async function main() {
  console.log('🖼️  Starting image optimization...\n');

  if (!fs.existsSync(imagesDir)) {
    console.error('Error: Images directory not found:', imagesDir);
    process.exit(1);
  }

  const allFiles = getAllFiles(imagesDir);
  const imageFiles = allFiles.filter(file =>
    supportedFormats.includes(path.extname(file).toLowerCase())
  );

  console.log(`Found ${imageFiles.length} images to process\n`);

  for (const file of imageFiles) {
    await optimizeImage(file);
  }

  console.log('\n✅ Image optimization complete!');
}

main().catch(console.error);
