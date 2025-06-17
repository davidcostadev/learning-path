// common algorithms in programing
function gcd(a: number, b: number) {
  let newA = a;
  let newB = b;
  while (newB !== 0) {
    const t = newA;
    newA = newB;
    newB = t % newA;
  }
  return newA;
}

console.log(gcd(60, 96), '12');
console.log(gcd(20, 8), '4');
