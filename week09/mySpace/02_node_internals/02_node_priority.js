const fs = require("fs");

console.log("1️⃣ Start");  // Synchronous

setTimeout(() => console.log("2️⃣ setTimeout"), 0);  // Timer Phase

fs.readFile("file.txt", "utf8", () => {
  console.log("3️⃣ File Read Done");  // I/O Callback Phase
});

setImmediate(() => console.log("4️⃣ setImmediate"));  // Check Phase

Promise.resolve().then(() => console.log("5️⃣ Promise"));  // Microtask Queue

process.nextTick(() => console.log("6️⃣ process.nextTick"));  // Microtask (Runs before Promises)

console.log("7️⃣ End");  // Synchronous

// answer ;- 1, 7, 6, 5, 2, 3, 4
