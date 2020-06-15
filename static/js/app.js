// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Clear table
function buildTable(data) {
    tbody.html("");
}

// Loop through and append a row and cell for each value in data
data.forEach((dataRow) => {
    let row = tbody.append("tr");

    // Loop through and populate table cells with text
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    ); 
});