import { MyLowercasePipe } from './my-lowercase.pipe';

describe('MyLowercasePipe', () => {
  it('create an instance', () => {
    const pipe = new MyLowercasePipe();
    expect(pipe).toBeTruthy();
  });
});
