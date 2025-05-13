import { jest, describe, beforeEach, afterEach, test, expect } from '@jest/globals';
import { selectSpiderType } from '../../utils/spiderUtils';

describe('selectSpiderType', () => {
  let randomSpy;
  
  beforeEach(() => {
    randomSpy = jest.spyOn(Math, 'random');
  });
  
  afterEach(() => {
    randomSpy.mockRestore();
  });
  
  test('returns surprise when random value < 0.15', () => {
    randomSpy.mockReturnValue(0.14);
    expect(selectSpiderType()).toBe('surprise');
  });
  
  test('returns regular when random value >= 0.15', () => {
    randomSpy.mockReturnValue(0.15);
    expect(selectSpiderType()).toBe('regular');
  });
}); 