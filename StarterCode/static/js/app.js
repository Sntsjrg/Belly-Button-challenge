// Set up URL for data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch data using D3.js
const dataPromise = d3.json(url);

// Call the handleData function
dataPromise.then(handleData);

// Function to handle data once fetched
function handleData(data) {
  // Extract samples and metadata from the data
  const samples = data.samples;
  const meta_data = data.metadata;

  // Get the dropdown selector element
  const selector = d3.select("#selDataset");

  // Populate the dropdown with options based on data names
  data.names.forEach(id => selector.append("option").text(id).property("value", id));

  // Function to display demographic information in the HTML
  function displayDemographicInfo(demographicInfo) {
    d3.select("#sample-metadata").html(
      `ID: ${demographicInfo.id} <br> Ethnicity: ${demographicInfo.ethnicity} <br> Gender: ${demographicInfo.gender} <br> Age: ${demographicInfo.age} <br> Location: ${demographicInfo.location} <br> BB Type: ${demographicInfo.bbtype} <br> Wfreq: ${demographicInfo.wfreq}`
    );
  }

  // Function to display horizontal bar chart
  function displayBarChart(selectedId) {
    const x_axis = selectedId.sample_values.slice(0, 10).reverse();
    const y_axis = selectedId.otu_ids.slice(0, 10).reverse().map(item => `OTU ${item}`);
    const text = selectedId.otu_labels.slice(0, 10).reverse();

    const barChart = {
      x: x_axis,
      y: y_axis,
      text: text,
      type: "bar",
      orientation: "h",
    };

    // Display the bar chart using Plotly
    Plotly.newPlot("bar", [barChart], { margin: { l: 100, r: 100, t: 0, b: 100 }, height: 500, width: 600 });
  }

  // Function to display bubble chart
  function displayBubbleChart(selectedId) {
    const x_axis = selectedId.otu_ids;
    const y_axis = selectedId.sample_values;
    const marker_size = selectedId.sample_values;
    const color = selectedId.otu_ids;
    const text = selectedId.otu_labels;

    const bubble = {
      x: x_axis,
      y: y_axis,
      text: text,
      mode: "markers",
      marker: {
        color: color,
        colorscale: "Pastel",
        size: marker_size,
      },
      type: "scatter",
    };

    // Display the bubble chart using Plotly
    Plotly.newPlot("bubble", [bubble], { xaxis: { title: { text: "OTU ID" } } });
  }

  // Function to handle dropdown changes
  function optionChanged(value) {
    // Find the selected ID in the data
    const selectedId = samples.find(item => item.id === value);
    const demographicInfo = meta_data.find(item => item.id == value);

    // Display demographic info and update charts
    displayDemographicInfo(demographicInfo);
    displayBarChart(selectedId);
    displayBubbleChart(selectedId);
  }

  // Display initial demographic info and charts
  displayDemographicInfo(meta_data[0]);
  displayBarChart(samples[0]);
  displayBubbleChart(samples[0]);

  // Set up event handling for dropdown changes
  d3.select("#selDataset").on("change", function () {
    const selectedValue = d3.select(this).property("value");
    optionChanged(selectedValue);
  });
}