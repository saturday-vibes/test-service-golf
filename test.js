const assert = require("node:assert/strict");
const { greet, farewell } = require("./index");

assert.equal(greet(), "hello from golf");
assert.equal(greet("release-please"), "hello from release-please");
assert.equal(farewell(), "goodbye from golf");
assert.equal(farewell("release-please"), "goodbye from release-please");
console.log("ok");
