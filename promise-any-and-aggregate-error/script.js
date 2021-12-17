/*
  Promise.any() resolves if any of the supplied promises is resolved.
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
});


(async () => {
  const p = [p1, p2, p3]
  
  const result = await Promise.any(p)
  console.log(result) // Prints "A", "B" or "C"
})()


/* What if none of the promises resolve? In that case Promise.any() 
throws an AggregateError exception. We need to catch it and handle it.
*/
const p = new Promise((resolve, reject) => reject());

(async function () {
  const result = await Promise.any([p]).catch((e) => {
    console.log(e instanceof AggregateError); // true
    console.log(e.message);                   // "All Promises rejected"
    console.log(e.name);                      // "AggregateError"
    console.log(e.errors);                    // [undefined]
  })
  console.log(result);
})();

//  source: https://backbencher.dev/articles/javascript-es2021-new-features