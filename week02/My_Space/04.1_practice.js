const items = ["A", "B", "C"];
items.forEach(item => item = "X");
console.log(items);

let values = [3, 6, 9];

let output = values.map((num, index) => {
    if (index % 2 === 0) {
        return num * 2;
    }
});

console.log(output);
