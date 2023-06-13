// variables
let start_screen = document.getElementById('start-screen');
let start_button = document.getElementById('start-btn');
let div_container = document.getElementById('div-container');
let Sorting_Buttons = document.getElementById('sorting-buttons');
let Lengthbutton = document.getElementById('getLengthBtn');

if (Sorting_Buttons) {
  Sorting_Buttons.addEventListener('click', () => {
    if (Lengthbutton.classList.contains('hide')) {
      Sorting_Buttons.classList.add('hide');
    }
  });
}
if (Lengthbutton) {
  Lengthbutton.addEventListener('click', () => {
    Lengthbutton.classList.add('hide');
  });
}

var numLength;
var randomArray = [];
const min = 1;
const max = 100;
var len;
const getArrayLength = () => {
  var number = document.getElementById('numberInput').value;
  if (!Number.isInteger(Number(number))) {
    alert('Invalid input! Please enter a valid number.');
    setTimeout(refreshPage(), 200);
  }
  numLength = number;
  if (numLength <= 0) {
    document.getElementById('number0').textContent = alert(
      `Length must be greater than 0`
    );
    refreshPage();
  } else if (numLength > 50) {
    document.getElementById('number0').textContent = alert(
      `Enter Length below 50 because its time taking to solve above 50`
    );
    refreshPage();
  } else {
    generateRandomArray();
  }
};

// Generate random numbers
const generateRandomArray = () => {
  for (let i = 0; i < numLength; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + 1);
    randomArray.push(randomNumber);
  }
  // This function creates Circles Around the numbers
  createNumberCircles();
  return randomArray;
};

var array = randomArray;
var arraycontainer = document.getElementById('output');
// This function creates Circles Around the numbers
const createNumberCircles = () => {
  for (var i = 0; i < array.length; i++) {
    var num = document.createElement('div');
    num.className = 'number';
    num.innerText = array[i];
    arraycontainer.appendChild(num);
  }
};

// Swap two number circles visually
async function swapNumbers(number1, number2) {
  var tempTransform = number1.style.backgroundColor;
  number1.style.backgroundColor = number2.style.backgroundColor;
  number2.style.backgroundColor = tempTransform;
}

// Bubble sort algorithm with visual animation
async function bubbleSort() {
  var len = array.length;

  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      var number1 = arraycontainer.childNodes[j];
      var number2 = arraycontainer.childNodes[j + 1];

      number1.style.backgroundColor = 'red';
      number2.style.backgroundColor = 'red';

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization

      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapNumbers(number1, number2);
        number1.innerText = array[j];
        number2.innerText = array[j + 1];
      }
      number1.style.backgroundColor = 'blue';
      number2.style.backgroundColor = 'blue';
    }
    number1.style.backgroundColor = 'blue';
    number2.style.backgroundColor = 'green';
  }
  for (k = 0; k < len; k++) {
    var number3 = arraycontainer.childNodes[k];
    number3.style.backgroundColor = 'green';
  }
}
// start of selection sort
async function selectionSort() {
  var len = array.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      var number1 = arraycontainer.childNodes[i];
      var number2 = arraycontainer.childNodes[minIndex];

      number1.style.backgroundColor = 'red';
      number2.style.backgroundColor = 'red';

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
    }

    if (minIndex !== i) {
      var temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
      swapNumbers(number1, number2);
      number1.innerText = array[i];
      number2.innerText = array[minIndex];
    }

    number1.style.backgroundColor = 'green';
    number2.style.backgroundColor = 'green';
  }
  for (k = 0; k < len; k++) {
    var number3 = arraycontainer.childNodes[k];
    number3.style.backgroundColor = 'green';
  }
}
// End of Selection Sort

// // Start Of Insertion Sort
async function insertionSort() {
  const len = array.length;

  for (let i = 1; i < len; i++) {
    const current = array[i];
    let j = i - 1;

    var number1 = arraycontainer.childNodes[i];
    number1.style.backgroundColor = 'red';
    await new Promise((resolve) => setTimeout(resolve, 1000));

    while (j >= 0 && array[j] > current) {
      var number2 = arraycontainer.childNodes[j];
      var number3 = arraycontainer.childNodes[j + 1];
      number2.style.backgroundColor = 'red';
      number3.style.backgroundColor = 'red';
      array[j + 1] = array[j];
      swapNumbers(number2, number3);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      number2.innerText = array[j + 1];
      number3.innerText = array[j];
      number2.style.backgroundColor = 'green';
      number3.style.backgroundColor = 'green';

      j--;
    }
    var number4 = arraycontainer.childNodes[j + 1];
    number4.style.backgroundColor = 'red';

    array[j + 1] = current;
    number4.innerText = array[j + 1];
    number4.style.backgroundColor = 'green';

    await new Promise((resolve) => setTimeout(resolve, 1500));
  }
  for (let k = 0; k < len; k++) {
    var number5 = arraycontainer.childNodes[k];
    number5.style.backgroundColor = 'green';
  }
}
// End of Insertion Sort

function refreshPage() {
  location.reload();
}
