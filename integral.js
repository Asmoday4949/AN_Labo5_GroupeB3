// https://rosettacode.org/wiki/Numerical_integration
function integralSimpson(func, a, b, n  = 10)
{
  console.log(n);
  if(n % 2 != 0)
  {
    return undefined;
  }

  let h = (b - a) / n;
  let sum = func(a) + func(b);

  //odd sum
  for(let i = 1; i < n; i += 2)
  {
    sum += 4*func(a + h*i);
  }
  //even sum
  for(let i = 2; i < n-1; i += 2)
  {
    sum += 2*func(a + h*i);
  }

  return sum * h/3;
}
