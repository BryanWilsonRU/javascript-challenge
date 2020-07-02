// from data.js
var tableData = data;

// Use D3 to select the table body and assign to a variable
var tbody = d3.select("tbody");

// Iterate the data for each row and column
tableData.forEach(function(tableRecord) {
    var row = tbody.append("tr"); 
    Object.entries(tableRecord).forEach(function([key, value]) {
        var cell = row.append("td");   
        cell.text(value);              
    });
});

var button = d3.select("#filter-btn");

var form = d3.select("form");function runEnter() {                
    d3.event.preventDefault();
    tbody.html("");

    var inputValue = d3.select("#datetime").property("value");
    
    //Filter the data based on the date, then assign it
    var filteredData = tableData.filter(record => record.datetime === inputValue);

    filteredData.forEach(function(filteredRecord) {
        // Append one table row for each UFO Sighting 
        var row = tbody.append("tr");

        Object.entries(filteredRecord).forEach(function([key, value]) {
            console.log("Row Values");
            console.log(key, value);        
            var cell = row.append("td");    
            cell.text(value);               
        });
    });
}

button.on("click", runEnter);
form.on("submit",runEnter);

button.on("submit", function() {
    d3.event.preventDefault();

    //Clear the existing output
    tbody.html("");

    //Use D3 to select the date input
    var inputValue = d3.select("#datetime").property("value");
 
    
    //Filter the data based on the entered date and assign it
    var filteredData = tableData.filter(record => record.datetime === inputValue);


    filteredData.forEach(function(filteredRecord) {
        // Append one table row for each UFO Sighting object
        var row = tbody.append("tr");

        Object.entries(filteredRecord).forEach(function([key, value]) {
            var cell = row.append("td");    
            cell.text(value);               
        });
    });
});