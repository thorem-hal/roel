var header = document.getElementById("header");
var image = document.getElementById("changingimage");
var toggle = document.getElementById("togglebar");
const covers = document.getElementsByClassName("project-image")
const imgs = document.getElementsByClassName("imgc")
var prev = document.getElementById("prevchangingimage");
var logo = document.getElementById('logo');
var project = document.getElementById('project');
const buttons = document.getElementsByClassName('button');
const loaders = document.getElementsByClassName('loader');
const fulls = document.getElementsByClassName('fulloader');
let bars = document.querySelectorAll('.bar');
let dropdown = document.getElementById('dropdown');
let drop = document.getElementsByClassName('dropdown-item');
let HamToggler = 0;

function toggleHamburger(e) {
  if (HamToggler == 0){
    dropdown.style.animation = 'fade-in 0.2s';
    dropdown.style.display = 'block';
    header.style.animation = "increm 0.2s";
    logo.style.animation = "logo-increm 0.2s";
    toggle.style.animation = "toggle-increm 0.2s";
    header.style.height = "90px";
    toggle.style.height = "30px";
    toggle.style.width = "30px";
    logo.style.height = '60px';
    logo.style.width = '60px';
    HamToggler = 1;
  }
  else {
    dropdown.style.animation = 'fade-out 0.2s';
    setTimeout( function(){
    header.style.animation = "decrem 0.2s";
    logo.style.animation = "logo-decrem 0.2s";
    toggle.style.animation = "toggle-decrem 0.2s";
    toggle.style.height = '40px';
    toggle.style.width = '40px';
    header.style.height = "120px";
    logo.style.height = '90px';
    logo.style.width = '90px';
    dropdown.style.display = 'none';
    HamToggler = 0;}, 150)
  }
  bars.forEach(bar => bar.classList.toggle('x'))
}

window.onresize = function(){
  if (HamToggler == 1){dropdown.style.display = 'none';
    HamToggler = 0;
    bars.forEach(bar => bar.classList.toggle('x'))
  }
}

function destroyer(e, u){
  e.style.display = 'none';
  u.style.opacity = '1';
}


function destroyerr(e){
  e.style.display = 'none';
}

for (let i = 0; i < imgs.length; i++){
imgs[i].addEventListener('load', destroyer(loaders[i], imgs[i]))
}

prev.addEventListener('load', destroyerr(fulls[0]))
image.addEventListener('load', destroyerr(fulls[1]))

toggle.addEventListener('click', toggleHamburger)
for (let i = 0; i < drop.length; i++){
    drop[i].addEventListener('click', toggleHamburger)
}
window.onscroll = function() {scrollFunction()};
for (let i = 0; i < buttons.length; i++){
    buttons[i].onmouseover = function(){
        buttons[i].style.backgroundColor = '#C0AF90';
        buttons[i].style.color = '#1D1D1D';
        buttons[i].style.animation = "increm-button 0.2s";
      };
      buttons[i].onmouseout = function(){
        buttons[i].style.backgroundColor = 'transparent';
        buttons[i].style.color = 'white';
        buttons[i].style.animation = "decrem-button 0.2s";
      }};

for (let i = 0; i < covers.length; i++){
    covers[i].onmouseover = function(){
        covers[i].style.animation = 'fader 0.2s';
        covers[i].style.boxShadow = '#C0AF90 0px 0px 15px 2px';
        covers[i].style.cursor = 'pointer';

      };
      covers[i].onmouseout = function(){
        covers[i].style.animation = 'defader 0.2s';
        covers[i].style.boxShadow = 'None';
        covers[i].style.cursor = 'auto';
      }
    };


function scrollFunction() {
  if (HamToggler === 0){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.animation = "increm 0.2s";
    logo.style.animation = "logo-increm 0.2s";
    toggle.style.animation = "toggle-increm 0.2s";
    header.style.height = "90px";
    toggle.style.height = "30px";
    toggle.style.width = "30px";
    logo.style.height = '60px';
    logo.style.width = '60px';
  } else {
    header.style.animation = "None";
    logo.style.animation = "None";
    toggle.style.animation = "None";
    toggle.style.height = '40px';
    toggle.style.width = '40px';
    header.style.height = "120px";
    logo.style.height = '90px';
    logo.style.width = '90px';

} }
};


var imageSources = ["url('Group 1.png')", "url('Group 4.png')", "url('Group 3.png')", "url('Group 2.png')"]
var imageNames = ["СТРАХ НАД<br> НЕВОЙ", "ПРИГОВОР", "КАПКАН<br> ДЛЯ МОНСТРА", "<br> МИРА"]

var index = 0;
var ripe = 0
setInterval (function(){
  if (ripe === 0){
  index++;
  if (index === imageSources.length) {
        index = 0;
        }
  prev.style.backgroundImage = imageSources[index];
  prev.innerHTML = imageNames[index];
  image.style.animation = "fade-out 1s";
  image.style.opacity = 0;
  ripe = 1}
  else {
    index++;
    if (index === imageSources.length) {
          index = 0;
          }
    image.style.backgroundImage = imageSources[index];
    image.innerHTML = imageNames[index];
    image.style.animation = "fade-in 1s";
    image.style.opacity = 1;
    ripe = 0}
  }
 , 15000);