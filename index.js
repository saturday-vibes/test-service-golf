function greet(name = "golf") {
  return `hello from ${name}`;
}

function farewell(name = "golf") {
  return `goodbye from ${name}`;
}

module.exports = { greet, farewell };
