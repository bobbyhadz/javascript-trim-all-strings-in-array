// EXAMPLE 1 - Trim all Strings in an Array using JavaScript

const arr = [' bobby ', ' hadz ', ' com '];

const results = arr.map(element => {
  return element.trim();
});

console.log(results); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Checking if the element is a string before calling trim()

// const arr = [' a ', 2, ' b ', {}];

// const results = arr.map(element => {
//   if (typeof element === 'string') {
//     return element.trim();
//   }

//   return element;
// });

// // 👇️ ['a', 2, 'b', {}]
// console.log(results);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Trim all Strings in an Array using `forEach()`

// const arr = [' bobby ', ' hadz ', '  com  '];

// arr.forEach((element, index) => {
//   arr[index] = element.trim();
// });

// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Trim all Strings in a two-dimensional array

// const arr = [
//   [' a ', ' b '],
//   [' c ', ' d '],
// ];

// const result = arr.map(subarray =>
//   subarray.map(str => str.trim()),
// );
// console.log(result); // 👉️ [ [ 'a', 'b' ], [ 'c', 'd' ] ]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Trim all Strings in an Array using a `for` loop

// const arr = [' bobby ', ' hadz ', '  com  '];

// for (let index = 0; index < arr.length; index++) {
//   arr[index] = arr[index].trim();
// }

// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]
