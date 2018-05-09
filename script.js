document.addEventListener('DOMContentLoaded', function(event)
{
  let piString = '3.14159265358979323';

  let pi = 4 * integralSimpson(function(x) { return 1 / (1+x*x);}, 0, 1, 250);

  pi = pi.toFixed(17);
  
  console.log("Pi : " + piString);
  console.log("Evaluated Pi : " + pi);
  
  displayPlot("graph");
});

function displayPlot(divPlot)
{
  let layout =
  {
    width: 1000,
    height: 400,

    xaxis:
    {
      range: [-4, 4],
      autorange: false
    },
    yaxis:
    {
      range: [-1.1, 1.1],
      autorange: false
    },
    hovermode: "closest"
  };

  let integratePiPlot =
  {
    name: 'f(x)',
    /*x: points,
    y: points,*/
    type: 'scatter'
  };

  plotData = [];

  //plotData.push();

  Plotly.newPlot(divPlot, plotData, layout);
}
