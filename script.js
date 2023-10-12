// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    //Creates a variable table and access grid through getElementbyId
    var table = document.getElementById('grid');


    //Create a variable row to create a table row element
    var row = document.createElement("tr");
    
    //If theres no columns
    //Add 1 to the columns and rows counter, as technically a cell at [0][0] is both a column and a row
    //also creates a data cell variable
    //Appends/adds the data cell to the row
    //Appends/adds the row to the table
    if(numCols == 0){
        numCols++;
        numRows++;
        var cell = document.createElement('td');
        row.appendChild(cell);
        table.appendChild(row)
    }
    //If theres a column
    //adds +1 to the number of rows
    //Will repeat for the amount of columns there are 
    //appends/adds data cell to the row
    //adds it to the table
    else{
        numRows++;
        // console.log(numRows)
        // console.log(numCols)
        for(var i = 0; i < numCols; i++){
            var cell = document.createElement('td');
            row.appendChild(cell);
            table.appendChild(row);
        }
    }

}

// Add a column
function addC() {
    //Creates a variable table and access grid through getElementbyId
    var table = document.getElementById('grid');

     //Create a variable row to create a table row element
    var  column = document.createElement("tr");
    
    //If theres no rows
    //Add +1 to both cols and rows number, as technically cell at [0][0] is both row and a column
    //also creates a data cell variable
    //Appends/adds the data cell to the column
    //Appends/adds the column to the table
    if(numRows == 0){
        numCols++;
        numRows++;
        var cell = document.createElement('td');
        column.appendChild(cell);
        table.appendChild(column)
    }
    //If theres a column
    //add 1 to the number of cols
    //Will repeat for the amount of rows there are
    //appends/adds data cell to the column
    //adds it to the table
    else{
        numCols++;
        // console.log(numRows)
        // console.log(numCols)
        for(var i = 0; i < numRows; i++){
            var cell = document.createElement('td');
            table.children[i].appendChild(cell);

            //Used to check if columns adding properly at their index
            // var indexCol = numCols - 1;
            // console.log("Added column at: "+ indexCol);
        }
    }
}

// Remove a row
function removeR() {
    //If no rows, do nothing
    if(numRows == 0){
        console.log("Do Nothing")
    }
    //If we do have rows
    //Create a variable table and access grid through getElementbyId
    //remove the last/newest row added
    //Bug Fix: when NumRows got to zero, NumCols wouldnt update, 
    //Fix: When numRows reaches 0, there will also be no columns, therefore, set cols to 0
    else{
        var table = document.getElementById('grid');
        table.removeChild(table.lastElementChild);
        numRows--;
        if(numRows == 0){
            numCols = 0;
        }

        //Helper to make sure Bug Fix was implemented and working properly
        //console.log("Rows remamining: "+numRows + " current columns: " + numCols)

    }

}


// //Helper Function For Tests: Reset Table
// //Resets the table by removing every single row
// function resetT(){
//     while(numRows > 0){
//         removeR();
//         //Helper to make sure was implemented proeprly
//         //console.log("resetT function | remaining rows: "+numRows);
//     }
// }

// Remove a column
function removeC() {
    //Does nothing when no columns
    if(numCols == 0){
        console.log("Do Nothing");
    }
    //IF there are columns
    //Create a variable table and access grid through getElementbyId
    //remove the earliest/oldest columns added
    //Does this by deleting the first cell at row[i] cell[0];
    else{
        var table = document.getElementById('grid');
        for(var i = 0; i < numRows; i++){
            table.rows[i].deleteCell(0);     
        }
        numCols--;
        //Bug: Sometimes, Num of rows wouldnt reset, leading to instability
        //Bug Fix: when Num of Cols reaches 0, calls the removeR() function as long as theres rows still "technically" there
        //doing numRows = 0 wasnt working, not sure why?
         if(numCols == 0){
            while(numRows >0){
                removeR();
            }
        }

        //Helper to make sure Bug Fix was implemented Properly
        //console.log("Columns remaining: " + numCols + " current rows: " + numRows);

    }
    
}

// // Set global variable for selected color
// function selectColor(){
//     colorSelected = document.getElementById("selectedColorId").value;
//     console.log(colorSelected);
// }


// // Fill all uncolored cells
// function fillU(){
//     //Creates a variable color checker in which all td/cells are stored
//     var colorChecker = document.querySelectorAll('td');
//     //loops through, checks if theres a backgroundcolor style and wether or not its empty, if it is, sets the color
//     //to the color the user selects
//     for(var i = 0; i < (numCols*numRows); i++){
//         if(colorChecker[i].style.backgroundColor == "")
//             colorChecker[i].style.backgroundColor = colorSelected;
//     }
// }

// Fill all cells
//Using a for loop, sets the backgroundColor of the cells to the color
//the user selcted
function fillAll(){
    var cellsToFill = document.querySelectorAll('td');
    for(var i = 0; i < (numCols*numRows); i++){
        cellsToFill[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
//Same implementation as fillAll(), but instead sets the color to be nothing AKA default white
function clearAll(){
    var cellsToFill = document.querySelectorAll('td');
    for(var i = 0; i < (numCols*numRows); i++){
        cellsToFill[i].style.backgroundColor = "";
    }
}