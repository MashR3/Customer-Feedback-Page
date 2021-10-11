import { buildDateObject } from '../utils';

// Check Data Types from function return
test('buildDateObject to return an object)', () => {
  expect(typeof buildDateObject()).toBe('object');
});

test('buildDateObject to contain correct keys)', () => {
  expect(buildDateObject()).toHaveProperty('day');
  expect(buildDateObject()).toHaveProperty('month');
  expect(buildDateObject()).toHaveProperty('year');
});

// Extend to add own matches
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test('buildDateObject to have accepted value ranges)', () => {
  expect(buildDateObject().day).toBeWithinRange(1, 31);
  expect(buildDateObject().month).toBeWithinRange(1, 12);
  expect(+buildDateObject().year).toBeGreaterThan(2020);
});
