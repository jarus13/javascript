// let numbList = [1, -9, 4, -4, 4, 5, -6];
// const newList = numbList.filter((index, item, array) => {
//   return item > 0;
// });
// console.log(newList);
// let scoreList = [26, 22, 33, 44, 55, 6, 66, 77, 88, 9, 99];
// let newScore = scoreList.filter((item) => {
//   return item > 32;
// });
// console.log(newScore);

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

let newData = reqData.find((item) => {
  if (item.price == 1999);
  return item;
});
console.log(newData);
