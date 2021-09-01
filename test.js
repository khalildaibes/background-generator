var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
const dom = document.getElementById('body');
console.log(color1.value);
color1.addEventListener("input", () => {

    dom.style.background = 'linear-gradient(to left,' + color1.value + ', ' + color2.value + ')';
})

color2.addEventListener("input", () => {

    dom.style.background = 'linear-gradient(to left,' + color1.value + ', ' + color2.value + ')';
})
console.log(color2.value);