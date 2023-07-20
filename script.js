"use script";

// 1.Pattern Printing:

const pattern = (num) => {
  let patternStr = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      patternStr += i + " ";
    }
    patternStr += "\n";
  }
  return patternStr;
};
console.log(` 1. \n\n${pattern(5)}`);

// 2. Frequency Count:

const frequencyCount = function (arr) {
  let obj = {};
  let uniqueArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      arr.forEach((element) => {
        count = arr[i] === element ? (count += 1) : count;
      });
      uniqueArr.push(arr[i]);
      obj[arr[i]] = count;
      count = 0;
    }
  }
  return obj;
};
let obj2 = {
  1: 100,
};
console.log(" 2. ");
console.log(frequencyCount([1, 2, 1, 2, 2, 3, 4, 5, 1]));

//3. Remove Duplicates:

const removeDuplicate = function (arr) {
  let uniqueArr = [];
  arr.forEach((element) => {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  });
  return uniqueArr;
};

console.log(
  `3. \n\n Input -> ${[
    1, 2, 1, 2, 2, 6, 7, 6, 3, 4, 5, 1,
  ]}\n\n output -> ${removeDuplicate([1, 2, 1, 2, 2, 6, 7, 6, 3, 4, 5, 1])}`
);

// 4. Array Sum:

const sumArray = function (arr) {
  return arr.reduce((accumulator, element) => {
    accumulator += element;
    return accumulator;
  }, 0);
};

console.log(
  `4 . \n\n Input -> ${[1, 2, 6, 7, 3, 4, 5]}\n\n output -> ${sumArray([
    1, 2, 6, 7, 3, 4, 5,
  ])}`
);

// 5. Object Transformation:

const arr = [
  {
    id1: "name",
    id2: "age",
    id3: "IsEligible",
  },
  {
    key1: "Sreenish",
    key2: 21,
    key3: true,
  },
];

const arrayToObjectConversion = (arr) => {
  const obj = {};
  if (arr.length === 2) {
    const keyArray = Object.values(arr[0]);
    const valueArray = Object.values(arr[1]);
    if (keyArray.length === valueArray.length) {
      for (let i = 0; i < keyArray.length; i++) {
        obj[keyArray[i]] = valueArray[i];
      }
    }
  }
  return obj;
};
console.log(`5.`);
console.log(arrayToObjectConversion(arr));

// 6.Nested Array Sum:
const nestedArray = [1, 2, [1, 2, 3], [1, 15], 5];
let sum = 0;
const arraySum = (arr) => {
  arr.forEach((element) => {
    if (typeof element === "number") {
      sum += element;
    } else if (Array.isArray(element)) {
      arraySum(element);
    }
  });
  return sum;
};

console.log(
  ` 6 . \n\nInput is ${nestedArray} \n\nOutput ${arraySum(nestedArray)}`
);

// 7.Largest Difference:

let difference = 0;
const largestDifference = (arr) => {
  difference = arr.length > 2 ? arr[0] - arr[1] : 0;
  for (let i = 2; i < arr.length - 1; i++) {
    difference =
      arr[i] - arr[i + 1] > difference ? arr[i] - arr[i + 1] : difference;
  }
  return difference;
};
console.log(
  ` 7.\n\nInput is ${[
    400, 54, 100, 21, 500, 200,
  ]} \n\nOutput ${largestDifference([400, 54, 100, 21, 500, 200])}`
);

// 10.Array Intersection:
const intersectionArray = function (arrOne, arrTwo) {
  return [...arrOne, ...arrTwo];
};

console.log(
  ` 10. \n\n Input -> Array one ->${[1, 2, 3, 4, 5]} Array two -> ${[
    6, 7, 8, 9, 10,
  ]}\n\n output -> ${intersectionArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])}`
);
