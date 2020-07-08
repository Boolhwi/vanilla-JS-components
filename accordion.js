var acc = document.getElementById("accordion");
acc.style.cssText = "color: gray; border: 1px solid black";

acc.innerHTML 
= "<button id=accordion1>Accordion 1</button><div id=panel1><p>contents...</p></div><button id=accordion2>Accordion 2</button><div id=panel2><p>contents...</p></div>";


var bt = document.getElementById("accordion1");
bt.style.cssText = "color: #444; cursor: pointer; padding: 18px; width:100%; text-align:left; border:none; outline: none; transition:0.4s";

var bt2 = document.getElementById("accordion2");
bt2.style.cssText = "color: #444; cursor: pointer; padding: 18px; width:100%; text-align:left; border:none; outline: none; transition:0.4s";

var pn = document.getElementById("panel1");
pn.style.cssText = "padding: 0 18px; background-color: white; display:none; overflow: hidden";

var pn2 = document.getElementById("panel2");
pn2.style.cssText = "padding: 0 18px; background-color: white; display:none; overflow: hidden";



bt.addEventListener("click", function() {
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

bt2.addEventListener("click", function() {
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

