var sidebar = document.getElementById("sidebar");
sidebar.innerHTML = "<div id=sidebar_container class=sidebar><a id= sb_close href=# onclick=closeNav() onmouseover=sb_change(this) onmouseout=sb_reverse(this)>&times;</a><a id=sb_link1 onmouseover=sb_change(this) onmouseout=sb_reverse(this) href=#>About</a><a id=sb_link2 onmouseover=sb_change(this) onmouseout=sb_reverse(this) href=#>Services</a><a id=sb_link3 onmouseover=sb_change(this) onmouseout=sb_reverse(this) href=#>Clients</a><a id=sb_link4 onmouseover=sb_change(this) onmouseout=sb_reverse(this) href=#>Contact</a></div><div id=main><button id=sb_btn onclick=openNav()>&#9776; Sidebar</button><h2>Body elements</h2><p>contents...</p></div>";

var sidebar_container = document.getElementById("sidebar_container");
sidebar_container.style.cssText = "height: 100%;width: 0;position: fixed;z-index: 1;top: 0;left: 0;background-color: #111; overflow-x: hidden; padding-top: 60px;transition: 0.5s";

var sb_close = document.getElementById("sb_close");
sb_close.style.cssText = "padding: 8px 8px 8px 32px;text-decoration: none;font-size: 25px;color: #818181;display: block;transition: 0.3s;position: absolute;top: 0;right: 25px;font-size: 36px;margin-left: 50px";

var sb_link1 = document.getElementById("sb_link1");
sb_link1.style.cssText = "padding: 8px 8px 8px 32px;text-decoration: none;font-size: 25px;color: #818181;display: block;transition: 0.3s;"
var sb_link2 = document.getElementById("sb_link2");
sb_link2.style.cssText = "padding: 8px 8px 8px 32px;text-decoration: none;font-size: 25px;color: #818181;display: block;transition: 0.3s;"
var sb_link3 = document.getElementById("sb_link3");
sb_link3.style.cssText = "padding: 8px 8px 8px 32px;text-decoration: none;font-size: 25px;color: #818181;display: block;transition: 0.3s;"
var sb_link4 = document.getElementById("sb_link4");
sb_link4.style.cssText = "padding: 8px 8px 8px 32px;text-decoration: none;font-size: 25px;color: #818181;display: block;transition: 0.3s;"

var sb_btn = document.getElementById("sb_btn");
sb_btn.style.cssText ="font-size: 20px;cursor: pointer;background-color: #111;color: white;padding: 10px 15px;border: none";

function openNav() {
    document.getElementById("sidebar_container").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar_container").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function sb_change(temp) {
    temp.style.color = '#f1f1f1';
}

function sb_reverse(temp) {
    temp.style.color = ' #818181';
}