const add = require("./math");
if (add(2, 3) !== 5) {
  console.log("FAIL: add(2, 3) should be 5");
  process.exit(1);
}
console.log("PASS");
