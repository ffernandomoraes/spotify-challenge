import { describe, expect, it } from 'vitest';

import { sleep } from '../sleep';

describe('sleep', () => {
  it('should sleep for the given time', async () => {
    const start = Date.now();
    await sleep(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});
