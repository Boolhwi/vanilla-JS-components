var drop_down = document.getElementById("drop_down");
drop_down.innerHTML = "<div id=navbar><button id = link1 onmouseover = change(this) onmouseout = reverse(this) href=#home>Home</button><button id = link2 onmouseover = change(this) onmouseout = reverse(this) href=#news>News</button><div id=dd_box onmouseover = change_dd() onmouseout = reverse_dd()><button id=dropbtn>Dropdown +</button><div id=dd_container ><a id = dd_link1 href=#>Link 1</a><a id = dd_link2 href=#>Link 2</a><a id = dd_link3 href=#>Link 3</a>  </div></div></div>";

var navbar = document.getElementById("navbar");
navbar.style.cssText = "overflow: hidden; background-color: #333";

var link1 = document.getElementById("link1");
link1.style.cssText = "float: left;font-size: 16px;color: white;text-align: center;padding: 14px 16px; border:none;background-color: #333;font-family: Arial; outline:none; cursor:pointer";
var link2 = document.getElementById("link2");
link2.style.cssText = "float: left;font-size: 16px;color: white;text-align: center;padding: 14px 16px; border:none;background-color: #333;font-family: Arial; outline:none; cursor:pointer";

var dd_box = document.getElementById("dd_box");
dd_box.style.cssText = "float: left";

var dropbtn = document.getElementById("dropbtn");
dropbtn.style.cssText = "font-size: 16px;color: white;text-align: center;padding: 14px 16px; border:none;background-color: #333;font-family: Arial; margin: 0;outline:none; cursor:pointer";

var dd_container = document.getElementById("dd_container");
dd_container.style.cssText = "oveflow:hidden;display: none;position: absolute;background-color: #f9f9f9;min-width: 160px;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);z-index: 1";

var dd_link1 = document.getElementById("dd_link1");
dd_link1.style.cssText = "display:block; float: none;color: black;padding: 12px 16px;text-decoration: none;text-align: left; border:none";
var dd_link2 = document.getElementById("dd_link2");
dd_link2.style.cssText = "display:block;float: none;color: black;padding: 12px 16px;text-decoration: none;text-align: left;border:none";
var dd_link3 = document.getElementById("dd_link3");
dd_link3.style.cssText = "display:block;float: none;color: black;padding: 12px 16px;text-decoration: none;text-align: left;border:none";

function change(temp) {
    temp.style.backgroundColor = 'red';
}

function reverse(temp) {
    temp.style.backgroundColor = '#333';
}

function change_dd() {
    dropbtn.style.backgroundColor = 'red';
    dd_container.style.display = 'block';
}

function reverse_dd() {
    dropbtn.style.backgroundColor = '#333';
    dd_container.style.display = 'none';
}
