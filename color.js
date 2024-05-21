function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function flipColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('color-code').textContent = newColor;
  }
  
  document.getElementById('flip-button').addEventListener('click', flipColor);
  