//https://edabit.com/challenge/eARWGdpymGeNQiHBi
//expert
//solved

function getObject(args) {
  let arr = [];
  let otherArr = [];
  for (let obj in args) {
    if (!arr.includes(args[obj]["marks"])) {
      arr.push(args[obj]["marks"]);
      otherArr.push(args[obj]);
    }
  }
  return Object.assign({}, otherArr);
}

console.log(
  getObject({
    0: { age: 18, name: "john", marks: "400" },
    1: { age: 17, name: "julie", marks: "400" },
    2: { age: 16, name: "Robin", marks: "200" },
    3: { age: 16, name: "Bella", marks: "300" },
  })
);
