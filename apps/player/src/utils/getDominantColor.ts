import { FastAverageColor } from 'fast-average-color';

export async function getDominantColor(url: string): Promise<string> {
  const fac = new FastAverageColor();

  try {
    const color = await fac.getColorAsync(url, { mode: 'precision', algorithm: 'sqrt' });
    return color.hex;
  } finally {
    fac.destroy();
  }
}
