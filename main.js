// Parallax Scrolling

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
let mainSection = document.querySelector('.main');

window.onscroll = function(){
    let value = window.scrollY;
    
    stars.style.left = value + 'px';
    
    moon.style.top = (value * 1.5) + 'px';
    
    mountains3.style.top = (value * 0.5) + 'px';
    mountains4.style.top = (value * 0.3) + 'px';
    
    river.style.top = (value * 0.1) + 'px';
    
    boat.style.top = (value * 0.5) + 'px';
    boat.style.left = (value * 2) + 'px';
    nouvil.style.fontSize = value + 'px';
    
    if(value < 67){
        nouvil.style.fontSize = (20 + value) + 'px';
    } else {
        nouvil.style.fontSize = '60px';
    }

    if(value >= 478){
        nouvil.style.display = 'none';
    } else {
        nouvil.style.display = 'block';
    }
    
    if (value >= 127){
        mainSection.style.background = 'linear-gradient(#376281,#10001f)';
    } else {
        mainSection.style.background = 'linear-gradient(#200016,#10001f)';
    }
}