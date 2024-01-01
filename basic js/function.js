// function getsum() {
//   let a = 5;
//   let b = -7;
//   sum = a + b;
//   console.log(sum);
// // }
// function cal(a, b) {
//   let mul = a * b;
//   console.log(mul);
// }
// cal(5, 9);

// function getProduct(a, b, c) {
//     let product = a + b - c;
//     return product;
//   } //
//   console.log(getProduct(5, 6, 7));

// function checkOorE(numb) {
//   let rem = numb % 2;
//   if (rem === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// console.log(checkOorE(11));
// console.log(checkOorE(10));

// function loop(numb) {
//   for (let i = 0; i <= numb; i++) {
//     console.log(i);
//   }
// }
// loop(10);

// function radius(r) {
//   let p = 2 * Math.PI * r;
//   console.log(p);
//   return r;
// }
// radius(2);

// const force = (m, a) => m * a;
// const res = force(4, 6);
// console.log(res);

// const pressure = (outputForce, a) => outputForce / a;
// const result = pressure(res, 4);
// console.log(result);

// const calHouse = (square, area) => square * area;
// const housePrice = calHouse(3000, 11);
// console.log(`price of house ${housePrice}`);

// let outputPressure = (outputForce, a);
// console.log(`output of pressure= ${outputPressure}`);

// const calHouse = (square, area) => square * area;
// let outputHousePrice = 1000 * 23;
// console.log();
//
// const evenNumber = (ini, en) => {
//   let array = [];

//   for (let i = ini; i <= en; i++) {
//     let rem = i % 2;
//     if (rem === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// };
// let output = evenNumber(100, 250);
// console.log(output);

// callback function:

// let getproduct = (x, y, cc) => {
//   let funct = x * y;
//   cc();
//   return funct;
// };
// let res = getproduct(5, 6, () => {
//   console.log("hello");
// });
// console.log(res);

//function inside function

const calMult = (x, y) => {
  const performingMult = () => {
    const res = x * y;
    return res;
  };
  return performingMult;
};

const res = calMult(4, 6);
//const tt = performingMult(res);
// const tt = performingMult();
// console.log(res);
let tt = res();
console.log(tt);

// const getSum = (x) => {
//   const doSum = (y) => {
//     const sum = x + y;
//     return sum;
//   };
//   return doSum;
// };

// const doSum = getSum(10);

// const Math = (x) => (y = x + y);
// const result = math(4)(11);
// clg(result);

// const sum = doSum(8);
// console.log(sum);

// const calAdd = (x, y) => {
//   const adding = () => {
//     const sum = x + y;
//     return sum;
//   };
//   return adding;
// };

// let resAdd = calAdd(5, 6);
// let ra = resAdd();
// console.log(ra);

const calAdd = (x, y) => (sum = x + y);
let resultadd = calAdd(5, 6);
console.log(resultadd);
