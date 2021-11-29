const assert = require('chai').assert;
const tail = require('../tail');



describe("#tail", () => {
  const result = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for result.length", () => {
assert.strictEqual((result.length), 3);
  });
});
