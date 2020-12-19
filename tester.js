"use strict";

//! Template Literals: use ${varName} in between back ticks.

let tester = function (name, age, loanAmount) {
  let risk;
  if (age > 60 || age <= 21) {
    risk = "high";
  } else {
    risk = "medium";
  }
  return console.log(`Hi ${name}, 
Your loan for ${"$" + loanAmount} is being reviewed. 
Your profile is ${risk} risk.`);
};

tester("Chris", 33, 10000, "low");
tester("John", 16, 3000, "high");

//! Array Deconstruction: order MATTERS, variable name shares the index of the item in the array.

let arr = [
  "John",
  33,
  10000,
  "low",
  "fudge round",
  "peach gummies",
  "oatmeal creampie",
];

let arrDeconstruct = function (arr) {
  var [name, age, loanAmount, risk, ...snacks] = arr;
  console.log(name); // John
  console.log(age); // 33
  console.log(loanAmount); // 100000
  console.log(risk); // low
  console.log(snacks); // rest of items
  var snacks1 = [...arr];
  //! use commas to leave out/skip items
  var [, , ...snacks2] = arr; // [...snacks] minus the first 2 items
  //! commas add empty elements normally
  var snacks3 = [, , ...arr]; // [empty, empty, ...arr]
  console.log(snacks1);
  console.log(snacks2);
  console.log(snacks3);
};

arrDeconstruct(arr);

let obj = {
  apple: "Apple",
  banana: "Banana",
  car: "Car",
  echo: {
    echo: "Echo",
  },
};
//! Object Deconstruction: order DOES NOT matter because you are typing the 'key' in the deconstruction.

let objDeconstruct = function (obj) {
  let { car, apple, banana } = obj;
  console.log(apple); // Apple
  console.log(banana); // Banana
  console.log(car); // Car
  //! variable can be ADDED and DEFAULTS can be set.
  let { apple: red, banana: yellow, car: blue, dog: brown = "Dog" } = obj; // dog is added, set default to Dog, changed variable name to brown
  console.log(red); // Apple
  console.log(yellow); // Banana
  console.log(blue); // Car
  console.log(brown); // Dog
};

let sentence = function ({ apple, banana, car, echo: { echo } }) {
  console.log(
    `He ate the ${apple} and the ${banana} in the ${car} when he heard the ${echo}.`
  );
};

objDeconstruct(obj);
sentence(obj);

let { ...rest } = obj;

console.log(rest);

let string = "I am go i ng to the store";
let string2 = "He is Goi ng to the mall";
let string3 = "They are not go ing anywhere close to home";

//! Replace: searches the string for the RegExp and replaces each find with the given string
//! Includes: True or False is string includes the given string
console.log(string.replace(/\s/g, "").toLowerCase().includes("going"));
console.log(string2.replace(/\s/g, "").toLowerCase().includes("going"));
console.log(string3.replace(/\s/g, "").toLowerCase().includes("going"));

//! IndexOf: gives the first index of the given string, -1 if not found
let temp = string.split("");
while (temp.indexOf(" ") >= 0) {
  temp.splice(temp.indexOf(" "), 1);
}
console.log("IndexOf: " + temp.join("").toLowerCase());
//! Search: same as indexOf but uses a RegExp instead of a string
let temp2 = string;
let space = temp2.search(/\s/);
while (temp2[space] >= 0) {
  temp2 = temp2.slice(0, space) + temp2.slice(space + 1);
  space = temp2.search(/\s/);
}
console.log("Search: " + temp2.toLowerCase());

let palString = "radar";
//! StartsWith: True or False is string starts with a given string, starting at default 0 or given index.
//! EndsWith: True or False is string ends with a given string, starting at default string length or given index.
let palCheck = function (str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.startsWith(char, i) === str.endsWith(char, str.length - i)) {
    } else {
      return "Is NOT a Palendrone!";
    }
  }
  return "Is a Palendrone!";
};
console.log(palCheck(palString));

//! Sort: Strings ALPHABETICALLY is regular, numbers ASCENDING (a-b) or DESCENDING (b-a)
let numArr = [1, 3, 51, 234, 0, -3];
let strArr = ["a", "bear", "ze", "fart"];
let numStrArr = ["1", "3", "51", "234", "0", "-3"];

