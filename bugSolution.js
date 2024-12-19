function myFunc(...args) {
  console.log(args);
  for (const arg of args) {
    console.log(arg);
  }
}

myFunc(1, 2, 3); 