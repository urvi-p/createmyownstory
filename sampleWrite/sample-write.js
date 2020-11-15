/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function path1() {
  var x = document.getElementById("text1").value;
  document.getElementById("space1").innerHTML = "Path 1: " + x;
  document.getElementById('text1').style.visibility='hidden';
  document.getElementById('path1').style.visibility='hidden';
  //document.getElementById('path2').style.visibility='hidden';
}
function path2() {
  var x = document.getElementById("text2").value;
  document.getElementById("space2").innerHTML = "Path 2: " + x;
  document.getElementById("text2").style.visibility="hidden";
  document.getElementById('path2').style.visibility='hidden';
  //document.getElementById('path1').style.visibility='hidden';
  
}

