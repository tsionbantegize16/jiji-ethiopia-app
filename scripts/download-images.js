import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = {
  categories: {
    vehicles: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    phones: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    electronics: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
    fashion: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    home: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80',
    sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80'
  },
  listings: {
    iphone: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&q=80',
    landcruiser: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    tv: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    macbook: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    // Home & Garden listings
    sofa: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    'garden-tools': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    kitchen: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    bedroom: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80',
    // Sports listings
    football: 'https://images.unsplash.com/photo-1508098682722-e99c643e0c76?w=800&q=80',
    basketball: 'https://images.unsplash.com/photo-1546519638-68e109acd27b?w=800&q=80',
    fitness: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    shoes: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    // Luxury/Premium listings
    rolex: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
    mercedes: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    diamond: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    'lv-bag': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80'
  },
  hero: {
    bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80'
  }
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${url}`);
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  // Create directories if they don't exist
  const dirs = ['public/images/categories', 'public/images/listings', 'public/images'];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Download category images
  for (const [name, url] of Object.entries(images.categories)) {
    await downloadImage(url, `public/images/categories/${name}.jpg`);
  }

  // Download listing images
  for (const [name, url] of Object.entries(images.listings)) {
    await downloadImage(url, `public/images/listings/${name}.jpg`);
  }

  // Download hero background
  await downloadImage(images.hero.bg, 'public/images/hero-bg.jpg');
};

downloadAllImages().catch(console.error); 