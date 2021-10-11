import { buildChartData } from '../utils';
import data from '../data/MockComments.json';

// Check Data Types from function return
test('buildChartData with correct argument to return an array)', () => {
    expect(Array.isArray(buildChartData(data))).toBe(true);
});

test('buildChartData returns array of length 5 for 5 stars)', () => {
    expect(buildChartData(data)).toHaveLength(5);
});

test('buildChartData successful returns full 5 objects for stars)', () => {
    expect(typeof buildChartData(data)[0]).toBe("object");
    expect(typeof buildChartData(data)[1]).toBe("object");
    expect(typeof buildChartData(data)[2]).toBe("object");
    expect(typeof buildChartData(data)[3]).toBe("object");
    expect(typeof buildChartData(data)[4]).toBe("object");
    expect(typeof buildChartData(data)[5]).toBe("undefined");
});

// Check for known keys within returned data to confirm structure
test('buildChartData (on success) returns data has correct keys related to visual elements', () => {
    expect(buildChartData(data)[0]).toHaveProperty("rating");
    expect(buildChartData(data)[0]).toHaveProperty("total");

    expect(buildChartData(data)[3]).toHaveProperty("rating");
    expect(buildChartData(data)[3]).toHaveProperty("total");
});

test('buildChartData (on success) returns correct value types', () => {
    expect(typeof buildChartData(data)[1]['rating']).toBe("string");
    expect(typeof buildChartData(data)[1]['total']).toBe("number");

    expect(typeof buildChartData(data)[4]['rating']).toBe("string");
    expect(typeof buildChartData(data)[4]['total']).toBe("number");
});

test('buildChartData returns exact expected data structure', () => {
    // Array is in reverse order for purpose of charting
    expect(buildChartData(data)[0]).toEqual({ rating: '5 Star', total: 2 })
    expect(buildChartData(data)[1]).toEqual({ rating: '4 Star', total: 0 })
    expect(buildChartData(data)[2]).toEqual({ rating: '3 Star', total: 2 })
    expect(buildChartData(data)[3]).toEqual({ rating: '2 Star', total: 3 })
    expect(buildChartData(data)[4]).toEqual({ rating: '1 Star', total: 3 })
});