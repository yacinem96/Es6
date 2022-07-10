// console.log("hello world");

let firstName = "yacine";
firstName = "ahmed";

const lastName = "mahi";
// console.log(lastName);

// console.log("My name is :" + firstName + "and my lastname is:" + lastName);

// console.log(`My name is ${firstName} and my lastname is ${lastName}`);

const txt = `
   fhrufergreger ${firstName}
   gergergergerger
   gregergergerg
   ergergergerger
 `;

/// ternary operator

const visitorage = 14;
function checkAge(age) {
  age > 18 ? console.log("you are allowed") : console.log("you aren't allowed");
}

// checkAge(visitorage);

// const checkresult =
//   visitorage > 18
//     ? console.log("you are allowed")
//     : console.log("you aren't allowed");

// const nbr = 0;
// const isNbgGr =
//   nbr > 0
//     ? console.log("nb >0")
//     : nbr < 0
//     ? console.log("nbr <0")
//     : console.log("nbr == 0");

// arrow functions

const loggedIn = false;
const user = { name: "yacine mahi" };

const checkLogin = (loggedIn, user) => {
  const result = loggedIn
    ? `user: ${user.name} is logged in `
    : "user not logged in ";
  return result;
};

// console.log(checkLogin(loggedIn, user));

const multiply = (a, b) => a * b;

// console.log(multiply(2, 3));

const print = (nm) => console.log(nm);

// print("example");

// high order functions
const checkIsGreater = (a, b) => {
  const result = a > b ? "a >b" : a < b ? "a <b" : "a == b";
  return result;
};

const HOCExample = (checkIsGreater) => {
  let a = 1,
    b = 3;
  console.log(checkIsGreater(a, b));
};

// HOCExample(checkIsGreater);

// array methods
// find
const people = [{ name: "Max" }, { name: "Jack" }, { name: "Marry" }];
// JavaScript
function findPerson(name) {
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    if (person.name === name) {
      return person;
    }
  }
}

// new way
const findPerson2 = (name) => people.find((person) => person.name === name);
// console.log(findPerson2("Max"));

// foreach

function showEachOne() {
  for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
  }
}

const showEachOne2 = () => people.forEach((person) => console.log(person.name));
// showEachOne2();

// array filter
const products = [
  { name: "Milk", price: 15 },
  { name: "Water", price: 9 },
  { name: "Bread", price: 5 },
];
function filterProducts() {
  let cheapProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < 10) cheapProducts.push(products[i]);
  }
  return cheapProducts;
}

// console.log(filterProducts());

//  new way
const filter2 = () => products.filter((product) => product.price < 10);

// console.log("///");
// console.log(filter2());

// array map

function getPriceProduct() {
  let newProducts = [];
  for (let i = 0; i < products.length; i++) {
    newProducts.push(products[i].price);
  }
  return newProducts;
}

// console.log(getPriceProduct());

const priceProducts = products.map((product) => {
  return product.price;
});
// console.log("Prices products");
// console.log(priceProducts);

// array reduce
const data = [10, 11, 2, 6, 8];
// const sumResult = data.reduce((accumulator, currentValue) => {
//   console.log(
//     `accumulator is ${accumulator} , current value is ${currentValue}`
//   );
//   return accumulator + currentValue;
// });

// console.log(`Sum result : ${sumResult}`);

// array reduce example 2
const studentResult = [
  { subject: "Maths", marks: 78 },
  { subject: "Physics", marks: 80 },
  { subject: "Chemistry", marks: 93 },
];

// new way
const total = studentResult.reduce((acc, curr) => acc + curr.marks, 0);

// console.log(total);

// third example
const twoDArr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];

const oneDArr = twoDArr.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
});

// console.log(oneDArr);

// spreading
var web = ["html", "css", "javascript"];
let mobile = ["android", "flutter", "reactnative"];

var languages = ["java", "c", ...web, ...mobile];

// console.log(languages);

let object1 = { firstName: "yacine", lastName: "mahi" };
let object2 = { age: 23 };
let object3 = { ...object1, ...object2 };

// console.log(object3);

// destrucuring
var info = ["yacine", "mahi"];

console.log(info[0]);

var frN = info[0];
var lsN = info[1];
var [frN, lsN] = info;

var lng = ["html", "css", "js", "react", "nodejs"];
// var first = lng[0];
// var fifth = lng[4];

var [first, , , , fifth] = lng;

console.log(first);
console.log(fifth);

// object
const obj = { fruit: "apple", vegitable: "potato", };

let { fruit, vegitable } = obj;
console.log(vegitable);