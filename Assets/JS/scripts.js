
var formatClick = document.getElementById("grid-icon");

formatClick.addEventListener("click", function (){
  if (formatClick.className === ("fa fa-th fa-2x blue")){
    formatClick.className = "fa fa-th fa-2x gray";
  } else if (formatClick.className === ("fa fa-th fa-2x gray")){
    formatClick.className = "fa fa-th fa-2x blue"}
});
//allows grid icon to toggle color on click

var formatClick2 = document.getElementById("list-icon");

formatClick2.addEventListener("click", function (){
  if (formatClick2.className === ("fa fa-th-list fa-2x gray")){
    formatClick2.className = "fa fa-th-list fa-2x blue";
  } else if (formatClick2.className === ("fa fa-th-list fa-2x blue")){
    formatClick2.className = "fa fa-th-list fa-2x gray"}
});
//allows list icon to toggle color on click


//if 1 is clicked and turns blue, turn the other gray.
//if 1 is clicked and turns gray, turn the other blue.
//if 2 is clicked and turns blue, turn the other gray.
//if 2 is clicked and turns gray, turn the other blue.
