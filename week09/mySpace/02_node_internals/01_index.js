const fs = require("fs")

console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 0);

fs.readFile("file.txt", "utf8", (err, data) => {
  console.log("File Read Done");
});

console.log("End");
