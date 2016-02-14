//this targets the grid icon
var gridClick = document.getElementById("grid-icon");

//this targets the list icon
var listClick = document.getElementById("list-icon");

//targets the list view stylesheet.
var listStyleSheet = document.getElementById("list-view");
// the grid view is the default style sheet.
var gridStyleSheet = document.getElementById("default");

//creates variable for each class name string
var gridBlue = "fa fa-th fa-2x blue";
var gridGray = "fa fa-th fa-2x gray";
var listBlue = "fa fa-th-list fa-2x blue";
var listGray = "fa fa-th-list fa-2x gray";

//if you click the list icon, the grid style sheet is disabled.
//the list view style sheet is un-disabled
//if you click the list view, the icon turns blue. the grid icon will turn gray.
listClick.addEventListener("click", function (){
    gridStyleSheet.disabled = true;
    listStyleSheet.disabled = false;
    listClick.className = listBlue;
    gridClick.className = gridGray;
});

//if you click the grid icon, the list style sheet disables
//the grid style sheet will be un-disabled
//if you click the grid view, the icon turns blue. the list icon will turn gray.
gridClick.addEventListener("click", function (){
    gridStyleSheet.disabled = false;
    listStyleSheet.disabled = true;
    gridClick.className = gridBlue;
    listClick.className = listGray;
});
