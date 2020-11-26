function fib(n) {
  let fibArr = [0, 1];
  for (let i = 1; i < n; i++) {
    let fibLength = fibArr.length;
    fibArr.push(fibArr[fibLength-1] + fibArr[fibLength-2]);
  };
  return fibArr[n];
}

console.log('LoopFib: ', fib(50));