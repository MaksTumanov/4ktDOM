const sliderRange = document.getElementById('sliderRange');
const sliderValue = document.getElementById('sliderValue');

sliderRange.oninput = function() {
  sliderValue.innerHTML = this.value;
}

const sliderScale = document.getElementById('sliderScale');

for (let i = 0; i <= 100; i += 10) {
    const scalePoint = document.createElement('span');
    scalePoint.style.left = `${i}%`;
    sliderScale.appendChild(scalePoint);
}
