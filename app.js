// Getting Elements and Asign them to variables
var form = document.getElementById('Form');
var guessInput = document.getElementById('guess-input');
var guessValue = document.getElementById('guess-value');
var message = document.getElementById('message');
var minNumber = document.getElementsByClassName('min-num');
var maxNumber = document.getElementsByClassName('max-num');

var inputValue = guessValue.value;

var minNum = 1;
var maxNum = 10;
var guessLeft = 3;

// Create a Random Number 
var value = Math.floor(((Math.random()*maxNum ) + minNum ) - minNum);

// Click Events
guessValue.addEventListener('click',addValue);
guessValue.addEventListener('mousedown', playAgain);

function addValue(e){
   if( guessInput.value == ""){
      alert('Please add a Number! ');
   }
   else if ( guessInput.value > 10 || guessInput.value < 1){
      alert(`Please Enter a Number between ${minNum} and ${maxNum}`);
   }

   else if( guessInput.value == value){
      message.textContent = 'Congrats, You Won!';
      guessValue.value = 'Play Again!';
      guessValue.className += 'play-again';
   }

   else if( guessInput.value !== value){

      guessLeft-- ;

      message.textContent = 'It\'s not Correct, You still have ' 
      + guessLeft + ' Chances';

      if ( guessLeft == 0){
         message.textContent = 'Game Over! The Guess Number was ' + value ;
         guessInput.disabled = true;
         guessValue.value = 'Play Again!';
         guessValue.className += 'play-again';
      }
   }
   e.preventDefault();
}

function playAgain(e){
   if( e.target.className == "play-again"){
      location.reload();
   }
}