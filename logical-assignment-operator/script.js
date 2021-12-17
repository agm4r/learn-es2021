let x = "Agmar"
let y = "Putra"

console.log(x ??= y)
// can be expanded to:
// x && (x = y)

console.log(x ||= y)
// can be expanded to:
// x || (x = y);

console.log(x &&= y)
// can be expanded to:
// x = x ?? (x = y)

//  source: https://backbencher.dev/articles/javascript-es2021-new-features