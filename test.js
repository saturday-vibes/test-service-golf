const assert = require("node:assert/strict");
const { greet, farewell, cheer } = require("./index");

assert.equal(greet(), "hello from golf");
assert.equal(greet("release-please"), "hello from release-please");
assert.equal(farewell(), "goodbye from golf");
assert.equal(farewell("release-please"), "goodbye from release-please");
assert.equal(cheer(), "nice shot, golf");
assert.equal(cheer("release-please"), "nice shot, release-please");
console.log("ok");
