function inputnum(num) {
    const display = document.getElementById('display');
    display.value = display.value + num;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }

  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }