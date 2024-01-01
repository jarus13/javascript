let score = [1, 2, 11, 33, 44, 1, 4, 5, 6];
//lower to higher
// score.sort((a, b) => {
//   return a - b;
// });
// console.log(score);

//upper to lower
// score.sort((a, b) => {
//   return b - a;
// });
// console.log(score);

// let names = ["bbek", "suraj", "manish"];
// names.sort().reverse;
// console.log(names);
let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

laptopList.sort((a, b) => {
  return a.price - b.price;
});
console.log(laptopList);

let age = [12, 11, 22, 12, 43];
let res = age.some((item) => {
  return item >= 18;
});
console.log(res);
