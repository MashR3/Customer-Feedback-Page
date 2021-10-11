import { formatDateString } from '../utils';
import data from '../data/MockComments.json';

// Check Data Types from function return
test('formatDateString to return an object)', () => {
  expect(typeof formatDateString(data[0])).toBe('string');
  expect(typeof formatDateString(data[5])).toBe('string');
});

test('buildDateObject to contain correct date with correct structure)', () => {
    expect(formatDateString(data[0])).toEqual('11/10/2021');
    expect(formatDateString(data[4])).toEqual('21/4/2021');
    expect(formatDateString(data[7])).toEqual('11/2/2021');
});
