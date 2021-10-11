import { buildYearTrend } from '../utils';
import data from '../data/MockComments.json';

// Check Data Types from function return
test('buildYearTrend with correct argument to return an array)', () => {
    expect(Array.isArray(buildYearTrend(data))).toBe(true);
});

test('buildYearTrend returns array of length 12 for the year)', () => {
    expect(buildYearTrend(data)).toHaveLength(12);
});

test('buildYearTrend successful returns objects for stars)', () => {
    expect(typeof buildYearTrend(data)[0]).toBe("object");
    expect(typeof buildYearTrend(data)[3]).toBe("object");
    expect(typeof buildYearTrend(data)[5]).toBe("object");
    expect(typeof buildYearTrend(data)[7]).toBe("object");
    expect(typeof buildYearTrend(data)[11]).toBe("object");
    expect(typeof buildYearTrend(data)[12]).toBe("undefined");
});

// Check for known keys within returned data to confirm structure
test('buildYearTrend (on success) returns data has correct keys related to visual elements', () => {
    expect(buildYearTrend(data)[0]).toHaveProperty("name");
    expect(buildYearTrend(data)[0]).toHaveProperty("reviews");

    expect(buildYearTrend(data)[6]).toHaveProperty("name");
    expect(buildYearTrend(data)[6]).toHaveProperty("reviews");

    expect(buildYearTrend(data)[11]).toHaveProperty("name");
    expect(buildYearTrend(data)[11]).toHaveProperty("reviews");
});

test('buildYearTrend (on success) returns correct value types', () => {
    expect(typeof buildYearTrend(data)[0]['name']).toBe("string");
    expect(typeof buildYearTrend(data)[0]['reviews']).toBe("number");

    expect(typeof buildYearTrend(data)[5]['name']).toBe("string");
    expect(typeof buildYearTrend(data)[5]['reviews']).toBe("number");

    expect(typeof buildYearTrend(data)[11]['name']).toBe("string");
    expect(typeof buildYearTrend(data)[11]['reviews']).toBe("number");
});

test('buildYearTrend returns exact expected data structure for specified months', () => {
    // Array is in reverse order for purpose of charting
    expect(buildYearTrend(data)[0]).toEqual({ name: 'Jan', reviews: 2 })
    expect(buildYearTrend(data)[4]).toEqual({ name: 'May', reviews: 0 })
    expect(buildYearTrend(data)[5]).toEqual({ name: 'Jun', reviews: 1 })
    expect(buildYearTrend(data)[11]).toEqual({ name: 'Dec', reviews: 0 })
});