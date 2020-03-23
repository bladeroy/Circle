//Password Page
//Success Screen

// Get the modal screen

var modal = document.getElementById("modalscrn");

// Get the button that opens the modal
var btn = document.getElementById("popBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBtn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//MyProducts page
//Refill Button

function changerfl1Color() {
  document.getElementById("1").style.backgroundColor = "#c6d0eb";
  document.getElementById("1").style.color = "#205284";
  document.getElementById("btnconfirm").style.backgroundColor = "#212c4f";
  document.getElementById("btnconfirm").style.color = "#f0f3f5";
  
}
function changerfl2Color() {
  document.getElementById("2").style.backgroundColor = "#c6d0eb";
  document.getElementById("2").style.color = "#205284";
  document.getElementById("btnconfirm").style.backgroundColor = "#212c4f";
  document.getElementById("btnconfirm").style.color = "#f0f3f5";
}
function changerfl3Color() {
  document.getElementById("3").style.backgroundColor = "#c6d0eb";
  document.getElementById("3").style.color = "#205284";
  document.getElementById("btnconfirm").style.backgroundColor = "#212c4f";
  document.getElementById("btnconfirm").style.color = "#f0f3f5";
}

//Refund button
function changerefd1txt() {
  document.getElementById("r1").innerHTML = "Refund selected";
  document.getElementById("btnconfirm").style.backgroundColor = "#212c4f";
  document.getElementById("btnconfirm").style.color = "#f0f3f5";
}

function changerefd2txt() {
  document.getElementById("r2").innerHTML = "Refund selected";
  document.getElementById("btnconfirm").style.backgroundColor = "#212c4f";
  document.getElementById("btnconfirm").style.color = "#f0f3f5";
}
function changerefd3txt() {
  document.getElementById("r3").innerHTML = "Refund selected";
  document.getElementById("btnconfirm").style.backgroundColor = "#212c4f";
  document.getElementById("btnconfirm").style.color = "#f0f3f5";
}

//Confirm button
function changecfrmColor() {
  document.getElementById("btnconfirm").style.backgroundColor = "#212c4f";
  document.getElementById("btnconfirm").style.color = "#f0f3f5";
}
