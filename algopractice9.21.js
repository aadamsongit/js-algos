// Algo 1: Very Basic/Straightforward

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
  whatToBring += "sunglasses, ";
}
if (temperature < 50) {
  whatToBring += "a coat, ";
}
if (isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

// Algo 2:

for (var i = 10; i > 0; i--) {
  if (i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}

console.log("liftoff!");

// var i decrements by 1 through the for loop
// 10, 9, 8, 7, 6, 5, 4, 3...
// if i = 2, skip line 25 and go to the else statement (console.log "ignition!")
// when var i decrements to 0, exit the for loop: "liftoff!"
//output: 10, 9, 8, 7, 6, 5, 4, 3, "ignition!" 1, "liftoff!"

var countPositives = 0; // this will be the counter variable
var numbers = [3, 4, -2, 7, 16, -8, 0]; // we will iterate through the array using a for loop

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    countPositives++;
  }
}
console.log("there are " + countPositives + " positive values");

// line 42 is the for loop that enters the array
// set i to 0 and less than the length of the array to iterate the array; i increments by 1 each time
// 43: if the index value is greater than 0, we run line 44
// counter variable counts the numbers!

var x = 5;

function setX(newValue) {
  x = newValue;
}

console.log(x);
setX(15);
console.log(x);

// line 60 logs x (5)
// line 61 executes and changes x to 15
// line 62 console logs 15

var x = 5;

function addToX(amount) {
  return x + amount;
  console.log("hello there");
}

console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

// line 75 logs x (5)
// line 76 runs the function at line 70
// line 77 console logs the output (-5)
// line 78 console logs x (5)

function isPal(arr) {
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    if (arr[left] != arr[right]) {
      return "Not a pal-indrome!";
    }
  }
  return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);

// for the for loop: is 0 less than arr.length (5)/2? - yes, so left will increment
// right = arr.length (5) - 1 - left
// 5-1-0 = 4, so var right = 4, var left becomes 1: 0>1
// now run line 88: is arr[0] = to arr[4]? arr[0] = 1, arr[4] = 1
// run the for loop again: is 1 less than 5/2? yes, so left will increment (1>2)
// var right = 4-1-1 = 2
// arr[1] = arr[2]? 1 = 2? no

// the first array returns: "Not a pal-indrome!"
// the second array returns: "Pal-indrome!"

// Algo Practice: Reverse an array

// "["a", "b", "c", "d", "e"];"

// we will create a temp variable to hold a value so we can reverse values
// we can refer back to the Palindrome algo for guidance on how to reverse an array

// (the stuff below is stuff I will return to after the Python exam... Wk1Day5 algo)
// see saved video in algo video folder...

function reverse(arr) {
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
  return arr;
}

var result1 = reverse(["a", "b", "c", "d", "e"]);
console.log(result1);
var result2 = reverse(["e", "d", "c", "b", "a"]);
console.log(result2);

// reverse an array! * run line 123. is 0 less than 6/2 (3)? yes, so increment left by 1
// left = 0>1
// var right = arr.length (6)-1-left(1) = 4
// var temp = arr[left] = arr[0] = a
// arr[left] -> arr[0] = arr[right]; arr[right] = (arr[4]) = e
// arr[left] = e
// arr[right] = temp

// the two variables will split the array down the middle and iterate from both sides, reversing the array

var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

console.log(floor);
console.log(ceiling);
console.log(random);

// Math.floor = rounds the number down to the lowest whole value
// Math.ceiling = rounds the number up to the highest whole value
// Math.random produces a random decimal value between 0 and 1, not inclusive of 1
// Instructor said Math.random can produce 0, but rarely and usually does not do so

function d6() {
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Math.random will pull a random decimal value between 0 and 1, exclusive of 1
// and usually exclusive of 0
// So, for example, if it pulled .1, .1 * 6 = .6, rounds down to 0, + 1 = 1
// 6*9 = 54, .9*6 = 5.4, round down to 5, add 1 to get 6
// Therefore, this code brings up the range of values
