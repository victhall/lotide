const { assert } = require('chai')
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

describe('#middle', () => {
  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [2, 3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [5] for [1, 2, 3, 4, 5, 6, 8, 9, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 8, 9, 7]), [5]);
  });
  it("should return [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
