function buildMetadata(sample) {
    console.log("Build metadata"); 
    var url = `/metadata/${sample}`;
    d3.json(url).then(function(response) {
      var sampleData = d3.select("#sample-metadata");
      Object.entries(response).forEach(([key,value]) => {
        var row = sampleData.append("p");
        row.text(`${key}: ${value}`);
      });
    buildGauge(response.WFREQ);
}); 
}
function buildCharts(sample) {
console.log("new chart");
var url = `/samples/${sample}`;
d3.json(url).then(function(data) {
  console.log(data);
  var xValues = data.otu_ids;
  var yValues = data.sample_values;
  var markerSize = data.sample_values;
  var markerColor = data.otu_ids;
  var textValues = data.otu_labels;
  var trace1 = {
    x: xValues,
    y: yValues,
    text: textValues,
    mode: "markers",
    marker: {
      color: markerColor,
      size: markerSize}
  };
  var bubbledata = [trace1];
  var bubbleLayout = {
    xaxis: {title: "OTU ID"}
  };
  Plotly.newPlot("bubble", bubbledata, bubbleLayout);
  var pieValue = data.sample_values.slice(0,10);
  var pieLabel = data.otu_ids.slice(0,10);
  var hoverText = data.otu_labels.slice(0,10);

  var trace2 = {
    values: pieValue,
    labels: pieLabel,
    hovertext: hoverText,
    type: "pie"
  };
  var pieData = [trace2];
  var pieLayout = {
    showlegend: true
  };
  Plotly.newPlot("pie", pieData, pieLayout);
});
}
function init() {
var selector = d3.select("#selDataset");
d3.json("/names").then((sampleNames) => {
sampleNames.forEach((sample) => {
  selector
    .append("option")
    .text(sample)
    .property("value", sample);
});
const firstSample = sampleNames[0];
buildCharts(firstSample);
buildMetadata(firstSample);
});
}
function optionChanged(newSample) {
buildCharts(newSample);
buildMetadata(newSample);
}
init();   