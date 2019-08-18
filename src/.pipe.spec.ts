import { DateCountPipe } from './.pipe';

describe('DateCountpipe', () => {
  it('create an instance', () => {
    const pipe = new DateCountPipe ();
    expect(pipe).toBeTruthy();
  });
});
