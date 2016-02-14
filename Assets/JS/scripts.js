//this targets the grid icon
var formatClick = document.getElementById("grid-icon");

//this targets the list icon
var formatClick2 = document.getElementById("list-icon");


//targets the list view stylesheet.
var listStyleSheet = document.getElementById("list-view");
// the grid view is the default style sheet.
var gridStyleSheet = document.getElementById("default");

//if you click the list icon, the grid style sheet is disabled.
//the list view style sheet is un-disabled
formatClick2.addEventListener("click", function (){
    gridStyleSheet.disabled = true;
    listStyleSheet.disabled = false;
});

//if you click the grid icon, the list style sheet disables
//the grid style sheet will be un-disabled
formatClick.addEventListener("click", function (){
    gridStyleSheet.disabled = false;
    listStyleSheet.disabled = true;
});

//creates variable for each class name string
var gridBlue = "fa fa-th fa-2x blue";
var gridGray = "fa fa-th fa-2x gray";
var listBlue = "fa fa-th-list fa-2x blue";
var listGray = "fa fa-th-list fa-2x gray";

//if you click the grid icon, turn it blue, and turn the list icon gray
formatClick.addEventListener("click", function(){
  formatClick.className = gridBlue;
  formatClick2.className = listGray;
});

//if you click the list icon, turn it blue, and turn the grid icon gray
formatClick2.addEventListener("click", function(){
  formatClick2.className = listBlue;
  formatClick.className = gridGray;
});
