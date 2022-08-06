import { describe, expect, it } from 'bun:test';

import app from '.';

describe('endpoint handler test suite', () => {
  it('should return 200 OK response', async () => {
    const req = new Request('http:///localhost/');
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });
});
