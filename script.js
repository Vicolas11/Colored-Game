var easyBtn =  document.querySelector('#easy');
var hardBtn =  document.querySelector('#hard');
var removeColorFour =  document.querySelector(".color-4");
var removeColorFive =  document.querySelector(".color-5");
var removeColorSix =  document.querySelector(".color-6");
var colorBox = document.querySelector(".color-wrapper").children;
var checkedColor =  document.querySelector('.head-wrapper h1');
var sectionColor = document.querySelectorAll('header section')[0];
var correct = document.querySelector('#correct');
var correctTextContent = 'Correct';
var playAgain = document.querySelector('#play-again');
var numRange = 6;
var color =  generateRandomColors(numRange);
var pickColor = checkedColor.textContent = pickedColor();
var countClick = 0;
var hasClicked = true;

easyBtn.onclick =  function () {
    hardBtn.style.background =  '#ffffff';
    hardBtn.style.color =  '#4169E1';
    this.style.background =  '#4169E1';
    this.style.color =  '#ffffff';
    correct.textContent = '';
    sectionColor.style.background = '#4169E1';
    numRange = 3;
    color = generateRandomColors(numRange);
    pickColor = checkedColor.textContent = pickedColor();
    countClick = 0;
    hasClicked = true;
    for (var i = 0; i < colorBox.length; i++) {
        colorBox[i].style.background = color[i];
        // this code below makes the easy mode to be clicked once ******
        colorBox[i].onclick = function () {
          if (hasClicked) {
            countClick += 1;
            if (countClick === 1) {
              hasClicked =  false;
            }
          let toMatch = this.style.background;
          if (toMatch === pickColor) {
            correct.textContent = 'Correct';
            correct.style.color = '#4169E1';
            sectionColor.style.background = pickColor;
            changeColor(colorBox);
          }
          else {
            correct.textContent = 'Try Again';
            correct.style.color = 'orange';
            this.style.background = '#232323';
            }
          }
        }
      }
    removeColorFour.style.visibility = 'hidden';
    removeColorFive.style.visibility = 'hidden';
    removeColorSix.style.visibility = 'hidden';
}

hardBtn.onclick =  function () {
  easyBtn.style.background =  '#ffffff';
  easyBtn.style.color =  '#4169E1';
  this.style.background =  '#4169E1';
  this.style.color =  '#ffffff';
  numRange = 6
  color = generateRandomColors(numRange);
  pickColor = checkedColor.textContent = pickedColor();
  countClick = 0;
  hasClicked = true;
  correct.textContent = '';
  sectionColor.style.background = '#4169E1';
  for (var i = 0; i < colorBox.length; i++) {
      colorBox[i].style.background = color[i];
      // this code below makes the hard mode to be clicked once ******
      colorBox[i].onclick = function () {
        if (hasClicked) {
          countClick += 1;
          if (countClick === 3) {
            hasClicked =  false;
          }
        let toMatch = this.style.background;
        if (toMatch === pickColor) {
          correct.textContent = 'Correct';
          correct.style.color = '#4169E1';
          sectionColor.style.background = pickColor;
          changeColor(colorBox);
        }
        else {
          correct.textContent = 'Try Again';
          correct.style.color = 'orange';
          this.style.background = '#232323';
          }
        }
      }
  };
  removeColorFour.style.visibility = 'visible';
  removeColorFive.style.visibility = 'visible';
  removeColorSix.style.visibility = 'visible';
}

// generates new random colors
playAgain.onclick = function () {
  sectionColor.style.background = '#4169E1';
  correct.textContent = '';
  this.textContent = 'NEW COLORS';
  color = generateRandomColors(numRange);
  changeAllColor(colorBox);
  pickColor = checkedColor.textContent = pickedColor();
  countClick = 0;
  hasClicked = true;
  correct.style.background = '#ffffff';
}

// Writing condition once when any color is equal to the  color these should happen
for (var i = 0; i < colorBox.length; i++) {
  // adding initial width, height and random colors
  colorBox[i].classList.add('colours');
  colorBox[i].style.background = color[i];

  // change my cursor onmouseover
  colorBox[i].onmouseover = function () {
    this.style.cursor = 'pointer';
  }
  // change cursor onmouseleave
  colorBox[i].onmouseleave =  function () {
    this.style.cursor = 'default'
  }

  colorBox[i].onclick = function () {
    if (hasClicked) {
      countClick += 1;
      if (countClick === 3) {
        correctTextContent = 'You Lost!';
        correct.textContent = correctTextContent;
        hasClicked = false;
      }
        let toMatch = this.style.background;
        if (toMatch === pickColor) {
          correctTextContent = 'Correct';
          correct.textContent = correctTextContent;
          // when Hovering on the textContent correct
          correct.onmouseover = function () {
            this.style.color = '#ffffff';
            this.style.background = '#4169E1';
          }
          correct.onmouseleave = function () {
            this.style.color = '#4169E1';
            this.style.background = '#ffffff';
          }
          correct.style.color = '#4169E1';
          sectionColor.style.background = pickColor;
          playAgain.textContent = 'Play Again?';
          changeColor(colorBox);
        }
        else {
          correctTextContent = 'Try Again'
          correct.textContent = correctTextContent;
          correct.style.color = 'orange';
          this.style.background = '#232323';
          }
    }
  }
}
// change the whole six color to toMatch one
function changeColor (colors) {
  for (var i = 0; i < colors.length; ++i) {
    colors[i].style.background = pickColor;
  }
}

// change the whole six colors randomly to the initial colors
function changeAllColor (colors) {
  for (var i = 0; i < colors.length; ++i) {
    colors[i].style.background = color[i];
  }
}
// creating a function randomly changes the index b/w length of color array
function pickedColor () {
  var randomIdx = Math.floor(Math.random() * color.length);
  return color[randomIdx];
}
// generating colors randomly
function generateRandomColors(num) {
  var array = [];
  for (var i = 0; i < num; i++) {
    array.push(randomColours());
  }
  return array;
}
// the main color generator
function randomColours() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb("+r+", "+g+", "+b+")";
}