console.log(
  "Sort: ",
  numArr.sort((a, b) => a - b)
);
console.log(strArr.sort());
console.log(numStrArr.sort((a, b) => a - b));
console.log(
  numStrArr.sort(function (a, b) {
    return a - b;
  })
); // same as before^^^

let low = 10;
let high = 2;

let arrowArr = [20],
  arrowArr1 = [20, 20],
  arrowArr2 = [20, 40],
  arrowArr3 = [];

let arrow = ([a = 100, b = 10, c = 1]) => {
  console.log(a, b, c);
  if (a < b && b > c) {
    return true;
  }
  return false;
};

console.log(arrow(arrowArr));

let arrow2Arr = [20, 20],
  arrow2Arr1 = [200, 2],
  arrow2Arr2 = [40, 100],
  arrow2Arr3;

let arrow2 = ([a, b] = arrowArr2) => {
  console.log(a, b);
  if (a < b) {
    return true;
  }
  return false;
};

console.log(arrow2());

//! Flat: Removes layers of nested array by given number.
let flatArr = [1, 2, [3], [[[[4]]]], [[[5, [[[6]]]]]]];

console.log("Flat: ", flatArr.flat(3));
console.log(flatArr.flat(Infinity));

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push(...elements);
console.info(array); // ["a", "b", 0, 1, 2]

const array1 = ["a", "b", "c"];
const iterator = array1.values();
console.log(iterator);

for (const value of iterator) {
  console.log(value);
}

var fib = function (n) {
  let result = 1;
  let temp1 = 0;
  let temp2 = 1;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  for (let i = 1; i < n; i++) {
    temp1 = temp2;
    temp2 += result;
    result = temp1;
  }
  return result;
};

console.log(fib(10));

//! Using Filter
var smallerNumbersThanCurrent = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let filter = nums.filter((num) => num < current);
    result.push(filter.length);
  }
  return console.log("Filter: ", result);
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);

//! Using forEach
var smallerNumbersThanCurrent2 = function (nums) {
  let result = [];
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      result.push(obj[nums[i]]);
      continue;
    }
    let filter = 0;
    nums.forEach(function (num) {
      if (num < nums[i]) {
        filter += 1;
      }
    });
    obj[nums[i]] = filter;
    result.push(filter);
  }
  return console.log(result);
};

smallerNumbersThanCurrent2([8, 1, 2, 2, 3]);

var a = 1;

function one() {
  a = 2;
  var a = 3;
  two();
}

function two() {
  console.log(a);
}

one();
console.log(a);

//! Match and forEach: Used to find the longest word in a string.

let string4 = "I think I am going to the store today";

let match = string4.match(/\w/g).join("");

console.log(match);

let array2 = string4.match(/\w+/g);

let findLongestWord = function () {
  let check = "";
  let result;
  array2.forEach((a) => {
    if (a.length > check.length) {
      check = a;
      result = a;
    } else if (a.length === check.length) {
      result += ", " + a;
    }
  });
  console.log(result + "-------");
};

findLongestWord();

//! Reduce: Used to find the array with the biggest total of numbers within.

var maximumWealth = function(accounts) {
    let result = 0;
    let person;
    for (let i = 0; i < accounts.length; i++) {
        person = accounts[i].reduce((a, b) => a + b, 0)
        if (person > result) {
            result = person;
        }
    }
    return result;
};


var maximumWealth = function(accounts) {
    let result = 0;
    let person;
    for (let i = 0; i < accounts.length; i++) {
        person = 0;
        for (let j = 0; j < accounts[i].length; j++) {
              person += accounts[i][j];  
       }
        if (person > result) {
            result = person;
        }
    }
    return console.log(result);
};

maximumWealth([[1,2,3],[3,2,1]])

//! Reverse and forEach: Using forEach's optional parameters index(2) and original array(3)

var flipAndInvertImage = function(A) {
    let result = [];
    for (let i = 0; i < A.length; i ++) {
        A[i].reverse().forEach(function(num, index, arr) {
            if (num === 0) {
              arr[index] = 1;
        } else {
            arr[index] = 0;
        }})
        result.push(A[i]);
    }
    return result;
};

//! Regex, match: Just matching practice

let testStr = "I think I have 12 dogs and 14 cats."

let filter = testStr.match(/(\d+\s\w+)/g);

console.log(filter);