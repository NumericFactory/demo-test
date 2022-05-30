import { StarsPipe } from './stars.pipe';

describe('StarsPipe', () => {
  it('create an instance', () => {
    const pipe = new StarsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return stars html template i tags', () => {
    const pipe = new StarsPipe()
    expect(pipe.transform(2)).toBe('<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>')
  })
});
