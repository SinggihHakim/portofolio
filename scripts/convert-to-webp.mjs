import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '../src/assets');

const IMAGES = readdirSync(assetsDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

console.log(`\n🔄 Converting ${IMAGES.length} images to WebP...\n`);

for (const file of IMAGES) {
  const inputPath = join(assetsDir, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(assetsDir, outputName);

  const beforeSize = statSync(inputPath).size;

  await sharp(inputPath)
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);

  const afterSize = statSync(outputPath).size;
  const savings = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1);
  const beforeKB = (beforeSize / 1024).toFixed(0);
  const afterKB = (afterSize / 1024).toFixed(0);

  console.log(`✅ ${file.padEnd(25)} ${beforeKB}KB → ${afterKB}KB  (${savings}% smaller)`);
}

console.log('\n✨ Done! All .webp files have been saved to src/assets/.\n');
