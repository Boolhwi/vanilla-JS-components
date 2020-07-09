var tooltip = document.getElementById("tooltip");
tooltip.innerHTML = "<div id=tooltip_button onclick=toggle()>Tooltip<span class=popuptext id=myPopup>contents...</span></div>";

var bt = document.getElementById("tooltip_button");
bt.style.cssText = "position:relative; cursor:pointer; user-select:none; width: 160px;background-color: #555;color: #fff;text-align: center;border-radius: 6px;padding: 8px 0";
var text = document.getElementById("myPopup");
text.style.cssText = "visibility: hidden; opacity:0; width: 160px;background-color: #555;color: #fff;text-align: center;border-radius: 6px;padding: 8px 0;position: absolute;z-index: 1;top: 120%;left: 50%;margin-left: -80px";

function toggle() {
    if(text.style.visibility === 'hidden') {
        text.style.visibility = 'visible';      
        var op = 0;
        op_ani();
        function op_ani() {
            if (op<1) {
               op += 0.3;
               text.style.opacity = op;
               setTimeout(op_ani,100);     
            }
        }
    } else {
        text.style.visibility = 'hidden';
    }
    
}


