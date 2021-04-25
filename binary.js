function reversedBinaryInteger(num) {
  let binary = (num >>> 0).toString(2);
  console.log(binary);
  let reverseBinary = binary.toString().split("").reverse().join("");
  console.log(reverseBinary);
  let finalBinary = parseInt(reverseBinary);
  return parseInt(finalBinary, 2);
}

console.log(reversedBinaryInteger(999999));
