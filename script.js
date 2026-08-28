const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
    setTimeout(clearDisplay, 1500);
  }
}

function calcFunction(type) {
  let val = parseFloat(display.value);
  if (isNaN(val) && type !== 'exp') return;

  switch (type) {
    case 'sin':
      display.value = Math.sin(val * (Math.PI / 180));
      break;
    case 'cos':
      display.value = Math.cos(val * (Math.PI / 180));
      break;
    case 'tan':
      display.value = Math.tan(val * (Math.PI / 180));
      break;
    case 'sqrt':
      display.value = Math.sqrt(val);
      break;
    case 'log':
      display.value = Math.log10(val);
      break;
    case 'ln':
      display.value = Math.log(val);
      break;
    case 'exp':
      display.value = Math.exp(val || 1);
      break;
  }
}
