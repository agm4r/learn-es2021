const callback = () => {
  const aBigObj = new WeakRef({
    name: "Backbencher",
  });
  console.log(aBigObj.deref().name);
};

(async function () {
  await new Promise((resolve) => {
    setTimeout(() => {
      callback(); // Guaranteed to print "Backbencher"
      resolve();
    }, 2000);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      callback(); // No Guarantee that "Backbencher" is printed
      resolve();
    }, 5000);
  });
})();

/*
A WeakRef is created using new WeakRef(). Later the reference is read using .deref() method. Inside the async function, The first setTimeout() will surely print the value of name. That is guaranteed in the first turn of event loop after creating the weak reference.

But there is no guarantee that the second setTimeout() prints "Backbencher". It might have been sweep by the garage collector. Since the garbage collection works differently in different browsers, we cannot guarantee the output. That is also why, we use WeakRef in situations like managing cache.

source: https://backbencher.dev/articles/javascript-es2021-new-features
*/