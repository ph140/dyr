var bilde1 = document.getElementById('katt')
var bilde2 = document.getElementById('hund')
var bilde3 = document.getElementById('gris')
var svar = document.getElementById('svar')

var img1 = document.createElement("img");
var img2= document.createElement("img");
var img3 = document.createElement("img");

function visbilder(){
  img1.src = 'leopard.jpg'
  bilde1.appendChild(img1)
  img2.src = 'struts.jpeg'
  bilde2.appendChild(img2)
  img3.src = 'grevling.jpg'
  bilde3.appendChild(img3)
}


function zoom(ele) {
 var dyr = ele.id;
 svar.innerHTML = 'Jassa, sa du tror ' + dyr + 'er er raskest!'
}
