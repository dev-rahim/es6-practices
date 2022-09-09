const myMother = 'Rahima Begum';
let motherAge = 50;

// template string
const aboutMySelfe = `My name is Rahim. My mother name is ${myMother}, he is ${motherAge} years old.`;
// console.log(aboutMySelfe);
// arrow function //
const multiplyedByFive = input => console.log(input / 5);
// multiplyedByFive(200);
const addMultiplyed = (a, b) => console.log((a + b) * 2);
// addMultiplyed(10, 6);

const multiplication = (a, b, c) => a * b * c;
// console.log(multiplication(3, 5, 2));

const multiLineArrowFunction = (a, b) => {
    const c = a + 2;
    const d = b + 2;
    return c * d;
}
// console.log(multiLineArrowFunction(7, 8));

//Start using Map //
const numbers = [23, 43, 55, 65, 76, 8, 7, 45, 54, 6, 3, 3, 57, 76, 65,];
const numbersAddedTow = numbers.map(number => number * 5);
// console.log(numbersAddedTow);
// Using Filter 
const Oddnumbers = numbers.filter(n => n % 2 != 0);
// console.log(Oddnumbers);

// using find in array object 
const products = [
    { name: 'shirt', price: 200 },
    { name: 'Smart Phone', price: 5000 },
    { name: 'shoe', price: 3000 }
];
const findSomething = products.find(product => product.price == 5000);
// console.log(findSomething);

const arrayNew = []
numbers.forEach(element => {
    // element + 1;
    arrayNew.push(element + 1);
});
console.log(arrayNew);