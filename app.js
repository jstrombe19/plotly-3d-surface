const topographicalSurfacePlot = document.querySelector('#topographical-plot');
const topographicalSurfacePlotWithContours = document.querySelector('#topographical-plot-with-contours');
const multipleTopographicalPlots = document.querySelector('#multiple-topographical-plots');

// topographical surface plot
Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err,rows) {
  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  let z_data = [];
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

// topographical surface plot with projected contours
Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows) {
  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }

  let z_data = [];
  for(i=0;i<24;i++) {
    z_data.push(unpack(rows,i));
  }

  let data = [{
    z: z_data,
    type: 'surface',
    contours: {
      z: {
        show: true,
        usecolormap: true,
        highlightcolor: "#42f462",
        project: {
          z: true
        }
      }
    }
  }];

  let layout = {
    title: 'Mt Bruno Elevation With Projected Contours',
    scene: {
      camera: {
        eye: {
          x: 1.87,
          y: 0.88,
          z: -0.64
        }
      }
    },
    autosize: false,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };

  Plotly.newPlot(topographicalSurfacePlotWithContours, data, layout)
})

// multiple 3D surface plots
z1 = [
  [8.83, 8.89, 8.81, 8.87, 8.90, 8.87],
  [8.89, 8.94, 8.85, 8.94, 8.96, 8.92],
  [8.84, 8.90, 8.82, 8.92, 8.93, 8.91],
  [8.79, 8.85, 8.79, 8.90, 8.94, 8.92],
  [8.79, 8.88, 8.81, 8.90, 8.95, 8.92],
  [8.80, 8.82, 8.78, 8.91, 8.94, 8.92],
  [8.75, 8.78, 8.77, 8.91, 8.95, 8.92],
  [8.80, 8.80, 8.77, 8.91, 8.95, 8.94],
  [8.74, 8.81, 8.76, 8.93, 8.98, 8.99],
  [8.89, 8.99, 8.92, 9.10, 9.13, 9.11],
  [8.97, 8.97, 8.91, 9.09, 9.11, 9.12],
  [9.04, 9.08, 9.05, 9.25, 9.28, 9.27],
  [9.00, 9.04, 9.00, 9.27, 8.81, 9.15],
  [8.99, 8.99, 9.18, 9.23, 9.20, 9.19],
  [8.93, 8.97, 8.97, 9.18, 9.20, 9.18]
];

z2 = [];
for (let i = 0; i < z1.length; i++) {
  z2_row = [];
  for (let j = 0; j < z1[i].length; j++) {
    z2_row.push(z1[i][j] + 1 + Math.random());
  }
  z2.push(z2_row);
}

z3 = [];
for (let i = 0; i < z1.length; i++) {
  z3_row = [];
  for (let j = 0; j < z1[i].length; j++) {
    z3_row.push(z1[i][j] - 1 - Math.random());
  }
  z3.push(z3_row);
}

let data_z1 = {
  z: z1, 
  type: 'surface'
};

let data_z2 = {
  z: z2,
  showscale: false,
  opacity: 0.9,
  type: 'surface'
};

let data_z3 = {
  z: z3,
  showscale: false,
  opacity: 0.9,
  type: 'surface'
};

Plotly.newPlot(multipleTopographicalPlots, [data_z1, data_z2, data_z3]);
