const topographicalSurfacePlot = document.querySelector('#topographical-plot');
const topographicalSurfacePlotWithContours = document.querySelector('#topographical-plot-with-contours');
const multipleTopographicalPlots = document.querySelector('#multiple-topographical-plots');

Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err,rows) {
  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  let z_data = []
  for(i=0;i<24;i++) {
    z_data.push(unpack(rows, i));
  }

  let data = [{
    z: z_data,
    type: 'surface'
  }];

  let layout = {
    title: 'Mt Bruno Elevation',
    autosize: false,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };
  Plotly.newPlot(topographicalSurfacePlot, data, layout);
})

