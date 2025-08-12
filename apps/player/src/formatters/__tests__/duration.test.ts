import { describe, expect, it } from 'vitest';

import { formatDurationToMinutes } from '../duration';

describe('formatDurationToMinutes', () => {
  it('should format duration correctly', () => {
    expect(formatDurationToMinutes(60000)).toBe('1:00');
    expect(formatDurationToMinutes(90000)).toBe('1:30');
    expect(formatDurationToMinutes(180000)).toBe('3:00');
  });

  it('should add zero to the left of the seconds', () => {
    expect(formatDurationToMinutes(65000)).toBe('1:05');
  });

  it('should handle durations less than a minute', () => {
    expect(formatDurationToMinutes(30000)).toBe('0:30');
  });
});
