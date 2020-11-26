const PHI = 1.618033988749895;

function fib(n) {
    return ((Math.pow(PHI, n) - Math.pow((1 - PHI), n)) / Math.sqrt(5))
  }
  
  console.log('SuperFib: ', fib(50));