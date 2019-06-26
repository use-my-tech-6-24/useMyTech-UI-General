
const a= document.getElementById("test").addEventListener("mouseover", mouseOver);
    console.log(a);
document.getElementById("test").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("test").style.color = "magenta";
}

function mouseOut() {
  document.getElementById("test").style.color = "black";
}





// elt.setAttribute("style", "color:red; border: 1px solid blue;");