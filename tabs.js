var tabs = document.getElementById("tabs");
tabs.innerHTML = "<div id=tab><button id=tab1 onclick=tabClick('contents1')>TAB 1</button><button id=tab2 onclick=tabClick('contents2')>TAB 2</button><button id=tab3 onclick=tabClick('contents3')>TAB 3</button></div><div id=contents1 class=tabcontent><h3>TAB 1</h3><p>contents...</p></div><div id=contents2 class=tabcontent><h3>TAB 2</h3><p>contents...</p></div><div id=contents3 class=tabcontent><h3>TAB 3</h3><p>contents...</p></div>";

var tab = document.getElementById("tab");
tab.style.cssText = "overflow: hidden;border: 1px solid #ccc;background-color: #f1f1f1";

var tab1 = document.getElementById("tab1");
tab1.style.cssText = "background-color: inherit;border: none;outline: none;cursor: pointer;padding: 14px 16px;transition: 0.3s;font-size: 17px";
var tab2 = document.getElementById("tab2");
tab2.style.cssText = "background-color: inherit;border: none;outline: none;cursor: pointer;padding: 14px 16px;transition: 0.3s;font-size: 17px";
var tab3 = document.getElementById("tab3");
tab3.style.cssText = "background-color: inherit;border: none;outline: none;cursor: pointer;padding: 14px 16px;transition: 0.3s;font-size: 17px";

var contents1 = document.getElementById("contents1");
contents1.style.cssText = " display: none;padding: 6px 12px;border: 1px solid #ccc;border-top: none";
var contents2 = document.getElementById("contents2");
contents2.style.cssText = " display: none;padding: 6px 12px;border: 1px solid #ccc;border-top: none";
var contents3 = document.getElementById("contents3");
contents3.style.cssText = " display: none;padding: 6px 12px;border: 1px solid #ccc;border-top: none";


function tabClick(contents) {
    
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
 
    document.getElementById(contents).style.display = "block";

    if(contents == "contents1") {
      tab1.style.backgroundColor = "#ccc";
      tab2.style.backgroundColor = "#f1f1f1";    
      tab3.style.backgroundColor = "#f1f1f1";
    }
    if(contents == "contents2") {
      tab1.style.backgroundColor = "#f1f1f1";    
      tab2.style.backgroundColor = "#ccc";
      tab3.style.backgroundColor = "#f1f1f1";
    }
    if(contents == "contents3") {
      tab1.style.backgroundColor = "#f1f1f1";
      tab2.style.backgroundColor = "#f1f1f1";    
      tab3.style.backgroundColor = "#ccc";
    }
}