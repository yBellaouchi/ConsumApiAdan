import { ConcurrencyPipe } from './concurrency.pipe';

describe('ConcurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
