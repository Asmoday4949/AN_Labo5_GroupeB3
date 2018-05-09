document.addEventListener('DOMContentLoaded', function(event)
{
  let piString = '3.14159265358979323';

  let pi = 4 * integralSimpson(function(x) { return 1 / (1+x*x);}, 0, 1, 250);

  pi = pi.toFixed(17);
  
  console.log("Pi : " + piString);
  console.log("Evaluated Pi : " + pi);
  
});
