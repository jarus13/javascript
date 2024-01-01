// // console.log("hello");
// // let name = "suraj";

// // (name = "bibek"), (lname = "kc"), (dob = "13/03/1998"), (address = "maitidevi");
// // const citizen = "nepali";
// // console.log(name, dob);
// // console.log("This is daq        ta");
// // console.error("This is not data");
// // console.info("This is  the data");
// // console.warn("Is this data");

//first class function:

// function addition(arg, num) {
//   return num + arg;
// }

// let a = addition(5, 7);
// console.log(a);

// function multiplyby(arg) {
//   return function (number) {
//     return number * arg;
//   };
// }
// let multbyTwo = multiplyby(2)(5);
// console.log(multbyTwo);

function cal(arg) {
  return function (numb) {
    return arg + numb;
  };
}
console.log(cal(5)(5));
