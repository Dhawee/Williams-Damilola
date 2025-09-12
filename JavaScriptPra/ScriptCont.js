// ScriptCont.js

// Function to change the content of the div
function changeCountry() {
  const divElement = document.getElementById("myDiv");
  divElement.textContent = "Luxembourgh"; // 👈 Replace with your desired country
}

// Attach the function to the button click
document.getElementById("myButton").addEventListener("click", changeCountry);
