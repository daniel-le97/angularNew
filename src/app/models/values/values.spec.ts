import { Values } from './values';
const data = {number: 5}
describe('Values', () => {
  it('should create an instance', () => {
    expect(new Values(data)).toBeTruthy();
  });
});
