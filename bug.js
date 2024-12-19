function myFunc() {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

myFunc(1, 2, 3);