const numbers = [1, 4, 16];
const roots = numbers.map((num) => Math.sqrt(num));

console.log("roots", numbers, roots);

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
