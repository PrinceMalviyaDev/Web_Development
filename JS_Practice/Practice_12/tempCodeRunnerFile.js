t prom4 = Promise.allSettled([prom1, prom2]);

// prom4.then((res) => {   // .then() will always print the status and the resolve/error message according to the settlement(resolved or rejected). It doesn't need the .catch() as it will never run.
//     console.log(res);
// });