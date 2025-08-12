import { describe, expect, it } from 'vitest';

import truncateText from '../truncate';

describe('truncateText', () => {
  it('should return the original text if it is less than the limit', () => {
    expect(truncateText('Hello', 10)).toBe('Hello');
  });

  it('should truncate the text if it is greater than the limit', () => {
    expect(truncateText('Hello World!', 8)).toBe('Hello W...');
  });

  it('should handle empty string', () => {
    expect(truncateText('', 5)).toBe('');
  });

  it('should use default value for maxLength', () => {
    const longText = 'a'.repeat(30);
    expect(truncateText(longText)).toBe('a'.repeat(24) + '...');
  });
});
