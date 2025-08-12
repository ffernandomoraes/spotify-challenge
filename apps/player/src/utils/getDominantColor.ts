import { FastAverageColor } from 'fast-average-color';

const colorCache = new Map<string, string>();

export function getColorCache(id: string) {
  if (colorCache.has(id)) {
    return colorCache.get(id)!;
  }

  return null;
}

export async function getDominantColor(id: string, url: string): Promise<string> {
  if (!url) return '';

  if (colorCache.has(id)) {
    return colorCache.get(id)!;
  }

  const fac = new FastAverageColor();

  try {
    const color = await fac.getColorAsync(url, { mode: 'precision', algorithm: 'sqrt' });
    colorCache.set(id, color.hex);
    return color.hex;
  } finally {
    fac.destroy();
  }
}

export function clearColorCache(): void {
  colorCache.clear();
}

export function getColorCacheSize(): number {
  return colorCache.size;
}
