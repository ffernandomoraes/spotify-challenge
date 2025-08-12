import { describe, expect, it } from 'vitest';

import { getContrastColor } from '../colorContrast';

describe('getContrastColor', () => {
  it('should return black for light colors', () => {
    expect(getContrastColor('#FFFFFF')).toBe('black');
    expect(getContrastColor('#FFFF00')).toBe('black');
  });

  it('should return white for dark colors', () => {
    expect(getContrastColor('#000000')).toBe('white');
    expect(getContrastColor('#FF0000')).toBe('white');
  });

  it('should handle hex without #', () => {
    expect(getContrastColor('FFFFFF')).toBe('black');
    expect(getContrastColor('000000')).toBe('white');
  });
});
