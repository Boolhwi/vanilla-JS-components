var modal = document.getElementById("modal");
modal.innerHTML = "<div id=modal_button>Modal</div><div id=modal_background class=modal><div id=modal_container><span id=close>&times;</span><p>contents...</p></div></div>";

var modal_background = document.getElementById("modal_background");
modal_background.style.cssText = "display: none; position: fixed; z-index: 1; padding-top:100px;left: 0;top: 0;width: 100%;height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4)";

var modal_container = document.getElementById("modal_container");
modal_container.style.cssText = "background-color: #fefefe;margin: auto;padding: 20px;border: 1px solid #888;width: 80%";

var btn = document.getElementById("modal_button");
btn.style.cssText = "cursor:pointer; user-select:none; width: 160px;background-color: #555;color: #fff;text-align: center;border-radius: 6px;padding: 8px 0";

var exit = document.getElementById("close");
exit.style.cssText = "color: #aaaaaa;float: right;font-size: 28px;font-weight: bold;cursor: pointer";

btn.onclick = function() {
  modal_background.style.display = "block";
}

exit.onclick = function() {
  modal_background.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal_background) {
    modal_background.style.display = "none";
  }
}

