// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

console.log(tableData);

function buildTable(tableData) {

tbody.html("")

tableData.forEach((ufoSighting) => {
    console.log(ufoSighting);
    var row = tbody.append("tr")

    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })

});
};

buildTable(tableData);

var button = d3.select("#filter-btn");
var input = d3.select("#form");

button.on("click", runEnter);
input.on("submit", runEnter);

var filters = {};


function multiFilter() {

    var changedElement = d3.select(this).select("input");
    var valueElement = changedElement.property("value");
    var filterID = changedElement.attr("id");

    if (valueElement){
        filters[filterID] = valueElement;
    } else 
        {
        delete filters[filterID];
        };
    runEnter();
    }

function runEnter() {

    d3.event.preventDefault();

    Object.entries(filters).forEach(([key, value])=> {

        filteredData = tableData.filter(row => row[key] === value);

    });
    
    console.log(filteredData);

    buildTable(filteredData);

};

d3.selectAll(".filter").on("change", multiFilter)

