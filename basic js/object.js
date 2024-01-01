// let student1 = {
//   fname: "Suraj",
//   lname: "KC",
//   address: "Maitidevi",
//   pNumber: "987654321",
//   age: 25,
//   isMarried: false,
//   isGraduated: true,
// };
// let student2 = {
//   fname: "bibek",
//   lname: "Basnet",
//   address: "bhaktapur",
//   pNumber: "1234567789",
//   age: 25,
//   isMarried: false,
//   isGraduated: true,
// };
// console.log(student1.fname);
// console.log(student2["fname"]);
// student1.depertment = "MERN";
// student2.depertment = "MERN";
// student1["colg"] = "KIST";
// student2["colg"] = "ISLINGTON";
// delete student1.age;
// delete student2["age"];

// student1.address = "Kathmandu";
// student1.year = 2023;
// student1["pNumber"] = 3414324324234;

// console.log(student1);

let colg1 = {
  name: "KIST",
  address: {
    tempAddress: "kamalpokhari",
    pemAddress: "kathmandu",
  },
  phoneNumber: 987654321,
};

// let colg2 = { ...colg1 };
let colg2 = structuredClone(colg1);
colg2.address.tempAddress = "Nepal";

console.log(colg2);
