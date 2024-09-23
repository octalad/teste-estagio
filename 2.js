let str = "Abelha aaa AA a";
let num = 0;

for (let i = 0; i < str.length; i++) {
  str[i] == "a" || str[i] == "A" ? (num = num + 1) : "";
}

console.log(num);
