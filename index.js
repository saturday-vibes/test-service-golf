function greet(name = "golf") {
  return `hello from ${name}`;
}

function farewell(name = "golf") {
  return `goodbye from ${name}`;
}

function cheer(name = "golf") {
  return `nice shot, ${name}`;
}
function test(){
  return 'test created'
}

module.exports = { greet, farewell, cheer };
