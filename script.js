console.log(
  "   1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93."
);

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages);

console.log(
  "       1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array "
);

let sum1b = 0;
sum1b = ages.at(-1) - ages.at(0);
console.log(sum1b);

console.log(
  "       1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths"
);

ages.push(100);

console.log(ages);

console.log(
  "   2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’."
);

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

console.log(
  "       2a.	Use a loop to iterate through the array and calculate the average number of letters per name. "
);

let sum2a = 0;
for (let i = 0; i < names.length; i++) {
  sum2a += names[i].length;
  console.log("The total number of letters in index: ", sum2a);
}

let average = sum2a / names.length;

console.log("The average number of letters per name: ", average);

console.log(
  "The rounded average number of letters in each name: ",
  Math.round(average)
);

console.log(
  "       2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. "
);

let concatenated = " ";
for (let i = 0; i < names.length; i++) {
  concatenated += " " + names[i];
}
console.log(concatenated);

console.log("   3.	How do you access the last element of any array?");

console.log("The last element in names array: ", names.at(-1));

console.log("   4.	How do you access the first element of any array?");

console.log("The first element in names array: ", names[0]);

console.log(
  "   5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array."
);

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

console.log("The length of each name in names array: ", nameLengths);

console.log(
  "   6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. "
);

let sum6 = 0;

for (let i = 0; i < nameLengths.length; i++) {
  sum6 += nameLengths[i];
}
console.log("Sum of all the elements: ", sum6);

console.log(
  "   7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)."
);

function myFunction(word, n) {
  if (n > 0) {
    return word.repeat(n);
  } else {
    return "";
  }
}

console.log(myFunction("Hello", 3));

console.log(
  "   8.	Write a function that takes two parameters, firstName and lastName, and returns a full name."
);
console.log(
  "       •The full name should be the first and the last name separated by a space."
);

function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

fullName("Tim", "Robbins");

console.log(
  "   9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100."
);

function greaterThan(array) {
  let sum9 = 0;

  for (let i = 0; i < array.length; i++) {
    sum9 += array[i];
  }

  if (sum9 > 100) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan([100, 9, 8]));

console.log(
  "   10.	Write a function that takes an array of numbers and returns the average of all the elements in the array."
);

function myArray(array) {
  let sum10 = 0;
  let average = 0;

  for (let i = 0; i < array.length; i++) {
    console.log("The index being added: ", sum10);
    sum10 += array[i];
  }

  average = sum10 / array.length;
  console.log("The average is: ", average);
}

console.log(myArray([6, 7, 8]));

console.log(
  "   11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array."
);

function compare(array, array2) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let average = sum / array.length;

  console.log("The average of array 1: ", average);

  let sum2 = 0;

  for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
  }

  let average2 = sum2 / array2.length;

  console.log("The average of array 2: ", average2);

  if (average > average2) {
    console.log(
      "The average of the elements in array 1 is greater than average of array 2: ",
      true
    );
  } else {
    console.log(
      "The average of the elements in array 1 is greater than average of array 2: ",
      false
    );
  }
}

compare([1, 200, 3], [4, 5, 6]);

console.log(
  "   12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50."
);

let moneyInPocket = 23;
let isHotOutside = true;

function willBuyDrink() {
  if (moneyInPocket >= 10.5 && isHotOutside == true) {
    console.log("Absolutely!");
  } else {
    console.log("Not today.");
  }
}

willBuyDrink(moneyInPocket, isHotOutside);

console.log("   13.	Create a function of your own that solves a problem. ");
console.log(
  "       •	In comments, what the function does and why you created it."
);

function addition(a, b) {
  console.log(a + b);
}

addition(2, 3);

//I created this function to ensure I have an understanding of how the math works within a function. I can get hung up with the concept of letters being able to be place holders for numbers. This helps me visualize it.
