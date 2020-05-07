const sizes = document.querySelectorAll('.size');
const color = document.querySelectorAll('.color');
let prevColor = "blue";

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}
sizes.forEach(size => size.addEventListener('click', changeSize));

function changeColor(){
    let primary = this.getAttribute('primary');
    let color_current = this.getAttribute('color');
    color.forEach(color => color.classList.remove('active'));
    this.classList.add('active');
    document.documentElement.style.setProperty('--primary', primary); 
    prevColor = color_current;    
}
color.forEach(color => color.addEventListener('click', changeColor));

var img = document.createElement("IMG");
img.src = "/imagens/blue.png";       
document.getElementById('img').appendChild(img);