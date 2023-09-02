console.log(
  "   1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93."
);

console.log(
  "       1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array "
);

console.log(
  "       1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths"
);

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log("Ages Array: ", ages);

ages.push(100);

let sum1b = 0;
sum1b = ages.at(-1) - ages.at(0);

console.log("The Sum Of First Element Subtracted From Second: ", sum1b);

console.log(
  "   2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’."
);
console.log(
  "       2a.	Use a loop to iterate through the array and calculate the average number of letters per name. "
);
console.log(
  "       2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. "
);

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

console.log("Names Array: ", names);

let sum2a = 0;
for (let i = 0; i < names.length; i++) {
  console.log("[Object]:", names[i]);
  console.log("Object Index Number, i: ", i);
  console.log("Index Length names[i].length: ", names[i].length);

  sum2a += names[i].length;
  average = sum2a / names.length;
}

console.log("Total Of All Objects Combined: ", sum2a);
console.log("The Average: ", average);
console.log("The Rounded Average:", Math.round(average));

let concatenated = " ";

for (let i = 0; i < names.length; i++) {
  console.log("Names in Array: ", names[i]);

  concatenated += " " + names[i];
}

console.log("Concatenated Names In Array: ", concatenated);

console.log("   3.	How do you access the last element of any array?");

console.log(names.at(-1));
console.log(names[names.length - 1]);

console.log("   4.	How do you access the first element of any array?");

console.log(names[0]);

console.log(
  "   5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array."
);

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

console.log("Length Of Each Name Array: ", nameLengths);

console.log(
  "   6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. "
);

let sum6 = 0;

for (let i = 0; i < nameLengths.length; i++) {
  sum6 += nameLengths[i];
}

console.log("Sum For Name Lengths: ", sum6);

console.log(
  "   7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)."
);

/* let repeat = (a, b) => {
    let result = '';
    for(let i = 0; i < b; i++) {
        result += a; 
    }
    return result;
}

console.log('Hello', 3);
 */
function concatenated7(word, n) {
  if (n > 0) {
    return word.repeat(n);
  } else {
    return "";
  }
}

console.log(concatenated7("Hello", 3));

console.log(
  "   8.	Write a function that takes two parameters, firstName and lastName, and returns a full name."
);
console.log(
  "       •The full name should be the first and the last name separated by a space."
);

function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

console.log(fullName("Tim", "Robbins"));

console.log(
  "   9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100."
);

function greaterThan(array) {
  console.log(array);

  let sum9 = 0;

  for (let i = 0; i < array.length; i++) {
    console.log("Each Number In Array: ", array[i]);
    sum9 += array[i];
  }

  console.log("Sum Of All Index: ", sum9);

  if (sum9 > 100) {
    console.log(true);
  } else {
    console.log(false);
  }
}
console.log(greaterThan([10, 20, 300]));

console.log(
  "   10.	Write a function that takes an array of numbers and returns the average of all the elements in the array."
);

function arrayAverage(array) {
  console.log("Each Number In Array: ", array);

  let sum10 = 0;
  let average = 0;

  for (let i = 0; i < array.length; i++) {
    console.log("Single Elements Being Added: ", sum10);
    sum10 += array[i];
  }

  console.log("Sum Of All Index: ", sum10);

  console.log("Average Of All Index: ", sum10 / array.length);
}

console.log(arrayAverage([25, 50, 75]));

console.log(
  "   11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array."
);

function compareArrays(array1, array2) {
  let sum1 = 0;
  for (let i = 0; i < array1.length; i++) {
    console.log("Array 1: ", array1[i]);
    sum1 += array1[i];
  }
  console.log("Sum of all Index in Array 1: ", sum1);

  let average = 0;
  average = sum1 / array1.length;

  console.log(
    "Average of Array 1: ",
    average,
    "Rounded Average 1: ",
    Math.round(average)
  );

  let sum2 = 0;
  for (let i = 0; i < array2.length; i++) {
    console.log("Array 2: ", array2[i]);
    sum2 += array2[i];
  }
  console.log("Sum of Array 2: ", sum2);

  let average2 = sum2 / array2.length;
  console.log(
    "Average of Array 2: ",
    average2,
    "Rounded Average 2: ",
    Math.round(average2)
  );

  if (average > average2) {
    console.log("Average 1 Is Greater Than Average 2: ", true);
  } else {
    console.log("Average 1 Is Greater Than Average 2: ", false);
  }
}

console.log(compareArrays([11, 2, 3], [4, 5, 6]));

console.log(
  "   12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50."
);

let isHotOutside = true;

let moneyInPocket = 100;

function willBuyDrink() {
  if (isHotOutside == true && moneyInPocket >= 10.5) {
    console.log("Absolutely!");
  } else {
    console.log("No way, Jose!");
  }
}

willBuyDrink(isHotOutside, moneyInPocket);

console.log("   13.	Create a function of your own that solves a problem. ");
console.log(
  "       •	In comments, what the function does and why you created it."
);
