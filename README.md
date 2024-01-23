# Belly Button Biodiversity Dashboard

## **Overview**
This repository contains code to build an interactive dashboard exploring the Belly Button Biodiversity dataset. The dataset catalogs microbes colonizing human navels, revealing prevalent species and their frequencies among individuals.

## **Instructions**

1. Use the D3 library to read in the dataset from [samples.json](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).
2. Create a horizontal bar chart with a dropdown menu to display the top 10 Operational Taxonomic Units (OTUs) found in an individual.
   - Use `sample_values` as the values for the bar chart.
   - Use `otu_ids` as the labels for the bar chart.
   - Use `otu_labels` as the hovertext for the chart.
3. Develop a bubble chart to visualize each sample.
   - Use `otu_ids` for the x values.
   - Use `sample_values` for the y values.
   - Use `sample_values` for the marker size.
   - Use `otu_ids` for the marker colors.
   - Use `otu_labels` for the text values.
4. Display the sample metadata, showcasing an individual's demographic information.
5. Present each key-value pair from the metadata JSON object on the page.
6. Ensure the plots update dynamically when a new sample is selected. Feel free to create a customized layout for your dashboard.

## **Conclusion**
By following these steps, you'll have a fully functional dashboard with bar and bubble graphs, displaying data for selected individuals. Explore different individuals to observe variations in the data.
