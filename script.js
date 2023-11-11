// INTIALLITIONS
let btnColor = document.querySelector('.btn_generator');
let RandomColor;
let showRgb;
let showColor;
let color_red;
let color_green;
let color_blue;

// ALL PROCESSING
btnColor.addEventListener('click', Color_generator());
setInterval(() => {
    Random_Color_generator()
}, 1500);

// ALL FUNCTION
function Color_generator() {
    showRgb = document.querySelector('.showRgb');
    showColor = document.querySelector('.showColor');
    color_red = Math.floor(Math.random() * 256);
    color_green = Math.floor(Math.random() * 256);
    color_blue = Math.floor(Math.random() * 256);

    showRgb.innerHTML = `rgb : ${color_red}, ${color_green}, ${color_blue}`;
    showRgb.style.color = `rgb(${color_red}, ${color_green}, ${color_blue})`;
    showColor.style.backgroundColor = `rgb(${color_red}, ${color_green}, ${color_blue})`;
};

function Random_Color_generator() {
    showRgb = document.querySelector('#showRgb');
    showColor = document.querySelector('#showColor');
    color_red = Math.floor(Math.random() * 256);
    color_green = Math.floor(Math.random() * 256);
    color_blue = Math.floor(Math.random() * 256);
    
    showRgb.innerHTML = `rgb : ${color_red}, ${color_green}, ${color_blue}`;
    showRgb.style.color = `rgb(${color_red}, ${color_green}, ${color_blue})`;
    showColor.style.backgroundColor = `rgb(${color_red}, ${color_green}, ${color_blue})`;
};


