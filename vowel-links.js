//https://edabit.com/challenge/byCrFXYokKujSebsD

function vowelLinks(str) {
  return /[aeiou] [aeiou]/i.test(str);
}

console.log(vowelLinks("a very large appliance"));
