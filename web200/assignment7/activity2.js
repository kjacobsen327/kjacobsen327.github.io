document.getElementById("btn").addEventListener("click", createTable);

function createTable() {
    let startVal = document.getElementById("inputStart").value;
    let endVal = document.getElementById("inputEnd").value;
    let multTable = document.getElementById("multTable");
    let tableData = "";
    for (i = startVal; i-1 <= endVal; i++) {

        // creates a new row
        tableData += "<tr>";

        //for creating first row of table headers
        if (i == startVal) {
            for (j = startVal; j <= endVal; j++) {

                //the top left cell will be blank
                if (j == startVal) {
                tableData += "<th></th>"
                }

                //creates the rest of the table header numbers through the end value
                tableData += "<th>" + j + "</th>";
            }
        }

        //creates a number of rows 2 through ending value
        else {
            //headers for first column
            tableData += "<th>" + (i-1) + "</th>";

            for (j = startVal; j <= endVal; j++) {
                tableData += "<td>" + (i-1)*j + "</td>";
            }
        }
        tableData += "</tr>";
    }
    multTable.innerHTML = tableData;
}