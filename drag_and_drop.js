var drag_and_drop = document.getElementById("drag_and_drop");
drag_and_drop.innerHTML = "<div id=drop_box1 ondrop=drop(event) ondragover=allowDrop(event)>Drop_box1</div><div id=drop_box2 ondrop=drop(event) ondragover=allowDrop(event)>Drop_box2</div><br><div id=dNd_contents draggable=true ondragstart=drag(event)>contents...</div>";

var drop_box1 = document.getElementById("drop_box1");
drop_box1.style.cssText = "width: 350px;height: 70px;padding: 10px;border: 1px solid #aaaaaa;color: #444; padding: 18px;text-align:left;background-color: #f1f1f1; border: 1px solid black";

var drop_box2 = document.getElementById("drop_box2");
drop_box2.style.cssText = "width: 350px;height: 70px;padding: 10px;border: 1px solid #aaaaaa;color: #444; padding: 18px;text-align:left;background-color: #f1f1f1; border: 1px solid black";

var dNd_contents = document.getElementById("dNd_contents");
dNd_contents.style.cssText = "width: 160px;background-color: #555; color: #fff;text-align: center;border-radius: 6px;padding: 8px 0; margin-top:10px";


function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

