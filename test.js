const assert = require("node:assert/strict");
const { greet } = require("./index");

assert.equal(greet(), "hello from golf");
assert.equal(greet("release-please"), "hello from release-please");
console.log("ok");
