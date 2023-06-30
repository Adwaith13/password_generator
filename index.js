var slider = document.getElementById("range");
var output = document.getElementById("char-len");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}
output.style.color='#A4FFAF';
output.style.fontSize='20px';