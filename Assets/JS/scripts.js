//this targets the grid icon
var formatClick = document.getElementById("grid-icon");

//this targets the list icon
var formatClick2 = document.getElementById("list-icon");


//targets the list view stylesheet. the grid view is the default style sheet.
var listStyleSheet = document.getElementById("list-view");

var gridStyleSheet = document.getElementById("default");


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

//allows grid icon to toggle color on click
formatClick.addEventListener("click", function (){
  if (formatClick.className === (gridBlue)){
    formatClick.className = gridGray;
  } else if (formatClick.className === (gridGray)){
    formatClick.className = gridBlue};
});

//forces neither icon to be the same color as each other.
formatClick.addEventListener("click", function (){
  if (formatClick.className === gridBlue && formatClick2.className === listBlue){
    formatClick2.className = listGray;
  } else if (formatClick.className === gridGray && formatClick2.className === listGray){
    formatClick2.className = listBlue;
  }
});

//allows list icon to toggle color on click
formatClick2.addEventListener("click", function (){
  if (formatClick2.className === (listGray)){
    formatClick2.className = listBlue;
  } else if (formatClick2.className === (listBlue)){
    formatClick2.className = listGray}
});

//this is the last piece added. it doesn't seem to work.
// formatClick2.addEventListener("click", function (){
//   if (formatClick2.className === listBlue && formatClick.className === gridBlue){
//     formatClick.className === gridGray;
//   } else if (formatClick2.className === listGray && formatClick.className === gridGray){
//     formatClick.className === gridBlue;
//   }
// });
