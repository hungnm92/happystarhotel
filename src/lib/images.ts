import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

// asset('rooms/deluxe-twin/deluxe-twin-01.jpg') → ImageMetadata
export const asset = (path: string): ImageMetadata => {
  const mod = all[`../assets/${path}`];
  if (!mod) throw new Error(`Không tìm thấy ảnh: src/assets/${path}`);
  return mod.default;
};

export const roomImage = (path: string) => asset(`rooms/${path}`);
