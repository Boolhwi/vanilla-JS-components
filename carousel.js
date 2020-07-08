var carousel = document.getElementById("carousel");
carousel.innerHTML = "<div id=container><div class=mySlides fade><img src=photo/slide1.jpg style=width:100%></div><div class=mySlides fade><img src=photo/slide2.jpg style=width:100%></div><div class=mySlides fade><img src=photo/slide3.jpg style=width:100%></div><a id=prev onclick=showSlides(slideIndex-=1)>&#10094;</a><a id=next onclick=showSlides(slideIndex+=1)>&#10095;</a></div><br><div style=text-align:center><span id=dot1 onclick=showSlides(slideIndex=1)></span><span id=dot2 onclick=showSlides(slideIndex=2)></span><span id=dot3 onclick=showSlides(slideIndex=3)></span></div>";

var container = document.getElementById("container");
container.style.cssText = "max-width: 1000px;position: relative;margin: auto";

var prev = document.getElementById("prev");
prev.style.cssText = "cursor: pointer;position: absolute;top: 50%;width: auto;padding: 16px;margin-top: -22px;color: white;font-weight: bold;font-size: 18px;transition: 0.6s ease;border-radius: 0 3px 3px 0;user-select: none";
   
var next = document.getElementById("next");
next.style.cssText = "cursor: pointer;position: absolute;top: 50%;width: auto;padding: 16px;margin-top: -22px;color: white;font-weight: bold;font-size: 18px;transition: 0.6s ease;border-radius: 0 3px 3px 0;user-select: none; right:0; border-radius: 3px 0 0 3px";

var dot1 = document.getElementById("dot1");
dot1.style.cssText = "cursor: pointer;height: 15px;width: 15px;margin: 0 2px;background-color: #bbb;border-radius: 50%;display: inline-block;transition: background-color 0.6s ease";
var dot2 = document.getElementById("dot2");
dot2.style.cssText = "cursor: pointer;height: 15px;width: 15px;margin: 0 2px;background-color: #bbb;border-radius: 50%;display: inline-block;transition: background-color 0.6s ease";
var dot3 = document.getElementById("dot3");
dot3.style.cssText = "cursor: pointer;height: 15px;width: 15px;margin: 0 2px;background-color: #bbb;border-radius: 50%;display: inline-block;transition: background-color 0.6s ease";


var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
  if (slideIndex == 1) {
        dot1.style.backgroundColor = "#717171";
        dot2.style.backgroundColor = "#bbb";
        dot3.style.backgroundColor = "#bbb";
  }
  if (slideIndex == 2) {
    dot1.style.backgroundColor = "#bbb";
    dot2.style.backgroundColor = "#717171";
    dot3.style.backgroundColor = "#bbb";
  }
  if (slideIndex == 3) {
    dot1.style.backgroundColor = "#bbb";
    dot2.style.backgroundColor = "#bbb";
    dot3.style.backgroundColor = "#717171";
}
}