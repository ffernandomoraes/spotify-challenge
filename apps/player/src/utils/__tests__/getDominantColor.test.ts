import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { clearColorCache, getColorCache, getColorCacheSize, getDominantColor } from '../getDominantColor';

vi.mock('fast-average-color', () => ({
  FastAverageColor: vi.fn(() => ({
    getColorAsync: vi.fn().mockResolvedValue({
      hex: '#1db954'
    }),
    destroy: vi.fn()
  }))
}));

describe('getDominantColor', () => {
  beforeEach(() => {
    clearColorCache();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return the dominant color of the image', async () => {
    const color = await getDominantColor('test-id', 'https://example.com/image.jpg');
    expect(color).toBe('#1db954');
  });

  it('should return empty string for invalid URL', async () => {
    const color = await getDominantColor('test-id', '');
    expect(color).toBe('');
  });

  it('should use cache when the color has already been calculated', async () => {
    const firstCall = await getDominantColor('cached-id', 'https://example.com/image.jpg');
    const secondCall = await getDominantColor('cached-id', 'https://example.com/image.jpg');

    expect(firstCall).toBe(secondCall);
    expect(getColorCache('cached-id')).toBe('#1db954');
  });

  it('should return null for non-existent ID in cache', () => {
    expect(getColorCache('non-existent')).toBe(null);
  });

  it('should clear the cache correctly', async () => {
    await getDominantColor('test-id', 'https://example.com/image.jpg');
    expect(getColorCacheSize()).toBe(1);

    clearColorCache();
    expect(getColorCacheSize()).toBe(0);
  });
});
