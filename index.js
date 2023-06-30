var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
output.style.color='white';

slider.oninput = function() {
  output.innerHTML = this.value;
}