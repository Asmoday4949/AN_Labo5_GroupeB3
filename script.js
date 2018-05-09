document.addEventListener('DOMContentLoaded', function(event)
{
  let piString = '3.14159265358979323';

  let startTime = performance.now(); //start timer
  let pi = 4 * integralSimpson(function(x) { return 1 / (1+x*x);}, 0, 1, 250);
  let computeTime = performance.now() - startTime; // register the end of the timer

  pi = pi.toFixed(17);
  
  console.log("Pi : " + piString);
  console.log("Evaluated Pi : " + pi);
  document.getElementById('estimePi').innerHTML += pi;
  document.getElementById('time').innerHTML += computeTime + ' ms';
  
  displayPlot("graph");
});

function displayPlot(divPlot)
{
  const xMin = 0;
  const xMax = 1;
  const step = 0.001;

  let layout =
  {    
    width: 400,
    height: 400,

    xaxis:
    {
      range: [0, 1],
      autorange: false
    },
    yaxis:
    {
      range: [0, 1.2],
      autorange: false
    },
    hovermode: "closest"
  };

  integratePiPoints = computeEachPoint(xMin, xMax, f);
  let integratePiPlot =
  {
    name: 'f(x)',
    x: integratePiPoints[0],
    y: integratePiPoints[1],
    type: 'scatter'
  };

  plotData = [];
  plotData.push(integratePiPlot);

  Plotly.newPlot(divPlot, plotData, layout);
}

// compute every points of the function
function computeEachPoint(min, max, fx)
{
  let xData = [];
  let yData = [];
  const step = 0.001;

  for(let i = min;i <= max; i += step)
  {
    xData.push(i);
    let y = fx(i);
    yData.push(y);
  }
  return [xData, yData];
}

function f(x)
{
  return 1/(1 + (x*x));
}
