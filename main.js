
function toggle() {
    // Sets menu based on element id
    let menu = document.getElementById("side-menu");
  
    // If its block, then you display (aka checking mobile view)
    if (menu.style.display === "block") {
      menu.style.display = "none";
    }
    else {
      menu.style.display = "block";
    }
}
// Clicks the button 
  document.getElementById("ham-button").addEventListener("click",toggle);