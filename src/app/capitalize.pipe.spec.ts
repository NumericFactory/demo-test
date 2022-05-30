import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a capitalize string', ()=> {
    const pipe = new CapitalizePipe()
    expect(pipe.transform('FRED')).toBe('Fred');
  })
});
