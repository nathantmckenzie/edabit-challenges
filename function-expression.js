console.log(funcD());
console.log(funcE());

function funcD() {
  console.log("function declaration");
}

let funcE = () => {
  console.log("function expression");
};

//ONLY THE FUNCTION DECLARATION IS GOING TO GET HOISTED TO THE TOP
