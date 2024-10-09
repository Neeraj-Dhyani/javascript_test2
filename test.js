// Q.1
// Ans
function calculateGrade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';   
  
    } else {
      return 'F';
    }
  }
  let studentScore = 85;
  let grade = calculateGrade(studentScore);
  console.log('Grade:', grade);

// Q.2

let number = 1;

while(number<50){
    console.log(number);
    number += 2;
}

// Q.3
// Ans
// output := [2,4,6,8,10];

// Q.4
// Ans
let str = "Hello, World!";
let substring = "World!";

if (str.includes(substring)) {
  console.log("The string contains the substring.");
} else {
  console.log("The string does not contain the substring.");   

}

// Q.5
// Ans

let obj = {
    name:"Neeraj",
    city:"Delhi"
}

// add new property
obj.age = 19;

console.log(obj)


// Q.6
// Ans
function sumoftwonumber(num1, num2){
    return num1 + num2;
}

let rv = sumoftwonumber(5,10);
console.log(rv);

// Q.7
// Ans

function Carmodel(car, model, engin, color){
    this.car = car;
    this.model = model
    this.engin = engin;
    this.color = color;
}

let cardetails =  new Carmodel("ferrari", "vs6", "1000horespower", "red");

console.log(cardetails)

// Q.8
// Ans

function fibonacci(num1){
    let x = 0;
    let y = 1;
    let z  = x+y;
    for(let i=5; i<=num1; i){
        x=y;
        y=z;
        z=x+y;
        console.log(y);
    }


}
fibonacci(5);
// Q.9
// Ans
function rotateArrayClockwise(arr) {
  let lastElement = arr.pop(); 
  arr.unshift(lastElement);
}

let array1 = [1, 2, 3, 4, 5];
rotateArrayClockwise(array1);
console.log(array1);

let array2 = [2, 3, 4, 5, 1];
rotateArrayClockwise(array2);
console.log(array2);

// Q.10
// Ans
function lowercasetouppercase(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) { 
      result.push(String.fromCharCode(charCode - 32));
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
}

let inputstring = "hello";
let outputstring = lowercasetouppercase(inputstring);
console.log(outputstring); 