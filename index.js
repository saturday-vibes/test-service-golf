function greet(name = "golf") {
  return `hello from ${name}`;
}

function farewell(name = "golf") {
  return `goodbye from ${name}`;
}

function cheer(name = "golf") {
  return `nice shot, ${name}`;
}

module.exports = { greet, farewell, cheer };
