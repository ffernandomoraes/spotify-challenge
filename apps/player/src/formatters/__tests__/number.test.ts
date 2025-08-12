import { describe, expect, it } from 'vitest';

import { formatNumber } from '../number';

describe('number', () => {
  it('should format number correctly', () => {
    expect(formatNumber(1000)).toBe('1.000');
  });

  it('should format number with decimal places', () => {
    expect(formatNumber(1000.123)).toBe('1.000,123');
  });

  it('should format number with decimal places and thousands separator', () => {
    expect(formatNumber(1000000.123)).toBe('1.000.000,123');
  });
});
